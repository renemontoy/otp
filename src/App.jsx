import "./App.css";

import {
    Navigate,
    Outlet,
    Route,
    Routes
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import ProtectedRoute, {
    PublicOnlyRoute
} from "./components/ProtectedRoute";

import Pacientes from "./pages/Pacientes";
import Login from "./pages/Login";
import AgendaModule from "./components/Agenda/AgendaModule";

function AppLayout() {

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
                    <Outlet />
                </main>

            </div>

        </div>
    );
}

function App() {

    return (

        <Routes>

            <Route
                path="/login"
                element={
                    <PublicOnlyRoute>
                        <Login />
                    </PublicOnlyRoute>
                }
            />

            <Route element={<ProtectedRoute />}>

                <Route element={<AppLayout />}>

                    <Route
                        index
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
                        element={<AgendaModule />}
                    />

                </Route>

            </Route>

            <Route
                path="*"
                element={
                    <Navigate
                        to="/"
                        replace
                    />
                }
            />

        </Routes>
    );
}

export default App;