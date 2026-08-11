import "./Login.css";

import { useState } from "react";
import { FaTooth } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

function Login() {

    const { signIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");
        setSubmitting(true);

        const { error: signInError } = await signIn({
            email,
            password
        });

        if (signInError) {

            console.error(
                "Error iniciando sesión:",
                signInError
            );

            setError(
                "El correo o la contraseña son incorrectos."
            );

            setSubmitting(false);
        }
    };

    return (

        <main className="loginPage">

            <section className="loginCard">

                <div className="loginBrand">

                    <div className="loginBrandIcon">
                        <FaTooth />
                    </div>

                    <div>

                        <h1>
                            Odonto ERP
                        </h1>

                        <p>
                            Gestión clínica odontológica
                        </p>

                    </div>

                </div>

                <div className="loginHeading">

                    <h2>
                        Iniciar sesión
                    </h2>

                    <p>
                        Ingresa con tu cuenta para continuar.
                    </p>

                </div>

                <form
                    className="loginForm"
                    onSubmit={handleSubmit}
                >

                    <div className="loginField">

                        <label htmlFor="email">
                            Correo electrónico
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            autoComplete="email"
                            placeholder="usuario@clinica.com"
                            required
                            autoFocus
                        />

                    </div>

                    <div className="loginField">

                        <label htmlFor="password">
                            Contraseña
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            autoComplete="current-password"
                            placeholder="Ingresa tu contraseña"
                            required
                        />

                    </div>

                    {error && (

                        <div
                            className="loginError"
                            role="alert"
                            aria-live="polite"
                        >
                            {error}
                        </div>
                    )}

                    <button
                        className="loginSubmit"
                        type="submit"
                        disabled={submitting}
                    >
                        {submitting
                            ? "Ingresando..."
                            : "Iniciar sesión"}
                    </button>

                </form>

            </section>

        </main>
    );
}

export default Login;