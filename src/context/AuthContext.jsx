import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState
} from "react";

import { supabase } from "../supabase/client";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {

    const [session, setSession] = useState(null);
    const [sessionLoading, setSessionLoading] = useState(true);

    const [profile, setProfile] = useState(null);
    const [membership, setMembership] = useState(null);

    const [loadedUserId, setLoadedUserId] = useState(null);
    const [accessError, setAccessError] = useState("");

    const user = session?.user ?? null;
    const userId = user?.id ?? null;

    useEffect(() => {

        let mounted = true;

        const initializeSession = async () => {

            const {
                data,
                error
            } = await supabase.auth.getSession();

            if (!mounted) return;

            if (error) {
                console.error(
                    "Error recuperando la sesión:",
                    error
                );
            }

            setSession(data?.session ?? null);
            setSessionLoading(false);
        };

        initializeSession();

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange(
            (_event, newSession) => {

                if (!mounted) return;

                setSession(newSession);
                setSessionLoading(false);
            }
        );

        return () => {
            mounted = false;
            subscription.unsubscribe();
        };

    }, []);

    useEffect(() => {

        let active = true;

        if (!userId) {

            setProfile(null);
            setMembership(null);
            setLoadedUserId(null);
            setAccessError("");

            return undefined;
        }

        const loadAccountData = async () => {

            setProfile(null);
            setMembership(null);
            setLoadedUserId(null);
            setAccessError("");

            try {

                const [
                    profileResult,
                    membershipResult
                ] = await Promise.all([

                    supabase
                        .from("perfiles")
                        .select(`
                            id,
                            email,
                            nombre,
                            apellido,
                            telefono,
                            activo
                        `)
                        .eq("id", userId)
                        .maybeSingle(),

                    supabase
                        .from("clinica_usuarios")
                        .select(`
                            id,
                            usuario_id,
                            clinica_id,
                            rol,
                            activo,
                            created_at
                        `)
                        .eq("usuario_id", userId)
                        .eq("activo", true)
                        .order("created_at", {
                            ascending: true
                        })
                        .limit(1)
                        .maybeSingle()

                ]);

                if (profileResult.error) {
                    throw profileResult.error;
                }

                if (membershipResult.error) {
                    throw membershipResult.error;
                }

                if (!profileResult.data) {
                    throw new Error(
                        "No se encontró el perfil del usuario."
                    );
                }

                if (!profileResult.data.activo) {
                    throw new Error(
                        "Este usuario se encuentra inactivo."
                    );
                }

                if (!membershipResult.data) {
                    throw new Error(
                        "El usuario no está asociado con una clínica activa."
                    );
                }

                if (!active) return;

                setProfile(profileResult.data);
                setMembership(membershipResult.data);

            } catch (error) {

                console.error(
                    "Error cargando los datos del usuario:",
                    error
                );

                if (active) {
                    setAccessError(
                        error.message ||
                        "No fue posible validar el acceso del usuario."
                    );
                }

            } finally {

                if (active) {
                    setLoadedUserId(userId);
                }
            }
        };

        loadAccountData();

        return () => {
            active = false;
        };

    }, [userId]);

    const signIn = useCallback(
        ({ email, password }) => {

            return supabase.auth.signInWithPassword({
                email: email.trim(),
                password
            });
        },
        []
    );

    const signOut = useCallback(() => {
        return supabase.auth.signOut();
    }, []);

    const loading =
        sessionLoading ||
        (
            Boolean(userId) &&
            loadedUserId !== userId
        );

    const hasAccess = Boolean(
        profile?.activo &&
        membership?.activo
    );

    const isAdmin =
        membership?.rol === "administrador";

    return (

        <AuthContext.Provider
            value={{
                session,
                user,
                profile,
                membership,
                loading,
                accessError,
                hasAccess,
                isAdmin,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {

    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error(
            "useAuth debe utilizarse dentro de AuthProvider."
        );
    }

    return context;
}