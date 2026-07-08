import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";

import {

    FaHome,
    FaUserFriends,
    FaNotesMedical,
    FaCalendarAlt,
    FaTeeth,
    FaMoneyCheckAlt,
    FaChartBar,
    FaCog

} from "react-icons/fa";

const items = [

    {
        text: "Dashboard",
        icon: <FaHome />,
        path: "/"
    },

    {
        text: "Pacientes",
        icon: <FaUserFriends />,
        path: "/pacientes"
    },

    {
        text: "Citas",
        icon: <FaCalendarAlt />,
        path: "/agenda"
    },

    /*{{
        text: "Configuración",
        icon: <FaCog />,
        path: "/settings"
    }
    }*/
];

function Sidebar(){

    return(

        <aside className="sidebar">

            <div className="logo">

            {/*    <div className="logoIcon"></div>*/}

                <h2>MOOST ERP</h2>

            </div>

            {/* <div className="avatar"> 

                <img
                    src="https://i.pravatar.cc/120"
                    alt="Avatar"
                /> 

            </div> */}

            <nav>

                {items.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? "menu active" : "menu"
                        }
                    >

                        {item.icon}

                        <span>{item.text}</span>

                    </NavLink>

                ))}

            </nav>

        </aside>

    )

}

export default Sidebar