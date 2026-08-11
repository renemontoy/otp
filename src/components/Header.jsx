import "../styles/Header.css";

import {
    useEffect,
    useRef,
    useState
} from "react";

import {
    FaBell,
    FaChevronDown,
    FaQuestionCircle,
    FaSignOutAlt
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

function getInitials(profile) {

    const parts = [
        profile?.nombre,
        profile?.apellido
    ].filter(Boolean);

    if (parts.length > 0) {

        return parts
            .slice(0, 2)
            .map((part) => part.charAt(0))
            .join("")
            .toUpperCase();
    }

    return profile?.email
        ?.slice(0, 2)
        .toUpperCase() || "US";
}

function Header() {

    const {
        profile,
        membership,
        signOut
    } = useAuth();

    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const fullName = [
        profile?.nombre,
        profile?.apellido
    ]
        .filter(Boolean)
        .join(" ")
        .trim() || profile?.email || "Usuario";

    const roleLabel =
        membership?.rol === "administrador"
            ? "Administrador"
            : "Odontólogo";

    useEffect(() => {

        if (!menuOpen) return undefined;

        const handleOutsideClick = (event) => {

            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        const handleEscape = (event) => {

            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );

            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };

    }, [menuOpen]);

    const handleSignOut = async () => {

        setMenuOpen(false);

        const { error } = await signOut();

        if (error) {
            console.error(
                "Error cerrando sesión:",
                error
            );
        }
    };

    return (

        <header className="header">

            <div className="headerSpacer" />

            <div className="headerRight">

                <button
                    className="headerIconButton"
                    type="button"
                    aria-label="Notificaciones"
                >

                    <FaBell />

                    <span className="notificationBadge">
                        3
                    </span>

                </button>

                <button
                    className="headerIconButton"
                    type="button"
                    aria-label="Ayuda"
                >
                    <FaQuestionCircle />
                </button>

                <div
                    className="headerUserMenu"
                    ref={menuRef}
                >

                    <button
                        className="headerUser"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={menuOpen}
                        onClick={() =>
                            setMenuOpen((current) => !current)
                        }
                    >

                        <div className="headerAvatar">
                            {getInitials(profile)}
                        </div>

                        <span className="headerUserName">
                            {fullName}
                        </span>

                        <FaChevronDown
                            className={
                                menuOpen
                                    ? "headerUserArrow headerUserArrowOpen"
                                    : "headerUserArrow"
                            }
                        />

                    </button>

                    {menuOpen && (

                        <div
                            className="headerUserDropdown"
                            role="menu"
                        >

                            <div className="headerUserDropdownInfo">

                                <strong>
                                    {fullName}
                                </strong>

                                <span>
                                    {profile?.email}
                                </span>

                                <small>
                                    {roleLabel}
                                </small>

                            </div>

                            <div className="headerUserDropdownDivider" />

                            <button
                                className="headerLogoutButton"
                                type="button"
                                role="menuitem"
                                onClick={handleSignOut}
                            >

                                <FaSignOutAlt />

                                <span>
                                    Cerrar sesión
                                </span>

                            </button>

                        </div>
                    )}

                </div>

            </div>

        </header>
    );
}

export default Header;