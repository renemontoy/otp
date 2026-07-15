import "../styles/Header.css";

import {

    FaSearch,
    FaBell,
    FaCog

} from "react-icons/fa";

function Header(){

    return(

        <header className="header">

            <div>

                <h1>

                    <strong>Dr. Pedro Murillo</strong>

                    {/*<span> - Dr. Pedro Murillo</span>*/}

                </h1>

            </div>

           {/*  <div className="headerRight">

               <div className="search">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Buscar pacientes, citas..."
                    />

                </div>

                <button>

                    <FaBell />

                </button>

                <button>

                    <FaCog />

                </button>

            </div>*/}

        </header>

    )

}

export default Header