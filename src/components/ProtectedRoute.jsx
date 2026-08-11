import {
    Navigate,
    Outlet,
    useLocation
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function LoadingScreen() {

    return (

        <div className="authLoadingScreen">

            <span className="authSpinner" />

            <p>
                Cargando sesión...
            </p>

        </div>
    );
}

function ProtectedRoute() {

    const location = useLocation();

    const {
        session,
        loading,
        hasAccess,
        accessError,
        signOut
    } = useAuth();

    if (loading) {
        return <LoadingScreen />;
    }

    if (!session) {

        return (

            <Navigate
                to="/login"
                replace
                state={{
                    from: location
                }}
            />
        );
    }

    if (!hasAccess) {

        return (

            <div className="accessDeniedPage">

                <div className="accessDeniedCard">

                    <h1>
                        Acceso no disponible
                    </h1>

                    <p>
                        {accessError ||
                            "Tu usuario no tiene acceso a una clínica activa."}
                    </p>

                    <button
                        type="button"
                        onClick={signOut}
                    >
                        Cerrar sesión
                    </button>

                </div>

            </div>
        );
    }

    return <Outlet />;
}

export function PublicOnlyRoute({ children }) {

    const {
        session,
        loading
    } = useAuth();

    if (loading) {
        return <LoadingScreen />;
    }

    if (session) {

        return (

            <Navigate
                to="/pacientes"
                replace
            />
        );
    }

    return children;
}

export default ProtectedRoute;