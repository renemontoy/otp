import "../styles/Sidebar.css";

import { NavLink } from "react-router-dom";

import {
    FaHome,
    FaUserFriends,
    FaCalendarAlt,
    FaTooth,
    FaNotesMedical,
    FaCreditCard,
    FaChartBar,
    FaCog
} from "react-icons/fa";


const items = [

    {
        text: "Inicio",
        icon: <FaHome />,
        disabled: true
    },

    {
        text: "Pacientes",
        icon: <FaUserFriends />,
        path: "/pacientes"
    },

    {
        text: "Agenda",
        icon: <FaCalendarAlt />,
        path: "/agenda"
    },

    {
        text: "Odontograma",
        icon: <FaTooth />,
        disabled: true
    },

    {
        text: "Tratamientos",
        icon: <FaNotesMedical />,
        disabled: true
    },

    {
        text: "Pagos",
        icon: <FaCreditCard />,
        disabled: true
    },

    {
        text: "Reportes",
        icon: <FaChartBar />,
        disabled: true
    }

];


function Sidebar() {

    return (

        <div className="sidebar">

            <div className="sidebarBrand">

                <div className="sidebarBrandIcon">

                    <FaTooth />

                </div>


                <div className="sidebarBrandText">

                    <strong>
                        Dr. Pedro Murillo
                    </strong>

                    <span>
                        Clínica Dental
                    </span>

                </div>

            </div>


            <nav className="sidebarNavigation">

                {items.map((item) => {

                    if (item.disabled) {

                        return (

                            <div
                                key={item.text}
                                className="sidebarMenuItem sidebarMenuItemDisabled"
                            >

                                <span className="sidebarMenuIcon">
                                    {item.icon}
                                </span>

                                <span>
                                    {item.text}
                                </span>

                            </div>

                        );

                    }


                    return (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebarMenuItem active"
                                    : "sidebarMenuItem"
                            }
                        >

                            <span className="sidebarMenuIcon">
                                {item.icon}
                            </span>

                            <span>
                                {item.text}
                            </span>

                        </NavLink>

                    );

                })}

            </nav>


            <div className="sidebarBottom">

                <div className="sidebarDivider" />


                <div className="sidebarMenuItem sidebarMenuItemDisabled">

                    <span className="sidebarMenuIcon">
                        <FaCog />
                    </span>

                    <span>
                        Configuración
                    </span>

                </div>

            </div>

        </div>

    );

}


export default Sidebar;