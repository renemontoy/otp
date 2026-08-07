import "../styles/Header.css";

import {
    FaBell,
    FaQuestionCircle,
    FaChevronDown
} from "react-icons/fa";


function Header() {

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


                <div className="headerUser">

                    <div className="headerAvatar">
                        PM
                    </div>


                    <span className="headerUserName">
                        Dr. Pedro Murillo
                    </span>


                    <FaChevronDown
                        className="headerUserArrow"
                    />

                </div>

            </div>

        </header>

    );

}


export default Header;