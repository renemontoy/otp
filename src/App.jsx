import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Pacientes from "./pages/Pacientes";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Agenda from "./pages/Agenda";
function App() {
    return (
        <div className="app">
            {/*<Sidebar />*/}

            <main className="main">

            <Header />

            <Routes>
                <Route path="/" element={<Pacientes />}/>
                <Route path="pacientes" element={<Pacientes />} />
                <Route path="agenda" element={<Agenda />} />
            </Routes>
            </main>
             </div>
             
        );
        }


export default App;

       
