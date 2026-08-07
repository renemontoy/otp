import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Pacientes from "./pages/Pacientes";
import Agenda from "./pages/Agenda";

import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";


function App() {

    return (

        <div className="appShell">

            <aside className="appSidebar">
                <Sidebar />
            </aside>


            <div className="appWorkspace">

                <div className="appHeader">
                    <Header />
                </div>


                <main className="appContent">

                    <Routes>

                        <Route
                            path="/"
                            element={
                                <Navigate
                                    to="/pacientes"
                                    replace
                                />
                            }
                        />

                        <Route
                            path="/pacientes"
                            element={<Pacientes />}
                        />

                        <Route
                            path="/agenda"
                            element={<Agenda />}
                        />

                    </Routes>

                </main>

            </div>

        </div>

    );

}


export default App;