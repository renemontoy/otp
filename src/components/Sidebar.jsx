import "../styles/Sidebar.css";

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

    { icon: <FaHome />, text: "Inicio", active: true },

    { icon: <FaUserFriends />, text: "Pacientes" },

    { icon: <FaNotesMedical />, text: "Historial Clínico" },

    { icon: <FaCalendarAlt />, text: "Citas" },

    { icon: <FaTeeth />, text: "Tratamientos" },

    { icon: <FaTeeth />, text: "Odontograma" },

    { icon: <FaMoneyCheckAlt />, text: "Pagos" },

    { icon: <FaChartBar />, text: "Reportes" },

    { icon: <FaCog />, text: "Configuración" }

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

                {items.map((item,index)=>(

                    <button
                        key={index}
                        className={item.active ? "menu active" : "menu"}
                    >

                        {item.icon}

                        <span>{item.text}</span>

                    </button>

                ))}

            </nav>

        </aside>

    )

}

export default Sidebar