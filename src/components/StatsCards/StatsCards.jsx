import "./StatsCards.css";

import {
    FaUsers,
    FaCalendarAlt,
    FaClipboardList,
    FaDollarSign
} from "react-icons/fa";

const cards = [

{
title:"Total Pacientes",
value:"1876",
icon:<FaUsers/>,
color:"#ffffff"
},

{
title:"Citas Hoy",
value:"1876",
icon:<FaCalendarAlt/>,
color:"#dff0ff"
},

{
title:"Tratamientos Pendientes",
value:"1876",
icon:<FaClipboardList/>,
color:"#ffe7db"
},

{
title:"Ingresos Mensuales",
value:"$1,876",
icon:<FaDollarSign/>,
color:"#d9f9ef"
}

];

function StatsCards(){

return(

<div className="cards">

{cards.map((card,index)=>(

<div
className="card"
style={{background:card.color}}
key={index}
>

<div className="cardHeader">

<h4>{card.title}</h4>

<div className="icon">

{card.icon}

</div>

</div>

<h2>{card.value}</h2>

</div>

))}

</div>

)

}

export default StatsCards;