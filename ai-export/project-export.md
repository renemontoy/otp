# 📦 AI Project Export

## 📁 Folder Structure

```
├── .oxlintrc.json
├── README.md
├── index.html
├── package.json
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── ActionMenu
│   │   │   ├── ActionMenu.css
│   │   │   └── ActionMenu.jsx
│   │   ├── Agenda
│   │   │   ├── AgendaModule.css
│   │   │   ├── AgendaModule.jsx
│   │   │   ├── components
│   │   │   │   ├── AgendaHeader.jsx
│   │   │   │   ├── AgendaToolbar.jsx
│   │   │   │   ├── AppointmentCard.jsx
│   │   │   │   └── CalendarGrid.jsx
│   │   │   └── hooks
│   │   │       ├── useAppointments.js
│   │   │       └── useDentists.js
│   │   ├── Exploracion
│   │   │   ├── Exploracion.css
│   │   │   ├── Exploracion.jsx
│   │   │   └── Steps
│   │   │       ├── Cabezacuello.jsx
│   │   │       ├── Estomatogmatico.jsx
│   │   │       ├── Signosvitales.jsx
│   │   │       ├── Tejidosblandos.jsx
│   │   │       ├── Tejidosblandos2.jsx
│   │   │       └── Tejidosblandos3.jsx
│   │   ├── Form
│   │   │   ├── CheckboxGroup.css
│   │   │   ├── CheckboxGroup.jsx
│   │   │   ├── RadioGroup.css
│   │   │   └── RadioGroup.jsx
│   │   ├── Header.jsx
│   │   ├── History
│   │   │   ├── History.css
│   │   │   └── History.jsx
│   │   ├── OdontogramLegacy
│   │   │   ├── Odontogram.css
│   │   │   └── OdontogramaLegacy.jsx
│   │   ├── OdontogramV2
│   │   │   ├── InitialOdontogram.jsx
│   │   │   ├── Odontogram.css
│   │   │   ├── Odontogram.jsx
│   │   │   ├── OdontogramModule.css
│   │   │   ├── OdontogramModule.jsx
│   │   │   ├── Tooth
│   │   │   │   ├── Shapes
│   │   │   │   │   ├── CanineShape.jsx
│   │   │   │   │   ├── IncisorShape.jsx
│   │   │   │   │   ├── MolarShape.jsx
│   │   │   │   │   └── PremolarShape.jsx
│   │   │   │   ├── Tooth.css
│   │   │   │   ├── Tooth.jsx
│   │   │   │   ├── ToothFace.css
│   │   │   │   ├── ToothFace.jsx
│   │   │   │   └── ToothSvg.jsx
│   │   │   ├── components
│   │   │   │   ├── Canvas
│   │   │   │   │   ├── OdontogramCanvas.css
│   │   │   │   │   └── OdontogramCanvas.jsx
│   │   │   │   ├── ClinicalTooth
│   │   │   │   │   ├── CenterFace.jsx
│   │   │   │   │   ├── ClinicalTooth.jsx
│   │   │   │   │   ├── FaceSector.jsx
│   │   │   │   │   ├── InitialConditionOverlay.jsx
│   │   │   │   │   ├── ToothOutline.jsx
│   │   │   │   │   └── geometry.js
│   │   │   │   ├── Header
│   │   │   │   │   ├── PatientHeader.css
│   │   │   │   │   └── PatientHeader.jsx
│   │   │   │   ├── InitialConditionPanel
│   │   │   │   │   ├── InitialConditionPanel.css
│   │   │   │   │   └── InitialConditionPanel.jsx
│   │   │   │   ├── InitialFindings
│   │   │   │   │   ├── InitialFindings.css
│   │   │   │   │   └── InitialFindings.jsx
│   │   │   │   ├── Legend.jsx
│   │   │   │   ├── ModeSelector
│   │   │   │   │   ├── ModeSelector.css
│   │   │   │   │   └── ModeSelector.jsx
│   │   │   │   ├── PendingTreatments.css
│   │   │   │   ├── PendingTreatments.jsx
│   │   │   │   ├── Toolbar
│   │   │   │   │   ├── Toolbar.css
│   │   │   │   │   ├── Toolbar.jsx
│   │   │   │   │   └── ToolbarButton.jsx
│   │   │   │   ├── Tooltip
│   │   │   │   │   ├── InitialFindingTooltip.css
│   │   │   │   │   ├── InitialFindingTooltip.jsx
│   │   │   │   │   ├── TreatmentTooltip.css
│   │   │   │   │   └── TreatmentTooltip.jsx
│   │   │   │   ├── Tooth
│   │   │   │   │   ├── Renderers
│   │   │   │   │   │   ├── CanineRenderer.jsx
│   │   │   │   │   │   ├── IncisorRenderer.jsx
│   │   │   │   │   │   ├── MolarRenderer.jsx
│   │   │   │   │   │   └── PremolarRenderer.jsx
│   │   │   │   │   └── ToothRenderer.jsx
│   │   │   │   ├── ToothFace.jsx
│   │   │   │   ├── ToothGroup.jsx
│   │   │   │   ├── ToothLabel.jsx
│   │   │   │   ├── ToothNumber.jsx
│   │   │   │   ├── TreatmentPanel.css
│   │   │   │   └── TreatmentPanel.jsx
│   │   │   ├── config
│   │   │   │   ├── colors.js
│   │   │   │   ├── layout.js
│   │   │   │   └── theme.js
│   │   │   ├── context
│   │   │   │   ├── InitialOdontogramContext.jsx
│   │   │   │   └── OdontogramContext.jsx
│   │   │   ├── data
│   │   │   │   ├── createFace.js
│   │   │   │   ├── createOdontogram.js
│   │   │   │   ├── createTooth.js
│   │   │   │   ├── createTreatment.js
│   │   │   │   └── teeth.js
│   │   │   ├── geometry
│   │   │   │   ├── canines.js
│   │   │   │   ├── faces.js
│   │   │   │   ├── generators
│   │   │   │   │   └── createGeometry.js
│   │   │   │   ├── incisorPath.js
│   │   │   │   ├── incisors.js
│   │   │   │   ├── molars.js
│   │   │   │   └── premolars.js
│   │   │   ├── hooks
│   │   │   │   ├── useInitialOdontogram.js
│   │   │   │   └── useOdontogram.js
│   │   │   ├── layout
│   │   │   │   ├── Workspace.css
│   │   │   │   └── Workspace.jsx
│   │   │   ├── services
│   │   │   │   ├── initialConditionRules.js
│   │   │   │   ├── initialFindingMapper.js
│   │   │   │   ├── initialVisualMapper.js
│   │   │   │   ├── treatmentEngine.js
│   │   │   │   └── treatmentMapper.js
│   │   │   └── utils
│   │   │       ├── colors.js
│   │   │       ├── getFaceColor.js
│   │   │       └── getToothPosition.js
│   │   ├── PatientForm
│   │   │   ├── PatientForm.css
│   │   │   ├── PatientForm.jsx
│   │   │   └── Steps
│   │   │       ├── AntecedentesStep.jsx
│   │   │       ├── FamilyDataStep.jsx
│   │   │       ├── MedicalDataStep.jsx
│   │   │       └── PersonalDataStep.jsx
│   │   ├── PatientProfile
│   │   │   ├── PatientProfile.css
│   │   │   └── PatientProfile.jsx
│   │   ├── PatientTable
│   │   │   ├── PatientTable.css
│   │   │   └── PatientTable.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatsCards
│   │   │   ├── StatsCards.css
│   │   │   └── StatsCards.jsx
│   │   └── UpcomingAppointments
│   │       ├── UpcomingAppointments.css
│   │       └── UpcomingAppointments.jsx
│   ├── context
│   │   └── AuthContext.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── Agenda.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.css
│   │   ├── Login.jsx
│   │   ├── Pacientes.css
│   │   └── Pacientes.jsx
│   ├── services
│   │   └── historyMapper.js
│   ├── styles
│   │   ├── Header.css
│   │   └── Sidebar.css
│   └── supabase
│       ├── client.js
│       ├── estados.js
│       ├── exploraciones.js
│       ├── history.js
│       ├── initialOdontogram.js
│       ├── odontogram.js
│       ├── patients.js
│       └── tratamientos.js
└── vite.config.js
```

## 🔄 Changes Since Last Export
- Added: 150
- Modified: 0
- Removed: 0

## 🌱 Git Info
- Branch: main
- Commit: 3e67cd8

## 🤖 AI Instructions


You are a senior software engineer.

Tasks:
- Explain architecture and flow
- Review code quality and best practices

## 📄 .oxlintrc.json
```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

## 📄 index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>otp</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## 📄 package.json
```json
{
  "name": "dentalease-ui",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fontsource-variable/inter": "^5.3.0",
    "@supabase/supabase-js": "^2.110.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.7.0",
    "react-odontogram": "^0.5.6",
    "react-router-dom": "^7.18.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.0"
  }
}
```

## 📄 README.md
```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
```

## 📄 src\App.css
```css
/* ========================================
   APPLICATION SHELL
======================================== */

.appShell {
    display: flex;

    width: 100%;
    min-height: 100vh;

    background: #f6f8fb;
}


/* ========================================
   SIDEBAR
======================================== */

.appSidebar {
    position: sticky;

    top: 0;

    width: 240px;
    height: 100vh;

    flex-shrink: 0;

    overflow-y: auto;

    background: #ffffff;

    border-right: 1px solid #e5eaf0;

    box-sizing: border-box;

    z-index: 30;
}


/* ========================================
   RIGHT SIDE OF APPLICATION
======================================== */

.appWorkspace {
    display: flex;
    flex-direction: column;

    flex: 1;

    min-width: 0;
    min-height: 100vh;
}


/* ========================================
   HEADER
======================================== */

.appHeader {
    position: sticky;

    top: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: 64px;

    flex-shrink: 0;

    background: rgba(255, 255, 255, 0.96);

    border-bottom: 1px solid #e5eaf0;

    box-sizing: border-box;

    z-index: 20;
}


.appHeader > * {
    width: 100%;
}


/* ========================================
   PAGE CONTENT
======================================== */

.appContent {
    flex: 1;

    min-width: 0;

    background: #f6f8fb;
}


/* ========================================
   RESPONSIVE
======================================== */

@media (max-width: 1200px) {

    .appSidebar {
        width: 220px;
    }

}

.authLoadingScreen,
.accessDeniedPage {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 14px;
    padding: 24px;
    background: #f7f9fc;
}

.authLoadingScreen p {
    margin: 0;
    color: #6b7280;
    font-size: 14px;
}

.authSpinner {
    width: 30px;
    height: 30px;
    border: 3px solid #dbeafe;
    border-top-color: #2563eb;
    border-radius: 50%;
    animation: authSpin 0.8s linear infinite;
}

.accessDeniedCard {
    width: 100%;
    max-width: 430px;
    padding: 32px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    box-shadow:
        0 15px 35px rgba(15, 23, 42, 0.1);
}

.accessDeniedCard h1 {
    margin: 0 0 10px;
    color: #111827;
    font-size: 23px;
}

.accessDeniedCard p {
    margin: 0 0 22px;
    color: #6b7280;
    font-size: 14px;
}

.accessDeniedCard button {
    height: 40px;
    padding: 0 18px;
    color: #ffffff;
    font: inherit;
    font-weight: 600;
    background: #2563eb;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
}

@keyframes authSpin {

    to {
        transform: rotate(360deg);
    }
}
```

## 📄 src\App.jsx
```jsx
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
```

## 📄 src\components\ActionMenu\ActionMenu.css
```css
.actionMenu{

    position:relative;

}

.menuButton{

    border:none;

    background:none;

    cursor:pointer;

    font-size:20px;

    padding:5px;

}

.menuDropdown{

    position:absolute;

    right:0;

    top:35px;

    width:170px;

    background:white;

    border-radius:12px;

    box-shadow:0 8px 25px rgba(0,0,0,.12);

    overflow:hidden;

    z-index:100;

}

.menuDropdown button{

    width:100%;

    border:none;

    background:white;

    padding:12px;

    text-align:left;

    cursor:pointer;

}

.menuDropdown button:hover{

    background:#F2F4F8;

}

.menuDropdown .deactivateAction {
    color: #b91c1c;
}

.menuDropdown .deactivateAction:hover {
    background: #fef2f2;
}

.menuDropdown .activateAction {
    color: #166534;
}

.menuDropdown .activateAction:hover {
    background: #f0fdf4;
}
```

## 📄 src\components\ActionMenu\ActionMenu.jsx
```jsx
import {
    useEffect,
    useRef,
    useState
} from "react";

import "./ActionMenu.css";

function ActionMenu({
    isActive,
    onEdit,
    onToggleStatus
}) {

    const [open, setOpen] =
        useState(false);

    const menuRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {

            if (
                menuRef.current &&
                !menuRef.current.contains(
                    event.target
                )
            ) {

                setOpen(false);

            }

        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);

    function handleAction(action) {

        setOpen(false);

        action?.();

    }

    return (

        <div
            className="actionMenu"
            ref={menuRef}
        >

            <button
                type="button"
                className="menuButton"
                aria-label="Abrir acciones del paciente"
                aria-expanded={open}
                onClick={() =>
                    setOpen((previous) => !previous)
                }
            >

                ⋮

            </button>

            {open && (

                <div className="menuDropdown">

                    <button
                        type="button"
                        onClick={() =>
                            handleAction(onEdit)
                        }
                    >

                        Datos personales

                    </button>

                    <button
                        type="button"
                        className={
                            isActive
                                ? "deactivateAction"
                                : "activateAction"
                        }
                        onClick={() =>
                            handleAction(onToggleStatus)
                        }
                    >
                        {isActive
                            ? "Desactivar"
                            : "Activar"}
                    </button>

                </div>

            )}

        </div>

    );

}

export default ActionMenu;
```

## 📄 src\components\Agenda\AgendaModule.css
```css
.agendaModule {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f8fafc;
}


/* HEADER */

.agendaHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 24px 28px 18px;

    background: #ffffff;
}

.agendaHeader h1 {
    margin: 0;

    font-size: 26px;
    font-weight: 700;

    color: #0f172a;
}

.agendaHeader p {
    margin: 5px 0 0;

    font-size: 14px;

    color: #64748b;
}


.newAppointmentButton {
    border: none;
    border-radius: 8px;

    padding: 10px 16px;

    background: #2563eb;
    color: white;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
}

.newAppointmentButton:hover {
    background: #1d4ed8;
}


/* TOOLBAR */

.agendaToolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 14px 28px;

    background: white;

    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
}


.agendaNavigation {
    display: flex;
    align-items: center;
    gap: 8px;
}


.agendaNavigation button,
.agendaViews button {
    height: 36px;

    padding: 0 13px;

    border: 1px solid #dbe2ea;
    border-radius: 7px;

    background: white;

    color: #334155;

    cursor: pointer;
}


.agendaNavigation button:hover,
.agendaViews button:hover:not(:disabled) {
    background: #f8fafc;
}


.agendaCurrentDate {
    margin-left: 10px;

    font-size: 14px;
    font-weight: 600;

    text-transform: capitalize;

    color: #334155;
}


.agendaViews {
    display: flex;
    gap: 4px;
}


.agendaViews button.active {
    border-color: #2563eb;

    background: #eff6ff;

    color: #2563eb;
}


.agendaViews button:disabled {
    opacity: 0.45;

    cursor: default;
}


/* CONTENT */

.agendaContent {
    flex: 1;

    padding: 20px 28px;

    overflow: hidden;
}


.calendarWrapper {
    width: 100%;
    height: 100%;

    overflow: auto;

    background: white;

    border: 1px solid #e2e8f0;
    border-radius: 10px;
}


.calendarGrid {
    display: grid;

    min-width: 800px;
}


.calendarHeaderCell {
    min-height: 58px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 3px;

    border-right: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;

    background: #ffffff;

    font-size: 13px;

    color: #334155;

    position: sticky;

    top: 0;

    z-index: 2;
}


.calendarHeaderCell span {
    font-size: 11px;

    color: #94a3b8;
}


.timeHeader {
    color: #64748b;
}


.calendarTimeCell {
    min-height: 84px;

    padding-top: 10px;

    text-align: center;

    border-right: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;

    color: #64748b;

    font-size: 12px;
}


.calendarCell {
    min-height: 84px;

    padding: 6px;

    border-right: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;

    background: #ffffff;
}


/* APPOINTMENT */

.appointmentCard {
    display: flex;
    flex-direction: column;

    gap: 3px;

    padding: 8px 10px;

    border-left: 3px solid #3b82f6;
    border-radius: 6px;

    background: #eff6ff;

    font-size: 12px;

    color: #1e3a8a;

    cursor: pointer;
}


.appointmentCard strong {
    font-size: 13px;

    color: #0f172a;
}


.appointmentTime {
    font-size: 11px;

    color: #475569;
}


.appointmentReason {
    color: #64748b;
}


/* STATUS */

.appointment-confirmada {
    background: #f0fdf4;
    border-left-color: #22c55e;
}


.appointment-en-curso {
    background: #fffbeb;
    border-left-color: #f59e0b;
}


.appointment-completada {
    background: #f8fafc;
    border-left-color: #64748b;
}


.appointment-cancelada {
    opacity: 0.55;

    background: #f1f5f9;

    border-left-color: #94a3b8;
}


.agendaMessage {
    padding: 30px;

    text-align: center;

    color: #64748b;
}


.agendaMessage.error {
    color: #dc2626;
}

.dentistHeader {
    flex-direction: row;
    gap: 10px;
}


.dentistAvatar {
    width: 32px;
    height: 32px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #eff6ff;

    color: #2563eb;

    font-size: 11px;
    font-weight: 700;

    flex-shrink: 0;
}


.dentistHeaderInfo {
    display: flex;
    flex-direction: column;

    gap: 2px;
}


.dentistHeaderInfo strong {
    font-size: 13px;

    color: #0f172a;
}


.dentistHeaderInfo span {
    font-size: 11px;

    color: #94a3b8;
}


.calendarEmpty {
    width: 100%;
    min-height: 300px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: white;

    border: 1px solid #e2e8f0;
    border-radius: 10px;

    color: #64748b;

    font-size: 14px;
}
```

## 📄 src\components\Agenda\AgendaModule.jsx
```jsx
import "./AgendaModule.css";

import {
    useState
} from "react";

import AgendaHeader from "./components/AgendaHeader";
import AgendaToolbar from "./components/AgendaToolbar";
import CalendarGrid from "./components/CalendarGrid";

import {
    useAppointments
} from "./hooks/useAppointments";

import {
    useDentists
} from "./hooks/useDentists";


function AgendaModule() {

    const [selectedDate, setSelectedDate] = useState(
        new Date()
    );


    const {
        appointments,
        loading,
        error
    } = useAppointments(selectedDate);


    const {
        dentists,
        loadingDentists,
        dentistsError
    } = useDentists();


    const isLoading =
        loading || loadingDentists;

    const hasError =
        error || dentistsError;


    return (

        <div className="agendaModule">

            <AgendaHeader />

            <AgendaToolbar

                selectedDate={selectedDate}

                setSelectedDate={setSelectedDate}

            />


            <div className="agendaContent">

                {isLoading ? (

                    <div className="agendaMessage">

                        Cargando agenda...

                    </div>

                ) : hasError ? (

                    <div className="agendaMessage error">

                        No fue posible cargar la agenda.

                    </div>

                ) : (

                    <CalendarGrid

                        appointments={appointments}

                        dentists={dentists}

                    />

                )}

            </div>

        </div>

    );

}

export default AgendaModule;
```

## 📄 src\components\Agenda\components\AgendaHeader.jsx
```jsx
function AgendaHeader() {

    return (

        <div className="agendaHeader">

            <div>

                <h1>

                    Agenda

                </h1>

                <p>

                    Gestiona las citas de la clínica

                </p>

            </div>

            <button
                className="newAppointmentButton"
                type="button"
            >

                + Nueva cita

            </button>

        </div>

    );

}

export default AgendaHeader;
```

## 📄 src\components\Agenda\components\AgendaToolbar.jsx
```jsx
function AgendaToolbar({
    selectedDate,
    setSelectedDate
}) {

    function previousDay() {

        const date = new Date(
            selectedDate
        );

        date.setDate(
            date.getDate() - 1
        );

        setSelectedDate(date);

    }


    function nextDay() {

        const date = new Date(
            selectedDate
        );

        date.setDate(
            date.getDate() + 1
        );

        setSelectedDate(date);

    }


    function today() {

        setSelectedDate(
            new Date()
        );

    }


    const formattedDate =
        selectedDate.toLocaleDateString(
            "es-MX",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    return (

        <div className="agendaToolbar">

            <div className="agendaNavigation">

                <button
                    type="button"
                    onClick={today}
                >

                    Hoy

                </button>

                <button
                    type="button"
                    onClick={previousDay}
                >

                    ‹

                </button>

                <button
                    type="button"
                    onClick={nextDay}
                >

                    ›

                </button>

                <span className="agendaCurrentDate">

                    {formattedDate}

                </span>

            </div>


            <div className="agendaViews">

                <button
                    type="button"
                    className="active"
                >

                    Día

                </button>

                <button
                    type="button"
                    disabled
                >

                    Semana

                </button>

                <button
                    type="button"
                    disabled
                >

                    Mes

                </button>

            </div>

        </div>

    );

}

export default AgendaToolbar;
```

## 📄 src\components\Agenda\components\AppointmentCard.jsx
```jsx
function AppointmentCard({
    appointment
}) {

    const start = new Date(
        appointment.inicio
    );

    const end = new Date(
        appointment.fin
    );


    const startTime =
        start.toLocaleTimeString(
            "es-MX",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    const endTime =
        end.toLocaleTimeString(
            "es-MX",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    const patientName = appointment.pacientes
        ? `${appointment.pacientes.nombre} ${appointment.pacientes.apellido || ""}`
        : "Paciente";


    return (

        <div
            className={`
                appointmentCard
                appointment-${appointment.estado
                    ?.toLowerCase()
                    .replaceAll(" ", "-")}
            `}
        >

            <span className="appointmentTime">

                {startTime} - {endTime}

            </span>

            <strong>

                {patientName}

            </strong>

            {appointment.motivo && (

                <span className="appointmentReason">

                    {appointment.motivo}

                </span>

            )}

        </div>

    );

}

export default AppointmentCard;
```

## 📄 src\components\Agenda\components\CalendarGrid.jsx
```jsx
import AppointmentCard from "./AppointmentCard";


const START_HOUR = 8;
const END_HOUR = 19;


function CalendarGrid({
    appointments,
    dentists
}) {

    const hours = [];

    for (
        let hour = START_HOUR;
        hour <= END_HOUR;
        hour++
    ) {

        hours.push(hour);

    }


    if (dentists.length === 0) {

        return (

            <div className="calendarEmpty">

                No hay odontólogos registrados.

            </div>

        );

    }


    return (

        <div className="calendarWrapper">

            <div
                className="calendarGrid"
                style={{
                    gridTemplateColumns:
                        `80px repeat(${dentists.length}, minmax(220px, 1fr))`
                }}
            >

                <div className="calendarHeaderCell timeHeader">

                    Hora

                </div>


                {dentists.map(
                    (dentist) => (

                        <div
                            key={dentist.id}
                            className="calendarHeaderCell dentistHeader"
                        >

                            <div className="dentistAvatar">

                                {getInitials(
                                    dentist.nombre
                                )}

                            </div>

                            <div className="dentistHeaderInfo">

                                <strong>

                                    {dentist.nombre}

                                </strong>

                                {dentist.especialidad && (

                                    <span>

                                        {dentist.especialidad}

                                    </span>

                                )}

                            </div>

                        </div>

                    )
                )}


                {hours.map(
                    (hour) => (

                        <CalendarRow

                            key={hour}

                            hour={hour}

                            dentists={dentists}

                            appointments={appointments}

                        />

                    )
                )}

            </div>

        </div>

    );

}


function CalendarRow({
    hour,
    dentists,
    appointments
}) {

    return (

        <>

            <div className="calendarTimeCell">

                {String(hour).padStart(
                    2,
                    "0"
                )}:00

            </div>


            {dentists.map(
                (dentist) => {

                    const appointmentsForHour =
                        appointments.filter(
                            (appointment) => {

                                const date =
                                    new Date(
                                        appointment.inicio
                                    );

                                return (
                                    appointment.odontologos?.id === dentist.id &&
                                    date.getHours() === hour
                                );

                            }
                        );


                    return (

                        <div
                            key={`${dentist.id}-${hour}`}
                            className="calendarCell"
                        >

                            {appointmentsForHour.map(
                                (appointment) => (

                                    <AppointmentCard

                                        key={appointment.id}

                                        appointment={appointment}

                                    />

                                )
                            )}

                        </div>

                    );

                }
            )}

        </>

    );

}


function getInitials(name = "") {

    const parts =
        name
            .trim()
            .split(" ")
            .filter(Boolean);

    if (parts.length === 0) {
        return "";
    }

    if (parts.length === 1) {

        return parts[0]
            .substring(0, 2)
            .toUpperCase();

    }

    return (
        parts[0][0] +
        parts[1][0]
    ).toUpperCase();

}


export default CalendarGrid;
```

## 📄 src\components\Agenda\hooks\useAppointments.js
```javascript
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";

export function useAppointments(selectedDate) {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!selectedDate) return;

        fetchAppointments();

    }, [selectedDate]);

    async function fetchAppointments() {

        try {

            setLoading(true);
            setError(null);

            const startOfDay = new Date(selectedDate);

            startOfDay.setHours(
                0,
                0,
                0,
                0
            );

            const endOfDay = new Date(selectedDate);

            endOfDay.setHours(
                23,
                59,
                59,
                999
            );

            const { data, error } = await supabase
                .from("citas")
                .select(`
                    *,
                    pacientes (
                        id,
                        nombre,
                        apellido,
                        telefono
                    ),
                    odontologos (
                        id,
                        nombre,
                        especialidad
                    )
                `)
                .gte(
                    "inicio",
                    startOfDay.toISOString()
                )
                .lte(
                    "inicio",
                    endOfDay.toISOString()
                )
                .order(
                    "inicio",
                    { ascending: true }
                );

            if (error) {
                throw error;
            }

            setAppointments(
                data || []
            );

        } catch (error) {

            console.error(
                "Error cargando agenda:",
                error
            );

            setError(error);

        } finally {

            setLoading(false);

        }

    }

    return {
        appointments,
        loading,
        error,
        refetch: fetchAppointments
    };
}
```

## 📄 src\components\Agenda\hooks\useDentists.js
```javascript
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";

export function useDentists() {

    const [dentists, setDentists] = useState([]);
    const [loadingDentists, setLoadingDentists] = useState(true);
    const [dentistsError, setDentistsError] = useState(null);

    useEffect(() => {

        fetchDentists();

    }, []);


    async function fetchDentists() {

        try {

            setLoadingDentists(true);
            setDentistsError(null);

            const { data, error } = await supabase
                .from("odontologos")
                .select(`
                    id,
                    nombre,
                    especialidad,
                    activo
                `)
                .eq("activo", true)
                .order("nombre", {
                    ascending: true
                });

            if (error) {
                throw error;
            }

            setDentists(data || []);

        } catch (error) {

            console.error(
                "Error cargando odontólogos:",
                error
            );

            setDentistsError(error);

        } finally {

            setLoadingDentists(false);

        }

    }


    return {
        dentists,
        loadingDentists,
        dentistsError,
        refetchDentists: fetchDentists
    };

}
```

## 📄 src\components\Exploracion\Exploracion.css
```css
/* ========================================
   EXPLORATION CARD
======================================== */

.explorationCard {
    width: 100%;

    overflow: hidden;

    background: #ffffff;

    border: 1px solid #e5eaf0;
    border-radius: 16px;

    box-shadow:
        0 2px 8px
        rgba(15, 23, 42, 0.04);

    box-sizing: border-box;
}


/* ========================================
   HEADER
======================================== */

.explorationHeader {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    gap: 16px;

    padding: 20px;

    background:
        linear-gradient(
            135deg,
            #f5f9fe,
            #eef6fd
        );

    border-bottom: 1px solid #e5edf5;
}


.explorationEyebrow {
    display: block;

    margin-bottom: 3px;

    color: #4f7cab;

    font-size: 10px;
    font-weight: 700;

    letter-spacing: 0.06em;

    text-transform: uppercase;
}


.explorationHeader h2 {
    margin: 0;

    color: #203047;

    font-size: 17px;
    font-weight: 700;

    letter-spacing: -0.01em;
}


.explorationHeader p {
    margin: 3px 0 0;

    color: #7a899b;

    font-size: 11px;
}


.explorationStepCounter {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-width: 42px;
    height: 26px;

    padding: 0 8px;

    border-radius: 999px;

    background: #ffffff;

    color: #3973ad;

    font-size: 10px;
    font-weight: 700;

    box-shadow:
        0 1px 3px
        rgba(15, 23, 42, 0.06);
}


/* ========================================
   PROGRESS
======================================== */

.explorationProgress {
    padding: 16px 20px;

    border-bottom: 1px solid #eef2f6;

    background: #ffffff;
}


.explorationProgressHeader {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 9px;
}


.explorationProgressHeader span {
    color: #94a3b8;

    font-size: 10px;
    font-weight: 600;
}


.explorationProgressHeader strong {
    overflow: hidden;

    color: #46566a;

    font-size: 11px;
    font-weight: 600;

    white-space: nowrap;
    text-overflow: ellipsis;
}


.explorationProgressBar {
    width: 100%;
    height: 5px;

    overflow: hidden;

    background: #e9eff5;

    border-radius: 999px;
}


.explorationProgressValue {
    height: 100%;

    background: #3973ad;

    border-radius: inherit;

    transition: width 220ms ease;
}


/* ========================================
   CONTENT
======================================== */

.explorationContent {
    padding: 20px;
}


/* ========================================
   FORM GROUPS
======================================== */

.explorationCard .formGroup {
    display: flex;
    flex-direction: column;

    gap: 6px;

    margin-bottom: 16px;
}


.explorationCard .formGroup label {
    margin: 0;

    color: #64748b;

    font-size: 11px;
    font-weight: 600;

    line-height: 1.4;
}


/* ========================================
   INPUTS
======================================== */

.explorationCard
.formGroup
input:not([type="radio"]):not([type="checkbox"]),
.explorationCard
.formGroup
select,
.explorationCard
.formGroup
textarea {
    width: 100%;

    min-height: 40px;

    padding: 9px 11px;

    border: 1px solid #dce3eb;
    border-radius: 9px;

    outline: none;

    background: #ffffff;

    color: #334155;

    font-family: inherit;
    font-size: 12px;

    box-sizing: border-box;

    transition:
        border-color 150ms ease,
        box-shadow 150ms ease;
}


.explorationCard
.formGroup
textarea {
    min-height: 88px;

    resize: vertical;
}


.explorationCard
.formGroup
input:not([type="radio"]):not([type="checkbox"]):focus,
.explorationCard
.formGroup
select:focus,
.explorationCard
.formGroup
textarea:focus {
    border-color: #8eb5de;

    box-shadow:
        0 0 0 3px
        rgba(21, 86, 157, 0.07);
}


/* ========================================
   CHECKBOXES
======================================== */

.explorationCard .checkboxGroup {
    display: flex;

    flex-wrap: wrap;

    gap: 8px 14px;

    margin-top: 4px;
}


.explorationCard .checkboxGroup label {
    display: inline-flex;

    align-items: center;

    gap: 6px;

    margin: 0;

    color: #526173;

    font-size: 11px;
    font-weight: 500;

    cursor: pointer;
}


.explorationCard
.checkboxGroup
input[type="checkbox"] {
    width: 15px;
    height: 15px;

    min-width: 15px;
    min-height: 15px;

    margin: 0;
    padding: 0;

    accent-color: #15569d;

    cursor: pointer;
}


/* ========================================
   RADIO BUTTONS
======================================== */

.explorationCard
input[type="radio"] {
    width: 15px;
    height: 15px;

    margin: 0;

    accent-color: #15569d;

    cursor: pointer;
}


/* ========================================
   FOOTER
======================================== */

.explorationFooter {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 10px;

    padding: 15px 20px;

    border-top: 1px solid #eef2f6;

    background: #fafbfd;
}


/* ========================================
   BUTTONS
======================================== */

.explorationSecondaryButton,
.explorationPrimaryButton {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-height: 38px;

    padding: 0 15px;

    border-radius: 9px;

    font-family: inherit;
    font-size: 11px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background 150ms ease,
        border-color 150ms ease,
        box-shadow 150ms ease;
}


.explorationSecondaryButton {
    border: 1px solid #dce3eb;

    background: #ffffff;

    color: #526173;
}


.explorationSecondaryButton:hover {
    background: #f8fafc;

    border-color: #cbd5e1;
}


.explorationPrimaryButton {
    border: 1px solid #15569d;

    background: #15569d;

    color: #ffffff;

    box-shadow:
        0 2px 6px
        rgba(21, 86, 157, 0.14);
}


.explorationPrimaryButton:hover {
    background: #104780;

    border-color: #104780;
}


/* ========================================
   RESPONSIVE
======================================== */

@media (max-width: 600px) {

    .explorationHeader,
    .explorationContent {
        padding-left: 16px;
        padding-right: 16px;
    }


    .explorationProgress {
        padding-left: 16px;
        padding-right: 16px;
    }


    .explorationFooter {
        padding:
            14px 16px;
    }


    .explorationSecondaryButton,
    .explorationPrimaryButton {
        flex: 1;
    }

}

.explorationSaveError {
    margin: 0 20px 12px;

    padding: 10px 12px;

    border: 1px solid #f2caca;
    border-radius: 9px;

    background: #fdf2f2;

    color: #b4534d;

    font-size: 11px;
    font-weight: 500;
}

.explorationInputError {
    border-color: #d97872 !important;

    box-shadow:
        0 0 0 3px
        rgba(185, 70, 63, 0.06);
}

.explorationFieldError {
    display: block;

    margin-top: 5px;

    color: #b4534d;

    font-size: 10px;
    font-weight: 500;
}
```

## 📄 src\components\Exploracion\Exploracion.jsx
```jsx
import "./Exploracion.css";
import { useState, useEffect} from "react"; 
import SignosVitalesDataStep from "./Steps/Signosvitales";
import CabezaCuelloDataStep from "./Steps/Cabezacuello";
import TejidosBlandosDataStep from "./Steps/Tejidosblandos";
import EstomagoDataStep from "./Steps/Estomatogmatico";
import TejidosBlandosDataStep2 from "./Steps/Tejidosblandos2";
import TejidosBlandosDataStep3 from "./Steps/Tejidosblandos3";
import { getExploracionByPatient, createExploracion, updateExploracion } from "../../supabase/exploraciones";
const INITIAL_FORM_DATA = {

    // Signos vitales
    peso: "",
    talla: "",
    complexion: "",
    frecuencia_cardiaca: "",
    tension_arterial: "",
    frecuencia_respiratoria: "",
    temperatura: "",
    glucosa: "",

    // Cabeza y cuello
    cabeza: "",
    craneo: "",
    cara: "",
    perfil: "",
    piel: "",
    musculos: "",
    cuello: "",
    otros_cabeza_cuello: "",

    // Aparato estomatognático
    ruidos: "",
    chasquidos: "",
    crepitacion: "",
    dificultad_abrir_boca: "",
    dolor_abertura: "",
    fatiga_dolor_muscular: "",
    disminucion_abertura: "",
    desviacion_abertura: "",
    desgastes: "",
    bruxismo: "",
    oclusion: "",
    tipo_oclusion: "",
    plano_terminal_denticion_primaria: "",

    // Labios
    resequedad: "",
    labios_forma: "",
    labios_color: "",
    labios_defectos: "",
    labios_especificar: "",

    // Lengua
    lengua: "",
    lengua_especificar: "",

    // Frenillos
    frenillos_anomalias: "",
    frenillos_especificar: "",

    // Carrillos
    carrillos_color: "",
    carrillos: "",
    carrillos_especificar: "",

    // Piso de boca
    piso_boca_color: "",
    piso_boca: "",
    piso_boca_especificar: "",

    // Paladar
    paladar_color: "",
    paladar_forma_tamano: "",
    paladar: "",
    uvula: "",
    paladar_especificar: "",

    // Encías
    encias_color: "",
    encias_forma: "",
    encias_textura: "",
    encias_sangrado: false,
    encias_exudado: false,
    encias_especificar: "",

    // Amígdalas
    amigdalas: "",
    amigdalas_inflamacion: "",
    amigdalas_infeccion: "",

    // Saliva
    saliva: "",
    saliva_especificar: ""
};

function validateVitalSigns(data) {

    const errors = {};

    function validateRange(
        field,
        min,
        max,
        message
    ) {

        const value = data[field];

        if (
            value === "" ||
            value === null ||
            value === undefined
        ) {
            return;
        }

        const number =
            Number(value);

        if (
            Number.isNaN(number) ||
            number < min ||
            number > max
        ) {

            errors[field] =
                message;

        }

    }


    validateRange(
        "peso",
        0,
        500,
        "Ingresa un peso válido."
    );

    validateRange(
        "talla",
        0,
        300,
        "Ingresa una talla válida."
    );

    validateRange(
        "frecuencia_cardiaca",
        0,
        250,
        "Ingresa una frecuencia cardiaca válida."
    );

    validateRange(
        "frecuencia_respiratoria",
        0,
        80,
        "Ingresa una frecuencia respiratoria válida."
    );

    validateRange(
        "temperatura",
        0,
        45,
        "Ingresa una temperatura válida."
    );

    validateRange(
        "glucosa",
        0,
        1000,
        "Ingresa un nivel de glucosa válido."
    );


    return errors;
}

function ExploracionForm({ patient, onCancel, onSave }) {

    const [formData, setFormData] =
    useState(INITIAL_FORM_DATA);

    const [exploracionId, setExploracionId] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [step, setStep] = useState(1);

    const [errors, setErrors] =
        useState({});

    const [saveError, setSaveError] =
        useState("");

    function mapExploracionToForm(data) {

        const form = {};

        Object.keys(INITIAL_FORM_DATA).forEach(
            (field) => {

                form[field] =
                    data?.[field] ?? "";

            }
        );

        return form;
    }
    useEffect(() => {

        async function loadExploracion() {

            if (!patient?.id) {

                setLoading(false);

                return;
            }

            try {

                setLoading(true);

                const data =
                    await getExploracionByPatient(
                        patient.id
                    );

                if (data) {

                    setExploracionId(data.id);

                    setFormData(
                        mapExploracionToForm(data)
                    );

                } else {

                    setExploracionId(null);

                    setFormData(initialFormData);

                }

            } catch (error) {

                console.error(
                    "Error cargando exploración:",
                    error
                );

            } finally {

                setLoading(false);

            }

        }

        loadExploracion();

    }, [patient?.id]);

    function handleChange(e) {

        const {
            name,
            value
        } = e.target;


        setFormData(
            (previous) => ({
                ...previous,
                [name]: value
            })
        );


        if (errors[name]) {

            setErrors(
                (previous) => ({
                    ...previous,
                    [name]: null
                })
            );

        }


        if (saveError) {
            setSaveError("");
        }

    }

    function handleCheckboxChange(e) {

        const {
            name,
            checked
        } = e.target;

        setFormData(
            (previous) => ({
                ...previous,
                [name]: checked
            })
        );

    }

    function handleNext() {

        if (step === 1) {

            const validationErrors =
                validateVitalSigns(
                    formData
                );

            if (
                Object.keys(
                    validationErrors
                ).length > 0
            ) {

                setErrors(
                    validationErrors
                );

                return;
            }

        }


        setErrors({});


        setStep(
            (current) =>
                Math.min(
                    explorationSteps.length,
                    current + 1
                )
        );

    }

    function handlePrevious() {

        setStep(
            (current) =>
                Math.max(
                    1,
                    current - 1
                )
        );

    }

    async function handleSave() {
        const validationErrors =
            validateVitalSigns(
                formData
            );

        if (
            Object.keys(
                validationErrors
            ).length > 0
        ) {

            setErrors(
                validationErrors
            );

            setStep(1);

            return;
        }
        if (!patient?.id) {
            return;
        }

        try {

            setSaving(true);

            const {
                id,
                paciente_id,
                fecha_exploracion,
                created_at,
                updated_at,
                ...exploracionData
            } = formData;


            const dataToSave = {
                ...exploracionData,

                peso:
                    exploracionData.peso === ""
                        ? null
                        : Number(exploracionData.peso),

                talla:
                    exploracionData.talla === ""
                        ? null
                        : Number(exploracionData.talla),

                frecuencia_cardiaca:
                    exploracionData.frecuencia_cardiaca === ""
                        ? null
                        : Number(exploracionData.frecuencia_cardiaca),

                frecuencia_respiratoria:
                    exploracionData.frecuencia_respiratoria === ""
                        ? null
                        : Number(exploracionData.frecuencia_respiratoria),

                temperatura:
                    exploracionData.temperatura === ""
                        ? null
                        : Number(exploracionData.temperatura),

                glucosa:
                    exploracionData.glucosa === ""
                        ? null
                        : Number(exploracionData.glucosa)
            };


            if (exploracionId) {

                await updateExploracion(
                    exploracionId,
                    dataToSave
                );

            } else {

                const nuevaExploracion =
                    await createExploracion(
                        patient.id,
                        dataToSave
                    );

                setExploracionId(
                    nuevaExploracion.id
                );

            }

            if (onSave) {
                onSave();
            }

        } catch (error) {

            console.error(
                "Error guardando exploración:",
                error
            );

            setSaveError(
                "No fue posible guardar la exploración. Intenta nuevamente."
            );

        } finally {

            setSaving(false);

        }

    }
    const explorationSteps = [
        {
            number: 1,
            title: "Signos vitales"
        },
        {
            number: 2,
            title: "Cabeza y cuello"
        },
        {
            number: 3,
            title: "Estomatognático"
        },
        {
            number: 4,
            title: "Tejidos blandos"
        },
        {
            number: 5,
            title: "Tejidos blandos"
        },
        {
            number: 6,
            title: "Tejidos blandos"
        }
    ];

    if (loading) {

        return (
            <div className="explorationCard">
                Cargando exploración...
            </div>
        );

    }

    const currentStep =
        explorationSteps[step - 1] ??
        explorationSteps[0];

    return (

        <div className="explorationCard">

            <div className="explorationHeader">

                <div>

                    <span className="explorationEyebrow">
                        Expediente clínico
                    </span>

                    <h2>
                        Exploración clínica
                    </h2>

                    <p>
                        {patient?.nombre}{" "}
                        {patient?.apellido}
                    </p>

                </div>


                <span className="explorationStepCounter">

                    {step} / {explorationSteps.length}

                </span>

            </div>


            <div className="explorationProgress">

                <div className="explorationProgressHeader">

                    <span>
                        Paso {step}
                    </span>

                    <strong>
                        {currentStep.title}
                    </strong>

                </div>


                <div className="explorationProgressBar">

                    <div
                        className="explorationProgressValue"
                        style={{
                            width: `${
                                (
                                    Math.min(
                                        Math.max(step, 1),
                                        explorationSteps.length
                                    ) /
                                    explorationSteps.length
                                ) * 100
                            }%`
                        }}
                    />

                </div>

            </div>


            <div className="explorationContent">

                {step === 1 && (

                    <SignosVitalesDataStep
                        formData={formData}
                        handleChange={handleChange}
                        errors={errors}
                    />

                )}


                {step === 2 && (

                    <CabezaCuelloDataStep
                        formData={formData}
                        handleChange={handleChange}
                    />

                )}


                {step === 3 && (

                    <EstomagoDataStep
                        formData={formData}
                        handleChange={handleChange}
                    />

                )}


                {step === 4 && (

                    <TejidosBlandosDataStep
                        formData={formData}
                        handleChange={handleChange}
                    />

                )}


                {step === 5 && (

                    <TejidosBlandosDataStep2
                        formData={formData}
                        handleChange={handleChange}
                    />

                )}


                {step === 6 && (

                    <TejidosBlandosDataStep3
                        formData={formData}
                        handleChange={handleChange}
                        handleCheckboxChange={
                            handleCheckboxChange
                        }
                    />

                )}

            </div>
            {saveError && (

                <div className="explorationSaveError">

                    {saveError}

                </div>

            )}

            <div className="explorationFooter">

                {step === 1 ? (

                    <button
                        type="button"
                        className="explorationSecondaryButton"
                        onClick={onCancel}
                    >

                        Cancelar

                    </button>

                ) : (

                    <button
                        type="button"
                        className="explorationSecondaryButton"
                        onClick={handlePrevious}
                    >

                        ← Anterior

                    </button>

                )}


                {step < explorationSteps.length ? (

                    <button
                        type="button"
                        className="explorationPrimaryButton"
                        onClick={() =>
                            setStep(
                                (current) =>
                                    current + 1
                            )
                        }
                    >

                        Siguiente →

                    </button>

                ) : (

                <button
                    type="button"
                    className="explorationPrimaryButton"
                    onClick={handleSave}
                    disabled={saving}
                >
                    {saving
                        ? "Guardando..."
                        : "Guardar exploración"}
                </button>

                )}

            </div>

        </div>

    );

}

export default ExploracionForm;
```

## 📄 src\components\Exploracion\Steps\Cabezacuello.jsx
```jsx
import "../Exploracion.css";
import { useState, useEffect } from "react";
import RadioGroup from "../../Form/RadioGroup";

function CabezaCuelloDataStep({
    formData,
    handleChange,
    handleCheckboxChange
}){


    return(
        <>
        <div className="formGroup">
        <h2>Exploración de Cabeza y Cuello</h2>

        <RadioGroup
            label="Cabeza"
            name="cabeza"
            value={formData.cabeza}
            options={[
                { value: "normal", label: "Sin alteraciones" },
                { value: "exostosis", label: "Exostosis" },
                { value: "endostosis", label: "Endostosis" }
            ]}
            onChange={handleChange}
        />

        <RadioGroup
            label="Cráneo"
            name="craneo"
            value={formData.craneo}
            options={[
                { value: "dolicocefalico", label: "Dolicocefálico" },
                { value: "mesocefalico", label: "Mesocefálico" },
                { value: "braquicefalico", label: "Braquicefálico" },
            ]}
            onChange={handleChange}
        />

        <RadioGroup
            label="Cara"
            name="cara"
            value={formData.cara}
            options={[
                { value: "simetrica", label: "Simétrica" },
                { value: "asimetrias_transversales", label: "Asimetrías transversales" },
                { value: "asimetrias_longitudinales", label: "Asimetrías longitudinales" },

            ]}
            onChange={handleChange}
        />

        <RadioGroup
            label="Perfil"
            name="perfil"
            value={formData.perfil}
            options={[
                { value: "concavo", label: "Cóncavo" },
                { value: "convexo", label: "Convexo" },
                { value: "recto", label: "Recto" },

            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Piel"
            name="piel"
            value={formData.piel}
            options={[
                { value: "normal", label: "Normal" },
                { value: "palida", label: "Pálida" },
                { value: "cianotica", label: "Cianótica" },
                { value: "enrojecida", label: "Enrojecida" },
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Músculos"
            name="musculos"
            value={formData.musculos}
            options={[
                { value: "normotonicos", label: "Normotónicos" },
                { value: "hipotonicos", label: "Hipotónicos" },
                { value: "hipertonicos", label: "Hipertónicos" },
                { value: "espasticos", label: "Espásticos" },
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Cuello: Se palpa la cadena ganglionar"
            name="cuello"
            value={formData.cuello}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" },
            ]}
            onChange={handleChange}
        />
        <div className="formGroup">
                <label>Otros</label>
                <input
                type="text"
                name="otros_cabeza_cuello"
                value={formData.otros_cabeza_cuello}
                onChange={handleChange}
            />
        </div>
        </div>
        </>

    )

}

export default CabezaCuelloDataStep;
```

## 📄 src\components\Exploracion\Steps\Estomatogmatico.jsx
```jsx
import "../Exploracion.css";
import { useState, useEffect } from "react";
import RadioGroup from "../../Form/RadioGroup";
function EstomagoDataStep({
    formData,

    handleChange

}){
    return(
        <>
        <div className="formGroup">
        <h2>Exploración del aparato etomatognático</h2>

        <RadioGroup
            label="Ruidos:"
            name="ruidos"
            value={formData.ruidos}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Chasquidos:"
            name="chasquidos"
            value={formData.chasquidos}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Crepitación:"
            name="crepitacion"
            value={formData.crepitacion}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Dificultad para abrir la boca:"
            name="dificultad_abrir_boca"
            value={formData.dificultad_abrir_boca}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Dolor a la abertura o movimientos de lateralidad:"
            name="dolor_abertura"
            value={formData.dolor_abertura}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Fatiga o dolor muscular:"
            name="fatiga_dolor_muscular"
            value={formData.fatiga_dolor_muscular}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Disminución de la abertura:"
            name="disminucion_abertura"
            value={formData.disminucion_abertura}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Desviación a la abertura cierre:"
            name="desviacion_abertura"
            value={formData.desviacion_abertura}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Desgastes:"
            name="desgastes"
            value={formData.desgastes}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Bruxismo:"
            name="bruxismo"
            value={formData.bruxismo}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Oclusión borde a borde:"
            name="oclusion"
            value={formData.oclusion}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Tipo de oclusión (Según la clasificación de Angle):"
            name="tipo_oclusion"
            value={formData.tipo_oclusion}
            options={[
                { value: "clase1", label: "Clase I" },
                { value: "clase2", label: "Clase II" },
                { value: "clase3", label: "Clase III" },
                { value: "na", label: "No Aplica" },
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Plano terminal en dentición primaria:"
            name="plano_terminal_denticion_primaria"
            value={formData.plano_terminal_denticion_primaria}
            options={[
                    {
                        value: "escalon_mesial",
                        label: "Escalón mesial"
                    },
                    {
                        value: "escalon_distal",
                        label: "Escalón distal"
                    },
                    {
                        value: "plano_terminal_recto",
                        label: "Plano terminal recto"
                    },
                    {
                        value: "na",
                        label: "No aplica"
                    }
                ]}
            onChange={handleChange}
        />
            </div>
        </>

    )

}

export default EstomagoDataStep;
```

## 📄 src\components\Exploracion\Steps\Signosvitales.jsx
```jsx
import "../Exploracion.css";
import { useState, useEffect } from "react";

function SignosVitalesDataStep({
    formData,
    handleChange,
    errors

}){


    return(
        <>
            <div className="formGroup">
            <h2>Signos Vitales</h2>
                <label>
                    Peso (kg)
                </label>

                <input
                    type="number"
                    step="0.01"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    className={
                        errors?.peso
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.peso && (

                    <span className="explorationFieldError">

                        {errors.peso}

                    </span>

                )}

            </div>

            <div className="formGroup">

                <label>Talla</label>

                <input
                    type="number"
                    step="0.01"
                    name="talla"
                    value={formData.talla}
                    onChange={handleChange}
                    className={
                        errors?.talla
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.talla && (

                    <span className="explorationFieldError">

                        {errors.talla}

                    </span>

                )}

            </div>
            <div className="formGroup">
                <label>Complexion</label>

                <input
                type="text"
                name="complexion"
                value={formData.complexion}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
                <label>Frecuencia cardiaca</label>

                <input
                type="text"
                step="0.01"
                name="frecuencia_cardiaca"
                value={formData.frecuencia_cardiaca}
                onChange={handleChange}
                    className={
                        errors?.frecuencia_cardiaca
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.frecuencia_cardiaca && (

                    <span className="explorationFieldError">

                        {errors.frecuencia_cardiaca}

                    </span>

                )}
            </div>
            <div className="formGroup">
                <label>Tensión arterial</label>

                <input
                type="text"
                name="tension_arterial"
                value={formData.tension_arterial}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
                <label>Frecuencia respiratoria</label>

                <input
                type="text"
                step="0.01"
                name="frecuencia_respiratoria"
                value={formData.frecuencia_respiratoria}
                onChange={handleChange}
                    className={
                        errors?.frecuencia_respiratoria
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.frecuencia_respiratoria && (

                    <span className="explorationFieldError">

                        {errors.frecuencia_respiratoria}

                    </span>

                )}
            </div>
            <div className="formGroup">
                <label>Temperatura</label>

                <input
                type="number"
                step="0.01"
                name="temperatura"
                value={formData.temperatura}
                onChange={handleChange}
                    className={
                        errors?.temperatura
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.temperatura && (

                    <span className="explorationFieldError">

                        {errors.temperatura}

                    </span>

                )}
            </div>
            <div className="formGroup">
                <label>Nivel de glucosa</label>

                <input
                type="text"
                step="0.01"
                name="glucosa"
                value={formData.glucosa}
                onChange={handleChange}
                    className={
                        errors?.glucosa
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.glucosa && (

                    <span className="explorationFieldError">

                        {errors.glucosa}

                    </span>

                )}
            </div>
        </>

    )

}

export default SignosVitalesDataStep;
```

## 📄 src\components\Exploracion\Steps\Tejidosblandos.jsx
```jsx
import "../Exploracion.css";
import { useState, useEffect } from "react";
import RadioGroup from "../../Form/RadioGroup";

function TejidosBlandosDataStep({
    formData,

    handleChange

}){


    return(
        <>
            <div className="formGroup">
            <h2>Tejidos Blandos</h2>

            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Labios</h3>

            <RadioGroup
                label="Resequedad:"
                name="resequedad"
                value={formData.resequedad}
                options={[
                    { value: "si", label: "Si" },
                    { value: "no", label: "No" }
                ]}
                onChange={handleChange}
            />
            <label
            style={{marginTop:-10}}
            >Forma</label>
                <input
                type="text"
                name="labios_forma"
                value={formData.labios_forma}
                onChange={handleChange}
            />
            <label
            style={{marginTop:5}}
            >Color</label>
                <input
                type="text"
                name="labios_color"
                value={formData.labios_color}
                onChange={handleChange}
            />
            <label
            style={{marginTop:5}}
            >Defectos</label>
                <input
                type="text"
                name="labios_defectos"
                value={formData.labios_defectos}
                onChange={handleChange}
            />
            <label
            style={{marginTop:5}}
            >Especificar</label>
                <input
                type="text"
                name="labios_especificar"
                value={formData.labios_especificar}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Lengua</h3>

            <RadioGroup
                label="Tipo:"
                name="lengua"
                value={formData.lengua}
                options={[
                    { value: "normal", label: "Sin alteraciones" },
                    { value: "saburral", label: "Saburral" },
                    { value: "fisural", label: "Fisural" },
                    { value: "geografica", label: "Geográfica" },
                    { value: "descamacion", label: "Descamación" },
                    { value: "tamano_aumentado", label: "Tamaño aumentado" },

                ]}
                onChange={handleChange}
            />
            <label
            style={{marginTop:-10}}
            >Especificar</label>
                <input
                type="text"
                name="lengua_especificar"
                value={formData.lengua_especificar}
                onChange={handleChange}
            />
            </div>
                    <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Frenillos</h3>

            <RadioGroup
                label="Anomalías"
                name="frenillos_anomalias"
                value={formData.frenillos_anomalias}
                options={[
                    { value: "si", label: "Si" },
                    { value: "no", label: "No" },
                ]}
                onChange={handleChange}
            />
            <label
            style={{marginTop:-10}}
            >Especificar</label>
                <input
                type="text"
                name="frenillos_especificar"
                value={formData.frenillos_especificar}
                onChange={handleChange}
            />
            </div>
            </div>
        </>

    )

}

export default TejidosBlandosDataStep;
```

## 📄 src\components\Exploracion\Steps\Tejidosblandos2.jsx
```jsx
import "../Exploracion.css";
import { useState, useEffect } from "react";
import RadioGroup from "../../Form/RadioGroup";

function TejidosBlandosDataStep2({
    formData,

    handleChange

}){


    return(
        <>
            <div className="formGroup">
            <h2>Tejidos Blandos</h2>

            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Carrillos</h3>
            <label
            >Color</label>
                <input
                type="text"
                name="carrillos_color"
                value={formData.carrillos_color}
                onChange={handleChange}
            />
            <RadioGroup
                label=""
                name="carrillos"
                value={formData.carrillos}
                options={[
                    { value: "normal", label: "Sin alteraciones" },
                    { value: "linea_alba", label: "Línea alba o clusat" },
                    { value: "mordisqueo", label: "Mordisqueo" }
                ]}
                onChange={handleChange}
            />
            <label
            >Otros (especificar):</label>
                <input
                type="text"
                name="carrillos_especificar"
                value={formData.carrillos_especificar}
                onChange={handleChange}
            />
            </div>

            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Piso de la Boca</h3>
            <label
            >Color</label>
                <input
                type="text"
                name="piso_boca_color"
                value={formData.piso_boca_color}
                onChange={handleChange}
            />
            <RadioGroup
                label=""
                name="piso_boca"
                value={formData.piso_boca}
                options={[
                    { value: "normal", label: "Sin alteraciones" },
                    { value: "agrandamientos", label: "Agrandamientos" },
                    { value: "torus", label: "Torus" }
                ]}
                onChange={handleChange}
            />
            <label
            >Otros (especificar):</label>
                <input
                type="text"
                name="piso_boca_especificar"
                value={formData.piso_boca_especificar}
                onChange={handleChange}
            />
            </div>
            
            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Paladar duro y blando</h3>
            <label
            >Color</label>
                <input
                type="text"
                name="paladar_color"
                value={formData.paladar_color}
                onChange={handleChange}
            />
            <label
            style={{marginTop:10}}
            >Forma y Tamaño</label>
                <input
                type="text"
                name="paladar_forma_tamano"
                value={formData.paladar_forma_tamano}
                onChange={handleChange}
            />
            <RadioGroup
                label=""
                name="paladar"
                value={formData.paladar}
                options={[
                    { value: "tonus", label: "Tonus" },
                    { value: "irritaciones", label: "Irritaciones" },
                ]}
                onChange={handleChange}
            />
            <label
            >Úvula</label>
                <input
                type="text"
                name="uvula"
                value={formData.uvula}
                onChange={handleChange}
            />
            <label
            style={{marginTop:10}}
            >Otros (especificar):</label>
                <input
                    type="text"
                    name="paladar_especificar"
                    value={formData.paladar_especificar}
                    onChange={handleChange}
                />
            </div>

            </div>
        </>

    )

}

export default TejidosBlandosDataStep2;
```

## 📄 src\components\Exploracion\Steps\Tejidosblandos3.jsx
```jsx
import "../Exploracion.css";
import { useState, useEffect } from "react";
import RadioGroup from "../../Form/RadioGroup";
import CheckboxGroup from "../../Form/CheckboxGroup";

function TejidosBlandosDataStep3({
    formData,
    handleChange,
    handleCheckboxChange  

}){


    return(
        <>
            <div className="formGroup">
            <h2>Tejidos Blandos</h2>

            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Encías</h3>
            <label
            >Color</label>
                <input
                type="text"
                name="encias_color"
                value={formData.encias_color}
                onChange={handleChange}
            />
            <label
            style={{marginTop:10}}
            >Forma</label>
                <input
                type="text"
                name="encias_forma"
                value={formData.encias_forma}
                onChange={handleChange}
            />
            <label
            style={{marginTop:10}}
            >Textura</label>
                <input
                type="text"
                name="encias_textura"
                value={formData.encias_textura}
                onChange={handleChange}
            />
            <CheckboxGroup
                label="Hallazgos"
                values={formData}
                options={[
                    {
                        name: "encias_sangrado",
                        value: "sangrado",
                        label: "Sangrado"
                    },
                    {
                        name: "encias_exudado",
                        value: "exudado",
                        label: "Exudado"
                    }
                ]}
                onChange={handleCheckboxChange}
            />
            <label
            >Otros (especificar):</label>
                <input
                type="text"
                name="encias_especificar"
                value={formData.encias_especificar}
                onChange={handleChange}
            />
            </div>

            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Amigdalas</h3>
            <RadioGroup
                label=""
                name="amigdalas"
                value={formData.amigdalas}
                options={[
                    { value: "si", label: "Si" },
                    { value: "no", label: "No" },
                ]}
                onChange={handleChange}
            />
            <RadioGroup
                label="Inflamación"
                name="amigdalas_inflamacion"
                value={formData.amigdalas_inflamacion}
                options={[
                    { value: "si", label: "Si" },
                    { value: "no", label: "No" },
                ]}
                onChange={handleChange}
            />
            <RadioGroup
                label="Infección Hipertróficas"
                name="amigdalas_infeccion"
                value={formData.amigdalas_infeccion}
                options={[
                    { value: "si", label: "Si" },
                    { value: "no", label: "No" },
                ]}
                onChange={handleChange}
            />
            </div>
            
            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Saliva</h3>
            <RadioGroup
                label=""
                name="saliva"
                value={formData.saliva}
                options={[
                    { value: "normal", label: "Normal" },
                    { value: "disminuida", label: "Disminuida" },
                    { value: "aumentada", label: "Aumentada" },
                ]}
                onChange={handleChange}
            />
            <label
            >Otros (especificar):</label>
                <input
                type="text"
                name="saliva_especificar"
                value={formData.saliva_especificar}
                onChange={handleChange}
            />
            </div>

            </div>
        </>

    )

}

export default TejidosBlandosDataStep3;
```

## 📄 src\components\Form\CheckboxGroup.css
```css
/* ========================================
   CHECKBOX FIELD
======================================== */

.checkboxField {
    display: flex;
    flex-direction: column;

    gap: 8px;
}


/* ========================================
   CHECKBOX GROUP
======================================== */

.checkboxGroup {
    display: flex;
    flex-wrap: wrap;

    gap: 8px;
}


/* ========================================
   CHECKBOX OPTION
======================================== */

.checkboxOption {
    display: inline-flex;
    align-items: center;

    gap: 7px;

    min-height: 34px;

    padding: 7px 10px;

    border: 1px solid #dce3eb;
    border-radius: 9px;

    background: #ffffff;

    color: #526173;

    font-size: 11px;
    font-weight: 500;

    cursor: pointer;

    box-sizing: border-box;

    transition:
        background 120ms ease,
        border-color 120ms ease,
        color 120ms ease,
        box-shadow 120ms ease;
}


/* ========================================
   NATIVE CHECKBOX
======================================== */

.checkboxOption input {
    width: 14px;
    height: 14px;

    margin: 0;

    flex-shrink: 0;

    accent-color: #15569d;

    cursor: pointer;
}


/* ========================================
   LABEL
======================================== */

.checkboxLabel {
    line-height: 1.3;

    user-select: none;
}


/* ========================================
   HOVER
======================================== */

.checkboxOption:hover {
    border-color: #bfd3e7;

    background: #f8fbfe;
}


/* ========================================
   SELECTED
======================================== */

.checkboxOption:has(input:checked) {
    border-color: #9ebfe1;

    background: #edf5fd;

    color: #15569d;

    box-shadow:
        0 0 0 2px
        rgba(21, 86, 157, 0.04);
}


/* ========================================
   FOCUS
======================================== */

.checkboxOption:has(input:focus-visible) {
    border-color: #8eb5de;

    box-shadow:
        0 0 0 3px
        rgba(21, 86, 157, 0.08);
}


/* ========================================
   DISABLED
======================================== */

.checkboxOption:has(input:disabled) {
    opacity: 0.5;

    cursor: not-allowed;
}

.checkboxOption input:disabled {
    cursor: not-allowed;
}


/* ========================================
   RESPONSIVE
======================================== */

@media (max-width: 600px) {

    .checkboxGroup {
        flex-direction: column;
    }

    .checkboxOption {
        width: 100%;
    }

}
```

## 📄 src\components\Form\CheckboxGroup.jsx
```jsx
import "./CheckboxGroup.css";

function CheckboxGroup({
    label,
    options,
    values,
    onChange
}) {

    return (

        <div className="formGroup checkboxField">

            {label && (

                <span className="groupLabel">
                    {label}
                </span>

            )}

            <div className="checkboxGroup">

                {options.map((option) => {

                    const inputId =
                        `${option.name}-${option.value}`
                            .toLowerCase()
                            .replace(/\s+/g, "-");

                    return (

                        <label
                            key={option.name}
                            htmlFor={inputId}
                            className="checkboxOption"
                        >

                            <input
                                id={inputId}
                                type="checkbox"
                                name={option.name}
                                checked={
                                    Boolean(
                                        values[
                                            option.name
                                        ]
                                    )
                                }
                                onChange={onChange}
                            />

                            <span className="checkboxLabel">

                                {option.label}

                            </span>

                        </label>

                    );

                })}

            </div>

        </div>

    );

}

export default CheckboxGroup;
```

## 📄 src\components\Form\RadioGroup.css
```css
.radioField {
    width: 100%;
}

.groupLabel {
    display: block;

    margin-bottom: 8px;

    color: #475569;

    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
}

.radioGroup {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    column-gap: 20px;
    row-gap: 10px;

    width: 100%;
    margin-top: 0;
}

.radioOption {
    display: inline-flex;
    align-items: center;

    gap: 7px;

    min-height: 30px;
    margin: 0;

    color: #475569;

    font-size: 14px;
    font-weight: 400;
    line-height: 1.35;

    cursor: pointer;
    user-select: none;
}

.radioOption input[type="radio"] {
    flex: 0 0 auto;

    width: 16px;
    height: 16px;

    min-width: 16px;
    min-height: 16px;

    margin: 0;
    padding: 0;

    border-radius: 50%;

    accent-color: #173852;

    cursor: pointer;
}

.radioLabel {
    display: inline-block;

    margin: 0;

    font-weight: 400;

    overflow-wrap: normal;
    word-break: normal;
}

@media (max-width: 1024px) {

    .radioGroup {
        column-gap: 18px;
        row-gap: 12px;
    }

    .radioOption {
        min-height: 36px;

        font-size: 15px;
    }

    .radioOption input[type="radio"] {
        width: 18px;
        height: 18px;

        min-width: 18px;
        min-height: 18px;
    }

}
```

## 📄 src\components\Form\RadioGroup.jsx
```jsx
import "./RadioGroup.css";

function RadioGroup({
    label,
    name,
    value,
    options,
    onChange
}) {

    return (

        <div className="formGroup radioField">

            {label && (
                <span className="groupLabel">
                    {label}
                </span>
            )}

            <div
                className="radioGroup"
                role="radiogroup"
                aria-label={label || name}
            >

                {options.map((option) => {

                    const inputId =
                        `${name}-${option.value}`
                            .toLowerCase()
                            .replace(/\s+/g, "-");

                    return (

                        <label
                            key={option.value}
                            htmlFor={inputId}
                            className="radioOption"
                        >

                            <input
                                id={inputId}
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={onChange}
                            />

                            <span className="radioLabel">

                                {option.label}

                            </span>

                        </label>

                    );

                })}

            </div>

        </div>

    );

}

export default RadioGroup;
```

## 📄 src\components\Header.jsx
```jsx
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
```

## 📄 src\components\History\History.css
```css
/* ========================================
   HISTORY SECTION
======================================== */

.historyCard {
    width: 100%;

    margin-top: 12px;
    padding: 18px 20px 20px;

    background: transparent;

    border: 0;
    border-top:
        1px solid
        #edf1f5;

    border-radius: 0;

    box-shadow: none;

    box-sizing: border-box;
}


/* ========================================
   HEADER
======================================== */

.historyHeader {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 15px;
}


.historyHeader h3 {
    margin: 0;

    color: #304156;

    font-size: 13px;
    font-weight: 700;
}


.historyCount {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-width: 22px;
    height: 22px;

    padding: 0 7px;

    border-radius: 999px;

    background: #edf5fd;

    color: #3973ad;

    font-size: 10px;
    font-weight: 700;
}


/* ========================================
   TIMELINE LIST
======================================== */

.historyList {
    display: flex;
    flex-direction: column;

    max-height: 360px;

    padding-right: 4px;

    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: thin;

    scrollbar-color:
        #d1d9e2
        transparent;
}


.historyList::-webkit-scrollbar {
    width: 5px;
}


.historyList::-webkit-scrollbar-track {
    background: transparent;
}


.historyList::-webkit-scrollbar-thumb {
    background: #d1d9e2;

    border-radius: 999px;
}


/* ========================================
   TIMELINE ITEM
======================================== */

.historyItem {
    position: relative;

    display: grid;

    grid-template-columns:
        64px
        16px
        minmax(0, 1fr);

    gap: 10px;

    padding: 0 0 18px;

    background: transparent;

    border: 0;
    border-radius: 0;
}


.historyItem:last-child {
    padding-bottom: 4px;
}


/* ========================================
   DATE
======================================== */

.historyDate {
    padding-top: 1px;

    color: #8592a3;

    font-size: 10px;
    font-weight: 600;

    line-height: 1.45;

    text-align: right;
}


/* ========================================
   TIMELINE
======================================== */

.historyTimelineMarker {
    position: relative;

    display: flex;

    justify-content: center;

    min-height: 100%;
}


.historyTimelineMarker::after {
    content: "";

    position: absolute;

    top: 12px;
    bottom: -18px;

    left: 50%;

    width: 1px;

    background: #dde5ed;

    transform:
        translateX(-50%);
}


.historyItem:last-child
.historyTimelineMarker::after {
    display: none;
}


.historyTimelineDot {
    position: relative;

    z-index: 2;

    display: block;

    width: 9px;
    height: 9px;

    margin-top: 3px;

    border:
        2px solid
        #ffffff;

    border-radius: 50%;

    box-shadow:
        0 0 0 1px
        #cbd5e1;
}


/* ========================================
   CONTENT
======================================== */

.historyContent {
    min-width: 0;

    padding-bottom: 1px;
}


.historyItemHeader {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    gap: 8px;

    margin-bottom: 4px;
}


.historyItemHeader strong {
    min-width: 0;

    color: #334155;

    font-size: 12px;
    font-weight: 700;

    line-height: 1.35;
}


.historyContent p {
    margin: 2px 0;

    color: #7a8798;

    font-size: 10.5px;

    line-height: 1.45;
}


.historyTeeth {
    color: #566579 !important;
}


.historyObservations {
    margin-top: 5px !important;

    color: #7c899a !important;

    font-style: italic;
}


/* ========================================
   STATUS
======================================== */

.historyStatus {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    padding: 3px 7px;

    border-radius: 999px;

    font-size: 9px;
    font-weight: 700;

    line-height: 1.2;
}


.historyStatus--pendiente {
    background: #fff2cf;

    color: #a36a12;
}


.historyStatus--completado {
    background: #def5e8;

    color: #23825e;
}


.historyStatus--cancelado {
    background: #fce8e7;

    color: #b4534d;
}


/* ========================================
   LOADING / ERROR
======================================== */

.historyMessage,
.historyError {
    padding: 12px;

    border-radius: 9px;

    font-size: 11px;
}


.historyMessage {
    background: #f8fafc;

    color: #64748b;
}


.historyError {
    background: #fef2f2;

    color: #b91c1c;
}


/* ========================================
   EMPTY
======================================== */

.historyEmpty {
    padding: 20px 14px;

    border:
        1px dashed
        #d7e0e9;

    border-radius: 10px;

    color: #8290a2;

    text-align: center;
}


.historyEmpty strong {
    display: block;

    margin-bottom: 4px;

    color: #526173;

    font-size: 11px;
    font-weight: 600;
}


.historyEmpty p {
    margin: 0;

    font-size: 10px;
}


/* ========================================
   RESPONSIVE
======================================== */

@media (max-width: 600px) {

    .historyItem {
        grid-template-columns:
            54px
            14px
            minmax(0, 1fr);

        gap: 8px;
    }

}
```

## 📄 src\components\History\History.jsx
```jsx
import "./History.css";

import {
    useEffect,
    useState
} from "react";

import {
    getPatientTreatmentHistory
} from "../../supabase/history";

import {
    mapDatabaseToHistory
} from "../../services/historyMapper";

function formatDate(date) {

    if (!date) {

        return "Sin fecha";

    }

    return new Intl.DateTimeFormat(
        "es-MX",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    ).format(new Date(date));

}

function History({
    patientId,
}) {

    const [history, setHistory] =
        useState([]);

    const [isLoading, setIsLoading] =
        useState(false);

    const [error, setError] =
        useState(null);

    useEffect(() => {

        let isActive = true;

        async function loadHistory() {

            if (!patientId) {

                setHistory([]);

                return;

            }

            setIsLoading(true);

            setError(null);

            try {

                const rows =
                    await getPatientTreatmentHistory(
                        patientId
                    );

                const mappedHistory =
                    mapDatabaseToHistory(rows);

                if (isActive) {

                    setHistory(mappedHistory);

                }

            } catch (loadError) {

                console.error(
                    "Error al cargar el historial:",
                    loadError
                );

                if (isActive) {

                    setError(
                        "No fue posible cargar el historial."
                    );

                }

            } finally {

                if (isActive) {

                    setIsLoading(false);

                }

            }

        }

        void loadHistory();

        return () => {

            isActive = false;

        };

    }, [patientId]);

    return (

        <section className="historyCard">

            <div className="historyHeader">

                <div>

                    <h3>
                        Cronología reciente
                    </h3>

                </div>


                {!isLoading && (

                    <span className="historyCount">

                        {history.length}

                    </span>

                )}

            </div>


            {isLoading && (

                <p className="historyMessage">

                    Cargando historial...

                </p>

            )}


            {!isLoading && error && (

                <p className="historyError">

                    {error}

                </p>

            )}


            {!isLoading &&
            !error &&
            history.length === 0 && (

                <div className="historyEmpty">

                    <strong>
                        Sin historial clínico
                    </strong>

                    <p>

                        Los tratamientos registrados
                        aparecerán aquí.

                    </p>

                </div>

            )}


            {!isLoading &&
            !error &&
            history.length > 0 && (

                <div className="historyList">

                    {history.map((item) => (

                        <article
                            key={item.id}
                            className="historyItem"
                        >

                            <div className="historyDate">

                                {formatDate(item.date)}

                            </div>


                            <div className="historyTimelineMarker">

                                <span
                                    className="historyTimelineDot"
                                    style={{
                                        backgroundColor:
                                            item.treatmentColor ||
                                            "#3b82f6"
                                    }}
                                />

                            </div>


                            <div className="historyContent">

                                <div className="historyItemHeader">

                                    <strong>

                                        {item.treatmentName}

                                    </strong>


                                    <span
                                        className={
                                            `historyStatus historyStatus--${item.status.toLowerCase()}`
                                        }
                                    >

                                        {item.status}

                                    </span>

                                </div>


                                <p className="historyTeeth">

                                    Pieza(s):{" "}

                                    {item.teeth.join(", ")}

                                </p>


                                {item.materialName && (

                                    <p>

                                        Material:{" "}

                                        {item.materialName}

                                    </p>

                                )}


                                {item.observations && (

                                    <p className="historyObservations">

                                        {item.observations}

                                    </p>

                                )}

                            </div>

                        </article>

                    ))}

                </div>

            )}

        </section>

    );

}

export default History;
```

## 📄 src\components\OdontogramLegacy\Odontogram.css
```css
.patientFormCard{

    background:white;

    border-radius:20px;

    padding:25px;

    box-shadow:0 10px 25px rgba(0,0,0,.05);

}

.patientFormCard h2{

    margin-bottom:25px;

}

.formGroup{

    display:flex;

    flex-direction:column;

    margin-bottom:18px;

}

.formGroup label{

    font-size:14px;

    font-weight:600;

    margin-bottom:6px;

    color:#5d6877;

}

.formGroup input{

    padding:12px;

    border:1px solid #d9e2ec;

    border-radius:10px;

    outline:none;

    font-size:15px;

}

.formGroup input:focus{

    border-color:#173852;

}

.formButtons{

    display:flex;

    justify-content:flex-end;

    gap:10px;

    margin-top:20px;

}

.cancelButton{

    border:none;

    background:#eceff4;

    padding:10px 18px;

    border-radius:10px;

    cursor:pointer;

}

.saveButton{

    border:none;

    background:#173852;

    color:white;

    padding:10px 18px;

    border-radius:10px;

    cursor:pointer;

}



.formGroup input,
.formGroup select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    box-sizing: border-box;
}
```

## 📄 src\components\OdontogramLegacy\OdontogramaLegacy.jsx
```jsx
import "./Odontogram.css";
import { Odontogram } from "react-odontogram";
import "react-odontogram/style.css";
import { useState, useEffect } from "react";
import TreatmentPanel from "../OdontogramV2/TreatmentPanel";
import PendingTreatments from "../OdontogramV2/components/PendingTreatments";
function Odontograma({onCancel}) {

    const [odontogramKey, setOdontogramKey] = useState(0);

    const [selectedTeeth, setSelectedTeeth] = useState([]);
    const [treatmentData, setTreatmentData] = useState({

        treatmentId: "",
        treatmentName: "",

        materialId: "",
        materialName: "",

        observations: ""

    });
    const [pendingTreatments, setPendingTreatments] = useState([]);
    const [editingTreatmentId, setEditingTreatmentId] = useState(null);

    const handleChange = (teeth) => {

        const selected = teeth.map(tooth => tooth.notations.fdi);

        setSelectedTeeth(selected);
    };

    function addTreatment(){
        if(selectedTeeth.length === 0){

            alert("Seleccione un diente.");

            return;

        }

        if(!treatmentData.treatmentId){

            alert("Seleccione un tratamiento.");

            return;

        }
        const treatment = {

            id: editingTreatmentId ?? Date.now(),

            teeth: [...selectedTeeth],

            treatmentId: treatmentData.treatmentId,

            treatmentName: treatmentData.treatmentName,

            materialId: treatmentData.materialId,

            materialName: treatmentData.materialName,

            observations: treatmentData.observations,

            status: "Pendiente"

        };

        console.log(treatment);

        if (editingTreatmentId) {

            setPendingTreatments(prev =>

                prev.map(item =>

                    item.id === editingTreatmentId

                        ? treatment

                        : item

                )

            );

        } else {

            setPendingTreatments(prev => ([

                ...prev,

                treatment

            ]));

        }

        setEditingTreatmentId(null);

        setTreatmentData({

            treatmentId: "",

            treatmentName: "",

            materialId: "",

            materialName: "",

            observations: ""

        });
        setSelectedTeeth([]);

        setOdontogramKey(prev => prev + 1);
}

    function deleteTreatment(id){

        setPendingTreatments(prev =>

            prev.filter(item => item.id !== id)

        );

    }

    function editTreatment(treatment){

        setSelectedTeeth(treatment.teeth);

        setTreatmentData({

            treatmentId: treatment.treatmentId,
            treatmentName: treatment.treatmentName,

            materialId: treatment.materialId,
            materialName: treatment.materialName,

            observations: treatment.observations

        });

        setEditingTreatmentId(treatment.id);

    }

  return( 
    <div className="patientFormCard">
        <Odontogram 
            key={odontogramKey}
            onChange={handleChange}
        />
        <TreatmentPanel

            selectedTeeth={selectedTeeth}

            treatmentData={treatmentData}

            setTreatmentData={setTreatmentData}

        />
        <PendingTreatments 
            pendingTreatments={pendingTreatments}
            
            onDelete={deleteTreatment}

            onEdit={editTreatment}
        />
    
    <div className="formButtons">
        <button
            className="cancelButton"
            onClick={() => onCancel()}
        >
            Cancelar
        </button>
        <button
            className="saveButton"
            onClick={addTreatment}
        >
            {editingTreatmentId
                ? "Guardar Cambios"
                : "Agregar Tratamiento"}
        </button>

    </div>

    </div>

  );
}


export default Odontograma;
```

## 📄 src\components\OdontogramV2\components\Canvas\OdontogramCanvas.css
```css
.odontogramCanvas {
    width: 100%;
    height: 100%;

    display: flex;

    justify-content: center;
    align-items: center;

    padding: 10px 14px;

    background: #eef2f7;

    overflow: hidden;

    box-sizing: border-box;
}


.odontogramPaper {
    width: 100%;
    height: 100%;

    display: flex;

    justify-content: center;
    align-items: center;

    background: #ffffff;

    border: 1px solid #dbe3ee;
    border-radius: 16px;

    box-shadow:
        0 3px 10px
        rgba(15, 23, 42, 0.04);
}


@media (max-height: 850px) {

    .odontogramCanvas {
        padding: 8px 12px;
    }

}
```

## 📄 src\components\OdontogramV2\components\Canvas\OdontogramCanvas.jsx
```jsx
import "./OdontogramCanvas.css";

function OdontogramCanvas({ children }) {

    return (

        <div className="odontogramCanvas">

            <div className="odontogramPaper">

                {children}

            </div>

        </div>

    );

}

export default OdontogramCanvas;
```

## 📄 src\components\OdontogramV2\components\ClinicalTooth\CenterFace.jsx
```jsx
function CenterFace({

    id = "center",

    centerX,

    centerY,

    radius,

    fill,

    selected,

    disabled = false,

    ariaLabel,

    onClick,

    onHover,

    onLeave

}) {

    function handleClick() {

        if (disabled) {
            return;
        }

        onClick?.(id);
    }


    function handleKeyDown(event) {

        if (disabled) {
            return;
        }

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            onClick?.(id);

        }

    }

function handlePointerEnter(event) {

    onHover?.(
        event,
        id
    );

}


function handlePointerMove(event) {

    if (
        event.pointerType !== "mouse"
    ) {

        return;

    }

    onHover?.(
        event,
        id
    );

}


function handlePointerDown(event) {

    if (
        event.pointerType === "mouse"
    ) {

        return;

    }

    onHover?.(
        event,
        id
    );

}


function handlePointerLeave(event) {

    if (
        event.pointerType === "mouse"
    ) {

        onLeave?.();

    }

}

    return (

        <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill={fill}
            stroke={
                selected
                    ? "#2563EB"
                    : "#64748B"
            }
            strokeWidth={
                selected
                    ? 2.2
                    : 1.2
            }
            vectorEffect="non-scaling-stroke"
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-label={ariaLabel}
            aria-pressed={selected}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onPointerEnter={
                handlePointerEnter
            }
            onPointerMove={
                handlePointerMove
            }
            onPointerDown={
                handlePointerDown
            }
            onPointerLeave={
                handlePointerLeave
            }
            style={{
                cursor:
                    disabled
                        ? "default"
                        : "pointer",

                transition:
                    "fill 160ms ease, stroke 160ms ease",

                outline: "none"
            }}
        />

    );

}

export default CenterFace;
```

## 📄 src\components\OdontogramV2\components\ClinicalTooth\ClinicalTooth.jsx
```jsx
import FaceSector from "./FaceSector";
import CenterFace from "./CenterFace";
import ToothOutline from "./ToothOutline";
import InitialConditionOverlay from "./InitialConditionOverlay";

import {
    CLINICAL_TOOTH_GEOMETRY,
    FACE_SECTOR_PATHS
} from "./geometry";

import {
    getFaceColor
} from "../../utils/getFaceColor";


const FACE_ORDER = [
    "top",
    "right",
    "bottom",
    "left"
];


const FACE_LABELS = {
    top: "Cara superior",
    right: "Cara derecha",
    bottom: "Cara inferior",
    left: "Cara izquierda",
    center: "Cara central"
};


const DEFAULT_FACE = {
    selected: false,
    status: "healthy",
    treatment: null
};


function ClinicalTooth({

    tooth,

    onFaceClick,

    onToothClick,

    /*
        Tooltip original del
        plan de tratamiento.
    */
    onFaceHover,

    onFaceLeave,

    /*
        Tooltip nuevo del
        estado inicial.
    */
    onInitialFaceHover,

    onInitialFaceLeave,

    selectionScope = "cara",

    selectedFaceIds = null,

    toothSelected = false,

    faceFillOverrides = {},

    initialFindings = [],

    disabled = false

}) {

    if (!tooth) {
        return null;
    }


    const {
        centerX,
        centerY,
        outerRadius,
        innerRadius
    } = CLINICAL_TOOTH_GEOMETRY;


    /*
        Obtiene una cara del diente.
    */
    function getFace(
        faceId
    ) {

        return (
            tooth.faces?.[faceId] ??
            DEFAULT_FACE
        );

    }


    /*
        Determina si una cara debe
        aparecer seleccionada.
    */
    function isFaceSelected(
        faceId,
        face
    ) {

        /*
            Estado inicial:
            selección de pieza completa.
        */
        if (
            selectionScope === "pieza" &&
            toothSelected
        ) {

            return true;

        }


        /*
            Estado inicial:
            selección individual de caras.
        */
        if (
            Array.isArray(
                selectedFaceIds
            )
        ) {

            return selectedFaceIds.includes(
                faceId
            );

        }


        /*
            Plan de tratamiento:
            comportamiento original.
        */
        return Boolean(
            face.selected
        );

    }


    /*
        ==================================================
        CLICK
        ==================================================

        FaceSector y CenterFace ya envían
        su faceId al callback.

        Por eso NO debemos envolver aquí
        el evento con () => ...
    */
    function handleFaceClick(
        faceId
    ) {

        if (disabled) {
            return;
        }


        /*
            Condición aplicada a
            pieza completa.
        */
        if (
            selectionScope === "pieza"
        ) {

            onToothClick?.(
                tooth.number
            );

            return;

        }


        /*
            Condición aplicada
            por cara.
        */
        if (
            selectionScope === "cara"
        ) {

            onFaceClick?.(
                tooth.number,
                faceId
            );

        }

    }

    function handleCenterClick() {

        if (disabled) {
            return;
        }


        /*
            Selección de pieza completa
        */
        if (
            selectionScope === "pieza"
        ) {

            onToothClick?.(
                tooth.number
            );

            return;

        }


        /*
            Selección por cara
        */
        if (
            selectionScope === "cara"
        ) {

            onFaceClick?.(
                tooth.number,
                "center"
            );

        }

    }

    function handleCenterHover(
        event
    ) {

        const face =
            getFace(
                "center"
            );


        /*
            Tooltip del plan
            de tratamiento
        */
        onFaceHover?.({

            event,

            toothNumber:
                tooth.number,

            faceId:
                "center",

            face

        });


        /*
            Tooltip del
            estado inicial
        */
        onInitialFaceHover?.(

            tooth.number,

            "center",

            initialFindings,

            event

        );

    }

    function handleCenterLeave() {

        onFaceLeave?.();

        onInitialFaceLeave?.();

    }

    /*
        ==================================================
        HOVER
        ==================================================

        FaceSector / CenterFace llaman:

        onHover(event, id)

        Debemos conservar ese contrato.
    */
    function handleFaceHover(
        event,
        faceId
    ) {

        const face =
            getFace(
                faceId
            );


        /*
            TOOLTIP ORIGINAL
            PLAN DE TRATAMIENTO

            IMPORTANTE:

            El Odontogram original espera
            un solo objeto.
        */
        onFaceHover?.({

            event,

            toothNumber:
                tooth.number,

            faceId,

            face

        });


        /*
            TOOLTIP NUEVO
            ESTADO INICIAL

            Este callback solamente existirá
            cuando estemos en el modo
            Estado inicial.
        */
        onInitialFaceHover?.(

            tooth.number,

            faceId,

            initialFindings,

            event

        );

    }


    /*
        Cierra cualquiera de los
        dos tooltips.
    */
    function handleFaceLeave() {

        onFaceLeave?.();

        onInitialFaceLeave?.();

    }


    /*
        Texto accesible.
    */
    function getAriaLabel(
        faceId,
        face
    ) {

        const baseLabel =
            `${FACE_LABELS[faceId]} de la pieza ${tooth.number}`;


        if (!face.treatment) {

            return baseLabel;

        }


        return (
            `${baseLabel}, ` +
            `${face.treatment.name}, ` +
            `estado ${face.status}`
        );

    }


    return (

        <g

            className="clinicalTooth"

            aria-label={
                `Pieza dental ${tooth.number}`
            }

        >

            {/*
                =========================================
                CUATRO CARAS EXTERNAS
                =========================================
            */}

            {FACE_ORDER.map(
                (faceId) => {

                    const face =
                        getFace(
                            faceId
                        );


                    const selected =
                        isFaceSelected(
                            faceId,
                            face
                        );


                    /*
                        Esta copia solamente afecta
                        la representación visual.
                    */
                    const visualFace = {

                        ...face,

                        selected

                    };


                    const fill =

                        selected

                            ? getFaceColor(
                                visualFace
                            )

                            : (
                                faceFillOverrides[
                                    faceId
                                ] ||
                                getFaceColor(
                                    visualFace
                                )
                            );


                    return (

                        <FaceSector

                            key={
                                faceId
                            }

                            id={
                                faceId
                            }

                            path={
                                FACE_SECTOR_PATHS[
                                    faceId
                                ]
                            }

                            fill={
                                fill
                            }

                            selected={
                                selected
                            }

                            disabled={
                                disabled
                            }

                            ariaLabel={
                                getAriaLabel(
                                    faceId,
                                    face
                                )
                            }


                            /*
                                IMPORTANTE:

                                FaceSector ya envía
                                faceId.
                            */
                            onClick={
                                handleFaceClick
                            }


                            /*
                                FaceSector ya envía:

                                event,
                                faceId
                            */
                            onHover={
                                handleFaceHover
                            }


                            onLeave={
                                handleFaceLeave
                            }

                        />

                    );

                }
            )}


            {/*
                =========================================
                CARA CENTRAL
                =========================================
            */}

            {(() => {

                const face =
                    getFace(
                        "center"
                    );


                const selected =
                    isFaceSelected(
                        "center",
                        face
                    );


                const visualFace = {
                    ...face,
                    selected
                };


                const fill =

                    selected

                        ? getFaceColor(
                            visualFace
                        )

                        : (
                            faceFillOverrides.center ||
                            getFaceColor(
                                visualFace
                            )
                        );


                return (

                    <CenterFace

                        id="center"

                        centerX={
                            centerX
                        }

                        centerY={
                            centerY
                        }

                        radius={
                            innerRadius
                        }

                        fill={
                            fill
                        }

                        selected={
                            selected
                        }

                        disabled={
                            disabled
                        }

                        ariaLabel={
                            getAriaLabel(
                                "center",
                                face
                            )
                        }

                        onClick={
                            handleCenterClick
                        }

                        onHover={
                            handleCenterHover
                        }

                        onLeave={
                            handleCenterLeave
                        }

                    />

                );

            })()}

            {/*
                =========================================
                SÍMBOLOS DEL ESTADO INICIAL

                M1
                M2
                M3
                E
                PF
                PR
                X
                etc.
                =========================================
            */}

            <InitialConditionOverlay

                findings={
                    initialFindings
                }

                radius={
                    outerRadius
                }

            />


            {/*
                =========================================
                CONTORNO DEL DIENTE
                =========================================
            */}

            <ToothOutline

                centerX={
                    centerX
                }

                centerY={
                    centerY
                }

                radius={
                    outerRadius
                }

                selected={
                    toothSelected
                }

            />

        </g>

    );

}


export default ClinicalTooth;
```

## 📄 src\components\OdontogramV2\components\ClinicalTooth\FaceSector.jsx
```jsx
function FaceSector({

    id,

    path,

    fill,

    selected,

    disabled = false,

    ariaLabel,

    onClick,

    onHover,

    onLeave

}) {

    function handleClick() {

        if (disabled) {

            return;

        }

        onClick?.(id);

    }

    function handleKeyDown(event) {

        if (disabled) {

            return;

        }

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            onClick?.(id);

        }

    }

    function handlePointerEnter(event) {

        onHover?.(
            event,
            id
        );

    }

    function handlePointerMove(event) {

        if (
            event.pointerType !== "mouse"
        ) {

            return;

        }

        onHover?.(
            event,
            id
        );

    }

    function handlePointerDown(event) {

        if (
            event.pointerType === "mouse"
        ) {

            return;

        }

        onHover?.(
            event,
            id
        );

    }

    function handlePointerLeave(event) {

        if (
            event.pointerType === "mouse"
        ) {

            onLeave?.();

        }

    }

    return (

        <path
            d={path}
            fill={fill}
            stroke={
                selected
                    ? "#2563EB"
                    : "#64748B"
            }
            strokeWidth={
                selected
                    ? 2.2
                    : 1.2
            }
            vectorEffect="non-scaling-stroke"
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-label={ariaLabel}
            aria-pressed={selected}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onPointerEnter={
                handlePointerEnter
            }
            onPointerMove={
                handlePointerMove
            }
            onPointerDown={
                handlePointerDown
            }
            onPointerLeave={
                handlePointerLeave
            }
            style={{
                cursor:
                    disabled
                        ? "default"
                        : "pointer",

                transition:
                    "fill 160ms ease, stroke 160ms ease",

                outline: "none"
            }}
        />

    );

}

export default FaceSector;
```

## 📄 src\components\OdontogramV2\components\ClinicalTooth\geometry.js
```javascript
const CENTER_X = 0;
const CENTER_Y = 0;

export const CLINICAL_TOOTH_GEOMETRY = {
    centerX: CENTER_X,
    centerY: CENTER_Y,
    outerRadius: 26,
    innerRadius: 10
};

export const CLINICAL_TOOTH_VIEWBOX = "-32 -32 64 64";

function polarToCartesian(
    centerX,
    centerY,
    radius,
    angleInDegrees
) {
    const angleInRadians =
        ((angleInDegrees - 90) * Math.PI) / 180;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function createAnnularSectorPath(
    startAngle,
    endAngle,
    outerRadius,
    innerRadius
) {
    const outerStart = polarToCartesian(
        CENTER_X,
        CENTER_Y,
        outerRadius,
        startAngle
    );

    const outerEnd = polarToCartesian(
        CENTER_X,
        CENTER_Y,
        outerRadius,
        endAngle
    );

    const innerEnd = polarToCartesian(
        CENTER_X,
        CENTER_Y,
        innerRadius,
        endAngle
    );

    const innerStart = polarToCartesian(
        CENTER_X,
        CENTER_Y,
        innerRadius,
        startAngle
    );

    const angleDifference = endAngle - startAngle;

    const largeArcFlag = angleDifference > 180 ? 1 : 0;

    return [
        `M ${outerStart.x} ${outerStart.y}`,

        `A ${outerRadius} ${outerRadius}`,
        `0 ${largeArcFlag} 1`,
        `${outerEnd.x} ${outerEnd.y}`,

        `L ${innerEnd.x} ${innerEnd.y}`,

        `A ${innerRadius} ${innerRadius}`,
        `0 ${largeArcFlag} 0`,
        `${innerStart.x} ${innerStart.y}`,

        "Z"
    ].join(" ");
}

const {
    outerRadius,
    innerRadius
} = CLINICAL_TOOTH_GEOMETRY;

export const FACE_SECTOR_PATHS = {
    top: createAnnularSectorPath(
        -45,
        45,
        outerRadius,
        innerRadius
    ),

    right: createAnnularSectorPath(
        45,
        135,
        outerRadius,
        innerRadius
    ),

    bottom: createAnnularSectorPath(
        135,
        225,
        outerRadius,
        innerRadius
    ),

    left: createAnnularSectorPath(
        225,
        315,
        outerRadius,
        innerRadius
    )
};
```

## 📄 src\components\OdontogramV2\components\ClinicalTooth\InitialConditionOverlay.jsx
```jsx
function InitialConditionOverlay({

    findings = [],

    radius = 26

}) {

    if (findings.length === 0) {
        return null;
    }


    function findCondition(code) {

        return findings.find(
            (finding) =>
                finding.condition.code === code
        );

    }


    const healthy =
        findCondition("sano");

    const absent =
        findCondition("ausente");

    const mobility =
        findings.find(
            (finding) =>
                finding.condition.code ===
                    "movilidad_1" ||
                finding.condition.code ===
                    "movilidad_2" ||
                finding.condition.code ===
                    "movilidad_3"
        );

    const endodontics =
        findCondition("endodoncia");

    const fixedProsthesis =
        findCondition("protesis_fija");

    const removableProsthesis =
        findCondition("protesis_removible");

    const other =
        findCondition("otro");


    function getMobilityLabel() {

        if (!mobility) {
            return null;
        }

        if (
            mobility.condition.code ===
            "movilidad_1"
        ) {
            return "M1";
        }

        if (
            mobility.condition.code ===
            "movilidad_2"
        ) {
            return "M2";
        }

        return "M3";

    }


    return (

        <g
            pointerEvents="none"
            aria-hidden="true"
        >

            {/* SANO */}

            {healthy && (

                <circle
                    cx="0"
                    cy="0"
                    r={radius + 3}

                    fill="none"

                    stroke="#16A34A"

                    strokeWidth="2"

                    vectorEffect="non-scaling-stroke"
                />

            )}


            {/* PRÓTESIS FIJA */}

            {fixedProsthesis && (

                <circle
                    cx="0"
                    cy="0"
                    r={radius - 2}

                    fill="none"

                    stroke="#475569"

                    strokeWidth="3"

                    vectorEffect="non-scaling-stroke"
                />

            )}


            {/* PRÓTESIS REMOVIBLE */}

            {removableProsthesis && (

                <circle
                    cx="0"
                    cy="0"
                    r={radius - 5}

                    fill="none"

                    stroke="#475569"

                    strokeWidth="2"

                    strokeDasharray="4 3"

                    vectorEffect="non-scaling-stroke"
                />

            )}


            {/* ENDODONCIA */}

            {endodontics && (

                <>

                    <circle
                        cx="0"
                        cy="0"
                        r="8"

                        fill="#FFFFFF"

                        stroke="#475569"

                        strokeWidth="1.5"

                        vectorEffect="non-scaling-stroke"
                    />

                    <text
                        x="0"
                        y="1"

                        textAnchor="middle"
                        dominantBaseline="middle"

                        fill="#334155"

                        fontSize="10"
                        fontWeight="700"
                    >

                        E

                    </text>

                </>

            )}


            {/* MOVILIDAD */}

            {mobility && (

                <>

                    <rect
                        x="-11"
                        y={-radius - 13}

                        width="22"
                        height="14"

                        rx="5"

                        fill="#FFFFFF"

                        stroke="#64748B"

                        strokeWidth="1"

                        vectorEffect="non-scaling-stroke"
                    />

                    <text
                        x="0"
                        y={-radius - 6}

                        textAnchor="middle"
                        dominantBaseline="middle"

                        fill="#334155"

                        fontSize="8"
                        fontWeight="700"
                    >

                        {getMobilityLabel()}

                    </text>

                </>

            )}


            {/* OTRO */}

            {other && (

                <circle
                    cx={radius - 5}
                    cy={-radius + 5}

                    r="3.5"

                    fill="#475569"
                />

            )}


            {/* AUSENTE */}

            {absent && (

                <>

                    <line
                        x1={-radius + 4}
                        y1={-radius + 4}

                        x2={radius - 4}
                        y2={radius - 4}

                        stroke="#64748B"

                        strokeWidth="3"

                        strokeLinecap="round"

                        vectorEffect="non-scaling-stroke"
                    />

                    <line
                        x1={radius - 4}
                        y1={-radius + 4}

                        x2={-radius + 4}
                        y2={radius - 4}

                        stroke="#64748B"

                        strokeWidth="3"

                        strokeLinecap="round"

                        vectorEffect="non-scaling-stroke"
                    />

                </>

            )}

        </g>

    );

}

export default InitialConditionOverlay;
```

## 📄 src\components\OdontogramV2\components\ClinicalTooth\ToothOutline.jsx
```jsx
function ToothOutline({

    centerX,

    centerY,

    radius,

    selected = false

}) {

    return (

        <circle

            cx={centerX}

            cy={centerY}

            r={radius}

            fill="none"

            stroke={
                selected
                    ? "#2563EB"
                    : "#334155"
            }

            strokeWidth={
                selected
                    ? 3
                    : 1.4
            }

            vectorEffect="non-scaling-stroke"

            pointerEvents="none"

        />

    );

}


export default ToothOutline;
```

## 📄 src\components\OdontogramV2\components\Header\PatientHeader.css
```css
.patientHeader {
    display: flex;
    align-items: center;

    gap: 16px;

    min-height: 58px;

    padding: 9px 20px;

    border-bottom: 1px solid #e5eaf0;

    background: #ffffff;

    box-sizing: border-box;
}


.patientHeader h2 {
    margin: 0;

    color: #172033;

    font-size: 16px;
    font-weight: 700;

    line-height: 1.2;
}


.patientHeader p {
    margin: 2px 0 0;

    color: #64748b;

    font-size: 11px;
    line-height: 1.3;
}


.backButton {
    height: 36px;

    padding: 0 14px;

    border: none;
    border-radius: 9px;

    background: #2563eb;

    color: #ffffff;

    font-size: 12px;
    font-weight: 600;

    cursor: pointer;
}


.backButton:hover {
    opacity: 0.9;
}
```

## 📄 src\components\OdontogramV2\components\Header\PatientHeader.jsx
```jsx
import "./PatientHeader.css";

function PatientHeader({

    patient,

    onCancel

}){

    return(

        <div className="patientHeader">

            <button

                className="backButton"

                onClick={onCancel}

            >

                ← Regresar

            </button>

            <div>

                <h2>

                    {patient?.nombre} {patient?.apellido_paterno}

                </h2>

                <p>

                    Expediente #{patient?.id}

                </p>

            </div>

        </div>

    );

}

export default PatientHeader;
```

## 📄 src\components\OdontogramV2\components\InitialConditionPanel\InitialConditionPanel.css
```css
.initialConditionPanel {
    width: 100%;
    height: 100%;
    min-height: 0;

    display: flex;
    flex-direction: column;

    padding: 14px 16px;

    box-sizing: border-box;

    overflow-y: auto;
    overflow-x: hidden;
}

.initialPanelHeader {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 14px;
}


.initialPanelHeaderText {
    min-width: 0;
}


.initialPanelHeader h3 {
    margin: 0;

    color: #26364a;

    font-size: 16px;
    font-weight: 700;

    line-height: 1.25;
}


.initialPanelHeader p {
    margin: 4px 0 0;

    color: #7a899b;

    font-size: 11px;

    line-height: 1.4;
}

.initialEvaluationStatus {
    flex: 0 0 auto;

    padding: 4px 8px;

    border-radius: 999px;

    font-size: 10px;
    font-weight: 700;

    line-height: 1.3;
}

.initialEvaluationStatus.draft {
    background: #fef3c7;

    color: #92400e;
}

.initialEvaluationStatus.finalized {
    background: #dcfce7;

    color: #166534;
}

.initialFormGroup {
    display: flex;
    flex-direction: column;

    gap: 5px;

    margin-bottom: 12px;
}


.initialFormGroup label {
    color: #475569;

    font-size: 11px;
    font-weight: 600;
}


.initialFormGroup select,
.initialFormGroup textarea {
    width: 100%;

    padding: 8px 10px;

    border: 1px solid #d9e2ec;
    border-radius: 9px;

    background: #ffffff;

    color: #334155;

    font-family: inherit;
    font-size: 12px;

    outline: none;

    box-sizing: border-box;
}


.initialFormGroup select {
    height: 38px;

    cursor: pointer;
}


.initialFormGroup textarea {
    min-height: 68px;
    max-height: 110px;

    resize: vertical;
}

.initialFormGroup select:focus,
.initialFormGroup textarea:focus {
    border-color: #173852;

    box-shadow:
        0 0 0 3px rgba(23, 56, 82, 0.08);
}

.initialConditionInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;

    padding: 11px 12px;
    margin-bottom: 10px;

    background: #f8fafc;

    border: 1px solid #e2e8f0;
    border-radius: 10px;
}

.initialConditionInfo {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 10px;

    padding: 8px 10px;
    margin-bottom: 9px;

    background: #f8fafc;

    border: 1px solid #e2e8f0;
    border-radius: 9px;
}


.initialConditionIdentity {
    display: flex;
    align-items: center;

    gap: 7px;

    min-width: 0;

    color: #475569;

    font-size: 11px;
}


.initialScopeBadge {
    flex: 0 0 auto;

    padding: 3px 7px;

    background: #edf5fd;

    border-radius: 999px;

    color: #3973ad;

    font-size: 9px;
    font-weight: 700;
}

.initialSelectionHelp {
    padding: 8px 10px;
    margin-bottom: 10px;

    background: #f8fafc;

    border-left: 3px solid #8eb5de;
    border-radius: 6px;

    color: #64748b;

    font-size: 10px;
    line-height: 1.4;
}

.initialSelectionSummary {
    display: flex;
    align-items: center;

    gap: 7px;

    margin-bottom: 10px;

    color: #64748b;

    font-size: 10px;
}

.initialSelectionSummary strong {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 25px;
    height: 25px;

    padding: 0 6px;

    background: #173852;

    border-radius: 999px;

    color: #ffffff;

    font-size: 11px;
}

.initialSelectionSummary button {
    margin-left: auto;

    padding: 5px 9px;

    border: 1px solid #d9e2ec;
    border-radius: 7px;

    background: #ffffff;

    color: #64748b;

    font-family: inherit;
    font-size: 11px;

    cursor: pointer;
}

.initialSelectionSummary button:hover {
    background: #f8fafc;
}

.saveInitialConditionButton {
    width: 100%;

    padding: 11px 16px;

    border: none;
    border-radius: 10px;

    background: #173852;

    color: #ffffff;

    font-family: inherit;
    font-size: 13px;
    font-weight: 700;

    cursor: pointer;
}

.saveInitialConditionButton:hover:not(:disabled) {
    background: #0f2c42;
}

.saveInitialConditionButton:disabled {
    opacity: 0.5;

    cursor: not-allowed;
}

.initialPanelMessage,
.initialPanelError {
    padding: 12px;

    border-radius: 9px;

    font-size: 13px;
}

.initialPanelMessage {
    background: #f8fafc;

    color: #64748b;
}

.initialPanelError {
    background: #fef2f2;

    color: #b91c1c;
}

.initialPanelActions {
    display: flex;
    flex-direction: column;

    gap: 7px;

    margin-top: auto;

    padding-top: 8px;

    background: #ffffff;
}


.saveInitialConditionButton,
.cancelInitialEditButton,
.finalizeInitialEvaluationButton {
    width: 100%;
    min-height: 36px;

    padding: 0 12px;

    border-radius: 9px;

    font-family: inherit;
    font-size: 11px;
    font-weight: 600;

    cursor: pointer;
}


.saveInitialConditionButton {
    border: none;

    background: #15569d;

    color: #ffffff;
}


.saveInitialConditionButton:hover:not(:disabled) {
    background: #104780;
}


.cancelInitialEditButton,
.finalizeInitialEvaluationButton {
    border: 1px solid #d9e2ec;

    background: #ffffff;

    color: #526173;
}


.cancelInitialEditButton:hover:not(:disabled),
.finalizeInitialEvaluationButton:hover:not(:disabled) {
    background: #f8fafc;

    border-color: #cbd5e1;
}

.initialFinalizedMessage {
    width: 100%;

    padding: 12px 13px;
    margin-bottom: 12px;

    background: #f0fdf4;

    border: 1px solid #bbf7d0;
    border-radius: 10px;

    box-sizing: border-box;
}


.initialFinalizedMessage strong {
    display: block;

    margin-bottom: 3px;

    color: #168154;

    font-size: 11px;
    font-weight: 700;
}


.initialFinalizedMessage p {
    margin: 0;

    color: #3c8d65;

    font-size: 10.5px;

    line-height: 1.45;
}


.finalizeInitialEvaluationButton {
    width: 100%;

    padding: 10px 14px;

    border: 1px solid #cbd5e1;
    border-radius: 10px;

    background: #ffffff;

    color: #334155;

    font-family: inherit;
    font-size: 12px;
    font-weight: 600;

    cursor: pointer;
}

.finalizeInitialEvaluationButton:hover:not(:disabled) {
    background: #f8fafc;

    border-color: #94a3b8;
}

.finalizeInitialEvaluationButton:disabled {
    opacity: 0.5;

    cursor: not-allowed;
}
```

## 📄 src\components\OdontogramV2\components\InitialConditionPanel\InitialConditionPanel.jsx
```jsx
import "./InitialConditionPanel.css";

import {
    useState
} from "react";

import {
    useInitialOdontogramContext
} from "../../context/InitialOdontogramContext";


function InitialConditionPanel() {

    const {

        evaluation,

        conditions,

        selectedCondition,

        selectionScope,

        conditionData,

        setConditionData,

        selectedFaces,

        selectedTeeth,

        clearSelection,

        saveSelectedCondition,

        getHealthyConflicts,

        getConditionConflicts,

        editingFinding,

        cancelEditingFinding,

        saveEditedFinding,

        isFinalized,

        isFinalizing,

        finalizeEvaluation,

        isLoading,

        isSaving,

        loadError

    } = useInitialOdontogramContext();


    const [
        saveError,
        setSaveError
    ] = useState(null);


    function handleConditionChange(
        event
    ) {

        const conditionId =
            event.target.value;

        setConditionData(
            (previous) => ({

                ...previous,

                conditionId

            })
        );

        setSaveError(null);

    }


    function handleObservationsChange(
        event
    ) {

        setConditionData(
            (previous) => ({

                ...previous,

                observations:
                    event.target.value

            })
        );

    }

    async function handleFinalize() {

        const confirmed =
            window.confirm(
                "¿Deseas finalizar la evaluación inicial?\n\n" +
                "Una vez finalizada quedará en modo solo lectura y ya no podrán agregarse, editarse o eliminarse hallazgos."
            );


        if (!confirmed) {
            return;
        }


        try {

            await finalizeEvaluation();

        } catch (error) {

            console.error(
                "Error finalizando evaluación:",
                error
            );

            alert(
                error.message ||
                "No fue posible finalizar la evaluación."
            );

        }

    }

    async function handleSave() {

        setSaveError(null);


        try {

            /*
                Regla especial:
                SANO
            */
            if (
                selectedCondition?.codigo ===
                "sano"
            ) {

                const conflicts =
                    getHealthyConflicts();


                if (
                    conflicts.length > 0
                ) {

                    const affectedTeeth = [
                        ...new Set(
                            conflicts.map(
                                (finding) =>
                                    finding.toothNumber
                            )
                        )
                    ];


                    const confirmed =
                        window.confirm(

                            `Las piezas ${affectedTeeth.join(", ")} tienen hallazgos registrados.\n\n` +

                            "¿Deseas eliminarlos y marcarlas como sanas?"

                        );


                    if (!confirmed) {
                        return;
                    }


                    await saveSelectedCondition({
                        replaceExisting: true
                    });


                    return;

                }

            }


            /*
                Resto de incompatibilidades
            */
            const conditionConflicts =
                getConditionConflicts();


            if (
                conditionConflicts.confirmation.length >
                0
            ) {

                const conflictsByTooth =
                    new Map();


                conditionConflicts.confirmation.forEach(
                    (finding) => {

                        const tooth =
                            String(
                                finding.toothNumber
                            );


                        if (
                            !conflictsByTooth.has(
                                tooth
                            )
                        ) {

                            conflictsByTooth.set(
                                tooth,
                                new Set()
                            );

                        }


                        conflictsByTooth
                            .get(tooth)
                            .add(
                                finding.condition.name
                            );

                    }
                );


                const conflictDescription =
                    Array.from(
                        conflictsByTooth.entries()
                    )

                        .map(
                            ([
                                tooth,
                                conditionNames
                            ]) => {

                                return (
                                    `Pieza ${tooth}: ` +
                                    Array.from(
                                        conditionNames
                                    ).join(", ")
                                );

                            }
                        )

                        .join("\n");


                const confirmed =
                    window.confirm(

                        `La condición "${selectedCondition.nombre}" es incompatible con los siguientes hallazgos:\n\n` +

                        `${conflictDescription}\n\n` +

                        "¿Deseas reemplazar los hallazgos incompatibles?"

                    );


                if (!confirmed) {
                    return;
                }


                await saveSelectedCondition({
                    replaceConflicts: true
                });


                return;

            }


            await saveSelectedCondition();


        } catch (error) {

            console.error(
                "Error guardando condición inicial:",
                error
            );


            if (
                error.message ===
                "HEALTHY_CONFLICT"
            ) {

                setSaveError(
                    "La pieza tiene hallazgos registrados."
                );

                return;

            }


            if (
                error.message ===
                "CONDITION_CONFLICT"
            ) {

                setSaveError(
                    "La condición seleccionada es incompatible con otro hallazgo."
                );

                return;

            }


            setSaveError(
                error.message ||
                "No fue posible guardar la condición."
            );

        }

    }


    const selectedCount =
        selectionScope === "cara"
            ? selectedFaces.length
            : selectedTeeth.length;


    if (isLoading) {

        return (

            <div className="initialConditionPanel">

                <p className="initialPanelMessage">

                    Cargando estado inicial...

                </p>

            </div>

        );

    }


    if (loadError) {

        return (

            <div className="initialConditionPanel">

                <p className="initialPanelError">

                    {loadError}

                </p>

            </div>

        );

    }

    const availableConditions =
        editingFinding
            ? conditions.filter(
                (condition) =>
                    condition.alcance ===
                    editingFinding.condition.scope
            )
            : conditions;

    return (

        <div className="initialConditionPanel">

            <div className="initialPanelHeader">

                <div className="initialPanelHeaderText">

                    <h3>
                        {editingFinding
                            ? "Editar hallazgo"
                            : "Estado inicial"}
                    </h3>

                    {!isFinalized && (
                        <p>

                            {editingFinding
                                ? (
                                    editingFinding.faceId
                                        ? `Pieza ${editingFinding.toothNumber} · Cara ${editingFinding.faceId}`
                                        : `Pieza ${editingFinding.toothNumber}`
                                )
                                : "Registra las condiciones actuales de la dentadura."}

                        </p>
                    )}

                </div>


                {evaluation && (

                    <span
                        className={
                            `initialEvaluationStatus ${
                                evaluation.estado === "Finalizado"
                                    ? "finalized"
                                    : "draft"
                            }`
                        }
                    >

                        {evaluation.estado}

                    </span>

                )}

            </div>
{isFinalized && (

    <div className="initialFinalizedMessage">

        <strong>
            Evaluación finalizada
        </strong>

        <p>
            El odontograma inicial está en modo de solo lectura.
        </p>

    </div>

)}


                
            <div className="initialFormGroup">

                <label htmlFor="initialCondition">

                    Condición

                </label>

                <select
                    id="initialCondition"
                    value={
                        conditionData.conditionId
                    }
                    onChange={
                        handleConditionChange
                    }
                    disabled={
                    isSaving ||
                    isFinalized
                }
                >

                    <option value="">

                        Seleccionar condición

                    </option>

                    {availableConditions.map(
                        (condition) => (

                            <option
                                key={condition.id}
                                value={condition.id}
                            >

                                {condition.nombre}

                            </option>

                        )
                    )}

                </select>

            </div>


            {selectedCondition && (

                <div className="initialConditionInfo">

                    <div className="initialConditionIdentity">

                        {selectedCondition.color && (

                            <span
                                className="initialConditionColor"
                                style={{
                                    backgroundColor:
                                        selectedCondition.color
                                }}
                            />

                        )}

                        <strong>

                            {selectedCondition.nombre}

                        </strong>

                    </div>

                    <span className="initialScopeBadge">

                        {selectionScope === "cara"
                            ? "Por cara"
                            : "Pieza completa"}

                    </span>

                </div>

            )}


            {selectedCondition &&
            !editingFinding &&
            selectedCount === 0 && (

                <div className="initialSelectionHelp">

                    {selectionScope === "cara"
                        ? "Selecciona una o más caras en el odontograma."
                        : "Selecciona una o más piezas dentales."}

                </div>

            )}


            {!editingFinding &&
            selectedCount > 0 && (

                <div className="initialSelectionSummary">

                    <span>

                        {selectionScope === "cara"
                            ? "Caras seleccionadas"
                            : "Piezas seleccionadas"}

                    </span>

                    <strong>

                        {selectedCount}

                    </strong>

                    <button
                        type="button"
                        onClick={clearSelection}
                        disabled={isSaving}
                    >

                        Limpiar

                    </button>

                </div>

            )}


            <div className="initialFormGroup">

                <label htmlFor="initialObservations">

                    Observaciones

                </label>

                <textarea
                    id="initialObservations"
                    rows="4"
                    placeholder="Observaciones clínicas..."
                    value={
                        conditionData.observations
                    }
                    onChange={
                        handleObservationsChange
                    }
                    disabled={
                        isSaving ||
                        isFinalized
                    }
                />

            </div>


            {saveError && (

                <p className="initialPanelError">

                    {saveError}

                </p>

            )}
{!isFinalized && (

    <div className="initialPanelActions">

        {editingFinding ? (

            <>
                <button
                    type="button"
                    className="cancelInitialEditButton"
                    disabled={isSaving}
                    onClick={
                        cancelEditingFinding
                    }
                >
                    Cancelar edición
                </button>

                <button
                    type="button"
                    className="saveInitialConditionButton"
                    disabled={
                        isSaving ||
                        !selectedCondition
                    }
                    onClick={
                        saveEditedFinding
                    }
                >
                    {isSaving
                        ? "Guardando..."
                        : "Guardar cambios"}
                </button>
            </>

        ) : (

            <>
                <button
                    type="button"
                    className="saveInitialConditionButton"
                    disabled={
                        isSaving ||
                        !selectedCondition ||
                        selectedCount === 0
                    }
                    onClick={
                        handleSave
                    }
                >
                    {isSaving
                        ? "Guardando..."
                        : "Guardar condición"}
                </button>

                <button
                    type="button"
                    className="finalizeInitialEvaluationButton"
                    disabled={
                        isSaving ||
                        isFinalizing
                    }
                    onClick={
                        handleFinalize
                    }
                >
                    {isFinalizing
                        ? "Finalizando..."
                        : "Finalizar evaluación inicial"}
                </button>
            </>

        )}

    </div>

)}
        </div>

    );

}


export default InitialConditionPanel;
```

## 📄 src\components\OdontogramV2\components\InitialFindings\InitialFindings.css
```css
.initialFindings {
    width: 100%;
    height: 100%;
    min-height: 0;

    display: flex;
    flex-direction: column;

    padding: 18px;

    box-sizing: border-box;
}

.initialFindingsHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 16px;
}

.initialFindingsHeader h3 {
    margin: 0;

    color: #1f2937;

    font-size: 18px;
}

.initialFindingsHeader > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 28px;
    height: 28px;

    padding: 0 7px;

    background: #e8f0f7;

    border-radius: 999px;

    color: #173852;

    font-size: 12px;
    font-weight: 700;

    box-sizing: border-box;
}

.initialFindingsList {
    flex: 1;
    min-height: 0;

    display: flex;
    flex-direction: column;

    gap: 10px;

    padding-right: 6px;

    overflow-y: auto;
    overflow-x: hidden;
}

.initialFindingItem {
    padding: 12px;

    background: #f8fafc;

    border: 1px solid #e2e8f0;
    border-radius: 10px;
}

.initialFindingTop {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    gap: 10px;
}

.initialFindingTop > div {
    display: flex;
    flex-direction: column;

    gap: 3px;
}

.initialFindingTop strong {
    color: #334155;

    font-size: 13px;
}

.initialFindingTop span {
    color: #64748b;

    font-size: 12px;
}

.initialFindingColor {
    flex: 0 0 auto;

    width: 13px;
    height: 13px;

    border: 2px solid #ffffff;
    border-radius: 50%;

    box-shadow:
        0 0 0 1px #cbd5e1;
}

.initialFindingItem p {
    margin: 7px 0 0;

    color: #64748b;

    font-size: 12px;
}

.initialFindingObservations {
    padding-top: 7px;

    border-top: 1px solid #e2e8f0;

    font-style: italic;
}

.initialFindingsEmpty {
    padding: 24px 14px;

    border: 1px dashed #cbd5e1;
    border-radius: 10px;

    text-align: center;
}

.initialFindingsEmpty strong {
    display: block;

    margin-bottom: 5px;

    color: #475569;

    font-size: 13px;
}

.initialFindingsEmpty p {
    margin: 0;

    color: #94a3b8;

    font-size: 12px;
}

.initialFindingActions {
    display: flex;
    justify-content: flex-end;

    gap: 8px;

    padding-top: 10px;
    margin-top: 10px;

    border-top: 1px solid #e2e8f0;
}

.deleteInitialFindingButton {
    padding: 6px 10px;

    border: 1px solid #fecaca;
    border-radius: 7px;

    background: #ffffff;

    color: #b91c1c;

    font-family: inherit;
    font-size: 11px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background-color 150ms ease,
        border-color 150ms ease;
}

.deleteInitialFindingButton:hover:not(:disabled) {
    background: #fef2f2;

    border-color: #fca5a5;
}

.deleteInitialFindingButton:disabled {
    opacity: 0.5;

    cursor: not-allowed;
}

.editInitialFindingButton {
    padding: 6px 10px;

    border: 1px solid #bfdbfe;
    border-radius: 7px;

    background: #ffffff;

    color: #1d4ed8;

    font-family: inherit;
    font-size: 11px;
    font-weight: 600;

    cursor: pointer;
}

.editInitialFindingButton:hover:not(:disabled) {
    background: #eff6ff;
}

.editInitialFindingButton:disabled {
    opacity: 0.5;

    cursor: not-allowed;
}
```

## 📄 src\components\OdontogramV2\components\InitialFindings\InitialFindings.jsx
```jsx
import "./InitialFindings.css";

import {
    useInitialOdontogramContext
} from "../../context/InitialOdontogramContext";


const FACE_LABELS = {

    top: "Superior",

    right: "Derecha",

    bottom: "Inferior",

    left: "Izquierda",

    center: "Central"

};


function InitialFindings() {

    const {

        findings,

        removeInitialFinding,

        deletingFindingId,

        startEditingFinding,

        editingFinding,

        isFinalized,

        isLoading


    } = useInitialOdontogramContext();


    async function handleDelete(
        finding
    ) {

        const faceDescription =
            finding.faceId
                ? `, cara ${
                    FACE_LABELS[
                        finding.faceId
                    ] ||
                    finding.faceId
                }`
                : "";


        const confirmed =
            window.confirm(
                `¿Deseas eliminar "${finding.condition.name}" de la pieza ${finding.toothNumber}${faceDescription}?`
            );


        if (!confirmed) {
            return;
        }


        try {

            await removeInitialFinding(
                finding
            );

        } catch (error) {

            console.error(
                "Error eliminando hallazgo:",
                error
            );

            alert(
                "No fue posible eliminar el hallazgo."
            );

        }

    }


    if (isLoading) {

        return (

            <div className="initialFindings">

                <h3>
                    Hallazgos iniciales
                </h3>

                <p className="initialFindingsMessage">
                    Cargando...
                </p>

            </div>

        );

    }


    return (

        <div className="initialFindings">

            <div className="initialFindingsHeader">

                <h3>
                    Hallazgos iniciales
                </h3>

                <span>
                    {findings.length}
                </span>

            </div>


            {findings.length === 0 ? (

                <div className="initialFindingsEmpty">

                    <strong>
                        Sin hallazgos
                    </strong>

                    <p>
                        Las condiciones registradas
                        aparecerán aquí.
                    </p>

                </div>

            ) : (

                <div className="initialFindingsList">

                    {findings.map(
                        (finding) => (

                            <div
                                key={finding.id}
                                className="initialFindingItem"
                            >

                                <div className="initialFindingTop">

                                    <div>

                                        <strong>

                                            Pieza{" "}
                                            {finding.toothNumber}

                                        </strong>

                                        <span>

                                            {
                                                finding
                                                    .condition
                                                    .name
                                            }

                                        </span>

                                    </div>


                                    {finding.condition.color && (

                                        <span
                                            className="initialFindingColor"
                                            style={{
                                                backgroundColor:
                                                    finding
                                                        .condition
                                                        .color
                                            }}
                                        />

                                    )}

                                </div>


                                {finding.faceId && (

                                    <p>

                                        Cara:{" "}

                                        <strong>

                                            {
                                                FACE_LABELS[
                                                    finding
                                                        .faceId
                                                ] ||
                                                finding.faceId
                                            }

                                        </strong>

                                    </p>

                                )}


                                {finding.observations && (

                                    <p className="initialFindingObservations">

                                        {
                                            finding
                                                .observations
                                        }

                                    </p>

                                )}

                            {!isFinalized && (

                                <div className="initialFindingActions">
                                    <button
                                        type="button"
                                        className="editInitialFindingButton"
                                        disabled={
                                            deletingFindingId === finding.id
                                        }
                                        onClick={() =>
                                            startEditingFinding(
                                                finding
                                            )
                                        }
                                    >

                                        {editingFinding?.id === finding.id
                                            ? "Editando"
                                            : "Editar"}

                                    </button>
                                    <button
                                        type="button"
                                        className="deleteInitialFindingButton"
                                        disabled={
                                            deletingFindingId ===
                                            finding.id
                                        }
                                        onClick={() =>
                                            handleDelete(
                                                finding
                                            )
                                        }
                                    >

                                        {deletingFindingId === finding.id
                                            ? "Eliminando..."
                                            : "Eliminar"}

                                    </button>

                                </div>
                            )}
                            </div>

                        )
                    )}

                </div>

            )}

        </div>

    );

}


export default InitialFindings;
```

## 📄 src\components\OdontogramV2\components\Legend.jsx
```jsx
import "./Legend.css";

function Legend(){

    return(

        <div>

            Leyenda

        </div>

    );

}

export default Legend;
```

## 📄 src\components\OdontogramV2\components\ModeSelector\ModeSelector.css
```css
.odontogramModeSelector {
    display: inline-flex;
    align-items: center;

    gap: 4px;

    padding: 4px;

    background: #e8edf3;

    border: 1px solid #d9e2ec;
    border-radius: 12px;
}

.odontogramModeSelector button {
    padding: 9px 18px;

    border: none;
    border-radius: 9px;

    background: transparent;

    color: #64748b;

    font-family: inherit;
    font-size: 13px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background-color 160ms ease,
        color 160ms ease,
        box-shadow 160ms ease;
}

.odontogramModeSelector button:hover:not(.active) {
    color: #334155;

    background: rgba(
        255,
        255,
        255,
        0.55
    );
}

.odontogramModeSelector button.active {
    background: #ffffff;

    color: #173852;

    box-shadow:
        0 2px 6px rgba(
            15,
            23,
            42,
            0.08
        );
}
```

## 📄 src\components\OdontogramV2\components\ModeSelector\ModeSelector.jsx
```jsx
import "./ModeSelector.css";

function ModeSelector({
    mode,
    onChange
}) {

    return (

        <div className="odontogramModeSelector">

            <button
                type="button"
                className={
                    mode === "initial"
                        ? "active"
                        : ""
                }
                onClick={() =>
                    onChange("initial")
                }
            >

                Estado inicial

            </button>

            <button
                type="button"
                className={
                    mode === "treatment"
                        ? "active"
                        : ""
                }
                onClick={() =>
                    onChange("treatment")
                }
            >

                Plan de tratamiento

            </button>

        </div>

    );

}

export default ModeSelector;
```

## 📄 src\components\OdontogramV2\components\PendingTreatments.css
```css
/* ========================================
   PENDING TREATMENTS
======================================== */

.pendingTreatments {
    width: 100%;
    height: 100%;
    min-height: 0;

    padding: 14px 16px;

    box-sizing: border-box;

    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 transparent;
}


.pendingTreatments::-webkit-scrollbar {
    width: 5px;
}


.pendingTreatments::-webkit-scrollbar-track {
    background: transparent;
}


.pendingTreatments::-webkit-scrollbar-thumb {
    background: #cbd5e1;

    border-radius: 999px;
}


/* ========================================
   HEADER
======================================== */

.pendingHeader {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 14px;
}


.pendingHeader h3 {
    margin: 0;

    color: #26364a;

    font-size: 16px;
    font-weight: 700;

    line-height: 1.25;
}


.pendingCount {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-width: 24px;
    height: 24px;

    padding: 0 7px;

    border-radius: 999px;

    background: #edf5fd;

    color: #3973ad;

    font-size: 10px;
    font-weight: 700;
}


/* ========================================
   CARD
======================================== */

.pendingTreatmentCard {
    position: relative;

    padding: 14px 16px;

    margin-bottom: 10px;

    background: #ffffff;

    border: 1px solid #dfe6ee;
    border-radius: 12px;

    box-shadow:
        0 2px 6px
        rgba(15, 23, 42, 0.035);

    box-sizing: border-box;
}


.pendingTreatmentCard:last-child {
    margin-bottom: 0;
}


/* ========================================
   CARD HEADER
======================================== */

.pendingTreatmentHeader {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 12px;
}


.pendingTreatmentTitle {
    min-width: 0;

    flex: 1;
}


.pendingTreatmentTitleRow {
    display: flex;

    align-items: center;

    gap: 10px;

    flex-wrap: wrap;
}


.pendingTreatmentTitle h4 {
    margin: 0;

    color: #26364a;

    font-size: 13px;
    font-weight: 700;

    line-height: 1.3;
}


/* ========================================
   STATUS
======================================== */

.pendingTreatmentStatus {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    padding: 3px 7px;

    border-radius: 999px;

    background: #fff2cf;

    color: #a36a12;

    font-size: 9px;
    font-weight: 700;

    line-height: 1.2;

    text-transform: none;
}


/* ========================================
   COLOR
======================================== */

.pendingTreatmentColor {
    flex: 0 0 auto;

    width: 11px;
    height: 11px;

    margin-top: 2px;

    border: 2px solid #ffffff;
    border-radius: 50%;

    box-shadow:
        0 0 0 1px
        #cbd5e1;
}


/* ========================================
   DETAILS GRID
======================================== */

.pendingTreatmentDetails {
    display: grid;

    grid-template-columns:
        minmax(0, 1.6fr)
        minmax(140px, 0.8fr);

    column-gap: 24px;
    row-gap: 10px;
}


/* ========================================
   DETAIL
======================================== */

.pendingTreatmentDetail {
    min-width: 0;
}


.pendingTreatmentDetail > span {
    display: block;

    margin-bottom: 3px;

    color: #94a3b8;

    font-size: 9px;
    font-weight: 600;

    line-height: 1.3;
}


.pendingTreatmentDetail strong,
.pendingTreatmentDetail p {
    margin: 0;

    color: #526173;

    font-size: 11px;
    font-weight: 500;

    line-height: 1.45;

    overflow-wrap: anywhere;
}


.pendingTreatmentDetail strong {
    color: #334155;

    font-weight: 600;
}


/* ========================================
   ACTIONS
======================================== */

.pendingTreatmentActions {
    display: flex;

    align-items: center;
    justify-content: flex-end;

    gap: 8px;

    margin-top: 12px;
    padding-top: 10px;

    border-top: 1px solid #eef2f6;
}


/* ========================================
   COMPLETE BUTTON
======================================== */

.pendingTreatmentActions
.completeButton {
    min-height: 32px;

    padding: 0 12px;

    border: 1px solid #a7e7bd;
    border-radius: 8px;

    background: #f0fdf4;

    color: #21825f;

    font-family: inherit;
    font-size: 10px;
    font-weight: 600;

    cursor: pointer;
}


.pendingTreatmentActions
.completeButton:hover:not(:disabled) {
    background: #dcfce7;

    border-color: #86dca5;
}


/* ========================================
   CANCEL BUTTON
======================================== */

.pendingTreatmentActions
.cancelTreatmentButton {
    min-height: 32px;

    padding: 0 12px;

    border: 1px solid #f5c2bf;
    border-radius: 8px;

    background: #ffffff;

    color: #b4534d;

    font-family: inherit;
    font-size: 10px;
    font-weight: 600;

    cursor: pointer;
}


.pendingTreatmentActions
.cancelTreatmentButton:hover:not(:disabled) {
    background: #fef2f2;

    border-color: #eca9a5;
}


/* ========================================
   DISABLED
======================================== */

.pendingTreatmentActions
.completeButton:disabled,
.pendingTreatmentActions
.cancelTreatmentButton:disabled {
    opacity: 0.5;

    cursor: not-allowed;
}


/* ========================================
   EMPTY
======================================== */

.pendingEmpty {
    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    min-height: 130px;

    padding: 20px;

    border: 1px dashed #d7e0e9;
    border-radius: 10px;

    color: #8290a2;

    text-align: center;
}


.pendingEmpty strong {
    margin-bottom: 4px;

    color: #526173;

    font-size: 11px;
    font-weight: 600;
}


.pendingEmpty p {
    margin: 0;

    font-size: 10px;
}


/* ========================================
   LOADING / ERROR
======================================== */

.pendingMessage,
.pendingError {
    padding: 12px;

    border-radius: 9px;

    font-size: 11px;
}


.pendingMessage {
    background: #f8fafc;

    color: #64748b;
}


.pendingError {
    background: #fef2f2;

    color: #b91c1c;
}


/* ========================================
   NARROW RIGHT PANEL
======================================== */

@media (max-width: 1050px) {

    .pendingTreatmentDetails {
        grid-template-columns: 1fr;
    }

}


/* ========================================
   SHORT LAPTOP
======================================== */

@media (max-height: 800px) {

    .pendingTreatments {
        padding:
            12px
            14px;
    }


    .pendingHeader {
        margin-bottom: 10px;
    }


    .pendingTreatmentCard {
        padding: 11px 13px;

        margin-bottom: 8px;
    }


    .pendingTreatmentHeader {
        margin-bottom: 8px;
    }


    .pendingTreatmentDetails {
        row-gap: 7px;
    }


    .pendingTreatmentActions {
        margin-top: 9px;
        padding-top: 8px;
    }

}
```

## 📄 src\components\OdontogramV2\components\PendingTreatments.jsx
```jsx
import "./PendingTreatments.css";

import {
    useOdontogramContext
} from "../context/OdontogramContext";

function formatDate(date) {

    if (!date) {

        return "-";

    }

    return new Intl.DateTimeFormat(
        "es-MX",
        {

            dateStyle: "medium",

            timeStyle: "short"

        }
    ).format(new Date(date));

}

function PendingTreatments() {

    const {

        pendingTreatments,

        completePendingTreatment,

        cancelPendingTreatment,

        pendingAction,

        isLoading,

        loadError

    } = useOdontogramContext();

function handleComplete(item) {

    const confirmed = window.confirm(
        `¿Confirmas que el tratamiento "${item.treatmentName}" ya fue realizado?`
    );

    if (!confirmed) {
        return;
    }

    completePendingTreatment(item);

}

function handleCancel(item) {

    const confirmed = window.confirm(
        `¿Deseas cancelar el tratamiento "${item.treatmentName}"? El registro permanecerá en el historial.`
    );

    if (!confirmed) {
        return;
    }

    cancelPendingTreatment(item);

}

    if (isLoading) {

        return (

            <div className="pendingTreatments">

                <h3>
                    Tratamientos pendientes
                </h3>

                <p className="pendingMessage">

                    Cargando tratamientos...

                </p>

            </div>

        );

    }

    if (loadError) {

        return (

            <div className="pendingTreatments">

                <h3>
                    Tratamientos pendientes
                </h3>

                <p className="pendingError">

                    {loadError}

                </p>

            </div>

        );

    }

    return (

        <div className="pendingTreatments">

            <div className="pendingHeader">

                <h3>
                    Tratamientos pendientes
                </h3>

                <span className="pendingCount">

                    {pendingTreatments.length}

                </span>

            </div>

            {pendingTreatments.length === 0 ? (

                <div className="pendingEmpty">

                    <strong>
                        Sin tratamientos pendientes
                    </strong>

                    <p>

                        Los tratamientos aplicados
                        aparecerán en este panel.

                    </p>

                </div>

            ) : (

            pendingTreatments.map((item) => (

                <article
                    key={item.id}
                    className="pendingTreatmentCard"
                >

                    <div className="pendingTreatmentHeader">

                        <div className="pendingTreatmentTitle">

                            <div className="pendingTreatmentTitleRow">

                                <h4>
                                    {item.treatmentName}
                                </h4>

                                <span className="pendingTreatmentStatus">

                                    {item.status}

                                </span>

                            </div>

                        </div>


                        {item.treatmentColor && (

                            <span
                                className="pendingTreatmentColor"
                                style={{
                                    backgroundColor:
                                        item.treatmentColor
                                }}
                            />

                        )}

                    </div>


                    <div className="pendingTreatmentDetails">

                        <div className="pendingTreatmentDetail pendingTreatmentDetailWide">

                            <span>
                                Piezas y caras
                            </span>

                            <strong>
                                {item.teeth.join(", ")}
                            </strong>

                        </div>


                        <div className="pendingTreatmentDetail">

                            <span>
                                Material
                            </span>

                            <strong>
                                {item.materialName || "—"}
                            </strong>

                        </div>


                        <div className="pendingTreatmentDetail pendingTreatmentDetailWide">

                            <span>
                                Observaciones
                            </span>

                            <p>
                                {item.observations || "—"}
                            </p>

                        </div>


                        <div className="pendingTreatmentDetail">

                            <span>
                                Fecha
                            </span>

                            <p>
                                {formatDate(item.date)}
                            </p>

                        </div>

                    </div>


                    <div className="pendingTreatmentActions">

                        <button
                            type="button"
                            className="completeButton"
                            disabled={Boolean(pendingAction)}
                            onClick={() =>
                                handleComplete(item)
                            }
                        >

                            {pendingAction?.id === item.id &&
                            pendingAction?.type === "complete"
                                ? "Completando..."
                                : "Completar"}

                        </button>


                        <button
                            type="button"
                            className="cancelTreatmentButton"
                            disabled={Boolean(pendingAction)}
                            onClick={() =>
                                handleCancel(item)
                            }
                        >

                            {pendingAction?.id === item.id &&
                            pendingAction?.type === "cancel"
                                ? "Cancelando..."
                                : "Cancelar"}

                        </button>

                    </div>

                </article>

            ))

            )}

        </div>

    );

}

export default PendingTreatments;
```

## 📄 src\components\OdontogramV2\components\Toolbar\Toolbar.css
```css
.toolbar{

    display:flex;

    gap:12px;

    align-items:center;

    padding:12px 18px;

    border-bottom:1px solid #E2E8F0;

    background:white;

}

.toolbarButton{

    display:flex;

    align-items:center;

    gap:8px;

    padding:10px 16px;

    border:none;

    border-radius:10px;

    background:#F8FAFC;

    cursor:pointer;

    transition:.2s;

}

.toolbarButton:hover{

    background:#E2E8F0;

}

.toolbarButton.active{

    background:#2563EB;

    color:white;

}

.toolbarIcon{

    font-size:18px;

}
```

## 📄 src\components\OdontogramV2\components\Toolbar\Toolbar.jsx
```jsx
import "./Toolbar.css";

import ToolbarButton from "./ToolbarButton";

function Toolbar(){

    return(

        <div className="toolbar">

            <ToolbarButton


                label="Seleccionar"

            />

            <ToolbarButton


                label="Tratamiento"

            />

            <ToolbarButton


                label="Ausente"

            />

            <ToolbarButton


                label="Corona"

            />

            <ToolbarButton


                label="Implante"

            />

            <ToolbarButton


                label="Zoom"

            />

        </div>

    );

}

export default Toolbar;
```

## 📄 src\components\OdontogramV2\components\Toolbar\ToolbarButton.jsx
```jsx
function ToolbarButton({

    icon,

    label,

    active,

    onClick

}){

    return(

        <button

            className={`toolbarButton ${
                active ? "active" : ""
            }`}

            onClick={onClick}

        >

            <span className="toolbarIcon">

                {icon}

            </span>

            <span>

                {label}

            </span>

        </button>

    );

}

export default ToolbarButton;
```

## 📄 src\components\OdontogramV2\components\Tooltip\InitialFindingTooltip.css
```css
.initialFindingTooltip {
    position: fixed;
    z-index: 9999;

    width: min(
        300px,
        calc(100vw - 24px)
    );

    padding: 14px;

    background: #ffffff;

    border: 1px solid #d9e2ec;
    border-radius: 12px;

    box-shadow:
        0 12px 30px rgba(15, 23, 42, 0.16);

    box-sizing: border-box;

    color: #334155;

    pointer-events: none;

    animation:
        treatmentTooltipEnter
        120ms ease-out;
}


/*
    CABECERA

    Equivalente a .tooltipHeader
*/
.initialFindingTooltipHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 10px;
}


/*
    Pieza 21
*/
.initialFindingTooltipHeader strong {
    color: #1f2937;

    font-size: 14px;
    font-weight: 700;
}


/*
    Cara Superior / Central / etc.
*/
.initialFindingTooltipHeader span {
    color: #64748b;

    font-size: 12px;
}


/*
    LISTA DE HALLAZGOS
*/
.initialFindingTooltipContent {
    display: flex;
    flex-direction: column;

    gap: 10px;

    max-height: 220px;

    overflow-y: auto;
}


/*
    CADA HALLAZGO
*/
.initialFindingTooltipItem {
    display: flex;
    flex-direction: column;

    gap: 5px;
}


/*
    Separador cuando hay
    varios hallazgos en la misma pieza.
*/
.initialFindingTooltipItem +
.initialFindingTooltipItem {
    padding-top: 10px;

    border-top:
        1px solid #e2e8f0;
}


/*
    NOMBRE DE LA CONDICIÓN

    Ejemplo:
    ● Caries
    ● Movilidad 1
    ● Endodoncia
*/
.initialFindingTooltipCondition {
    display: flex;
    align-items: center;

    gap: 8px;

    color: #1f2937;

    font-size: 13px;
    font-weight: 700;
}


/*
    Indicador de color
*/
.initialFindingTooltipColor {
    flex: 0 0 auto;

    width: 12px;
    height: 12px;

    border: 2px solid #ffffff;
    border-radius: 50%;

    box-shadow:
        0 0 0 1px #cbd5e1;
}


/*
    Cara específica del hallazgo
*/
.initialFindingTooltipFace {
    color: #64748b;

    font-size: 12px;
}


/*
    Observaciones
*/
.initialFindingTooltipObservations {
    padding-top: 6px;

    color: #475569;

    font-size: 12px;
    line-height: 1.4;

    overflow-wrap: anywhere;
}


/*
    SCROLL INTERNO
*/
.initialFindingTooltipContent::-webkit-scrollbar {
    width: 6px;
}


.initialFindingTooltipContent::-webkit-scrollbar-track {
    background: transparent;
}


.initialFindingTooltipContent::-webkit-scrollbar-thumb {
    background: #cbd5e1;

    border-radius: 999px;
}


/*
    MISMA ANIMACIÓN DEL
    TOOLTIP DE TRATAMIENTOS
*/
@keyframes treatmentTooltipEnter {

    from {
        opacity: 0;

        transform:
            translateY(3px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }
}
```

## 📄 src\components\OdontogramV2\components\Tooltip\InitialFindingTooltip.jsx
```jsx
import { createPortal } from "react-dom";

import "./InitialFindingTooltip.css";


const FACE_LABELS = {
    top: "Superior",
    right: "Derecha",
    bottom: "Inferior",
    left: "Izquierda",
    center: "Central"
};


function InitialFindingTooltip({
    tooltip
}) {

    if (
        !tooltip ||
        !tooltip.findings?.length
    ) {

        return null;

    }


    const {
        toothNumber,
        faceId,
        findings,
        x,
        y
    } = tooltip;


    const OFFSET = 14;

    const TOOLTIP_WIDTH = 240;
    const TOOLTIP_HEIGHT = 180;


    let left =
        x + OFFSET;

    let top =
        y + OFFSET;


    /*
        Evitamos que el tooltip salga
        de la pantalla por la derecha.
    */
    if (
        left + TOOLTIP_WIDTH >
        window.innerWidth
    ) {

        left =
            x -
            TOOLTIP_WIDTH -
            OFFSET;

    }


    /*
        Lo mismo en la parte inferior.
    */
    if (
        top + TOOLTIP_HEIGHT >
        window.innerHeight
    ) {

        top =
            y -
            TOOLTIP_HEIGHT -
            OFFSET;

    }


    return createPortal(

        <div
            className="initialFindingTooltip"
            style={{
                left,
                top
            }}
        >

            <div className="initialFindingTooltipHeader">

                <strong>
                    Pieza {toothNumber}
                </strong>

                {faceId && (

                    <span>
                        {FACE_LABELS[faceId] || faceId}
                    </span>

                )}

            </div>


            <div className="initialFindingTooltipContent">

                {findings.map(
                    (finding) => (

                        <div
                            key={finding.id}
                            className="initialFindingTooltipItem"
                        >

                            <div className="initialFindingTooltipCondition">

                                <span
                                    className="initialFindingTooltipColor"
                                    style={{
                                        backgroundColor:
                                            finding.condition?.color ||
                                            "#94a3b8"
                                    }}
                                />

                                <span>
                                    {finding.condition?.name}
                                </span>

                            </div>


                            {finding.faceId && (

                                <div className="initialFindingTooltipFace">

                                    Cara:{" "}

                                    {FACE_LABELS[
                                        finding.faceId
                                    ] ||
                                        finding.faceId}

                                </div>

                            )}


                            {finding.observations && (

                                <div className="initialFindingTooltipObservations">

                                    {finding.observations}

                                </div>

                            )}

                        </div>

                    )
                )}

            </div>

        </div>,

        document.body

    );

}


export default InitialFindingTooltip;
```

## 📄 src\components\OdontogramV2\components\Tooltip\TreatmentTooltip.css
```css
.treatmentTooltip {
    position: fixed;
    z-index: 9999;

    width: min(
        300px,
        calc(100vw - 24px)
    );

    padding: 14px;

    background: #ffffff;

    border: 1px solid #d9e2ec;
    border-radius: 12px;

    box-shadow:
        0 12px 30px rgba(15, 23, 42, 0.16);

    box-sizing: border-box;

    color: #334155;

    pointer-events: none;

    animation:
        treatmentTooltipEnter
        120ms ease-out;
}

.tooltipHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 10px;
}

.tooltipTitle {
    display: flex;
    align-items: center;

    gap: 8px;

    min-width: 0;

    color: #1f2937;

    font-size: 14px;
}

.tooltipColor {
    flex: 0 0 auto;

    width: 12px;
    height: 12px;

    border: 2px solid #ffffff;
    border-radius: 50%;

    box-shadow:
        0 0 0 1px #cbd5e1;
}

.tooltipStatus {
    flex: 0 0 auto;

    padding: 4px 8px;

    border-radius: 999px;

    font-size: 11px;
    font-weight: 700;
}

.tooltipStatus--pending {
    background: #fef3c7;

    color: #92400e;
}

.tooltipStatus--completed {
    background: #dcfce7;

    color: #166534;
}

.tooltipStatus--cancelled {
    background: #fee2e2;

    color: #991b1b;
}

.tooltipFace {
    margin-bottom: 5px;

    color: #64748b;

    font-size: 12px;
}

.tooltipTreatment {
    margin-bottom: 12px;

    color: #1f2937;

    font-size: 15px;
    font-weight: 700;
}

.tooltipDetails {
    display: grid;
    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 10px;

    margin: 0;
}

.tooltipDetails div {
    min-width: 0;
}

.tooltipDetails dt {
    margin-bottom: 3px;

    color: #94a3b8;

    font-size: 11px;
    font-weight: 600;
}

.tooltipDetails dd {
    margin: 0;

    color: #475569;

    font-size: 12px;
    line-height: 1.35;

    overflow-wrap: anywhere;
}

.tooltipObservations {
    padding-top: 10px;
    margin-top: 10px;

    border-top: 1px solid #e2e8f0;
}

.tooltipObservations span {
    display: block;

    margin-bottom: 4px;

    color: #94a3b8;

    font-size: 11px;
    font-weight: 600;
}

.tooltipObservations p {
    margin: 0;

    color: #475569;

    font-size: 12px;
    line-height: 1.4;

    overflow-wrap: anywhere;
}

@keyframes treatmentTooltipEnter {

    from {
        opacity: 0;

        transform:
            translateY(3px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }

}
```

## 📄 src\components\OdontogramV2\components\Tooltip\TreatmentTooltip.jsx
```jsx
import { createPortal } from "react-dom";
import "./TreatmentTooltip.css";

const FACE_LABELS = {
    top: "Oclusal",
    bottom: "Lingual",
    left: "Mesial",
    right: "Distal",
    center: "Centro"
};

function normalizeStatus(status) {

    const value = String(status || "")
        .trim()
        .toLowerCase();

    if (value === "completado") {

        return {
            key: "completed",
            label: "Completado"
        };

    }

    if (value === "cancelado") {

        return {
            key: "cancelled",
            label: "Cancelado"
        };

    }

    return {
        key: "pending",
        label: "Pendiente"
    };

}

function formatDate(date) {

    if (!date) {

        return "-";

    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {

        return "-";

    }

    return new Intl.DateTimeFormat(
        "es-MX",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    ).format(parsedDate);

}

function calculatePosition(x, y) {

    const offset = 16;

    const estimatedWidth = 300;

    const estimatedHeight = 220;

    let left = x + offset;

    let top = y + offset;

    if (
        left + estimatedWidth >
        window.innerWidth - 12
    ) {

        left =
            x -
            estimatedWidth -
            offset;

    }

    if (
        top + estimatedHeight >
        window.innerHeight - 12
    ) {

        top =
            y -
            estimatedHeight -
            offset;

    }

    return {
        left: Math.max(12, left),
        top: Math.max(12, top)
    };

}

function TreatmentTooltip({ tooltip }) {

    if (
        !tooltip ||
        !tooltip.face?.treatment ||
        typeof document === "undefined"
    ) {

        return null;

    }

    const {
        x,
        y,
        toothNumber,
        faceId,
        face
    } = tooltip;

    const treatment = face.treatment;

    const status = normalizeStatus(
        treatment.status || face.status
    );

    const displayedDate =
        status.key === "completed"
            ? (
                treatment.completedAt ||
                face.updatedAt ||
                treatment.date
            )
            : (
                treatment.date ||
                face.updatedAt
            );

    const dateLabel =
        status.key === "completed"
            ? "Realizado"
            : "Registrado";

    const position =
        calculatePosition(x, y);

    return createPortal(

        <div
            className="treatmentTooltip"
            style={{
                left: position.left,
                top: position.top
            }}
            role="tooltip"
        >

            <div className="tooltipHeader">

                <div className="tooltipTitle">

                    {treatment.color && (

                        <span
                            className="tooltipColor"
                            style={{
                                backgroundColor:
                                    treatment.color
                            }}
                        />

                    )}

                    <strong>

                        Pieza {toothNumber}

                    </strong>

                </div>

                <span
                    className={
                        `tooltipStatus tooltipStatus--${status.key}`
                    }
                >

                    {status.label}

                </span>

            </div>

            <div className="tooltipFace">

                Cara:{" "}

                <strong>

                    {FACE_LABELS[faceId] || faceId}

                </strong>

            </div>

            <div className="tooltipTreatment">

                {treatment.name ||
                    "Tratamiento sin nombre"}

            </div>

            <dl className="tooltipDetails">

                <div>

                    <dt>Material</dt>

                    <dd>

                        {treatment.material?.name ||
                            "-"}

                    </dd>

                </div>

                <div>

                    <dt>{dateLabel}</dt>

                    <dd>

                        {formatDate(displayedDate)}

                    </dd>

                </div>

            </dl>

            {(

                treatment.observations ||

                face.notes

            ) && (

                <div className="tooltipObservations">

                    <span>Observaciones</span>

                    <p>

                        {treatment.observations ||
                            face.notes}

                    </p>

                </div>

            )}

        </div>,

        document.body

    );

}

export default TreatmentTooltip;
```

## 📄 src\components\OdontogramV2\components\Tooth\Renderers\CanineRenderer.jsx
```jsx
import ToothFace from "../../ToothFace";

import { getFaceColor } from "../../../utils/getFaceColor";
import { FACE_ORDER } from "../../../geometry/faces";
import { CANINE_GEOMETRY } from "../../../geometry/canines";
function CanineRenderer({

    tooth,

    onFaceClick

}){

    return (

        <>

            {FACE_ORDER.map(faceId => (

                <ToothFace

                    key={faceId}

                    id={faceId}

                    points={CANINE_GEOMETRY[faceId]}

                    fill={getFaceColor(

                        tooth.faces[faceId]

                    )}

                    stroke="#CBD5E1"

                    selected={

                        tooth.faces[faceId].selected

                    }

                    onClick={()=>

                        onFaceClick(

                            tooth.number,

                            faceId

                        )

                    }

                />

            ))}

        </>

    );

}

export default CanineRenderer;
```

## 📄 src\components\OdontogramV2\components\Tooth\Renderers\IncisorRenderer.jsx
```jsx
import ToothFace from "../../ToothFace";
import { FACE_ORDER } from "../../../geometry/faces";
import { getFaceColor } from "../../../utils/getFaceColor";
import { INCISOR_PATH } from "../../../geometry/incisorPath";

function IncisorRenderer({

    tooth,

    onFaceClick

}){

    return (

        <>

            {FACE_ORDER.map(faceId => (

                <ToothFace

                    key={faceId}

                    id={faceId}

                    points={INCISOR_PATH[faceId]}

                    fill={getFaceColor(

                        tooth.faces[faceId]

                    )}

                    stroke="#CBD5E1"

                    selected={

                        tooth.faces[faceId].selected

                    }

                    onClick={()=>

                        onFaceClick(

                            tooth.number,

                            faceId

                        )

                    }

                />

            ))}

        </>

    );

}

export default IncisorRenderer;
```

## 📄 src\components\OdontogramV2\components\Tooth\Renderers\MolarRenderer.jsx
```jsx
import ToothFace from "../../ToothFace";

import { FACE_ORDER } from "../../../geometry/faces";
import { MOLAR_GEOMETRY } from "../../../geometry/molars";
import { getFaceColor } from "../../../utils/getFaceColor";

function MolarRenderer({

    tooth,

    onFaceClick

}){

    return (

        <>

            {FACE_ORDER.map(faceId => (

                <ToothFace

                    key={faceId}

                    id={faceId}

                    points={MOLAR_GEOMETRY[faceId]}

                    fill={getFaceColor(

                        tooth.faces[faceId]

                    )}

                    stroke="#CBD5E1"

                    selected={

                        tooth.faces[faceId].selected

                    }

                    onClick={()=>

                        onFaceClick(

                            tooth.number,

                            faceId

                        )

                    }

                />

            ))}

        </>

    );

}

export default MolarRenderer;
```

## 📄 src\components\OdontogramV2\components\Tooth\Renderers\PremolarRenderer.jsx
```jsx
import ToothFace from "../../ToothFace";

import { FACE_ORDER } from "../../../geometry/faces";
import { PREMOLAR_GEOMETRY } from "../../../geometry/premolars";
import { getFaceColor } from "../../../utils/getFaceColor";

function PremolarRenderer({

    tooth,

    onFaceClick

}){

    return (

        <>

            {FACE_ORDER.map(faceId => (

                <ToothFace

                    key={faceId}

                    id={faceId}

                    points={PREMOLAR_GEOMETRY[faceId]}

                    fill={getFaceColor(

                        tooth.faces[faceId]

                    )}

                    stroke="#CBD5E1"

                    selected={

                        tooth.faces[faceId].selected

                    }

                    onClick={()=>

                        onFaceClick(

                            tooth.number,

                            faceId

                        )

                    }

                />

            ))}

        </>

    );

}

export default PremolarRenderer;
```

## 📄 src\components\OdontogramV2\components\Tooth\ToothRenderer.jsx
```jsx
import IncisorRenderer from "./Renderers/IncisorRenderer";
import CanineRenderer from "./Renderers/CanineRenderer";
import PremolarRenderer from "./Renderers/PremolarRenderer";
import MolarRenderer from "./Renderers/MolarRenderer";

function ToothRenderer({ tooth, onFaceClick }) {

    switch (tooth.type) {

        case "incisor":
            return (
                <IncisorRenderer
                    tooth={tooth}
                    onFaceClick={onFaceClick}
                />
            );

        case "canine":
            return (
                <CanineRenderer
                    tooth={tooth}
                    onFaceClick={onFaceClick}
                />
            );

        case "premolar":
            return (
                <PremolarRenderer
                    tooth={tooth}
                    onFaceClick={onFaceClick}
                />
            );

        case "molar":
            return (
                <MolarRenderer
                    tooth={tooth}
                    onFaceClick={onFaceClick}
                />
            );

        default:
            return null;
    }

}

export default ToothRenderer;
```

## 📄 src\components\OdontogramV2\components\ToothFace.jsx
```jsx
function ToothFace({

    id,

    points,

    fill,

    stroke,

    selected,

    onClick

}) {

    return (

        <polygon

            points={points}

            fill={fill}

            stroke={selected ? "#2563EB" : stroke}

            strokeWidth={selected ? 2.5 : 1}

            style={{

                cursor: "pointer",

                transition: "all .18s ease"

            }}

            onClick={() => onClick(id)}

        />

    );

}

export default ToothFace;
```

## 📄 src\components\OdontogramV2\components\ToothGroup.jsx
```jsx
import ClinicalTooth from
    "./ClinicalTooth/ClinicalTooth";
import ToothNumber from "./ToothNumber";

function ToothGroup({

    tooth,

    x,
    y,

    numberY,

    onFaceClick,

    onToothNumberClick,

    onFaceHover,
    onFaceLeave,

    selectionScope,

    selectedFaceIds,

    toothSelected,

    onToothClick,

    faceFillOverrides,

    initialFindings,

    onInitialFaceHover,
    onInitialFaceLeave,

    disabled

}) {
    return (

        <g
            className="toothGroup"

            transform={
                `translate(${x}, ${y})`
            }
        >

        <ClinicalTooth

            tooth={
                tooth
            }

            onFaceClick={
                onFaceClick
            }

            onFaceHover={
                onFaceHover
            }

            onFaceLeave={
                onFaceLeave
            }

            selectionScope={
                selectionScope
            }

            selectedFaceIds={
                selectedFaceIds
            }

            toothSelected={
                toothSelected
            }

            onToothClick={
                onToothClick
            }

            faceFillOverrides={
                faceFillOverrides
            }

            initialFindings={
                initialFindings
            }

            onInitialFaceHover={
                onInitialFaceHover
            }

            onInitialFaceLeave={
                onInitialFaceLeave
            }

            disabled={
                disabled
            }

        />


        <ToothNumber

            number={
                tooth.number
            }

            x={
                0
            }

            y={
                numberY
            }

            onClick={
                onToothNumberClick
            }

        />
        </g>

    );

}


export default ToothGroup;
```

## 📄 src\components\OdontogramV2\components\ToothLabel.jsx
```jsx

```

## 📄 src\components\OdontogramV2\components\ToothNumber.jsx
```jsx
function ToothNumber({

    number,

    x,

    y,

    onClick

}) {

    function handleClick(
        event
    ) {

        event.stopPropagation();

        onClick?.(
            number
        );

    }


    function handleKeyDown(
        event
    ) {

        if (
            event.key !== "Enter" &&
            event.key !== " "
        ) {

            return;

        }


        event.preventDefault();

        onClick?.(
            number
        );

    }


    return (

        <text

            x={
                x
            }

            y={
                y
            }

            textAnchor="middle"

            role="button"

            tabIndex={
                onClick
                    ? 0
                    : undefined
            }

            onClick={
                handleClick
            }

            onKeyDown={
                handleKeyDown
            }

            style={{

                cursor:
                    onClick
                        ? "pointer"
                        : "default",

                userSelect:
                    "none"

            }}

        >

            {number}

        </text>

    );

}


export default ToothNumber;
```

## 📄 src\components\OdontogramV2\components\TreatmentPanel.css
```css
/* ========================================
   TREATMENT PANEL
======================================== */

.treatmentPanel {
    width: 100%;
    height: 100%;
    min-height: 0;

    display: flex;
    flex-direction: column;

    padding: 14px 16px;

    background: transparent;

    border: none;
    border-radius: 0;

    box-sizing: border-box;

    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 transparent;
}


.treatmentPanel::-webkit-scrollbar {
    width: 5px;
}


.treatmentPanel::-webkit-scrollbar-track {
    background: transparent;
}


.treatmentPanel::-webkit-scrollbar-thumb {
    background: #cbd5e1;

    border-radius: 999px;
}


/* ========================================
   TITLE
======================================== */

.treatmentPanel h3 {
    margin: 0 0 14px;

    color: #26364a;

    font-size: 16px;
    font-weight: 700;

    line-height: 1.25;
}


/* ========================================
   FORM GROUP
======================================== */

.treatmentPanel .formGroup {
    display: flex;
    flex-direction: column;

    gap: 5px;

    margin-bottom: 12px;
}


.treatmentPanel label {
    margin: 0;

    color: #475569;

    font-size: 11px;
    font-weight: 600;

    line-height: 1.4;
}


/* ========================================
   INPUTS
======================================== */

.treatmentPanel input,
.treatmentPanel select,
.treatmentPanel textarea {
    width: 100%;

    min-width: 0;

    padding: 8px 10px;

    border: 1px solid #d9e2ec;
    border-radius: 9px;

    background: #ffffff;

    color: #334155;

    font-family: inherit;
    font-size: 12px;

    outline: none;

    box-sizing: border-box;

    transition:
        border-color 150ms ease,
        box-shadow 150ms ease;
}


.treatmentPanel input,
.treatmentPanel select {
    height: 38px;
}


.treatmentPanel select {
    cursor: pointer;
}


.treatmentPanel textarea {
    min-height: 68px;
    max-height: 110px;

    resize: vertical;

    line-height: 1.4;
}


.treatmentPanel input:focus,
.treatmentPanel select:focus,
.treatmentPanel textarea:focus {
    border-color: #8eb5de;

    box-shadow:
        0 0 0 3px
        rgba(21, 86, 157, 0.07);
}


/* ========================================
   DISABLED CONTROLS
======================================== */

.treatmentPanel input:disabled,
.treatmentPanel select:disabled,
.treatmentPanel textarea:disabled {
    background: #f8fafc;

    color: #94a3b8;

    cursor: not-allowed;

    opacity: 1;
}


/* ========================================
   SELECTED TEETH
======================================== */

.selectedTeeth {
    display: flex;
    flex-direction: column;

    gap: 3px;

    padding: 9px 10px;
    margin-bottom: 12px;

    background: #f8fafc;

    border: 1px solid #e2e8f0;
    border-radius: 9px;

    color: #64748b;

    font-size: 11px;

    line-height: 1.4;
}


.selectedTeeth strong {
    color: #475569;

    font-size: 11px;
    font-weight: 600;
}


.selectedTeeth span {
    color: #15569d;

    font-size: 11px;
    font-weight: 700;
}


/* ========================================
   MAIN TREATMENT BUTTONS
======================================== */

.treatmentButtons {
    display: flex;

    align-items: center;
    justify-content: flex-end;

    gap: 8px;

    margin-top: auto;
    padding-top: 8px;
}


.treatmentButtons button {
    min-height: 36px;

    padding: 0 13px;

    border: none;
    border-radius: 9px;

    font-family: inherit;
    font-size: 11px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        opacity 150ms ease;
}


/* ========================================
   SAVE / APPLY
======================================== */

.saveTreatment {
    flex: 1;

    background: #15569d;

    color: #ffffff;
}


.saveTreatment:hover:not(:disabled) {
    background: #104780;
}


.saveTreatment:disabled {
    background: #94a8ba;

    color: #ffffff;

    opacity: 1;

    cursor: not-allowed;
}


/* ========================================
   CLEAR
======================================== */

.clearTreatment {
    background: #f1f5f9;

    color: #526173;
}


.clearTreatment:hover:not(:disabled) {
    background: #e2e8f0;
}


/* ========================================
   PENDING TREATMENT ACTIONS
======================================== */

.treatmentActions {
    display: flex;

    align-items: center;
    justify-content: flex-end;

    flex-wrap: wrap;

    gap: 8px;

    margin-top: 12px;
}


.completeButton,
.cancelTreatmentButton {
    min-height: 34px;

    padding: 0 12px;

    border-radius: 8px;

    font-family: inherit;
    font-size: 10px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        opacity 150ms ease;
}


/* ========================================
   COMPLETE
======================================== */

.completeButton {
    border: 1px solid #a7e7bd;

    background: #f0fdf4;

    color: #21825f;
}


.completeButton:hover:not(:disabled) {
    background: #dcfce7;

    border-color: #86dca5;
}


/* ========================================
   CANCEL
======================================== */

.cancelTreatmentButton {
    border: 1px solid #f5c2bf;

    background: #ffffff;

    color: #b4534d;
}


.cancelTreatmentButton:hover:not(:disabled) {
    background: #fef2f2;

    border-color: #eca9a5;
}


/* ========================================
   DISABLED ACTIONS
======================================== */

.completeButton:disabled,
.cancelTreatmentButton:disabled {
    opacity: 0.5;

    cursor: not-allowed;
}


/* ========================================
   SHORT LAPTOP
======================================== */

@media (max-height: 800px) {

    .treatmentPanel {
        padding:
            12px
            14px;
    }


    .treatmentPanel .formGroup {
        margin-bottom: 9px;
    }


    .selectedTeeth {
        margin-bottom: 9px;
    }


    .treatmentPanel textarea {
        min-height: 58px;
        max-height: 80px;
    }


    .treatmentButtons {
        padding-top: 5px;
    }

}
```

## 📄 src\components\OdontogramV2\components\TreatmentPanel.jsx
```jsx
import "./TreatmentPanel.css";
import { useEffect, useState } from "react";
import { getTreatments, getMaterialsByTreatment } from "../../../supabase/tratamientos";
import { useOdontogramContext } from "../context/OdontogramContext";

function TreatmentPanel() {
    const {

        selectedFaces,

        treatmentData,

        setTreatmentData,

        saveSelectedTreatment

    } = useOdontogramContext();

    const [treatments, setTreatments] = useState([]);

    const [materials, setMaterials] = useState([]);

    useEffect(() => {

        async function loadTreatments() {

            try {

                const data = await getTreatments();

                setTreatments(data);

            } catch (error) {

                console.error(error);

            }

        }

        loadTreatments();

    }, []);

    useEffect(() => {

        async function loadMaterials() {

            if (!treatmentData.treatmentId) {

                setMaterials([]);

                return;

            }

            try {

                const data = await getMaterialsByTreatment(
                    treatmentData.treatmentId
                );

                setMaterials(
                    data.map(item => item.materiales)
                );

            } catch (error) {

                console.error(error);

            }

        }

        loadMaterials();

    }, [treatmentData.treatmentId]);

        function handleChange(e){

            const { name, value } = e.target;

            setTreatmentData(prev => ({

                ...prev,

                [name]: value

            }));

        }

    function handleTreatmentChange(event) {

        const treatmentId =
            event.target.value;

        const selectedTreatment =
            treatments.find((treatment) =>

                String(treatment.id) ===
                String(treatmentId)

            );

        setTreatmentData((previous) => ({

            ...previous,

            treatmentId,

            treatmentName:
                selectedTreatment?.nombre || "",

            treatmentColor:
                selectedTreatment?.color || "",

            materialId: "",

            materialName: ""

        }));

    }

    function handleMaterialChange(e){

        const materialId = e.target.value;

        const selectedOption = e.target.options[e.target.selectedIndex];

        const materialName = selectedOption.text;

        setTreatmentData(prev => ({

            ...prev,

            materialId,

            materialName

        }));

    }
    function formatSelectedFaces() {

        if (selectedFaces.length === 0) {

            return "Ninguna";

        }

        return selectedFaces

            .map(face => {

                const names = {

                    top: "Oclusal",

                    bottom: "Lingual",

                    left: "Mesial",

                    right: "Distal",

                    center: "Centro"

                };

                return `${face.toothNumber} (${names[face.faceId]})`;

            })

            .join(", ");

    }
    return (

        <div className="treatmentPanel">


            {/* CARAS SELECCIONADAS */}

            <div className="selectedTeeth">

                <span>
                    Caras seleccionadas
                </span>

                <strong>
                    {formatSelectedFaces()}
                </strong>

            </div>


            {/* TRATAMIENTO */}

            <div className="formGroup">

                <label>
                    Tratamiento
                </label>

                <select
                    name="treatmentId"
                    disabled={selectedFaces.length === 0}
                    value={treatmentData.treatmentId}
                    onChange={handleTreatmentChange}
                >

                    <option value="">
                        Seleccionar
                    </option>

                    {treatments.map((treatment) => (

                        <option
                            key={treatment.id}
                            value={treatment.id}
                        >

                            {treatment.nombre}

                        </option>

                    ))}

                </select>

            </div>


            {/* MATERIAL */}

            {materials.length > 0 && (

                <div className="formGroup">

                    <label>
                        Material
                    </label>

                    <select
                        name="materialId"
                        disabled={selectedFaces.length === 0}
                        value={treatmentData.materialId}
                        onChange={handleMaterialChange}
                    >

                        <option value="">
                            Seleccionar
                        </option>

                        {materials.map((material) => (

                            <option
                                key={material.id}
                                value={material.id}
                            >

                                {material.nombre}

                            </option>

                        ))}

                    </select>

                </div>

            )}


            {/* OBSERVACIONES */}

            <div className="formGroup">

                <label>
                    Observaciones
                </label>

                <textarea
                    name="observations"
                    placeholder="Observaciones clínicas..."
                    disabled={selectedFaces.length === 0}
                    value={treatmentData.observations}
                    onChange={handleChange}
                />

            </div>


            {/* ACCIONES */}

            <div className="treatmentButtons">

                <button
                    type="button"
                    className="saveTreatment"
                    disabled={
                        selectedFaces.length === 0 ||
                        !treatmentData.treatmentId
                    }
                    onClick={saveSelectedTreatment}
                >

                    Aplicar tratamiento

                </button>

            </div>

        </div>

    );

}

export default TreatmentPanel;
```

## 📄 src\components\OdontogramV2\config\colors.js
```javascript
export const TREATMENT_COLORS = {

    healthy: "#FFFFFF",

    pendiente: "#EAB308",

    completed: "#22C55E",

    caries: "#DC2626",

    resina: "#2563EB",

    amalgama: "#6B7280",

    corona: "#F59E0B",

    implante: "#7C3AED",

    endodoncia: "#EA580C",

    sellador: "#10B981",

    extraction: "#991B1B"

};
```

## 📄 src\components\OdontogramV2\config\layout.js
```javascript
export const TOOTH_SIZE = 64;

export const TOOTH_GAP = 18;

export const MIDLINE_GAP = 90;

export const ARCH_SPACING = 230;

export const START_X = 70;

export const START_Y = 70;

export const ARCH_CURVE = 32;
```

## 📄 src\components\OdontogramV2\config\theme.js
```javascript
export const THEME = {

    toothSize: 72,

    toothGap: 8,

    quadrantGap: 28,

    archGap: 48,

    stroke: "#334155",

    strokeWidth: 1.5,

    faceStroke: "#CBD5E1",

    background: "#FFFFFF"

};
```

## 📄 src\components\OdontogramV2\context\InitialOdontogramContext.jsx
```jsx
import {
    createContext,
    useContext
} from "react";

import {
    useInitialOdontogram
} from "../hooks/useInitialOdontogram";


const InitialOdontogramContext =
    createContext(null);


export function InitialOdontogramProvider({
    patient,
    children
}) {

    const initialOdontogram =
        useInitialOdontogram(
            patient
        );

    return (

        <InitialOdontogramContext.Provider
            value={initialOdontogram}
        >

            {children}

        </InitialOdontogramContext.Provider>

    );

}


export function useInitialOdontogramContext() {

    const context =
        useContext(
            InitialOdontogramContext
        );

    if (!context) {

        throw new Error(
            "useInitialOdontogramContext debe utilizarse dentro de InitialOdontogramProvider."
        );

    }

    return context;

}
```

## 📄 src\components\OdontogramV2\context\OdontogramContext.jsx
```jsx
import { createContext, useContext } from "react";
import { useOdontogram } from "../hooks/useOdontogram";

const OdontogramContext = createContext();

export function OdontogramProvider({

    patient,

    children

}) {

    const odontogram = useOdontogram(patient);

    return (

        <OdontogramContext.Provider value={odontogram}>

            {children}

        </OdontogramContext.Provider>

    );

}

export function useOdontogramContext() {

    return useContext(OdontogramContext);

}
```

## 📄 src\components\OdontogramV2\data\createFace.js
```javascript
function createFace() {

    return {

        selected: false,

        status: "healthy",

        treatment: null,

        diagnosis: null,

        notes: "",

        updatedAt: null

    };

}

export function createFaces() {

    return {

        top: createFace(),

        left: createFace(),

        center: createFace(),

        right: createFace(),

        bottom: createFace()

    };

}
```

## 📄 src\components\OdontogramV2\data\createOdontogram.js
```javascript
import {
    UPPER_RIGHT,
    UPPER_LEFT,
    LOWER_LEFT,
    LOWER_RIGHT
} from "./teeth";

import { createTooth } from "./createTooth";

export function createOdontogram() {

    const odontogram = {};

    const allTeeth = [

        ...UPPER_RIGHT,
        ...UPPER_LEFT,
        ...LOWER_LEFT,
        ...LOWER_RIGHT

    ];

    allTeeth.forEach(number => {

        odontogram[number] = createTooth(number);

    });

    return odontogram;

}
```

## 📄 src\components\OdontogramV2\data\createTooth.js
```javascript
import { createFaces } from "./createFace";

function getToothType(number) {

    const lastDigit = number % 10;

    switch (lastDigit) {

        case 1:
        case 2:
            return "incisor";

        case 3:
            return "canine";

        case 4:
        case 5:
            return "premolar";

        case 6:
        case 7:
        case 8:
            return "molar";

        default:
            return "unknown";

    }

}

export function createTooth(number) {

    return {

        number,

        type: getToothType(number),

        faces: createFaces()

    };

}
```

## 📄 src\components\OdontogramV2\data\createTreatment.js
```javascript
export function createTreatment({

    recordId = null,

    groupId = null,

    treatmentId,

    treatmentName,

    treatmentColor = null,

    materialId = null,

    materialName = "",

    observations = "",

    status = "pendiente",

    date = null,

    completedAt = null,

    cost = null

}) {

    return {

        recordId,

        groupId,

        id: treatmentId,

        name: treatmentName,

        color: treatmentColor,

        material: {

            id: materialId,

            name: materialName

        },

        observations,

        status,

        date,

        completedAt,

        cost

    };

}
```

## 📄 src\components\OdontogramV2\data\teeth.js
```javascript
export const UPPER_RIGHT = [

    18,

    17,

    16,

    15,

    14,

    13,

    12,

    11

];

export const UPPER_LEFT = [

    21,

    22,

    23,

    24,

    25,

    26,

    27,

    28

];

export const LOWER_LEFT = [

    48,

    47,

    46,

    45,

    44,

    43,

    42,

    41

];

export const LOWER_RIGHT = [

    31,

    32,

    33,

    34,

    35,

    36,

    37,

    38

];
```

## 📄 src\components\OdontogramV2\geometry\canines.js
```javascript
import { createGeometry } from "./generators/createGeometry";

export const CANINE_GEOMETRY = createGeometry({

    width: 54,

    height: 68,

    centerSize: 22

});
```

## 📄 src\components\OdontogramV2\geometry\faces.js
```javascript
export const FACE_GEOMETRY = {

    top: "22,8 42,8 38,22 26,22",

    left: "8,22 22,8 26,22 18,44",

    center: "26,22 38,22 38,42 26,42",

    right: "42,8 56,22 46,44 38,22",

    bottom: "26,42 38,42 42,56 22,56"

};

export const FACE_ORDER = [

    "top",

    "left",

    "center",

    "right",

    "bottom"

];
```

## 📄 src\components\OdontogramV2\geometry\generators\createGeometry.js
```javascript
export function createGeometry({

    width,

    height,

    centerSize

}) {

    const centerX = width / 2;
    const centerY = height / 2;
    const centerHalf = centerSize / 2;

    return {

        top: `${centerHalf},0 ${width - centerHalf},0 ${centerX + centerHalf},${centerY - centerHalf} ${centerX - centerHalf},${centerY - centerHalf}`,

        right: `${width},${centerHalf} ${width},${height - centerHalf} ${centerX + centerHalf},${centerY + centerHalf} ${centerX + centerHalf},${centerY - centerHalf}`,

        bottom: `${centerX - centerHalf},${centerY + centerHalf} ${centerX + centerHalf},${centerY + centerHalf} ${width - centerHalf},${height} ${centerHalf},${height}`,

        left: `0,${centerHalf} ${centerX - centerHalf},${centerY - centerHalf} ${centerX - centerHalf},${centerY + centerHalf} 0,${height - centerHalf}`,

        center: `${centerX - centerHalf},${centerY - centerHalf} ${centerX + centerHalf},${centerY - centerHalf} ${centerX + centerHalf},${centerY + centerHalf} ${centerX - centerHalf},${centerY + centerHalf}`

    };

}
```

## 📄 src\components\OdontogramV2\geometry\incisorPath.js
```javascript
export const INCISOR_PATH = {

    top: "18,8 42,8 36,24 24,24",

    right: "42,8 50,18 40,42 36,24",

    bottom: "24,24 36,24 42,56 18,56",

    left: "10,18 24,24 18,56 2,42",

    center: "24,24 36,24 36,36 24,36"

};
```

## 📄 src\components\OdontogramV2\geometry\incisors.js
```javascript
import { createGeometry } from "./generators/createGeometry";

export const INCISOR_GEOMETRY = createGeometry({

    width: 48,

    height: 64,

    centerSize: 20

});
```

## 📄 src\components\OdontogramV2\geometry\molars.js
```javascript
import { createGeometry } from "./generators/createGeometry";

export const MOLAR_GEOMETRY = createGeometry({

    width: 70,

    height: 66,

    centerSize: 28

});
```

## 📄 src\components\OdontogramV2\geometry\premolars.js
```javascript
import { createGeometry } from "./generators/createGeometry";

export const PREMOLAR_GEOMETRY = createGeometry({

    width: 60,

    height: 66,

    centerSize: 24

});
```

## 📄 src\components\OdontogramV2\hooks\useInitialOdontogram.js
```javascript
import {
    useCallback,
    useEffect,
    useMemo,
    useState
} from "react";

import {

    getInitialConditions,
    getOrCreateInitialEvaluation,
    getInitialFindings,
    saveInitialFindings,
    deleteInitialFindingsByTeeth,
    deleteInitialConditionByTeeth,
    deleteInitialFinding,
    deleteInitialFindingsByIds,
    updateInitialFinding,
    finalizeInitialEvaluation

} from "../../../supabase/initialOdontogram";

import {

    mapDatabaseToInitialFindings

} from "../services/initialFindingMapper";

import {
    findInitialConditionConflicts
} from "../services/initialConditionRules";

const INITIAL_FORM = {

    conditionId: "",

    observations: ""

};

export function useInitialOdontogram(
    patient
) {

    const [
        evaluation,
        setEvaluation
    ] = useState(null);


    const [
        conditions,
        setConditions
    ] = useState([]);


    const [
        findings,
        setFindings
    ] = useState([]);


    const [
        selectedFaces,
        setSelectedFaces
    ] = useState([]);


    const [
        selectedTeeth,
        setSelectedTeeth
    ] = useState([]);


    const [
        conditionData,
        setConditionData
    ] = useState(
        INITIAL_FORM
    );


    const [
        isLoading,
        setIsLoading
    ] = useState(false);


    const [
        isSaving,
        setIsSaving
    ] = useState(false);


    const [
        loadError,
        setLoadError
    ] = useState(null);

    const [
        deletingFindingId,
        setDeletingFindingId
    ] = useState(null);

    const [
        editingFinding,
        setEditingFinding
    ] = useState(null);

    const isFinalized =
        evaluation?.estado ===
        "Finalizado";  

    const [
        isFinalizing,
        setIsFinalizing
    ] = useState(false);

    const selectedCondition =
        useMemo(() => {

            return conditions.find(
                (condition) =>
                    String(condition.id) ===
                    String(
                        conditionData.conditionId
                    )
            ) || null;

        }, [
            conditions,
            conditionData.conditionId
        ]);


    const selectionScope =
        selectedCondition?.alcance ||
        null;

    const selectedToothNumbers =
        useMemo(() => {

            if (
                selectionScope === "cara"
            ) {

                return [
                    ...new Set(
                        selectedFaces.map(
                            (face) =>
                                String(
                                    face.toothNumber
                                )
                        )
                    )
                ];

            }

            if (
                selectionScope === "pieza"
            ) {

                return selectedTeeth.map(
                    (toothNumber) =>
                        String(
                            toothNumber
                        )
                );

            }

            return [];

        }, [
            selectionScope,
            selectedFaces,
            selectedTeeth
        ]);
    const getHealthyConflicts =
        useCallback(() => {

            if (
                selectedCondition?.codigo !==
                "sano"
            ) {

                return [];

            }

            const selectedSet =
                new Set(
                    selectedToothNumbers
                );

            return findings.filter(
                (finding) => {

                    return (
                        selectedSet.has(
                            String(
                                finding.toothNumber
                            )
                        ) &&
                        finding.condition.code !==
                            "sano"
                    );

                }
            );

        }, [
            findings,
            selectedCondition?.codigo,
            selectedToothNumbers
        ]);
    const clearSelection =
        useCallback(() => {

            setSelectedFaces([]);

            setSelectedTeeth([]);

        }, []);

    const getConditionConflicts =
        useCallback(() => {

            return findInitialConditionConflicts({

                findings,

                selectedCondition,

                toothNumbers:
                    selectedToothNumbers

            });

        }, [

            findings,

            selectedCondition,

            selectedToothNumbers

        ]);

    const reloadInitialOdontogram =
        useCallback(async () => {

            if (!patient?.id) {

                setEvaluation(null);

                setFindings([]);

                return;

            }

            try {

                const currentEvaluation =
                    await getOrCreateInitialEvaluation(
                        patient.id
                    );

                const rows =
                    await getInitialFindings(
                        currentEvaluation.id
                    );

                setEvaluation(
                    currentEvaluation
                );

                setFindings(
                    mapDatabaseToInitialFindings(
                        rows
                    )
                );

            } catch (error) {

                console.error(
                    "Error cargando odontograma inicial:",
                    error
                );

                throw error;

            }

        }, [
            patient?.id
        ]);

        async function removeInitialFinding(
            finding
        ) {
            if (isFinalized) {

                throw new Error(
                    "No se pueden eliminar hallazgos de una evaluación finalizada."
                );

            }
            if (!finding?.id) {
                return;
            }

            setDeletingFindingId(
                finding.id
            );

            try {

                await deleteInitialFinding(
                    finding.id
                );

                await reloadInitialOdontogram();

            } catch (error) {

                console.error(
                    "Error eliminando hallazgo:",
                    error
                );

                throw error;

            } finally {

                setDeletingFindingId(null);

            }

        }

    async function finalizeEvaluation() {

        if (!evaluation?.id) {

            throw new Error(
                "No existe una evaluación inicial."
            );

        }


        if (isFinalized) {

            return;

        }


        setIsFinalizing(true);


        try {

            await finalizeInitialEvaluation(
                evaluation.id
            );


            await reloadInitialOdontogram();


            setEditingFinding(null);

            setConditionData(
                INITIAL_FORM
            );

            clearSelection();


        } catch (error) {

            console.error(
                "Error finalizando evaluación:",
                error
            );

            throw error;


        } finally {

            setIsFinalizing(false);

        }

    }
    function startEditingFinding(
        finding
    ) {

        if (isFinalized) {
            return;
        }

        if (!finding) {
            return;
        }

        clearSelection();

        setEditingFinding(
            finding
        );

        setConditionData({

            conditionId:
                String(
                    finding.condition.id
                ),

            observations:
                finding.observations || ""

        });

    }

    function cancelEditingFinding() {

        setEditingFinding(null);

        setConditionData(
            INITIAL_FORM
        );

        clearSelection();

    }

    async function saveEditedFinding() {

        if (isFinalized) {

            throw new Error(
                "No se puede modificar una evaluación finalizada."
            );

        }

        if (!editingFinding?.id) {

            throw new Error(
                "No existe un hallazgo en edición."
            );

        }

        if (!selectedCondition) {

            throw new Error(
                "Selecciona una condición."
            );

        }

        /*
            No permitimos cambiar de una condición
            por cara a una condición por pieza,
            ni viceversa.
        */
        if (
            selectedCondition.alcance !==
            editingFinding.condition.scope
        ) {

            throw new Error(
                "La nueva condición debe corresponder al mismo tipo de selección."
            );

        }

        setIsSaving(true);

        try {

            await updateInitialFinding(
                editingFinding.id,
                {
                    conditionId:
                        selectedCondition.id,

                    observations:
                        conditionData.observations
                }
            );

            await reloadInitialOdontogram();

            setEditingFinding(null);

            setConditionData(
                INITIAL_FORM
            );

            clearSelection();

        } finally {

            setIsSaving(false);

        }

    }

    useEffect(() => {

        let active = true;


        async function load() {

            if (!patient?.id) {

                setEvaluation(null);

                setConditions([]);

                setFindings([]);

                return;

            }


            setIsLoading(true);

            setLoadError(null);

            clearSelection();

            setConditionData(
                INITIAL_FORM
            );


            try {

                const [

                    loadedConditions,

                    currentEvaluation

                ] = await Promise.all([

                    getInitialConditions(),

                    getOrCreateInitialEvaluation(
                        patient.id
                    )

                ]);


                const rows =
                    await getInitialFindings(
                        currentEvaluation.id
                    );


                if (!active) {
                    return;
                }


                setConditions(
                    loadedConditions
                );


                setEvaluation(
                    currentEvaluation
                );


                setFindings(
                    mapDatabaseToInitialFindings(
                        rows
                    )
                );


            } catch (error) {

                console.error(
                    "Error cargando estado inicial:",
                    error
                );


                if (active) {

                    setLoadError(
                        "No fue posible cargar el odontograma inicial."
                    );

                }


            } finally {

                if (active) {

                    setIsLoading(false);

                }

            }

        }


        void load();


        return () => {

            active = false;

        };


    }, [
        patient?.id,
        clearSelection
    ]);


    useEffect(() => {

        /*
            Cuando cambia la condición,
            eliminamos cualquier selección
            anterior.

            Así evitamos por ejemplo:

            Caries → caras seleccionadas

            cambiar a:

            Ausente → guardar accidentalmente
            las selecciones anteriores.
        */

        clearSelection();

    }, [
        conditionData.conditionId,
        clearSelection
    ]);


    function toggleFaceSelection(
        toothNumber,
        faceId
    ) {

        if (isFinalized) {
            return;
        }

        if (
            selectionScope !== "cara"
        ) {

            return;

        }


        const key =
            `${toothNumber}:${faceId}`;


        setSelectedFaces(
            (previous) => {

                const exists =
                    previous.some(
                        (item) =>
                            item.key === key
                    );


                if (exists) {

                    return previous.filter(
                        (item) =>
                            item.key !== key
                    );

                }


                return [

                    ...previous,

                    {
                        key,

                        toothNumber:
                            String(
                                toothNumber
                            ),

                        faceId

                    }

                ];

            }
        );

    }


    function toggleToothSelection(
        toothNumber
    ) {

        if (isFinalized) {
            return;
        }

        if (
            selectionScope !== "pieza"
        ) {

            return;

        }


        const value =
            String(
                toothNumber
            );


        setSelectedTeeth(
            (previous) => {

                if (
                    previous.includes(
                        value
                    )
                ) {

                    return previous.filter(
                        (item) =>
                            item !== value
                    );

                }


                return [
                    ...previous,
                    value
                ];

            }
        );

    }


async function saveSelectedCondition({
    replaceExisting = false,
    replaceConflicts = false
} = {}) {

    if (isFinalized) {

        throw new Error(
            "La evaluación inicial ya fue finalizada."
        );

    }

    if (!evaluation?.id) {
        //...
    }

    /*
        1. VALIDACIONES
    */

    if (!evaluation?.id) {

        throw new Error(
            "No existe una evaluación inicial."
        );

    }


    if (!selectedCondition) {

        throw new Error(
            "Selecciona una condición."
        );

    }


    if (
        selectionScope === "cara" &&
        selectedFaces.length === 0
    ) {

        throw new Error(
            "Selecciona al menos una cara."
        );

    }


    if (
        selectionScope === "pieza" &&
        selectedTeeth.length === 0
    ) {

        throw new Error(
            "Selecciona al menos una pieza."
        );

    }


    const conditionCode =
        selectedCondition.codigo;


    /*
        2. REGLA ESPECIAL DE SANO

        Esto se revisa antes de activar
        isSaving porque todavía no hemos
        modificado nada.
    */

    if (
        conditionCode === "sano"
    ) {

        const healthyConflicts =
            getHealthyConflicts();


        if (
            healthyConflicts.length > 0 &&
            !replaceExisting
        ) {

            throw new Error(
                "HEALTHY_CONFLICT"
            );

        }

    }


    /*
        3. REVISAR INCOMPATIBILIDADES

        Ejemplo:

        Ausente + Endodoncia
        Ausente + Movilidad
        etc.

        Los cambios de movilidad:
        M1 → M2
        M2 → M3

        aparecerán en conflicts.automatic.
    */

    const conflicts =
        getConditionConflicts();


    if (
        conflicts.confirmation.length > 0 &&
        !replaceConflicts
    ) {

        throw new Error(
            "CONDITION_CONFLICT"
        );

    }


    /*
        A partir de aquí sí comenzaremos
        a modificar datos.
    */

    setIsSaving(true);


    try {

        /*
            4. REEMPLAZOS AUTOMÁTICOS

            Ejemplo:

            Movilidad 1
                ↓
            Movilidad 2

            Eliminamos M1 automáticamente.
        */

        if (
            conflicts.automatic.length > 0
        ) {

            await deleteInitialFindingsByIds(

                conflicts.automatic.map(
                    (finding) =>
                        finding.id
                )

            );

        }


        /*
            5. ELIMINAR CONFLICTOS CONFIRMADOS

            Ejemplo:

            Endodoncia
                ↓
            usuario registra Ausente
                ↓
            confirma reemplazo
                ↓
            eliminamos Endodoncia
        */

        if (
            replaceConflicts &&
            conflicts.confirmation.length > 0
        ) {

            await deleteInitialFindingsByIds(

                conflicts.confirmation.map(
                    (finding) =>
                        finding.id
                )

            );

        }


        /*
            6. SI REGISTRAMOS ALGO DIFERENTE
            DE SANO, ELIMINAMOS SANO.

            Ejemplo:

            Sano
                ↓
            Caries
                ↓
            Sano desaparece.
        */

        if (
            conditionCode !== "sano"
        ) {

            const healthyCondition =
                conditions.find(
                    (condition) =>
                        condition.codigo ===
                        "sano"
                );


            if (healthyCondition) {

                await deleteInitialConditionByTeeth(

                    evaluation.id,

                    healthyCondition.id,

                    selectedToothNumbers

                );

            }

        }


        /*
            7. SI EL USUARIO CONFIRMÓ
            MARCAR COMO SANO:

            eliminamos todos los hallazgos
            existentes de las piezas.
        */

        if (
            conditionCode === "sano" &&
            replaceExisting
        ) {

            await deleteInitialFindingsByTeeth(

                evaluation.id,

                selectedToothNumbers

            );

        }


        /*
            8. SI LA PIEZA YA ESTABA SANA
            Y VOLVEMOS A GUARDAR SANO,

            eliminamos el registro anterior
            para no duplicarlo.
        */

        if (
            conditionCode === "sano" &&
            !replaceExisting
        ) {

            const healthyCondition =
                conditions.find(
                    (condition) =>
                        condition.codigo ===
                        "sano"
                );


            if (healthyCondition) {

                await deleteInitialConditionByTeeth(

                    evaluation.id,

                    healthyCondition.id,

                    selectedToothNumbers

                );

            }

        }


        /*
            9. CREAR LOS NUEVOS REGISTROS
        */

        const groupId =
            crypto.randomUUID();


        let rows = [];


        /*
            CONDICIONES POR CARA

            Actualmente principalmente:
            Caries
        */

        if (
            selectionScope === "cara"
        ) {

            rows =
                selectedFaces.map(
                    (face) => ({

                        evaluacion_id:
                            evaluation.id,

                        condicion_id:
                            selectedCondition.id,

                        numero_pieza:
                            face.toothNumber,

                        cara:
                            face.faceId,

                        observaciones:
                            conditionData.observations ||
                            null,

                        grupo_id:
                            groupId

                    })
                );

        }


        /*
            CONDICIONES POR PIEZA

            Sano
            Ausente
            Movilidad
            Endodoncia
            Prótesis
            etc.
        */

        if (
            selectionScope === "pieza"
        ) {

            rows =
                selectedTeeth.map(
                    (toothNumber) => ({

                        evaluacion_id:
                            evaluation.id,

                        condicion_id:
                            selectedCondition.id,

                        numero_pieza:
                            toothNumber,

                        cara: null,

                        observaciones:
                            conditionData.observations ||
                            null,

                        grupo_id:
                            groupId

                    })
                );

        }


        /*
            10. GUARDAR
        */

        await saveInitialFindings(
            rows
        );


        /*
            11. RECARGAR DESDE SUPABASE
        */

        await reloadInitialOdontogram();


        /*
            12. LIMPIAR FORMULARIO
        */

        clearSelection();


        setConditionData(
            INITIAL_FORM
        );


    } finally {

        /*
            Pase lo que pase:
            éxito o error,
            reactivamos el formulario.
        */

        setIsSaving(false);

    }

}


    return {

        evaluation,

        conditions,

        findings,

        selectedCondition,

        selectionScope,

        conditionData,

        setConditionData,

        selectedFaces,

        selectedTeeth,

        toggleFaceSelection,

        toggleToothSelection,

        clearSelection,

        saveSelectedCondition,

        getHealthyConflicts,

        getConditionConflicts,

        removeInitialFinding,

        deletingFindingId,

        editingFinding,

        startEditingFinding,

        cancelEditingFinding,

        saveEditedFinding,

        finalizeEvaluation,

        isFinalized,

        isFinalizing,

        reloadInitialOdontogram,

        isLoading,

        isSaving,

        loadError

    };
}
```

## 📄 src\components\OdontogramV2\hooks\useOdontogram.js
```javascript
import {

    useCallback,

    useEffect,

    useMemo,

    useState

} from "react";

import {
    createOdontogram
} from "../data/createOdontogram";

import {
    applyTreatmentToFaces
} from "../services/treatmentEngine";

import {

    mapDatabaseToOdontogram,

    mapDatabaseToPendingTreatments,

    mapFacesToDatabase

} from "../services/treatmentMapper";

import {

    deleteTreatmentGroup,

    deleteTreatmentsByIds,

    loadOdontogram,

    saveTreatment,

    updateTreatmentGroupStatus

} from "../../../supabase/odontogram";

const EMPTY_TREATMENT_DATA = {

    treatmentId: "",

    treatmentName: "",

    treatmentColor: "",

    materialId: "",

    materialName: "",

    observations: ""

};

export function useOdontogram(patient) {

    const [odontogram, setOdontogram] =
        useState(() => createOdontogram());

    const [

        treatmentData,

        setTreatmentData

    ] = useState({

        ...EMPTY_TREATMENT_DATA

    });

    const [

        pendingTreatments,

        setPendingTreatments

    ] = useState([]);

    const [isLoading, setIsLoading] =
        useState(false);

    const [isSaving, setIsSaving] =
        useState(false);

    const [
        pendingAction,
        setPendingAction
    ] = useState(null);

    const [loadError, setLoadError] =
        useState(null);

    function toggleFaceSelection(
        toothNumber,
        faceId
    ) {

        setOdontogram((previous) => {

            const updated =
                structuredClone(previous);

            const tooth =
                updated[toothNumber];

            if (!tooth?.faces?.[faceId]) {

                return previous;

            }

            tooth.faces[faceId].selected =
                !tooth.faces[faceId].selected;

            return updated;

        });

    }

    const FACE_IDS = [
        "top",
        "right",
        "bottom",
        "left",
        "center"
    ];


    function toggleToothSelection(
        toothNumber
    ) {

        setOdontogram(
            (previous) => {

                const tooth =
                    previous[toothNumber];


                if (!tooth) {
                    return previous;
                }


                /*
                    Revisamos si ya están
                    seleccionadas todas las caras.
                */
                const allSelected =
                    FACE_IDS.every(
                        (faceId) =>
                            tooth.faces?.[
                                faceId
                            ]?.selected
                    );


                const updatedFaces = {
                    ...tooth.faces
                };


                /*
                    Si todas estaban seleccionadas,
                    las deseleccionamos.

                    Si faltaba aunque sea una,
                    seleccionamos todas.
                */
                FACE_IDS.forEach(
                    (faceId) => {

                        updatedFaces[
                            faceId
                        ] = {

                            ...updatedFaces[
                                faceId
                            ],

                            selected:
                                !allSelected

                        };

                    }
                );


                return {

                    ...previous,

                    [toothNumber]: {

                        ...tooth,

                        faces:
                            updatedFaces

                    }

                };

            }
        );

    }

    const selectedFaces = useMemo(() => {

        const faces = [];

        Object.values(odontogram)
            .forEach((tooth) => {

                Object.entries(tooth.faces)
                    .forEach(([
                        faceId,
                        face
                    ]) => {

                        if (face.selected) {

                            faces.push({

                                toothNumber:
                                    tooth.number,

                                faceId

                            });

                        }

                    });

            });

        return faces;

    }, [odontogram]);

    const reloadOdontogram =
        useCallback(async () => {

            if (!patient?.id) {

                setOdontogram(
                    createOdontogram()
                );

                setPendingTreatments([]);

                return [];

            }

            setIsLoading(true);

            setLoadError(null);

            try {

                const rows =
                    await loadOdontogram(
                        patient.id
                    );

                setOdontogram(
                    mapDatabaseToOdontogram(
                        rows
                    )
                );

                setPendingTreatments(
                    mapDatabaseToPendingTreatments(
                        rows
                    )
                );

                return rows;

            } catch (error) {

                console.error(
                    "Error al cargar el odontograma:",
                    error
                );

                setLoadError(
                    "No fue posible cargar el odontograma."
                );

                throw error;

            } finally {

                setIsLoading(false);

            }

        }, [patient?.id]);

    useEffect(() => {

        void reloadOdontogram();

    }, [reloadOdontogram]);

    function applyTreatment(

        faces = selectedFaces,

        data = treatmentData

    ) {

        if (faces.length === 0) {

            return;

        }

        if (!data.treatmentId) {

            return;

        }

        setOdontogram((previous) =>

            applyTreatmentToFaces(

                previous,

                faces,

                data

            )

        );

    }

    async function saveSelectedTreatment() {

        if (!patient?.id) {

            return;

        }

        if (selectedFaces.length === 0) {

            return;

        }

        if (!treatmentData.treatmentId) {

            return;

        }

        const facesToSave =
            selectedFaces.map((face) => ({

                ...face

            }));

        const treatmentToSave = {

            ...treatmentData

        };

        setIsSaving(true);

        try {

            const rows =
                mapFacesToDatabase(

                    patient.id,

                    facesToSave,

                    treatmentToSave

                );

            await saveTreatment(rows);

            /*
                En lugar de pintar manualmente,
                volvemos a leer Supabase para
                obtener IDs, colores y estado real.
            */
            await reloadOdontogram();

            setTreatmentData({

                ...EMPTY_TREATMENT_DATA

            });

        } catch (error) {

            console.error(
                "Error al guardar tratamiento:",
                error
            );

            alert(
                "No fue posible guardar el tratamiento."
            );

        } finally {

            setIsSaving(false);

        }

    }

    async function deletePendingTreatment(
        item
    ) {

        if (!item) {

            return;

        }

        setPendingActionId(item.id);

        try {

            if (item.groupId) {

                await deleteTreatmentGroup(
                    item.groupId
                );

            } else {

                await deleteTreatmentsByIds(
                    item.recordIds
                );

            }

            /*
                Si existía un tratamiento anterior
                en esa cara, reaparecerá al recargar.
            */
            await reloadOdontogram();

        } catch (error) {

            console.error(
                "Error al eliminar tratamiento:",
                error
            );

            alert(
                "No fue posible eliminar el tratamiento."
            );

        } finally {

            setPendingActionId(null);

        }

    }


    async function changePendingTreatmentStatus(
        item,
        status,
        actionType
    ) {

        if (!item) {
            return;
        }

        setPendingAction({
            id: item.id,
            type: actionType
        });

        try {

            const updatedRows =
                await updateTreatmentGroupStatus({

                    groupId: item.groupId,

                    recordIds: item.recordIds,

                    status

                });

            if (updatedRows.length === 0) {

                throw new Error(
                    "No se encontraron tratamientos pendientes para actualizar."
                );

            }

            await reloadOdontogram();

        } catch (error) {

            console.error(
                `Error al cambiar el tratamiento a ${status}:`,
                error
            );

            alert(
                `No fue posible cambiar el tratamiento a ${status.toLowerCase()}.`
            );

        } finally {

            setPendingAction(null);

        }

    }

    async function completePendingTreatment(item) {

        await changePendingTreatmentStatus(
            item,
            "Completado",
            "complete"
        );

    }

    async function cancelPendingTreatment(item) {

        await changePendingTreatmentStatus(
            item,
            "Cancelado",
            "cancel"
        );

    }

    return {

        patient,

        odontogram,

        toggleFaceSelection,

        toggleToothSelection,

        selectedFaces,

        applyTreatment,

        treatmentData,

        setTreatmentData,

        saveSelectedTreatment,

        pendingTreatments,

        completePendingTreatment,

        cancelPendingTreatment,

        reloadOdontogram,

        isLoading,

        isSaving,

        pendingAction,

        loadError

    };

}
```

## 📄 src\components\OdontogramV2\InitialOdontogram.jsx
```jsx
import {
    useMemo,
    useState
} from "react";

import "./Odontogram.css";

import ToothGroup from "./components/ToothGroup";

import {
    createOdontogram
} from "./data/createOdontogram";

import {
    getToothPosition
} from "./utils/getToothPosition";

import {
    useInitialOdontogramContext
} from "./context/InitialOdontogramContext";

import {
    buildInitialToothVisuals
} from "./services/initialVisualMapper";

import InitialFindingTooltip
    from "./components/Tooltip/InitialFindingTooltip";


function InitialOdontogram() {

    const {

        findings,

        selectedCondition,

        selectionScope,

        selectedFaces,

        selectedTeeth,

        toggleFaceSelection,

        toggleToothSelection,

        isFinalized,

        isLoading

    } = useInitialOdontogramContext();


    /*
        Odontograma base vacío.

        Los colores y hallazgos del estado inicial
        se incorporan únicamente a nivel visual.
    */
    const odontogram =
        useMemo(
            () => createOdontogram(),
            []
        );


    /*
        Construye los colores visuales
        correspondientes a los hallazgos.

        Por ejemplo:
        caries -> cara roja
    */
    const toothVisuals =
        useMemo(() => {

            return buildInitialToothVisuals(
                findings
            );

        }, [
            findings
        ]);


    /*
        Estado del tooltip.
    */
    const [
        tooltip,
        setTooltip
    ] = useState(null);


    /*
        Agrupamos todos los hallazgos
        por número de pieza.

        Así evitamos hacer findings.filter()
        para cada uno de los 32 dientes
        en cada render.
    */
    const findingsByTooth =
        useMemo(() => {

            const map = {};


            findings.forEach(
                (finding) => {

                    const toothNumber =
                        String(
                            finding.toothNumber
                        );


                    if (
                        !map[toothNumber]
                    ) {

                        map[toothNumber] = [];

                    }


                    map[
                        toothNumber
                    ].push(
                        finding
                    );

                }
            );


            return map;

        }, [
            findings
        ]);


    /*
        HOVER DEL ESTADO INICIAL

        Al pasar por una cara mostramos:

        - condiciones aplicadas a toda la pieza
        - condiciones específicas de esa cara
    */
    function handleInitialFaceHover(
        toothNumber,
        faceId,
        toothFindings,
        event
    ) {

        if (!event) {
            return;
        }


        const relevantFindings =
            toothFindings.filter(
                (finding) => {

                    /*
                        Hallazgo de pieza completa.

                        Ejemplos:
                        - Movilidad
                        - Ausente
                        - Endodoncia
                        - Prótesis
                    */
                    if (!finding.faceId) {

                        return true;

                    }


                    /*
                        Hallazgo específico
                        de la cara actual.

                        Ejemplo:
                        Caries.
                    */
                    return (
                        finding.faceId ===
                        faceId
                    );

                }
            );


        /*
            Si no existen hallazgos relevantes,
            no mostramos tooltip.
        */
        if (
            relevantFindings.length === 0
        ) {

            setTooltip(null);

            return;

        }


        setTooltip({

            toothNumber:
                String(
                    toothNumber
                ),

            faceId,

            findings:
                relevantFindings,

            x:
                event.clientX,

            y:
                event.clientY

        });

    }


    /*
        Cerramos tooltip
        al salir de la cara.
    */
    function handleInitialFaceLeave() {

        setTooltip(null);

    }


    /*
        Devuelve las caras actualmente
        seleccionadas de una pieza.
    */
    function getSelectedFaceIds(
        toothNumber
    ) {

        return selectedFaces

            .filter(
                (item) =>
                    String(
                        item.toothNumber
                    ) ===
                    String(
                        toothNumber
                    )
            )

            .map(
                (item) =>
                    item.faceId
            );

    }


    /*
        Determina si una pieza completa
        está seleccionada.
    */
    function isToothSelected(
        toothNumber
    ) {

        return selectedTeeth.includes(
            String(
                toothNumber
            )
        );

    }


    if (isLoading) {

        return (

            <div className="odontogramLoading">

                Cargando odontograma inicial...

            </div>

        );

    }


    return (

        <>

            <svg

                className="odontogramSvg"

                viewBox="0 0 1200 400"

                preserveAspectRatio="xMidYMid meet"

                role="img"

                aria-label="Odontograma inicial del paciente"

            >

                {Object.values(
                    odontogram
                ).map(
                    (tooth) => {

                        /*
                            Posición visual
                            de esta pieza.
                        */
                        const {

                            x,

                            y,

                            numberY

                        } = getToothPosition(
                            tooth.number
                        );


                        /*
                            Información visual generada
                            por initialVisualMapper.

                            Principalmente usamos aquí
                            faceColors para pintar caries.
                        */
                        const toothVisual =

                            toothVisuals[
                                String(
                                    tooth.number
                                )
                            ] || {

                                faceColors: {},

                                wholeToothFindings: []

                            };


                        /*
                            AQUÍ ESTABA EL CAMBIO
                            QUE FALTABA.

                            Obtenemos TODOS los hallazgos
                            de esta pieza.

                            No solamente
                            wholeToothFindings.
                        */
                        const toothFindings =

                            findingsByTooth[
                                String(
                                    tooth.number
                                )
                            ] || [];


                        return (

                            <ToothGroup

                                key={
                                    tooth.number
                                }

                                tooth={
                                    tooth
                                }

                                x={
                                    x
                                }

                                y={
                                    y
                                }

                                numberY={
                                    numberY
                                }


                                /*
                                    En borrador:

                                    necesitamos una condición
                                    seleccionada para modificar.

                                    Finalizado:

                                    no permitimos modificar.
                                */
                                disabled={
                                    isFinalized ||
                                    !selectedCondition
                                }


                                selectionScope={
                                    selectionScope ||
                                    "cara"
                                }


                                selectedFaceIds={
                                    getSelectedFaceIds(
                                        tooth.number
                                    )
                                }


                                toothSelected={
                                    isToothSelected(
                                        tooth.number
                                    )
                                }


                                onFaceClick={
                                    toggleFaceSelection
                                }


                                onToothClick={
                                    toggleToothSelection
                                }


                                /*
                                    Colores por cara.

                                    Ejemplo:
                                    caries roja.
                                */
                                faceFillOverrides={
                                    toothVisual.faceColors
                                }


                                /*
                                    IMPORTANTE:

                                    Ahora ClinicalTooth recibe
                                    TODOS los hallazgos de la pieza.

                                    Esto permite al tooltip conocer
                                    tanto condiciones de pieza
                                    como condiciones de cara.
                                */
                                initialFindings={
                                    toothFindings
                                }


                                /*
                                    Eventos del tooltip inicial.
                                */
                                onInitialFaceHover={
                                    handleInitialFaceHover
                                }

                                onInitialFaceLeave={
                                    handleInitialFaceLeave
                                }

                            />

                        );

                    }
                )}

            </svg>


            {/*
                El tooltip se renderiza fuera del SVG.

                InitialFindingTooltip internamente
                utiliza createPortal(document.body).
            */}
            <InitialFindingTooltip
                tooltip={
                    tooltip
                }
            />

        </>

    );

}


export default InitialOdontogram;
```

## 📄 src\components\OdontogramV2\layout\Workspace.css
```css
.workspace {
    flex: 1;

    display: grid;

    grid-template-rows:
        minmax(220px, 32vh)
        minmax(0, 1fr);

    gap: 10px;

    padding:
        10px
        16px
        14px;

    min-height: 0;

    overflow: hidden;

    box-sizing: border-box;
}


.workspaceTop {
    min-height: 0;
}


.workspaceCanvas {
    min-width: 0;
    min-height: 0;

    display: flex;

    justify-content: center;
    align-items: center;

    padding: 0;
    margin: 0;

    background: transparent;

    border: none;

    overflow: hidden;
}


/* ========================================
   BOTTOM AREA
======================================== */

.workspaceBottom {
    display: grid;

    grid-template-columns:
        340px
        minmax(0, 1fr);

    gap: 10px;

    min-width: 0;
    min-height: 0;

    align-items: stretch;
}


/* ========================================
   PANELS
======================================== */

.workspaceLeft,
.workspaceRight {
    min-width: 0;
    min-height: 0;

    background: #ffffff;

    border: 1px solid #dbe3ee;
    border-radius: 16px;

    overflow: hidden;
}


.workspaceLeft {
    padding: 0;
}


.workspaceRight {
    padding: 0;

    overflow: hidden;
}


/* ========================================
   LOW HEIGHT LAPTOPS
======================================== */

@media (max-height: 850px) {

    .workspace {
        grid-template-rows:
            minmax(195px, 29vh)
            minmax(0, 1fr);

        gap: 8px;

        padding:
            8px
            12px
            10px;
    }

}


/* ========================================
   NARROW SCREENS
======================================== */

@media (max-width: 1100px) {

    .workspaceBottom {
        grid-template-columns:
            minmax(280px, 320px)
            minmax(0, 1fr);
    }

}


.workspaceToolbar,
.workspaceCanvas,
.workspaceBottom {
    margin: 0;
}
```

## 📄 src\components\OdontogramV2\layout\Workspace.jsx
```jsx
import "./Workspace.css";

function Workspace({
    canvas,
    leftPanel,
    rightPanel
}) {
    return (
        <div className="workspace">

            <div className="workspaceCanvas">

                {canvas}

            </div>

            <div className="workspaceBottom">

                <div className="workspaceLeft">

                    {leftPanel}

                </div>

                <div className="workspaceRight">

                    {rightPanel}

                </div>

            </div>

        </div>
    );
}

export default Workspace;
```

## 📄 src\components\OdontogramV2\Odontogram.css
```css
.odontogram{

    width:100%;

    height:100%;

}
.odontogramSvg {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 100%;
}
```

## 📄 src\components\OdontogramV2\Odontogram.jsx
```jsx
import "./Odontogram.css";

import {
    useEffect,
    useRef,
    useState
} from "react";

import ToothGroup from
    "./components/ToothGroup";

import TreatmentTooltip from
    "./components/Tooltip/TreatmentTooltip";

import {
    getToothPosition
} from "./utils/getToothPosition";

import {
    useOdontogramContext
} from "./context/OdontogramContext";

function Odontogram() {

    const {

        odontogram,

        toggleFaceSelection,

        toggleToothSelection

    } = useOdontogramContext();

    const [
        tooltip,
        setTooltip
    ] = useState(null);

    const touchTimerRef =
        useRef(null);

    function clearTouchTimer() {

        if (
            touchTimerRef.current
        ) {

            window.clearTimeout(
                touchTimerRef.current
            );

            touchTimerRef.current =
                null;

        }

    }

    useEffect(() => {

        return () => {

            clearTouchTimer();

        };

    }, []);

    function handleFaceHover({

        event,

        toothNumber,

        faceId,

        face

    }) {

        clearTouchTimer();

        /*
            Solo mostramos información cuando
            la cara tiene un tratamiento.
        */
        if (!face?.treatment) {

            setTooltip(null);

            return;

        }

        const pointerType =
            event.pointerType ||
            "mouse";

        setTooltip({

            x: event.clientX,

            y: event.clientY,

            pointerType,

            toothNumber,

            faceId,

            face

        });

        /*
            En dispositivos táctiles el tooltip
            desaparece automáticamente.
        */
        if (
            pointerType !== "mouse"
        ) {

            touchTimerRef.current =
                window.setTimeout(
                    () => {

                        setTooltip(null);

                    },
                    4000
                );

        }

    }

    function handleFaceLeave() {

        setTooltip((current) => {

            if (
                current?.pointerType ===
                "mouse"
            ) {

                return null;

            }

            return current;

        });

    }

    return (

        <>

            <svg
                className="odontogramSvg"
                viewBox="0 0 1200 400"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Odontograma del paciente"
            >

                {Object.values(
                    odontogram
                ).map((tooth) => {

                    const {

                        x,

                        y,

                        numberY

                    } = getToothPosition(
                        tooth.number
                    );

                    return (

                        <ToothGroup
                            key={
                                tooth.number
                            }
                            tooth={tooth}
                            x={x}
                            y={y}
                            numberY={
                                numberY
                            }
                            onFaceClick={
                                toggleFaceSelection
                            }

                            onToothNumberClick ={
                                toggleToothSelection
                            }

                            onFaceHover={
                                handleFaceHover
                            }
                            onFaceLeave={
                                handleFaceLeave
                            }
                        />

                    );

                })}

            </svg>

            <TreatmentTooltip
                tooltip={tooltip}
            />

        </>

    );

}

export default Odontogram;
```

## 📄 src\components\OdontogramV2\OdontogramModule.css
```css
.odontogramSvg {
    display: block;

    width: 100%;
    height: auto;

    max-height: 330px;
    min-height: 220px;

    overflow: visible;
}

.toothGroup {
    transition:
        transform 160ms ease;
}

.toothNumber {
    fill: #334155;

    font-family:
        Inter,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

    font-size: 16px;

    font-weight: 600;

    pointer-events: none;

    user-select: none;
}

.odontogramModule {
    height: calc(100dvh - 64px);

    min-height: 0;

    display: flex;
    flex-direction: column;

    background: #f8fafc;

    box-sizing: border-box;

    overflow: hidden;
}

.odontogramModeBar {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 7px 20px 0px;
}

@media (max-height: 850px) {

    .odontogramSvg {
        max-height: 270px;
        min-height: 200px;
    }

}
```

## 📄 src\components\OdontogramV2\OdontogramModule.jsx
```jsx
import "./OdontogramModule.css";
import { OdontogramProvider } from "./context/OdontogramContext";
import Odontogram from "./Odontogram";
import TreatmentPanel from "./components/TreatmentPanel";
import PendingTreatments from "./components/PendingTreatments";
import Workspace from "./layout/Workspace";
import PatientHeader from "./components/Header/PatientHeader";
import OdontogramCanvas from "./components/Canvas/OdontogramCanvas";
import { useState } from "react";
import { InitialOdontogramProvider } from "./context/InitialOdontogramContext";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import InitialOdontogram from "./InitialOdontogram";
import InitialConditionPanel from "./components/InitialConditionPanel/InitialConditionPanel";
import InitialFindings from "./components/InitialFindings/InitialFindings";

function OdontogramModule({

    patient,

    onCancel

}) {

    const [
        mode,
        setMode
    ] = useState("initial");


    return (

        <div className="odontogramModule">

            <PatientHeader

                patient={patient}

                onCancel={onCancel}

            />


            <div className="odontogramModeBar">

                <ModeSelector

                    mode={mode}

                    onChange={setMode}

                />

            </div>


            {mode === "initial" && (

                <InitialOdontogramProvider
                    patient={patient}
                >

                    <Workspace

                        canvas={

                            <OdontogramCanvas>

                                <InitialOdontogram />

                            </OdontogramCanvas>

                        }

                        leftPanel={

                            <InitialConditionPanel />

                        }

                        rightPanel={

                            <InitialFindings />

                        }

                    />

                </InitialOdontogramProvider>

            )}


            {mode === "treatment" && (

                <OdontogramProvider
                    patient={patient}
                >

                    <Workspace

                        canvas={

                            <OdontogramCanvas>

                                <Odontogram />

                            </OdontogramCanvas>

                        }

                        leftPanel={

                            <TreatmentPanel />

                        }

                        rightPanel={

                            <PendingTreatments />

                        }

                    />

                </OdontogramProvider>

            )}

        </div>

    );

}


export default OdontogramModule;
```

## 📄 src\components\OdontogramV2\services\initialConditionRules.js
```javascript
const MOBILITY_CODES = new Set([
    "movilidad_1",
    "movilidad_2",
    "movilidad_3"
]);


const INCOMPATIBILITIES = {

    ausente: new Set([
        "caries",
        "movilidad_1",
        "movilidad_2",
        "movilidad_3",
        "endodoncia"
    ]),

    caries: new Set([
        "ausente"
    ]),

    movilidad_1: new Set([
        "ausente",
        "movilidad_2",
        "movilidad_3"
    ]),

    movilidad_2: new Set([
        "ausente",
        "movilidad_1",
        "movilidad_3"
    ]),

    movilidad_3: new Set([
        "ausente",
        "movilidad_1",
        "movilidad_2"
    ]),

    endodoncia: new Set([
        "ausente"
    ]),

    protesis_fija: new Set([
    ])

};


function isMobility(code) {

    return MOBILITY_CODES.has(
        code
    );

}


function isAutomaticReplacement(
    newCode,
    existingCode
) {

    /*
        Cambiar de M1 a M2, M2 a M3, etc.
        no requiere confirmación.

        Simplemente sustituimos el grado.
    */
    return (
        isMobility(newCode) &&
        isMobility(existingCode) &&
        newCode !== existingCode
    );

}


function conditionsConflict(
    newCode,
    existingCode
) {

    const newConditionRules =
        INCOMPATIBILITIES[
            newCode
        ];

    if (
        newConditionRules?.has(
            existingCode
        )
    ) {

        return true;

    }


    /*
        También comprobamos la relación
        inversa para mantener las reglas
        simétricas.

        Ejemplo:

        Ausente → Endodoncia

        y también:

        Endodoncia → Ausente
    */
    const existingConditionRules =
        INCOMPATIBILITIES[
            existingCode
        ];

    return Boolean(
        existingConditionRules?.has(
            newCode
        )
    );

}


export function findInitialConditionConflicts({

    findings,

    selectedCondition,

    toothNumbers

}) {

    if (
        !selectedCondition ||
        !Array.isArray(findings) ||
        !Array.isArray(toothNumbers)
    ) {

        return {
            automatic: [],
            confirmation: []
        };

    }


    const newCode =
        selectedCondition.codigo;


    /*
        Sano ya tiene su propia regla
        específica en useInitialOdontogram.
    */
    if (
        newCode === "sano"
    ) {

        return {
            automatic: [],
            confirmation: []
        };

    }


    const selectedTeeth =
        new Set(
            toothNumbers.map(
                String
            )
        );


    const automatic = [];

    const confirmation = [];


    findings.forEach(
        (finding) => {

            const toothNumber =
                String(
                    finding.toothNumber
                );


            if (
                !selectedTeeth.has(
                    toothNumber
                )
            ) {

                return;

            }


            const existingCode =
                finding.condition?.code;


            if (
                !existingCode ||
                existingCode === "sano" ||
                existingCode === newCode
            ) {

                return;

            }


            if (
                !conditionsConflict(
                    newCode,
                    existingCode
                )
            ) {

                return;

            }


            if (
                isAutomaticReplacement(
                    newCode,
                    existingCode
                )
            ) {

                automatic.push(
                    finding
                );

                return;

            }


            confirmation.push(
                finding
            );

        }
    );


    return {
        automatic,
        confirmation
    };

}
```

## 📄 src\components\OdontogramV2\services\initialFindingMapper.js
```javascript
function getRelation(relation) {

    if (Array.isArray(relation)) {

        return relation[0] ?? null;

    }

    return relation ?? null;
}


export function mapDatabaseToInitialFindings(
    rows
) {

    return rows.map((row) => {

        const condition =
            getRelation(
                row.condicion
            );

        return {

            id: row.id,

            evaluationId:
                row.evaluacion_id,

            groupId:
                row.grupo_id,

            toothNumber:
                String(
                    row.numero_pieza
                ),

            faceId:
                row.cara || null,

            observations:
                row.observaciones || "",

            createdAt:
                row.created_at,

            updatedAt:
                row.updated_at,

            condition: {

                id:
                    condition?.id ??
                    row.condicion_id,

                name:
                    condition?.nombre ||
                    "Condición",

                code:
                    condition?.codigo ||
                    "",

                scope:
                    condition?.alcance ||
                    "pieza",

                color:
                    condition?.color ||
                    null,

                symbol:
                    condition?.simbolo ||
                    null

            }

        };

    });

}
```

## 📄 src\components\OdontogramV2\services\initialVisualMapper.js
```javascript
export function buildInitialToothVisuals(
    findings
) {

    const visuals = {};

    findings.forEach((finding) => {

        const toothNumber =
            String(finding.toothNumber);

        if (!visuals[toothNumber]) {

            visuals[toothNumber] = {

                faceColors: {},

                wholeToothFindings: []

            };

        }

        const toothVisual =
            visuals[toothNumber];

        /*
            Hallazgos por cara.

            Actualmente Caries es el principal
            hallazgo que utiliza este alcance.
        */
        if (
            finding.condition.scope === "cara" &&
            finding.faceId
        ) {

            toothVisual.faceColors[
                finding.faceId
            ] =
                finding.condition.color ||
                "#DC2626";

            return;

        }

        /*
            Hallazgos que corresponden a
            toda la pieza.
        */
        toothVisual.wholeToothFindings.push(
            finding
        );

    });

    return visuals;

}
```

## 📄 src\components\OdontogramV2\services\treatmentEngine.js
```javascript
import {
    createTreatment
} from "../data/createTreatment";

export function applyTreatmentToFaces(

    odontogram,

    selectedFaces,

    treatmentData

) {

    const updated =
        structuredClone(odontogram);

    selectedFaces.forEach(({

        toothNumber,

        faceId

    }) => {

        const face =
            updated[toothNumber]
                ?.faces?.[faceId];

        if (!face) {

            return;

        }

        face.treatment = createTreatment({

            treatmentId:
                treatmentData.treatmentId,

            treatmentName:
                treatmentData.treatmentName,

            treatmentColor:
                treatmentData.treatmentColor,

            materialId:
                treatmentData.materialId,

            materialName:
                treatmentData.materialName,

            observations:
                treatmentData.observations,

            status: "pendiente"

        });

        face.status = "pendiente";

        face.notes =
            treatmentData.observations || "";

        face.updatedAt =
            new Date().toISOString();

        face.selected = false;

    });

    return updated;

}
```

## 📄 src\components\OdontogramV2\services\treatmentMapper.js
```javascript
import { createOdontogram } from "../data/createOdontogram";
import { createTreatment } from "../data/createTreatment";

const VALID_FACES = [
    "top",
    "left",
    "center",
    "right",
    "bottom"
];

const FACE_LABELS = {

    top: "Oclusal",

    bottom: "Lingual",

    left: "Mesial",

    right: "Distal",

    center: "Centro"

};

function normalizeStatus(status) {

    const normalized = String(status || "")
        .trim()
        .toLowerCase();

    if (normalized === "pendiente") {
        return "pendiente";
    }

    if (
        normalized === "completado" ||
        normalized === "realizado"
    ) {
        return "completado";
    }

    if (
        normalized === "cancelado" ||
        normalized === "cancelada"
    ) {
        return "cancelado";
    }

    return "healthy";
}

function getRelation(relation) {

    if (Array.isArray(relation)) {

        return relation[0] ?? null;

    }

    return relation ?? null;

}

export function mapFacesToDatabase(

    patientId,

    selectedFaces,

    treatmentData

) {

    const groupId = crypto.randomUUID();

    const currentDate =
        new Date().toISOString();

    return selectedFaces.map(({

        toothNumber,

        faceId

    }) => ({

        grupo_id: groupId,

        paciente_id: patientId,

        tratamiento_id:
            Number(treatmentData.treatmentId),

        material_id:
            treatmentData.materialId
                ? Number(treatmentData.materialId)
                : null,

        numero_pieza: String(toothNumber),

        cara: faceId,

        observaciones:
            treatmentData.observations?.trim() || "",

        estado: "Pendiente",

        fecha: currentDate

    }));

}

export function mapDatabaseToOdontogram(rows) {

    const odontogram = createOdontogram();

    /*
        La consulta viene ordenada de más reciente
        a más antigua. La primera aparición de una
        pieza/cara representa su estado actual.
    */
    const loadedFaces = new Set();

    rows.forEach((row) => {

        const toothNumber = String(row.numero_pieza);
        const faceId = row.cara;

        if (!odontogram[toothNumber]) {
            return;
        }

        if (!VALID_FACES.includes(faceId)) {
            return;
        }

        const normalizedStatus =
            normalizeStatus(row.estado);

        /*
            Un tratamiento cancelado permanece en
            el historial, pero no representa el estado
            actual de la cara.
        */
        if (normalizedStatus === "cancelado") {
            return;
        }

        const faceKey =
            `${toothNumber}:${faceId}`;

        if (loadedFaces.has(faceKey)) {
            return;
        }

        loadedFaces.add(faceKey);

        const treatment =
            getRelation(row.tratamiento);

        const material =
            getRelation(row.material);

        const face =
            odontogram[toothNumber].faces[faceId];

        face.selected = false;
        face.status = normalizedStatus;
        face.notes = row.observaciones || "";

        face.updatedAt =
            row.updated_at ||
            row.created_at ||
            row.fecha ||
            null;

        face.treatment = createTreatment({

            recordId: row.id,

            groupId: row.grupo_id,

            treatmentId: row.tratamiento_id,

            treatmentName:
                treatment?.nombre ||
                "Tratamiento sin nombre",

            treatmentColor:
                treatment?.color || null,

            materialId: row.material_id,

            materialName:
                material?.nombre || "",

            observations:
                row.observaciones || "",

            status: normalizedStatus,

            date:
                row.fecha ||
                row.created_at ||
                null,

            completedAt:
                row.fecha_realizacion || null,

            cost:
                row.costo ?? null
        });

    });

    return odontogram;

}

export function mapDatabaseToPendingTreatments(rows) {

    const groups = new Map();

    rows.forEach((row) => {

        if (
            normalizeStatus(row.estado) !==
            "pendiente"
        ) {

            return;

        }

        const treatment =
            getRelation(row.tratamiento);

        const material =
            getRelation(row.material);

        /*
            Los registros antiguos que no tengan
            grupo_id se tratarán como grupos individuales.
        */
        const groupKey =
            row.grupo_id ||
            `record-${row.id}`;

        if (!groups.has(groupKey)) {

            groups.set(groupKey, {

                id: groupKey,

                groupId:
                    row.grupo_id || null,

                recordIds: [],

                teeth: [],

                treatmentName:
                    treatment?.nombre ||
                    "Tratamiento sin nombre",

                treatmentColor:
                    treatment?.color || null,

                materialName:
                    material?.nombre || "",

                observations:
                    row.observaciones || "",

                status:
                    row.estado || "Pendiente",

                date:
                    row.fecha ||
                    row.created_at ||
                    null,

                cost:
                    row.costo ?? null

            });

        }

        const group =
            groups.get(groupKey);

        group.recordIds.push(row.id);

        const faceName =
            FACE_LABELS[row.cara] ||
            row.cara;

        const toothDescription =
            `${row.numero_pieza} (${faceName})`;

        if (
            !group.teeth.includes(
                toothDescription
            )
        ) {

            group.teeth.push(
                toothDescription
            );

        }

    });

    return Array.from(groups.values())
        .sort((first, second) => {

            const firstDate =
                new Date(first.date || 0);

            const secondDate =
                new Date(second.date || 0);

            return secondDate - firstDate;

        });

}
```

## 📄 src\components\OdontogramV2\Tooth\Shapes\CanineShape.jsx
```jsx

```

## 📄 src\components\OdontogramV2\Tooth\Shapes\IncisorShape.jsx
```jsx
import ToothFace from "../ToothFace";

import {

    INCISOR_OUTLINE,

    INCISOR_FACES

} from "../../geometry/incisors";

function IncisorShape({ tooth, onFaceClick }) {

    return (

        <svg

            width="72"

            height="72"

            viewBox="0 0 100 100"

        >

            {/* Fondo */}

            <path

                d={INCISOR_OUTLINE}

                fill="white"

            />

            {/* Caras */}

            {INCISOR_FACES.map(face => (

                <ToothFace

                    key={face.id}

                    name={face.id}

                    points={face.points}

                    color={tooth.faces[face.id].color}

                    selected={tooth.faces[face.id].selected}

                    onClick={() =>

                        onFaceClick(

                            tooth.number,

                            face.id

                        )

                    }

                />

            ))}

            {/* Contorno */}

            <path

                d={INCISOR_OUTLINE}

                fill="none"

                stroke="#334155"

                strokeWidth="1.5"

            />

        </svg>

    );

}

export default IncisorShape;
```

## 📄 src\components\OdontogramV2\Tooth\Shapes\MolarShape.jsx
```jsx

```

## 📄 src\components\OdontogramV2\Tooth\Shapes\PremolarShape.jsx
```jsx

```

## 📄 src\components\OdontogramV2\Tooth\Tooth.css
```css
.toothContainer{

    display:flex;

    flex-direction:column;

    align-items:center;

    gap:8px;

}

.toothNumber{

    font-weight:600;

    color:#374151;

}

.tooth{

    display:flex;

    flex-direction:column;

    align-items:center;

    width:74px;

    user-select:none;

}

.toothFace{

    background:white;

    border:1px solid #CBD5E1;

    cursor:pointer;

    transition:.2s;

}

.toothFace:hover{

    transform:scale(1.05);

    box-shadow:0 0 6px rgba(37,99,235,.25);

}

.toothFace.selected{

    outline:2px solid #2563EB;

}

.top{

    grid-column:2;

    grid-row:1;

    border-radius:8px 8px 0 0;

}

.left{

    grid-column:1;

    grid-row:2;

    border-radius:8px 0 0 8px;

}

.center{

    grid-column:2;

    grid-row:2;

}

.right{

    grid-column:3;

    grid-row:2;

    border-radius:0 8px 8px 0;

}

.bottom{

    grid-column:2;

    grid-row:3;

    border-radius:0 0 8px 8px;

}

.tooth-number{

    font-size:12px;

    font-weight:600;

    color:#475569;

    margin-bottom:6px;

}

.tooth svg{

    transition:.2s;

}

.tooth:hover svg{

    transform:scale(1.04);

}
```

## 📄 src\components\OdontogramV2\Tooth\Tooth.jsx
```jsx
import "./Tooth.css";
import ToothSvg from "./ToothSvg";

function Tooth({ tooth, onFaceClick }) {

    return (

        <div className="tooth">

            <span className="tooth-number">

                {tooth.number}

            </span>

            <ToothSvg

                tooth={tooth}

                onFaceClick={onFaceClick}

            />

        </div>

    );

}

export default Tooth;
```

## 📄 src\components\OdontogramV2\Tooth\ToothFace.css
```css
.tooth-face{

    cursor:pointer;

    transition:
        fill .18s ease,
        stroke .18s ease,
        opacity .18s ease;

}

.tooth-face:hover{

    opacity:.82;

}
```

## 📄 src\components\OdontogramV2\Tooth\ToothFace.jsx
```jsx
function ToothFace({

    name,

    points,

    color = "#FFFFFF",

    selected = false,

    onClick

}){

    return(

        <polygon

            points={points}

            fill={color}

            className="tooth-face"

            onClick={onClick}

        />

    );

}

export default ToothFace;
```

## 📄 src\components\OdontogramV2\Tooth\ToothSvg.jsx
```jsx
import { OUTLINES } from "../geometry/outlines";
import { BASE_FACES } from "../geometry/faces";
import ToothFace from "./ToothFace";

function ToothSvg({ tooth, onFaceClick }) {

    const outline = OUTLINES[tooth.type];

    return (

        <svg
            width="72"
            height="72"
            viewBox="0 0 100 100"
        >

            <path
                d={outline}
                fill="#FFFFFF"
            />

            {BASE_FACES.map(face => (

                <ToothFace

                    key={face.id}

                    points={face.points}

                    face={tooth.faces[face.id]}

                    onClick={() =>
                        onFaceClick?.(
                            tooth.number,
                            face.id
                        )
                    }

                />

            ))}

            <path
                d={outline}
                fill="none"
                stroke="#334155"
                strokeWidth="1.5"
            />

        </svg>

    );

}

export default ToothSvg;
```

## 📄 src\components\OdontogramV2\utils\colors.js
```javascript
export const TREATMENT_COLORS = {

    healthy: "#FFFFFF",

    selected: "#BFDBFE",

    pendiente: "#EAB308",

    completado: "#22C55E",

    caries: "#DC2626",

    resina: "#2563EB",

    amalgama: "#6B7280",

    corona: "#F59E0B",

    implante: "#7C3AED",

    endodoncia: "#EA580C",

    sellador: "#10B981"

};
```

## 📄 src\components\OdontogramV2\utils\getFaceColor.js
```javascript
import {
    TREATMENT_COLORS
} from "./colors";

export function getFaceColor(face) {

    if (face.selected) {

        return TREATMENT_COLORS.selected;

    }

    if (face.treatment?.color) {

        return face.treatment.color;

    }

    if (face.status === "pendiente") {

        return TREATMENT_COLORS.pendiente;

    }

    if (face.status === "completado") {

        return TREATMENT_COLORS.completado;

    }

    return TREATMENT_COLORS.healthy;

}
```

## 📄 src\components\OdontogramV2\utils\getToothPosition.js
```javascript
const UPPER_TEETH = [
    "18",
    "17",
    "16",
    "15",
    "14",
    "13",
    "12",
    "11",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28"
];

const LOWER_TEETH = [
    "48",
    "47",
    "46",
    "45",
    "44",
    "43",
    "42",
    "41",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38"
];

const START_X = 100;

const TOOTH_SPACING = 64;

const MIDLINE_GAP = 38;

const UPPER_ROW_Y = 110;

const LOWER_ROW_Y = 290;

function calculateX(index) {

    const centerGap =
        index >= 8
            ? MIDLINE_GAP
            : 0;

    return (
        START_X +
        index * TOOTH_SPACING +
        centerGap
    );

}

export function getToothPosition(toothNumber) {

    const toothId = String(toothNumber);

    const upperIndex =
        UPPER_TEETH.indexOf(toothId);

    if (upperIndex !== -1) {

        return {

            x: calculateX(upperIndex),

            y: UPPER_ROW_Y,

            numberY: 43,

            row: "upper"

        };

    }

    const lowerIndex =
        LOWER_TEETH.indexOf(toothId);

    if (lowerIndex !== -1) {

        return {

            x: calculateX(lowerIndex),

            y: LOWER_ROW_Y,

            numberY: -43,

            row: "lower"

        };

    }

    console.warn(
        `No se encontró la posición de la pieza ${toothNumber}`
    );

    return {

        x: 0,

        y: 0,

        numberY: 0,

        row: null

    };

}
```

## 📄 src\components\PatientForm\PatientForm.css
```css
/* ========================================
   PATIENT FORM CARD
======================================== */

.patientFormCard {
    width: 100%;
    height: 100%;
    min-height: 0;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    background: #ffffff;

    border: 1px solid #e5eaf0;
    border-radius: 16px;

    box-shadow:
        0 2px 8px
        rgba(15, 23, 42, 0.04);

    box-sizing: border-box;
}


/* ========================================
   HEADER
======================================== */

.patientFormHeader {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    gap: 14px;

    flex: 0 0 auto;

    padding: 18px 18px 16px;

    background:
        linear-gradient(
            135deg,
            #f5f9fe,
            #eef6fd
        );

    border-bottom:
        1px solid
        #e5edf5;
}


.patientFormEyebrow {
    display: block;

    margin-bottom: 3px;

    color: #4f7cab;

    font-size: 9px;
    font-weight: 700;

    letter-spacing: 0.06em;

    text-transform: uppercase;
}


.patientFormHeader h2 {
    margin: 0;

    color: #203047;

    font-size: 16px;
    font-weight: 700;

    line-height: 1.25;

    letter-spacing: -0.01em;
}


.patientFormHeader p {
    margin: 3px 0 0;

    color: #7a899b;

    font-size: 10.5px;

    line-height: 1.35;
}


.patientFormStepCounter {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    flex: 0 0 auto;

    min-width: 42px;
    height: 25px;

    padding: 0 8px;

    border-radius: 999px;

    background: #ffffff;

    color: #3973ad;

    font-size: 10px;
    font-weight: 700;

    box-shadow:
        0 1px 3px
        rgba(15, 23, 42, 0.06);
}


/* ========================================
   PROGRESS
======================================== */

.patientFormProgress {
    flex: 0 0 auto;

    padding: 13px 18px;

    background: #ffffff;

    border-bottom:
        1px solid
        #eef2f6;
}


.patientFormProgressHeader {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 10px;

    margin-bottom: 8px;
}


.patientFormProgressHeader span {
    color: #94a3b8;

    font-size: 9px;
    font-weight: 600;
}


.patientFormProgressHeader strong {
    color: #526173;

    font-size: 10px;
    font-weight: 600;
}


.patientFormProgressBar {
    width: 100%;
    height: 4px;

    overflow: hidden;

    background: #e9eff5;

    border-radius: 999px;
}


.patientFormProgressValue {
    height: 100%;

    background: #3973ad;

    border-radius: inherit;

    transition:
        width 220ms ease;
}


/* ========================================
   SCROLLABLE CONTENT
======================================== */

.patientFormContent {
    flex: 1;

    min-height: 0;

    padding: 16px 18px;

    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: thin;

    scrollbar-color:
        #cbd5e1
        transparent;
}


.patientFormContent::-webkit-scrollbar {
    width: 5px;
}


.patientFormContent::-webkit-scrollbar-track {
    background: transparent;
}


.patientFormContent::-webkit-scrollbar-thumb {
    background: #cbd5e1;

    border-radius: 999px;
}


/* ========================================
   FORM GROUP
======================================== */

/*
    Las clases formGroup vienen de tus Steps.
    Las encapsulamos dentro de PatientForm para
    evitar afectar otros formularios.
*/

.patientFormCard .formGroup {
    display: flex;
    flex-direction: column;

    gap: 5px;

    margin-bottom: 12px;
}


.patientFormCard .formGroup:last-child {
    margin-bottom: 0;
}


.patientFormCard .formGroup label {
    margin: 0;

    color: #526173;

    font-size: 10.5px;
    font-weight: 600;

    line-height: 1.4;
}


/* ========================================
   INPUTS / SELECTS / TEXTAREAS
======================================== */

.patientFormCard
.formGroup
input:not([type="radio"]):not([type="checkbox"]),
.patientFormCard
.formGroup
select,
.patientFormCard
.formGroup
textarea {
    width: 100%;

    min-width: 0;
    min-height: 38px;

    padding: 8px 10px;

    border: 1px solid #d9e2ec;
    border-radius: 9px;

    background: #ffffff;

    color: #334155;

    font-family: inherit;
    font-size: 11.5px;

    outline: none;

    box-sizing: border-box;

    transition:
        border-color 150ms ease,
        box-shadow 150ms ease;
}


.patientFormCard
.formGroup
input:not([type="radio"]):not([type="checkbox"]):focus,
.patientFormCard
.formGroup
select:focus,
.patientFormCard
.formGroup
textarea:focus {
    border-color: #8eb5de;

    box-shadow:
        0 0 0 3px
        rgba(21, 86, 157, 0.07);
}


.patientFormCard
.formGroup
input::placeholder,
.patientFormCard
.formGroup
textarea::placeholder {
    color: #a4afbd;
}


.patientFormCard
.formGroup
textarea {
    min-height: 72px;
    max-height: 130px;

    resize: vertical;

    line-height: 1.4;
}


/* ========================================
   DISABLED
======================================== */

.patientFormCard
.formGroup
input:disabled,
.patientFormCard
.formGroup
select:disabled,
.patientFormCard
.formGroup
textarea:disabled {
    background: #f8fafc;

    color: #94a3b8;

    cursor: not-allowed;

    opacity: 1;
}


/* ========================================
   CHECKBOX / RADIO SUPPORT
======================================== */

.patientFormCard
input[type="checkbox"],
.patientFormCard
input[type="radio"] {
    width: 15px;
    height: 15px;

    flex: 0 0 auto;

    margin: 0;

    accent-color: #15569d;

    cursor: pointer;
}


.patientFormCard .checkboxGroup {
    display: flex;

    flex-wrap: wrap;

    gap: 8px 12px;

    margin-top: 4px;
}


.patientFormCard .checkboxGroup label {
    display: inline-flex;

    align-items: center;

    gap: 6px;

    margin: 0;

    color: #526173;

    font-size: 10.5px;
    font-weight: 500;

    cursor: pointer;
}


/* ========================================
   FOOTER
======================================== */

.patientFormFooter {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 10px;

    flex: 0 0 auto;

    padding: 13px 18px;

    border-top:
        1px solid
        #eef2f6;

    background: #fafbfd;
}


/* ========================================
   BUTTONS
======================================== */

.patientFormSecondaryButton,
.patientFormPrimaryButton {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-height: 36px;

    padding: 0 14px;

    border-radius: 9px;

    font-family: inherit;
    font-size: 10.5px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        box-shadow 150ms ease;
}


.patientFormSecondaryButton {
    border: 1px solid #d9e2ec;

    background: #ffffff;

    color: #526173;
}


.patientFormSecondaryButton:hover {
    background: #f8fafc;

    border-color: #cbd5e1;
}


.patientFormPrimaryButton {
    border: 1px solid #15569d;

    background: #15569d;

    color: #ffffff;

    box-shadow:
        0 2px 6px
        rgba(21, 86, 157, 0.14);
}


.patientFormPrimaryButton:hover {
    background: #104780;

    border-color: #104780;
}


/* ========================================
   SHORT LAPTOP
======================================== */

@media (max-height: 800px) {

    .patientFormHeader {
        padding:
            14px
            16px
            12px;
    }


    .patientFormProgress {
        padding:
            10px
            16px;
    }


    .patientFormContent {
        padding:
            12px
            16px;
    }


    .patientFormCard .formGroup {
        margin-bottom: 9px;
    }


    .patientFormFooter {
        padding:
            10px
            16px;
    }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

    .patientFormHeader,
    .patientFormProgress,
    .patientFormContent,
    .patientFormFooter {
        padding-left: 14px;
        padding-right: 14px;
    }


    .patientFormSecondaryButton,
    .patientFormPrimaryButton {
        flex: 1;
    }

}
```

## 📄 src\components\PatientForm\PatientForm.jsx
```jsx
import "./PatientForm.css";
import { useState, useEffect} from "react"; 
import PersonalDataStep from "./Steps/PersonalDataStep";
import FamilyDataStep from "./Steps/FamilyDataStep";
import AntecedentesStep from "./Steps/AntecedentesStep";
const patientFormSteps = [
    {
        number: 1,
        title: "Datos personales"
    },
    {
        number: 2,
        title: "Antecedentes"
    },
    {
        number: 3,
        title: "Datos familiares"
    }
];
function PatientForm({ mode, patient, onCancel, onSave }) {

    const [formData, setFormData] = useState({

    nombre: "",

    apellido: "",

    edad: "",

    fecha_nacimiento: "",

    estado_nacimiento: "",

    municipio_nacimiento: "",

    ocupacion: "",

    escolaridad: "",

    estado_civil: "",

    domicilio: "",

    estado: "",

    municipio: "",

    telefono: "",

    correo: "",

    /*medico_familiar: "",

    telefono_medico_familiar: "",

    fecha_ultima_consulta: "",

    motivo_ultima_consulta: "",

    persona_emergencia: "",

    telefono_emergencia: "",*/

    antecedentes_padre: "",

    antecedentes_madre: "",

    antecedentes_abuelo_paterno: "",

    antecedentes_abuelo_materno: "",

    antecedentes_abuela_paterna: "",

    antecedentes_abuela_materna: "",

    antecedentes_hermanos: "",

    antecedentes_personales: "",

    });

    const [step, setStep] = useState(1);


    useEffect(() => {

        if (mode === "edit" && patient) {

            setFormData({

                nombre: patient.nombre || "",

                apellido: patient.apellido || "",

                edad: patient.edad || "",

                fecha_nacimiento: patient.fecha_nacimiento || "",

                estado_nacimiento: patient.estado_nacimiento || "",

                municipio_nacimiento: patient.municipio_nacimiento || "",

                ocupacion: patient.ocupacion || "",

                escolaridad: patient.escolaridad || "",

                estado_civil: patient.estado_civil || "",

                domicilio: patient.domicilio || "",

                estado: patient.estado || "",

                municipio: patient.municipio || "",

                telefono: patient.telefono || "",

                correo: patient.correo || "",

                /*medico_familiar: patient.medico_familiar || "",

                telefono_medico_familiar: patient.telefono_medico_familiar || "",

                fecha_ultima_consulta: patient.fecha_ultima_consulta || "",

                motivo_ultima_consulta: patient.motivo_ultima_consulta || "",

                persona_emergencia: patient.persona_emergencia || "",

                telefono_emergencia: patient.telefono_emergencia || "",*/

                antecedentes_padre: patient.antecedentes_padre || "",

                antecedentes_madre: patient.antecedentes_madre || "",

                antecedentes_abuelo_paterno: patient.antecedentes_abuelo_paterno || "",

                antecedentes_abuelo_materno: patient.antecedentes_abuelo_materno || "",

                antecedentes_abuela_paterna: patient.antecedentes_abuela_paterna || "",

                antecedentes_abuela_materna: patient.antecedentes_abuela_materna || "",

                antecedentes_hermanos: patient.antecedentes_hermanos || "",
                
                antecedentes_personales: patient.antecedentes_personales || "",
                });

        }

        if (mode === "create") {

            setFormData({

    nombre: "",

            apellido: "",

            edad: "",

            fecha_nacimiento: "",

            estado_nacimiento: "",

            municipio_nacimiento: "",

            ocupacion: "",

            escolaridad: "",

            estado_civil: "",

            domicilio: "",

            estado: "",

            municipio: "",

            telefono: "",

            correo: "",

            /*medico_familiar: "",

            telefono_medico_familiar: "",

            fecha_ultima_consulta: "",

            motivo_ultima_consulta: "",

            persona_emergencia: "",

            telefono_emergencia: "",*/

            antecedentes_padre: "",

            antecedentes_madre: "",

            antecedentes_abuelo_paterno: "",

            antecedentes_abuelo_materno: "",

            antecedentes_abuela_paterna: "",

            antecedentes_abuela_materna: "",

            antecedentes_hermanos: "",
        
            antecedentes_personales: "",
        });

        }

    }, [mode, patient]);

    function handleChange(e){

    setFormData({

        ...formData,

        [e.target.name]: e.target.value

    });
        
    }


    return (

        <div className="patientFormCard">

            <div className="patientFormHeader">

                <div>

                    <span className="patientFormEyebrow">
                        Expediente clínico
                    </span>

                    <h2>

                        {mode === "create"
                            ? "Nuevo paciente"
                            : "Editar paciente"}

                    </h2>

                    {mode === "edit" && patient && (

                        <p>
                            {patient.nombre} {patient.apellido}
                        </p>

                    )}

                </div>


                <span className="patientFormStepCounter">

                    {step} / {patientFormSteps.length}

                </span>

            </div>


            <div className="patientFormProgress">

                <div className="patientFormProgressHeader">

                    <span>
                        Paso {step}
                    </span>

                    <strong>
                        {patientFormSteps[step - 1].title}
                    </strong>

                </div>


                <div className="patientFormProgressBar">

                    <div
                        className="patientFormProgressValue"
                        style={{
                            width:
                                `${(step / patientFormSteps.length) * 100}%`
                        }}
                    />

                </div>

            </div>


            <div className="patientFormContent">

                {step === 1 && (

                    <PersonalDataStep
                        formData={formData}
                        handleChange={handleChange}
                    />

                )}


                {step === 2 && (

                    <AntecedentesStep
                        formData={formData}
                        handleChange={handleChange}
                    />

                )}


                {step === 3 && (

                    <FamilyDataStep
                        formData={formData}
                        handleChange={handleChange}
                    />

                )}

            </div>


            <div className="patientFormFooter">

                {step === 1 ? (

                    <button
                        type="button"
                        className="patientFormSecondaryButton"
                        onClick={onCancel}
                    >

                        Cancelar

                    </button>

                ) : (

                    <button
                        type="button"
                        className="patientFormSecondaryButton"
                        onClick={() =>
                            setStep(
                                (current) =>
                                    current - 1
                            )
                        }
                    >

                        ← Anterior

                    </button>

                )}


                {step < patientFormSteps.length ? (

                    <button
                        type="button"
                        className="patientFormPrimaryButton"
                        onClick={() =>
                            setStep(
                                (current) =>
                                    current + 1
                            )
                        }
                    >

                        Siguiente →

                    </button>

                ) : (

                    <button
                        type="button"
                        className="patientFormPrimaryButton"
                        onClick={() =>
                            onSave(formData)
                        }
                    >

                        {mode === "create"
                            ? "Guardar paciente"
                            : "Guardar cambios"}

                    </button>

                )}

            </div>

        </div>

    );

}

export default PatientForm;
```

## 📄 src\components\PatientForm\Steps\AntecedentesStep.jsx
```jsx
function AntecedentesStep({

    formData,

    handleChange

}){

    return(

        <>
            
            <div className="formGroup">
                <h2>Antecedentes Personales</h2>
                <label>Antecedentes Personales Patológicos</label>

                <input

                    name="antecedentes_personales"

                    value={formData.antecedentes_personales}

                    onChange={handleChange}

                />

            </div>

        </>

    )

}

export default AntecedentesStep;
```

## 📄 src\components\PatientForm\Steps\FamilyDataStep.jsx
```jsx
function FamilyDataStep({

    formData,

    handleChange

}){

    return(

        <>
            
            <div className="formGroup">
                <h2>Antecedentes Heredo-Familiares</h2>
                <label>Padre</label>

                <input

                    name="antecedentes_padre"

                    value={formData.antecedentes_padre}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Madre</label>

                <input

                    name="antecedentes_madre"

                    value={formData.antecedentes_madre}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuelo Paterno</label>

                <input

                    name="antecedentes_abuelo_paterno"

                    value={formData.antecedentes_abuelo_paterno}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuelo Materno</label>

                <input

                    name="antecedentes_abuelo_materno"

                    value={formData.antecedentes_abuelo_materno}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuela Paterna</label>

                <input

                    name="antecedentes_abuela_paterna"

                    value={formData.antecedentes_abuela_paterna}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuela Materna</label>

                <input

                    name="antecedentes_abuela_materna"

                    value={formData.antecedentes_abuela_materna}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Hermanos</label>

                <input

                    name="antecedentes_hermanos"

                    value={formData.antecedentes_hermanos}

                    onChange={handleChange}

                />

            </div>

        </>

    )

}

export default FamilyDataStep;
```

## 📄 src\components\PatientForm\Steps\MedicalDataStep.jsx
```jsx
function MedicalDataStep({

    formData,

    handleChange

}){

    return(

        <>

            <div className="formGroup">
                <h2>Datos Médico</h2>

                <label>Nombre del médico familiar</label>

                <input
                    type="text"
                    name="medico_familiar"
                    value={formData.medico_familiar}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Teléfono del medico familiar</label>

                <input
                    type="number"
                    name="telefono_medico_familiar"
                    value={formData.telefono_medico_familiar}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Fecha última consulta médica odontológica</label>

                <input
                    type="date"
                    name="fecha_ultima_consulta"
                    value={formData.fecha_ultima_consulta}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Motivo última consulta odontológica</label>

                <input
                    type="text"
                    name="motivo_ultima_consulta"
                    value={formData.motivo_ultima_consulta}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">

                <label>En caso de emergencia llamar</label>

                <input
                    type="text"
                    name="persona_emergencia"
                    value={formData.persona_emergencia}
                    onChange={handleChange}
                />

            </div>
           <div className="formGroup">

                <label>Teléfono</label>

                <input
                    type="number"
                    name="telefono_emergencia"
                    value={formData.telefono_emergencia}
                    onChange={handleChange}
                />

            </div>
        </>

    )

}

export default MedicalDataStep;
```

## 📄 src\components\PatientForm\Steps\PersonalDataStep.jsx
```jsx
import "../PatientForm.css";
import { useState, useEffect } from "react";
import { estados } from "../../../supabase/estados";


function PersonalDataStep({
    formData,

    handleChange

}){

    const estadoSeleccionado = estados.find(
        (e) => e.nombre === formData.estado
    );

    const estadoSeleccionado_nacimiento = estados.find(
        (e) => e.nombre === formData.estado_nacimiento
    );

    return(
        <>
            <div className="formGroup">
            <h2>Datos Personales</h2>
                <label>Nombre</label>

                <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
            />


            </div>

            <div className="formGroup">

                <label>Apellido</label>

                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">
                <label>Edad</label>

                <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">

                <label>Fecha de Nacimiento</label>

                <input
                    type="date"
                    name="fecha_nacimiento"
                    value={formData.fecha_nacimiento}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">
                <label>Estado de nacimiento</label>

                <select
                    name="estado_nacimiento"
                    value={formData.estado_nacimiento}
                    onChange={(e) => {
                        handleChange(e);

                        // Reinicia el municipio al cambiar de estado
                        setFormData((prev) => ({
                            ...prev,
                            municipio_nacimiento: "",
                        }));
                    }}
                >
                    <option value="">Seleccione un estado</option>

                    {estados.map((estado) => (
                        <option key={estado.id} value={estado.nombre}>
                            {estado.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="formGroup">
                <label>Municipio de nacimiento</label>

                <select
                    name="municipio_nacimiento"
                    value={formData.municipio_nacimiento}
                    onChange={handleChange}
                    disabled={!formData.estado_nacimiento}
                >
                    <option value="">Seleccione un municipio</option>

                    {estadoSeleccionado_nacimiento?.municipios.map((municipio) => (
                        <option key={municipio} value={municipio}>
                            {municipio}
                        </option>
                    ))}
                </select>
            </div>
            <div className="formGroup">

                <label>Ocupación</label>

                <input
                    type="text"
                    name="ocupacion"
                    value={formData.ocupacion}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">

                <label>Escolaridad</label>

                <input
                    type="text"
                    name="escolaridad"
                    value={formData.escolaridad}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">

                <label>Estado civil</label>

                <input
                    type="text"
                    name="estado_civil"
                    value={formData.estado_civil}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">

                <label>Domicilio</label>

                <input
                    type="text"
                    name="domicilio"
                    value={formData.domicilio}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">
                <label>Estado</label>

                <select
                    name="estado"
                    value={formData.estado}
                    onChange={(e) => {
                        handleChange(e);

                        // Reinicia el municipio al cambiar de estado
                        setFormData((prev) => ({
                            ...prev,
                            municipio: "",
                        }));
                    }}
                >
                    <option value="">Seleccione un estado</option>

                    {estados.map((estado) => (
                        <option key={estado.id} value={estado.nombre}>
                            {estado.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="formGroup">
                <label>Municipio</label>

                <select
                    name="municipio"
                    value={formData.municipio}
                    onChange={handleChange}
                    disabled={!formData.estado}
                >
                    <option value="">Seleccione un municipio</option>

                    {estadoSeleccionado?.municipios.map((municipio) => (
                        <option key={municipio} value={municipio}>
                            {municipio}
                        </option>
                    ))}
                </select>
            </div>
            <div className="formGroup">

                <label>Teléfono</label>

                <input
                    type="number"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                />

            </div>


            <div className="formGroup">

                <label>Motivo de consulta</label>

                <input
                    type="text"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                />

            </div>

        </>

    )

}

export default PersonalDataStep;
```

## 📄 src\components\PatientProfile\PatientProfile.css
```css
/* ========================================
   PATIENT PROFILE
======================================== */

.patientProfile {
    width: 100%;

    background: transparent;

    box-sizing: border-box;
}


/* ========================================
   PATIENT HEADER
======================================== */

.patientProfileHeader {
    display: flex;
    align-items: center;

    gap: 12px;

    padding: 20px 20px 18px;

    background:
        linear-gradient(
            135deg,
            #f5f9fe 0%,
            #eef6fd 100%
        );

    border-bottom:
        1px solid
        #e5edf5;
}


.patientProfileAvatar {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 44px;
    height: 44px;

    flex-shrink: 0;

    border-radius: 50%;

    background: #dceafb;

    color: #15569d;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: 0.02em;
}


.patientProfileIdentity {
    display: flex;

    align-items: center;

    gap: 9px;

    min-width: 0;

    flex: 1;
}


.patientProfileIdentity h2 {
    min-width: 0;

    margin: 0;

    overflow: hidden;

    color: #203047;

    font-size: 16px;
    font-weight: 700;

    letter-spacing: -0.01em;

    white-space: nowrap;
    text-overflow: ellipsis;
}


/* ========================================
   STATUS
======================================== */

.patientProfileStatus {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    padding: 4px 8px;

    border-radius: 999px;

    font-size: 10px;
    font-weight: 600;

    line-height: 1.2;
}


.patientProfileStatusActive {
    background: #dcf5e8;

    color: #21825f;
}


.patientProfileStatusInactive {
    background: #fce8e7;

    color: #b4534d;
}


/* ========================================
   SECTIONS
======================================== */

.patientProfileSection {
    padding: 20px 20px 4px;
}


.patientProfileSection +
.patientProfileSection {
    padding-top: 18px;
}


.patientProfileSectionTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 8px;

    padding-bottom: 10px;

    border-bottom:
        1px solid
        #edf1f5;
}


.patientProfileSectionIcon {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;

    border-radius: 7px;

    background: #edf5fd;

    color: #3973ad;

    font-size: 11px;
}


.patientProfileSectionTitle h3 {
    margin: 0;

    color: #304156;

    font-size: 13px;
    font-weight: 700;
}


/* ========================================
   DETAIL ROWS
======================================== */

.patientProfileDetails {
    padding-top: 7px;
}


.patientProfileRow {
    display: grid;

    grid-template-columns:
        minmax(120px, 0.9fr)
        minmax(0, 1.1fr);

    gap: 12px;

    padding: 7px 0;
}


.patientProfileLabel {
    color: #8794a5;

    font-size: 11px;
    font-weight: 500;

    line-height: 1.4;
}


.patientProfileValue {
    overflow-wrap: anywhere;

    color: #46566a;

    font-size: 11px;
    font-weight: 500;

    line-height: 1.45;

    text-align: right;
}


/* ========================================
   LOADING
======================================== */

.patientProfileLoading {
    padding: 28px 20px;

    color: #64748b;

    font-size: 13px;
}


/* ========================================
   RESPONSIVE
======================================== */

@media (max-width: 1100px) {

    .patientProfileRow {
        grid-template-columns:
            160px
            minmax(0, 1fr);
    }

}


@media (max-width: 600px) {

    .patientProfileRow {
        grid-template-columns: 1fr;

        gap: 3px;
    }


    .patientProfileValue {
        text-align: left;
    }

    .patientProfileClinicalItem {
        align-items: flex-start;
    }


}

/* ========================================
CLINICAL RECORD
======================================== */

.patientProfileClinicalItem {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    padding: 14px 0 10px;
}

.patientProfileClinicalInfo {
    display: flex;
    flex-direction: column;

    gap: 5px;

    min-width: 0;
}

.patientProfileClinicalName {
    color: #46566a;

    font-size: 11px;
    font-weight: 600;
}

.patientProfileClinicalMeta {
    display: flex;
    align-items: center;

    gap: 7px;

    flex-wrap: wrap;
}

.patientProfileClinicalCompleted {
    display: inline-flex;
    align-items: center;

    padding: 3px 7px;

    border-radius: 999px;

    background: #dcf5e8;

    color: #21825f;

    font-size: 10px;
    font-weight: 600;
}

.patientProfileClinicalCompleted::before {
    content: "✓";

    margin-right: 4px;

    font-size: 9px;
}

.patientProfileClinicalPending {
    display: inline-flex;
    align-items: center;

    width: fit-content;

    padding: 3px 7px;

    border-radius: 999px;

    background: #fff4d8;

    color: #9a6a16;

    font-size: 10px;
    font-weight: 600;
}

.patientProfileClinicalDate {
    color: #98a4b3;

    font-size: 10px;
    font-weight: 500;
}

.patientProfileClinicalLoading {
    color: #98a4b3;

    font-size: 10px;
    font-weight: 500;
}

.patientProfileClinicalButton {
    flex-shrink: 0;

    padding: 7px 10px;

    border: 1px solid #d6e3ef;
    border-radius: 8px;

    background: #ffffff;

    color: #3973ad;

    font-family: inherit;
    font-size: 10px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background 120ms ease,
        border-color 120ms ease;
}

.patientProfileClinicalButton:hover {
    background: #f4f8fc;

    border-color: #bfd3e7;
}

.patientProfileClinicalDraft {
    display: inline-flex;
    align-items: center;

    width: fit-content;

    padding: 3px 7px;

    border-radius: 999px;

    background: #e8f1fb;

    color: #3973ad;

    font-size: 10px;
    font-weight: 600;
}

.patientProfileSectionHeading {
    display: flex;
    align-items: center;

    gap: 8px;
}

.patientProfileEditButton {
    padding: 5px 8px;

    border: none;
    border-radius: 7px;

    background: transparent;

    color: #3973ad;

    font-family: inherit;
    font-size: 10px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background 120ms ease,
        color 120ms ease;
}

.patientProfileEditButton:hover {
    background: #edf5fd;

    color: #15569d;
}
```

## 📄 src\components\PatientProfile\PatientProfile.jsx
```jsx
import "./PatientProfile.css";

import {
    FaUser,
    FaNotesMedical,
    FaClipboardCheck
} from "react-icons/fa";


function getPatientInitials(patient) {

    const firstName =
        patient?.nombre
            ?.trim()
            ?.charAt(0) ?? "";

    const lastName =
        patient?.apellido
            ?.trim()
            ?.charAt(0) ?? "";

    return (
        `${firstName}${lastName}`.toUpperCase() ||
        "P"
    );

}


function formatBirthDate(date) {

    if (!date) {
        return "Sin información";
    }

    const normalizedDate =
        /^\d{4}-\d{2}-\d{2}$/.test(date)
            ? `${date}T00:00:00`
            : date;

    const parsedDate =
        new Date(normalizedDate);

    if (Number.isNaN(parsedDate.getTime())) {
        return date;
    }

    return new Intl.DateTimeFormat(
        "es-MX",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    ).format(parsedDate);

}


    function PatientProfile({
        patient,

        exploracion,
        loadingExploracion,

        odontogram,
        loadingOdontogram,

        onEditPatient,
        onOpenExploracion,
        onOpenOdontogram
    }) {

        if (!patient) {

            return (

                <div className="patientProfileLoading">

                    Cargando paciente...

                </div>

            );

        }

    function formatExplorationDate(date) {

        if (!date) {
            return "";
        }

        const parsedDate =
            new Date(date);

        if (Number.isNaN(parsedDate.getTime())) {
            return "";
        }

        return new Intl.DateTimeFormat(
            "es-MX",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        ).format(parsedDate);

    }

    function formatCreatedDate(date) {

        if (!date) {
            return "Sin información";
        }

        const parsedDate =
            new Date(date);

        if (
            Number.isNaN(
                parsedDate.getTime()
            )
        ) {
            return "Sin información";
        }

        return new Intl.DateTimeFormat(
            "es-MX",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        ).format(parsedDate);

    }

    return (

        <section className="patientProfile">


            {/* HEADER DEL PACIENTE */}

            <div className="patientProfileHeader">

                <div className="patientProfileAvatar">

                    {getPatientInitials(patient)}

                </div>


                <div className="patientProfileIdentity">

                    <h2>

                        {patient.nombre}{" "}
                        {patient.apellido}

                    </h2>

                    <span
                        className={
                            patient.status
                                ? "patientProfileStatus patientProfileStatusActive"
                                : "patientProfileStatus patientProfileStatusInactive"
                        }
                    >

                        {patient.status
                            ? "Activo"
                            : "Inactivo"}

                    </span>

                </div>

            </div>


            {/* DATOS PERSONALES */}

            <div className="patientProfileSection">

                <div className="patientProfileSectionTitle">

                    <div className="patientProfileSectionHeading">

                        <span className="patientProfileSectionIcon">

                            <FaUser />

                        </span>

                        <h3>
                            Datos personales
                        </h3>

                    </div>


                    <button
                        type="button"
                        className="patientProfileEditButton"
                        onClick={onEditPatient}
                    >
                        Editar
                    </button>

                </div>


                <div className="patientProfileDetails">

                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Fecha de nacimiento

                        </span>

                        <span className="patientProfileValue">

                            {formatBirthDate(
                                patient.fecha_nacimiento
                            )}

                        </span>

                    </div>

                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Paciente desde

                        </span>

                        <span className="patientProfileValue">

                            {formatCreatedDate(
                                patient.created_at
                            )}

                        </span>

                    </div>

                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Domicilio

                        </span>

                        <span className="patientProfileValue">

                            {patient.domicilio ||
                                "Sin información"}

                        </span>

                    </div>

                </div>

            </div>


            {/* HISTORIAL MÉDICO */}

            <div className="patientProfileSection">

                <div className="patientProfileSectionTitle">

                    <span className="patientProfileSectionIcon">

                        <FaNotesMedical />

                    </span>

                    <h3>
                        Historial médico
                    </h3>

                </div>


                <div className="patientProfileDetails">

                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Antecedentes padre

                        </span>

                        <span className="patientProfileValue">

                            {patient.antecedentes_padre ||
                                "Ninguno"}

                        </span>

                    </div>


                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Antecedentes madre

                        </span>

                        <span className="patientProfileValue">

                            {patient.antecedentes_madre ||
                                "Ninguno"}

                        </span>

                    </div>


                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Antecedentes hermanos

                        </span>

                        <span className="patientProfileValue">

                            {patient.antecedentes_hermanos ||
                                "Ninguno"}

                        </span>

                    </div>


                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Antecedentes personales

                        </span>

                        <span className="patientProfileValue">

                            {patient.antecedentes_personales ||
                                "Ninguno"}

                        </span>

                    </div>

                </div>

            </div>

            {/* EXPEDIENTE CLÍNICO */}

            <div className="patientProfileSection">

                <div className="patientProfileSectionTitle">

                    <span className="patientProfileSectionIcon">

                        <FaClipboardCheck />

                    </span>

                    <h3>
                        Expediente clínico
                    </h3>

                </div>

                <div className="patientProfileClinicalItem">

                    <div className="patientProfileClinicalInfo">

                        <span className="patientProfileClinicalName">

                            Odontograma inicial

                        </span>


                        {loadingOdontogram ? (

                            <span className="patientProfileClinicalLoading">

                                Consultando...

                            </span>

                        ) : odontogram?.estado === "Finalizado" ? (

                            <div className="patientProfileClinicalMeta">

                                <span className="patientProfileClinicalCompleted">

                                    Finalizado

                                </span>

                            </div>

                        ) : odontogram?.estado === "Borrador" ? (

                            <div className="patientProfileClinicalMeta">

                                <span className="patientProfileClinicalDraft">

                                    En progreso

                                </span>

                            </div>

                        ) : (

                            <span className="patientProfileClinicalPending">

                                Pendiente

                            </span>

                        )}

                    </div>


                    {!loadingOdontogram && (

                        <button
                            type="button"
                            className="patientProfileClinicalButton"
                            onClick={onOpenOdontogram}
                        >

                            {odontogram?.estado === "Finalizado"
                                ? "Ver"
                                : odontogram?.estado === "Borrador"
                                    ? "Continuar"
                                    : "Realizar"}

                        </button>

                    )}

                </div>

                <div className="patientProfileClinicalItem">

                    <div className="patientProfileClinicalInfo">

                        <span className="patientProfileClinicalName">
                            Exploración clínica
                        </span>


                        {loadingExploracion ? (

                            <span className="patientProfileClinicalLoading">
                                Consultando...
                            </span>

                        ) : exploracion ? (

                            <div className="patientProfileClinicalMeta">

                                <span className="patientProfileClinicalCompleted">
                                    Realizada
                                </span>

                                <span className="patientProfileClinicalDate">

                                    {formatExplorationDate(
                                        exploracion.fecha_exploracion
                                    )}

                                </span>

                            </div>

                        ) : (

                            <span className="patientProfileClinicalPending">
                                Pendiente
                            </span>

                        )}

                    </div>


                    {!loadingExploracion && (

                        <button
                            type="button"
                            className="patientProfileClinicalButton"
                            onClick={onOpenExploracion}
                        >

                            {exploracion
                                ? "Ver / Editar"
                                : "Realizar"}

                        </button>

                    )}

                </div>

            </div>

        </section>

    );

}


export default PatientProfile;
```

## 📄 src\components\PatientTable\PatientTable.css
```css
/* ========================================
   PATIENT TABLE CARD
======================================== */

.tableCard {
    width: 100%;
    min-width: 0;

    padding: 4px 18px 16px;

    background: #ffffff;

    border: 1px solid #e5eaf0;
    border-radius: 16px;

    box-shadow:
        0 2px 8px
        rgba(15, 23, 42, 0.04);

    box-sizing: border-box;
}

/* ========================================
   PATIENT TABLE MODULE
======================================== */

.patientTableModule {
    display: flex;
    flex-direction: column;

    gap: 16px;

    width: 100%;
    min-width: 0;
}


/* ========================================
   FILTER TOOLBAR CARD
======================================== */

.patientTableToolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    width: 100%;

    padding: 16px 20px;

    background: #ffffff;

    border: 1px solid #e5eaf0;
    border-radius: 14px;

    box-shadow:
        0 2px 8px
        rgba(15, 23, 42, 0.04);

    box-sizing: border-box;
}



.patientTableControls {
    display: grid;
}

/* ========================================
   SEARCH
======================================== */

.search {
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 460px;
    min-width: 0;
    height: 40px;

    padding: 0 13px;

    border: 1px solid #dce3eb;
    border-radius: 10px;

    background: #ffffff;

    box-sizing: border-box;
}

.search:focus-within {
    border-color: #8eb5de;

    box-shadow:
        0 0 0 3px
        rgba(21, 86, 157, 0.07);
}


.search svg {
    flex-shrink: 0;

    color: #94a3b8;

    font-size: 13px;
}


.search input {
    flex: 1;

    width: 100%;
    min-width: 0;

    border: none;
    outline: none;

    background: transparent;

    font-size: 13px;
}

.search input::placeholder {
    color: #94a3b8;
}


/* ========================================
   FILTERS
======================================== */

.patientFilter {
    width: 100%;
    min-width: 0;
    height: 40px;

    padding: 0 34px 0 14px;

    border: 1px solid #dce3eb;
    border-radius: 10px;

    background: #ffffff;

    color: #475569;

    font-size: 13px;

    outline: none;
    cursor: pointer;

    box-sizing: border-box;
}


.patientFilter:hover {
    border-color: #c5d0dc;
}


.patientFilter:focus {
    border-color: #8eb5de;

    box-shadow:
        0 0 0 3px
        rgba(21, 86, 157, 0.07);
}


/* ========================================
   NEW PATIENT BUTTON
======================================== */

.newPatientButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    min-width: 190px;
    height: 40px;

    padding: 0 18px;

    border: none;
    border-radius: 10px;

    background: #15569d;
    color: #ffffff;

    font-size: 13px;
    font-weight: 600;

    white-space: nowrap;

    cursor: pointer;

    box-shadow:
        0 3px 8px
        rgba(21, 86, 157, 0.14);
}

.newPatientButton:hover {
    background: #104780;

    box-shadow:
        0 4px 10px
        rgba(21, 86, 157, 0.18);
}


.newPatientButton:active {
    transform: translateY(1px);
}


/* ========================================
   TABLE WRAPPER
======================================== */

.patientTableWrapper {
    width: 100%;

    overflow-x: auto;
}


/* ========================================
   TABLE
======================================== */

.patientTableWrapper table {
    width: 100%;
    min-width: 0;

    border-collapse: collapse;
    table-layout: fixed;
}

.patientTableWrapper th:nth-child(2),
.patientTableWrapper td:nth-child(2) {
    width: 90px;
}

/* Teléfono */
.patientTableWrapper th:nth-child(3),
.patientTableWrapper td:nth-child(3) {
    width: 170px;
}

/* Estado */
.patientTableWrapper th:nth-child(4),
.patientTableWrapper td:nth-child(4) {
    width: 110px;
}

/* Acciones */
.patientTableWrapper th:nth-child(5),
.patientTableWrapper td:nth-child(5) {
    width: 52px;
}

.patientTableWrapper th:nth-child(2),
.patientTableWrapper td:nth-child(2),
.patientTableWrapper th:nth-child(3),
.patientTableWrapper td:nth-child(3),
.patientTableWrapper th:nth-child(4),
.patientTableWrapper td:nth-child(4) {
    white-space: nowrap;
}

/* ========================================
   TABLE HEADER
======================================== */

.patientTableWrapper thead {
    border-bottom:
        1px solid
        #e8edf3;
}


.patientTableWrapper th {
    padding: 12px 12px;

    color: #8a98aa;

    font-size: 11px;
    font-weight: 600;

    letter-spacing: 0.02em;

    text-align: left;
    white-space: nowrap;
}


/* ========================================
   TABLE CELLS
======================================== */

.patientTableWrapper td {
    padding: 8px 12px;

    border-bottom:
        1px solid
        #eef2f6;

    color: #526173;

    font-size: 13px;

    font-weight: 400;

    vertical-align: middle;
}


.patientTableWrapper tbody tr:last-child td {
    border-bottom: 0;
}


/* ========================================
   ROW INTERACTIONS
======================================== */

.patientTableWrapper tbody tr {
    cursor: pointer;

    transition:
        background-color
        120ms ease;
}


.patientTableWrapper tbody tr:hover {
    background: #f8fafc;
}


.patientTableWrapper tbody tr.selectedPatientRow {
    background: #eff6ff;
}


.patientTableWrapper
tbody
tr.selectedPatientRow
td:first-child {
    box-shadow:
        inset 3px 0 0
        #3b82f6;
}


/* ========================================
   PATIENT IDENTITY
======================================== */

.patientIdentity {
    display: flex;
    align-items: center;

    gap: 11px;

    min-width: 0;
    width: 100%;
}


.patientAvatar {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 34px;
    height: 34px;

    flex-shrink: 0;

    border-radius: 50%;

    background: #eaf2fc;

    color: #28619e;

    font-size: 11px;
    font-weight: 700;

    letter-spacing: 0.02em;
}


.patientName {
    min-width: 0;
    max-width: none;
    width: 100%;

    overflow: hidden;

    color: #26364a;

    font-size: 13px;
    font-weight: 600;

    line-height: 1.35;

    white-space: nowrap;
    text-overflow: ellipsis;
}

/* ========================================
   STATUS
======================================== */

.status {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-width: 58px;

    padding: 4px 9px;

    border: 0;
    border-radius: 999px;

    font-size: 11px;
    font-weight: 600;

    line-height: 1.3;
}


.statusActive {
    background: #e8f8ef;

    color: #23845e;
}


.statusInactive {
    background: #fcebea;

    color: #b64d46;
}


/* ========================================
   ACTIONS
======================================== */

.patientActionsCell {
    width: 42px;

    padding-left: 4px !important;
    padding-right: 4px !important;

    text-align: center;
}


/* ========================================
   EMPTY STATE
======================================== */

.emptyPatients {
    padding: 48px 16px !important;

    color: #94a3b8 !important;

    font-size: 13px !important;

    text-align: center !important;
}


/* ========================================
   PAGINATION
======================================== */

.paginationFooter {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 14px;

    margin-top: 8px;
    padding-top: 16px;

    border-top:
        1px solid
        #eef2f6;
}


.paginationSummary {
    color: #7c899a;

    font-size: 12px;
}


.paginationSummary strong {
    color: #475569;

    font-weight: 600;
}


.paginationControls {
    display: flex;
    align-items: center;

    gap: 5px;
}


.pageSizeSelect {
    height: 34px;

    margin-right: 5px;
    padding: 0 9px;

    border:
        1px solid
        #e2e8f0;

    border-radius: 8px;

    background: #ffffff;

    color: #64748b;

    font-family: inherit;
    font-size: 11px;

    outline: none;

    cursor: pointer;
}


.pageSizeSelect:focus {
    border-color: #8eb5de;
}


.paginationButton {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-width: 32px;
    height: 32px;

    padding: 0 8px;

    border:
        1px solid
        #e3e9ef;

    border-radius: 8px;

    background: #ffffff;

    color: #64748b;

    font-family: inherit;
    font-size: 11px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background 120ms ease,
        border-color 120ms ease,
        color 120ms ease;
}


.paginationButton:hover:not(:disabled):not(.current) {
    background: #f6f9fc;

    border-color: #cbd5e1;

    color: #334155;
}


.paginationButton.current {
    border-color: #8eb5de;

    background: #edf5fd;

    color: #15569d;
}


.paginationButton:disabled {
    opacity: 0.35;

    cursor: not-allowed;
}


/* ========================================
   LAPTOP
======================================== */

@media (max-width: 1250px) {

    .patientTableToolbar {
        grid-template-columns:
            minmax(240px, 1fr)
            165px
            165px
            auto;

        gap: 10px;
    }


    .patientTableWrapper th,
    .patientTableWrapper td {
        padding-left: 9px;
        padding-right: 9px;
    }


    .patientName {
        max-width: 170px;
    }

}


/* ========================================
   SMALL LAPTOP / TABLET
======================================== */

@media (max-width: 1100px) {

    .tableHeader {
        grid-template-columns: 1fr;
    }


    .patientTableControls {
        grid-template-columns:
            minmax(220px, 1fr)
            150px
            150px;
    }


    .newPatientButton {
        justify-self: end;
    }

}


/* ========================================
   MOBILE / NARROW TABLET
======================================== */

@media (max-width: 700px) {

    .tableCard {
        padding: 14px;

        border-radius: 14px;
    }


    .patientTableControls {
        grid-template-columns: 1fr;
    }


    .newPatientButton {
        width: 100%;

        justify-self: stretch;
    }


    .paginationFooter {
        flex-direction: column;

        align-items: stretch;
    }


    .paginationSummary {
        text-align: center;
    }


    .paginationControls {
        justify-content: center;

        flex-wrap: wrap;
    }

}

@media (max-width: 1350px) {

    .patientTableControls {
        grid-template-columns:
            minmax(240px, 1fr)
            165px
            165px;
    }

}


@media (max-width: 1150px) {

    .patientTableToolbar {
        grid-template-columns: 1fr;
    }


    .patientTableControls {
        grid-template-columns:
            minmax(220px, 1fr)
            170px
            170px;
    }


    .newPatientButton {
        justify-self: end;
    }

}


@media (max-width: 750px) {

    .patientTableToolbar {
        padding: 14px;
    }


    .patientTableControls {
        grid-template-columns: 1fr;
    }


    .newPatientButton {
        width: 100%;

        justify-self: stretch;
    }

}

@media (max-width: 1050px) {

    .patientTableToolbar {
        grid-template-columns:
            minmax(220px, 1fr)
            170px
            170px;
    }


    .newPatientButton {
        grid-column: 1 / -1;

        justify-self: end;
    }

}

@media (max-width: 900px) {

    .patientTableToolbar {
        flex-direction: column;
        align-items: stretch;
    }

    .search {
        max-width: none;
    }

    .newPatientButton {
        width: 100%;
        min-width: 0;
    }

}
```

## 📄 src\components\PatientTable\PatientTable.jsx
```jsx
import "./PatientTable.css";

import {
    useEffect,
    useMemo,
    useState
} from "react";

import { FaSearch } from "react-icons/fa";

const DEFAULT_PAGE_SIZE = 12;

function normalizeText(value) {

    return String(value ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}

function getPatientInitials(patient) {

    const firstName =
        patient?.nombre
            ?.trim()
            ?.charAt(0) ?? "";

    const lastName =
        patient?.apellido
            ?.trim()
            ?.charAt(0) ?? "";

    return (
        `${firstName}${lastName}`.toUpperCase() ||
        "P"
    );

}

function PatientTable({

    patients,

    onSelectPatient,

    selectedPatient,

    onCreatePatient,

}) {

    const [searchTerm, setSearchTerm] =
        useState("");

    const [statusFilter, setStatusFilter] =
        useState("all");

    const [ageFilter, setAgeFilter] =
        useState("all");

    const [pageSize, setPageSize] =
        useState(DEFAULT_PAGE_SIZE);

    const [currentPage, setCurrentPage] =
        useState(1);

    const filteredPatients = useMemo(() => {

        const normalizedSearch =
            normalizeText(searchTerm);

        return patients.filter((patient) => {

            const fullName = normalizeText(
                `${patient.nombre ?? ""} ${patient.apellido ?? ""}`
            );

            const phone = normalizeText(
                patient.telefono
            );

            const address = normalizeText(
                patient.domicilio
            );

            const age = Number(patient.edad);

            const matchesSearch =
                normalizedSearch === "" ||
                fullName.includes(normalizedSearch) ||
                phone.includes(normalizedSearch) ||
                address.includes(normalizedSearch) ||
                String(patient.edad ?? "").includes(
                    normalizedSearch
                );

            const matchesStatus =
                statusFilter === "all" ||
                (
                    statusFilter === "active" &&
                    patient.status === true
                ) ||
                (
                    statusFilter === "inactive" &&
                    patient.status === false
                );

            const matchesAge =
                ageFilter === "all" ||
                (
                    ageFilter === "minor" &&
                    age < 18
                ) ||
                (
                    ageFilter === "adult" &&
                    age >= 18 &&
                    age < 60
                ) ||
                (
                    ageFilter === "senior" &&
                    age >= 60
                );

            return (
                matchesSearch &&
                matchesStatus &&
                matchesAge
            );

        });

    }, [
        patients,
        searchTerm,
        statusFilter,
        ageFilter
    ]);

    const totalPages = Math.max(
        1,
        Math.ceil(
            filteredPatients.length / pageSize
        )
    );

    useEffect(() => {

        setCurrentPage(1);

    }, [
        searchTerm,
        statusFilter,
        ageFilter,
        pageSize
    ]);

    useEffect(() => {

        if (currentPage > totalPages) {

            setCurrentPage(totalPages);

        }

    }, [
        currentPage,
        totalPages
    ]);

    const firstPatientIndex =
        (currentPage - 1) * pageSize;

    const lastPatientIndex =
        firstPatientIndex + pageSize;

    const visiblePatients =
        filteredPatients.slice(
            firstPatientIndex,
            lastPatientIndex
        );

    const firstVisibleRecord =
        filteredPatients.length === 0
            ? 0
            : firstPatientIndex + 1;

    const lastVisibleRecord =
        Math.min(
            lastPatientIndex,
            filteredPatients.length
        );

    function goToPreviousPage() {

        setCurrentPage((previous) =>
            Math.max(1, previous - 1)
        );

    }

    function goToNextPage() {

        setCurrentPage((previous) =>
            Math.min(totalPages, previous + 1)
        );

    }

    function getVisiblePageNumbers() {

        const startPage = Math.max(
            1,
            currentPage - 2
        );

        const endPage = Math.min(
            totalPages,
            currentPage + 2
        );

        const pages = [];

        for (
            let page = startPage;
            page <= endPage;
            page += 1
        ) {

            pages.push(page);

        }

        return pages;

    }

    return (

<div className="patientTableModule">

    <div className="patientTableToolbar">


            <div className="search">

                <FaSearch />

                <input
                    type="search"
                    placeholder="Buscar por nombre o teléfono"
                    value={searchTerm}
                    onChange={(event) =>
                        setSearchTerm(
                            event.target.value
                        )
                    }
                />

            </div>


           {/*} <select
                className="patientFilter"
                value={statusFilter}
                onChange={(event) =>
                    setStatusFilter(
                        event.target.value
                    )
                }
                aria-label="Filtrar por estado"
            >

                <option value="all">
                    Todos los estados
                </option>

                <option value="active">
                    Activos
                </option>

                <option value="inactive">
                    Inactivos
                </option>

            </select>*/}


           {/* <select
                className="patientFilter"
                value={ageFilter}
                onChange={(event) =>
                    setAgeFilter(
                        event.target.value
                    )
                }
                aria-label="Filtrar por edad"
            >

                <option value="all">
                    Todas las edades
                </option>

                <option value="minor">
                    Menores de 18
                </option>

                <option value="adult">
                    Adultos
                </option>

                <option value="senior">
                    Adultos mayores
                </option>

            </select>*/}

    


        <button
            type="button"
            className="newPatientButton"
            onClick={onCreatePatient}
        >

            + Nuevo paciente

        </button>

    </div>
        <div className="tableCard">
            <div className="patientTableWrapper">

                <table>

                    <thead>

                        <tr>

                            <th>Nombre</th>

                            <th>Edad</th>

                            <th>Teléfono</th>

                            <th>Estado</th>

                        </tr>

                    </thead>

                    <tbody>

                        {visiblePatients.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="emptyPatients"
                                >

                                    No se encontraron pacientes
                                    con los filtros seleccionados.

                                </td>

                            </tr>

                        ) : (

                            visiblePatients.map(
                                (patient) => (

                                    <tr
                                        key={patient.id}
                                        className={
                                            selectedPatient?.id ===
                                            patient.id
                                                ? "selectedPatientRow"
                                                : ""
                                        }
                                        onClick={() =>
                                            onSelectPatient(
                                                patient
                                            )
                                        }
                                    >

                                        <td>

                                            <div className="patientIdentity">

                                                <div className="patientAvatar">

                                                    {getPatientInitials(patient)}

                                                </div>


                                                <div className="patientName">

                                                    {patient.nombre}{" "}
                                                    {patient.apellido}

                                                </div>

                                            </div>

                                        </td>

                                        <td>
                                            {patient.edad ?? "-"}
                                        </td>

                                        <td>
                                            {patient.telefono || "-"}
                                        </td>

                                        <td>

                                            <span
                                                className={
                                                    `status ${
                                                        patient.status
                                                            ? "statusActive"
                                                            : "statusInactive"
                                                    }`
                                                }
                                            >

                                                {patient.status
                                                    ? "Activo"
                                                    : "Inactivo"}

                                            </span>

                                        </td>

                                    </tr>

                                )
                            )

                        )}

                    </tbody>

                </table>

            </div>

            <div className="paginationFooter">

                <div className="paginationSummary">

                    Mostrando{" "}

                    <strong>
                        {firstVisibleRecord}
                    </strong>

                    {" - "}

                    <strong>
                        {lastVisibleRecord}
                    </strong>

                    {" de "}

                    <strong>
                        {filteredPatients.length}
                    </strong>

                    {" pacientes"}

                </div>

                <div className="paginationControls">

                    <select
                        className="pageSizeSelect"
                        value={pageSize}
                        onChange={(event) =>
                            setPageSize(
                                Number(
                                    event.target.value
                                )
                            )
                        }
                        aria-label="Pacientes por página"
                    >

                        <option value="6">
                            6 por página
                        </option>

                        <option value="12">
                            12 por página
                        </option>

                        <option value="20">
                            20 por página
                        </option>

                    </select>

                    <button
                        type="button"
                        className="paginationButton"
                        disabled={currentPage === 1}
                        onClick={goToPreviousPage}
                        aria-label="Página anterior"
                    >

                        &lt;

                    </button>

                    {getVisiblePageNumbers().map(
                        (page) => (

                            <button
                                type="button"
                                key={page}
                                className={
                                    `paginationButton ${
                                        currentPage === page
                                            ? "current"
                                            : ""
                                    }`
                                }
                                onClick={() =>
                                    setCurrentPage(page)
                                }
                            >

                                {page}

                            </button>

                        )
                    )}

                    <button
                        type="button"
                        className="paginationButton"
                        disabled={
                            currentPage === totalPages
                        }
                        onClick={goToNextPage}
                        aria-label="Página siguiente"
                    >

                        &gt;

                    </button>

                </div>
            </div>
            </div>

        </div>

    );

}

export default PatientTable;
```

## 📄 src\components\ProtectedRoute.jsx
```jsx
import {
    Navigate,
    Outlet,
    useLocation
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function LoadingScreen() {

    return (

        <div className="authLoadingScreen">

            <span className="authSpinner" />

            <p>
                Cargando sesión...
            </p>

        </div>
    );
}

function ProtectedRoute() {

    const location = useLocation();

    const {
        session,
        loading,
        hasAccess,
        accessError,
        signOut
    } = useAuth();

    if (loading) {
        return <LoadingScreen />;
    }

    if (!session) {

        return (

            <Navigate
                to="/login"
                replace
                state={{
                    from: location
                }}
            />
        );
    }

    if (!hasAccess) {

        return (

            <div className="accessDeniedPage">

                <div className="accessDeniedCard">

                    <h1>
                        Acceso no disponible
                    </h1>

                    <p>
                        {accessError ||
                            "Tu usuario no tiene acceso a una clínica activa."}
                    </p>

                    <button
                        type="button"
                        onClick={signOut}
                    >
                        Cerrar sesión
                    </button>

                </div>

            </div>
        );
    }

    return <Outlet />;
}

export function PublicOnlyRoute({ children }) {

    const {
        session,
        loading
    } = useAuth();

    if (loading) {
        return <LoadingScreen />;
    }

    if (session) {

        return (

            <Navigate
                to="/pacientes"
                replace
            />
        );
    }

    return children;
}

export default ProtectedRoute;
```

## 📄 src\components\Sidebar.jsx
```jsx
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
```

## 📄 src\components\StatsCards\StatsCards.css
```css
.cards{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:18px;

margin-bottom:10px;

}

.card{

padding:15px;

border-radius:18px;

box-shadow:

0 2px 8px rgba(15,23,42,.03),

0 20px 40px rgba(15,23,42,.05);

display:flex;

flex-direction:column;

justify-content:space-between;

height:95px;

transition:.25s;

cursor:default;
}

.cardHeader{

display:flex;

justify-content:space-between;

align-items:flex-start;

}

.card h4{

font-size: 14px;

font-weight:500;

color:#555;

}

.card h2{

font-size:20px;

margin-top:12px;

font-weight:700;

color:#1f2937;

}

.icon{

font-size:20px;

color:#8b8b8b;

}

.card:hover{

    transform:translateY(-4px);

}
```

## 📄 src\components\StatsCards\StatsCards.jsx
```jsx
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
```

## 📄 src\components\UpcomingAppointments\UpcomingAppointments.css
```css
.appointmentsCard{

background:white;

padding:20px;

border-radius:18px;

box-shadow:0 10px 20px rgba(0,0,0,.05);

}

.appointmentsCard h3{

margin-bottom:18px;

}

.appointment{

display:flex;

align-items:center;

gap:18px;

}

.calendar{

width:54px;

height:50px;

background:#f4f7fb;

border-radius:12px;

display:flex;

align-items:center;

justify-content:center;

font-weight:bold;

font-size:20px;

color:#17334d;

}

.appointment strong{

display:block;

margin-bottom:5px;

}

.appointment p{

color:#666;

font-size:12px;

}
```

## 📄 src\components\UpcomingAppointments\UpcomingAppointments.jsx
```jsx
import "./UpcomingAppointments.css";

function UpcomingAppointments(){

return(

<div className="appointmentsCard">

<h3>Próximas Citas</h3>

<div className="appointment">

<div className="calendar">

22

</div>

<div>

<strong>22 Nov 2023</strong>

<p>10:00 AM - Revisión</p>

</div>

<div className="calendar">

30

</div>

<div>

<strong>30 Nov 2023</strong>

<p>Limpieza Dental</p>

</div>

</div>


</div>

)

}

export default UpcomingAppointments;
```

## 📄 src\context\AuthContext.jsx
```jsx
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState
} from "react";

import { supabase } from "../supabase/client";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {

    const [session, setSession] = useState(null);
    const [sessionLoading, setSessionLoading] = useState(true);

    const [profile, setProfile] = useState(null);
    const [membership, setMembership] = useState(null);

    const [loadedUserId, setLoadedUserId] = useState(null);
    const [accessError, setAccessError] = useState("");

    const user = session?.user ?? null;
    const userId = user?.id ?? null;

    useEffect(() => {

        let mounted = true;

        const initializeSession = async () => {

            const {
                data,
                error
            } = await supabase.auth.getSession();

            if (!mounted) return;

            if (error) {
                console.error(
                    "Error recuperando la sesión:",
                    error
                );
            }

            setSession(data?.session ?? null);
            setSessionLoading(false);
        };

        initializeSession();

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange(
            (_event, newSession) => {

                if (!mounted) return;

                setSession(newSession);
                setSessionLoading(false);
            }
        );

        return () => {
            mounted = false;
            subscription.unsubscribe();
        };

    }, []);

    useEffect(() => {

        let active = true;

        if (!userId) {

            setProfile(null);
            setMembership(null);
            setLoadedUserId(null);
            setAccessError("");

            return undefined;
        }

        const loadAccountData = async () => {

            setProfile(null);
            setMembership(null);
            setLoadedUserId(null);
            setAccessError("");

            try {

                const [
                    profileResult,
                    membershipResult
                ] = await Promise.all([

                    supabase
                        .from("perfiles")
                        .select(`
                            id,
                            email,
                            nombre,
                            apellido,
                            telefono,
                            activo
                        `)
                        .eq("id", userId)
                        .maybeSingle(),

                    supabase
                        .from("clinica_usuarios")
                        .select(`
                            id,
                            usuario_id,
                            clinica_id,
                            rol,
                            activo,
                            created_at
                        `)
                        .eq("usuario_id", userId)
                        .eq("activo", true)
                        .order("created_at", {
                            ascending: true
                        })
                        .limit(1)
                        .maybeSingle()

                ]);

                if (profileResult.error) {
                    throw profileResult.error;
                }

                if (membershipResult.error) {
                    throw membershipResult.error;
                }

                if (!profileResult.data) {
                    throw new Error(
                        "No se encontró el perfil del usuario."
                    );
                }

                if (!profileResult.data.activo) {
                    throw new Error(
                        "Este usuario se encuentra inactivo."
                    );
                }

                if (!membershipResult.data) {
                    throw new Error(
                        "El usuario no está asociado con una clínica activa."
                    );
                }

                if (!active) return;

                setProfile(profileResult.data);
                setMembership(membershipResult.data);

            } catch (error) {

                console.error(
                    "Error cargando los datos del usuario:",
                    error
                );

                if (active) {
                    setAccessError(
                        error.message ||
                        "No fue posible validar el acceso del usuario."
                    );
                }

            } finally {

                if (active) {
                    setLoadedUserId(userId);
                }
            }
        };

        loadAccountData();

        return () => {
            active = false;
        };

    }, [userId]);

    const signIn = useCallback(
        ({ email, password }) => {

            return supabase.auth.signInWithPassword({
                email: email.trim(),
                password
            });
        },
        []
    );

    const signOut = useCallback(() => {
        return supabase.auth.signOut();
    }, []);

    const loading =
        sessionLoading ||
        (
            Boolean(userId) &&
            loadedUserId !== userId
        );

    const hasAccess = Boolean(
        profile?.activo &&
        membership?.activo
    );

    const isAdmin =
        membership?.rol === "administrador";

    return (

        <AuthContext.Provider
            value={{
                session,
                user,
                profile,
                membership,
                loading,
                accessError,
                hasAccess,
                isAdmin,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {

    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error(
            "useAuth debe utilizarse dentro de AuthProvider."
        );
    }

    return context;
}
```

## 📄 src\index.css
```css
/* ========================================
   DESIGN SYSTEM
======================================== */

:root {

    /* Application */

    --app-background: #f6f8fb;

    --surface: #ffffff;

    --surface-secondary: #f8fafc;


    /* Primary */

    --primary: #15569d;

    --primary-hover: #104780;

    --primary-soft: #eff6ff;


    /* Text */

    --text-primary: #172033;

    --text-secondary: #64748b;

    --text-muted: #94a3b8;


    /* Borders */

    --border: #e5eaf0;

    --border-light: #eef2f6;


    /* Status */

    --success: #15805f;

    --success-background: #dcfce7;

    --warning: #b7791f;

    --warning-background: #fef3c7;


    /* Shadows */

    --shadow-sm:
        0 1px 3px rgba(15, 23, 42, 0.04);

    --shadow-card:
        0 2px 8px rgba(15, 23, 42, 0.05);


    /* Radius */

    --radius-sm: 8px;

    --radius-md: 12px;

    --radius-lg: 16px;


    /* Typography */

    --font-family:
        "Inter Variable",
        Inter,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

}


/* ========================================
   RESET
======================================== */

* {
    box-sizing: border-box;
}


html {
    margin: 0;

    padding: 0;

    background: var(--app-background);
}


body {
    margin: 0;

    padding: 0;

    min-width: 320px;
    min-height: 100vh;

    background: var(--app-background);

    color: var(--text-primary);

    font-family: var(--font-family);

    font-size: 14px;

    line-height: 1.5;

    text-align: left;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


#root {
    width: 100%;
    min-height: 100vh;

    margin: 0;
    padding: 0;
}


/* ========================================
   TYPOGRAPHY
======================================== */

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;

    color: var(--text-primary);

    font-family: var(--font-family);

    font-weight: 700;
}


p {
    margin: 0;
}


button,
input,
select,
textarea {
    font: inherit;
}


button {
    cursor: pointer;
}


a {
    color: inherit;
    text-decoration: none;
}
```

## 📄 src\main.jsx
```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@fontsource-variable/inter";
import "./index.css";

import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext";

createRoot(
    document.getElementById("root")
).render(

    <StrictMode>

        <BrowserRouter>

            <AuthProvider>
                <App />
            </AuthProvider>

        </BrowserRouter>

    </StrictMode>
);
```

## 📄 src\pages\Agenda.jsx
```jsx
import Odontogram from "../components/OdontogramV2/Odontogram";
import { OdontogramProvider } from "../components/OdontogramV2/context/OdontogramContext";

function Agenda() {

    return (

        <OdontogramProvider>

            <Odontogram />

        </OdontogramProvider>

    );

}

export default Agenda;
```

## 📄 src\pages\Dashboard.jsx
```jsx
import StatsCards from "../components/StatsCards/StatsCards";
import PatientTable from "../components/PatientTable/PatientTable";
import PatientProfile from "../components/PatientProfile/PatientProfile";
import History from "../components/History/History";
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments";
import { useState, useEffect} from "react";    
import {getPatients} from "../supabase/patients";


function Dashboard() {

    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    useEffect(() => {

        async function loadPatients() {

            try {

                const data = await getPatients();

                if (!data || data.length === 0) return;

                setPatients(data);
                setSelectedPatient(data[0]);

            } catch (error) {

                console.error(error);

            }

        }

        loadPatients();

    }, []);

    return (
        <div className="dashboard">

            <h2 className="dashboardTitle">Dashboard - Sigo pensando que ira aqui - ve a pacientes</h2>

            <div className="dashboardGrid">

                <div className="leftColumn">

                    <StatsCards />

                </div>



            </div>

        </div>
    );
}

export default Dashboard;
```

## 📄 src\pages\Login.css
```css
.loginPage {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 24px;
    background:
        radial-gradient(
            circle at top left,
            #dbeafe 0,
            transparent 36%
        ),
        #f7f9fc;
}

.loginCard {
    width: 100%;
    max-width: 420px;
    padding: 36px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    box-shadow:
        0 20px 50px rgba(15, 23, 42, 0.1);
}

.loginBrand {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 36px;
}

.loginBrandIcon {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: #ffffff;
    font-size: 21px;
    background: #2563eb;
    border-radius: 13px;
}

.loginBrand h1 {
    margin: 0;
    color: #111827;
    font-size: 19px;
    font-weight: 700;
}

.loginBrand p {
    margin: 3px 0 0;
    color: #6b7280;
    font-size: 12px;
}

.loginHeading {
    margin-bottom: 26px;
}

.loginHeading h2 {
    margin: 0;
    color: #111827;
    font-size: 26px;
    font-weight: 700;
}

.loginHeading p {
    margin: 7px 0 0;
    color: #6b7280;
    font-size: 14px;
}

.loginForm {
    display: flex;
    flex-direction: column;
    gap: 19px;
}

.loginField {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.loginField label {
    color: #374151;
    font-size: 13px;
    font-weight: 600;
}

.loginField input {
    width: 100%;
    height: 44px;
    padding: 0 13px;
    box-sizing: border-box;
    color: #111827;
    font: inherit;
    font-size: 14px;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 9px;
    outline: none;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.loginField input:focus {
    border-color: #2563eb;
    box-shadow:
        0 0 0 3px rgba(37, 99, 235, 0.12);
}

.loginError {
    padding: 11px 13px;
    color: #b91c1c;
    font-size: 13px;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 8px;
}

.loginSubmit {
    height: 45px;
    color: #ffffff;
    font: inherit;
    font-size: 14px;
    font-weight: 600;
    background: #2563eb;
    border: 0;
    border-radius: 9px;
    cursor: pointer;
    transition:
        background 0.2s ease,
        transform 0.2s ease;
}

.loginSubmit:hover:not(:disabled) {
    background: #1d4ed8;
    transform: translateY(-1px);
}

.loginSubmit:disabled {
    cursor: not-allowed;
    opacity: 0.65;
}

@media (max-width: 520px) {

    .loginPage {
        padding: 16px;
    }

    .loginCard {
        padding: 28px 22px;
    }
}
```

## 📄 src\pages\Login.jsx
```jsx
import "./Login.css";

import { useState } from "react";
import { FaTooth } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

function Login() {

    const { signIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");
        setSubmitting(true);

        const { error: signInError } = await signIn({
            email,
            password
        });

        if (signInError) {

            console.error(
                "Error iniciando sesión:",
                signInError
            );

            setError(
                "El correo o la contraseña son incorrectos."
            );

            setSubmitting(false);
        }
    };

    return (

        <main className="loginPage">

            <section className="loginCard">

                <div className="loginBrand">

                    <div className="loginBrandIcon">
                        <FaTooth />
                    </div>

                    <div>

                        <h1>
                            Odonto ERP
                        </h1>

                        <p>
                            Gestión clínica odontológica
                        </p>

                    </div>

                </div>

                <div className="loginHeading">

                    <h2>
                        Iniciar sesión
                    </h2>

                    <p>
                        Ingresa con tu cuenta para continuar.
                    </p>

                </div>

                <form
                    className="loginForm"
                    onSubmit={handleSubmit}
                >

                    <div className="loginField">

                        <label htmlFor="email">
                            Correo electrónico
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            autoComplete="email"
                            placeholder="usuario@clinica.com"
                            required
                            autoFocus
                        />

                    </div>

                    <div className="loginField">

                        <label htmlFor="password">
                            Contraseña
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            autoComplete="current-password"
                            placeholder="Ingresa tu contraseña"
                            required
                        />

                    </div>

                    {error && (

                        <div
                            className="loginError"
                            role="alert"
                            aria-live="polite"
                        >
                            {error}
                        </div>
                    )}

                    <button
                        className="loginSubmit"
                        type="submit"
                        disabled={submitting}
                    >
                        {submitting
                            ? "Ingresando..."
                            : "Iniciar sesión"}
                    </button>

                </form>

            </section>

        </main>
    );
}

export default Login;
```

## 📄 src\pages\Pacientes.css
```css
.patientsPage {
    width: 100%;
    min-width: 0;

    padding: 28px 30px 32px;

    box-sizing: border-box;
}


/* ================================
   HEADER
================================ */

.patientsPage {
    width: 100%;
    min-width: 0;

    padding: 22px 28px 28px;

    box-sizing: border-box;
}


.patientsPageHeader {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-bottom: 18px;
}


.patientsPageHeader h1 {
    margin: 0;

    color: #172033;

    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;

    letter-spacing: -0.02em;
}


.patientsPageHeader p {
    margin: 4px 0 0;

    color: #64748b;

    font-size: 13px;
    font-weight: 400;
    line-height: 1.45;
}

/* ================================
   LAYOUT
================================ */

.patientsLayout {
    display: grid;

    grid-template-columns:
        minmax(0, 1fr)
        360px;

    gap: 24px;

    align-items: start;

    width: 100%;
}


/* ================================
   PATIENT TABLE
================================ */

.patientsMain {
    min-width: 0;
}


/* ================================
   RIGHT PATIENT PANEL
================================ */

.patientsSidebar {
    min-width: 0;
}


.patientSummaryCard {
    overflow: hidden;

    background: #ffffff;

    border: 1px solid #e5eaf0;
    border-radius: 16px;

    box-shadow:
        0 2px 8px
        rgba(15, 23, 42, 0.04);
}


/* ================================
   RESPONSIVE
================================ */

@media (max-width: 1200px) {

    .patientsLayout {
        grid-template-columns:
            minmax(0, 1fr)
            330px;

        gap: 18px;
    }

}


@media (max-width: 1000px) {

    .patientsLayout {
        grid-template-columns: 1fr;
    }


    .patientsSidebar {
        width: 100%;
    }

}


@media (max-width: 700px) {

    .patientsPage {
        padding: 20px 16px;
    }


    .patientsPageHeader h1 {
        font-size: 23px;
    }

}
```

## 📄 src\pages\Pacientes.jsx
```jsx
import "./Pacientes.css";
import StatsCards from "../components/StatsCards/StatsCards";
import PatientTable from "../components/PatientTable/PatientTable";
import PatientProfile from "../components/PatientProfile/PatientProfile";
import History from "../components/History/History";
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments";
import { useState, useEffect} from "react";    
import {getPatients, createPatient, updatePatient} from "../supabase/patients";
import PatientForm from "../components/PatientForm/PatientForm";
import ExploracionForm from "../components/Exploracion/Exploracion";
import OdontogramModule from "../components/OdontogramV2/OdontogramModule";
import { getExploracionStatus } from "../supabase/exploraciones";
import { getInitialEvaluationStatus } from "../supabase/initialOdontogram";

function Pacientes() {

    const [patients, setPatients] = useState([]);

    const [selectedPatient, setSelectedPatient] = useState(null);

    const [panelMode, setPanelMode] = useState("profile");

    const [
        exploracionStatus,
        setExploracionStatus
    ] = useState(null);

    const [
        loadingExploracionStatus,
        setLoadingExploracionStatus
    ] = useState(false);

    const [
        odontogramStatus,
        setOdontogramStatus
    ] = useState(null);

    const [
        loadingOdontogramStatus,
        setLoadingOdontogramStatus
    ] = useState(false);

    async function loadPatients() {

        try {

            const data = await getPatients();

            setPatients(data);

            return data;

        } catch (error) {

            console.error(error);

            return [];

        }

    }

    async function loadExploracionStatus(patientId) {

        if (!patientId) {

            setExploracionStatus(null);

            return;
        }

        try {

            setLoadingExploracionStatus(true);

            const data =
                await getExploracionStatus(patientId);

            setExploracionStatus(data);

        } catch (error) {

            console.error(
                "Error obteniendo estado de exploración:",
                error
            );

            setExploracionStatus(null);

        } finally {

            setLoadingExploracionStatus(false);

        }

    }

    async function loadOdontogramStatus(
        patientId
    ) {

        if (!patientId) {

            setOdontogramStatus(null);

            return;
        }

        try {

            setLoadingOdontogramStatus(true);

            const data =
                await getInitialEvaluationStatus(
                    patientId
                );

            setOdontogramStatus(data);

        } catch (error) {

            console.error(
                "Error obteniendo estado del odontograma:",
                error
            );

            setOdontogramStatus(null);

        } finally {

            setLoadingOdontogramStatus(false);

        }

    }

    useEffect(() => {

        if (!selectedPatient?.id) {
            return;
        }

        loadExploracionStatus(
            selectedPatient.id
        );

        loadOdontogramStatus(
            selectedPatient.id
        );

    }, [selectedPatient?.id]);

    useEffect(() => {

        loadExploracionStatus(
            selectedPatient?.id
        );

    }, [selectedPatient?.id]);

    useEffect(() => {
        loadPatients();
    }, []);

    useEffect(() => {

        if (!selectedPatient && patients.length > 0) {

            setSelectedPatient(patients[0]);

        }

    }, [patients]);

    async function handleCreatePatient(formData) {

        try {

            const newPatient = await createPatient(formData);

            await loadPatients();

            setPatients((prev) => [...prev, newPatient]);

            setSelectedPatient(newPatient);

            setPanelMode("profile");

        } catch (error) {

            console.error(error);

            alert("Ocurrió un error al guardar el paciente.");

        }

    }

    async function handleUpdatePatient(formData) {

        try {

            const updatedPatient = await updatePatient(
                selectedPatient.id,
                formData
            );

            await loadPatients();

            setSelectedPatient(updatedPatient);

            setPanelMode("profile");

        } catch (error) {

            console.error(error);

        }

    }

    if (panelMode === "odontogram") {

    return (

        <OdontogramModule
            patient={selectedPatient}
            onCancel={async () => {

                await loadOdontogramStatus(
                    selectedPatient.id
                );

                setPanelMode("profile");

            }}
        />
    );

}

function handleSelectPatient(patient) {

    setSelectedPatient(patient);

    setPanelMode("profile");

}

    return (
        <div className="patientsPage">

            <header className="patientsPageHeader">
                <div>
                    <h1>Pacientes</h1>

                    <p>
                        Gestiona la información y el historial de tus pacientes.
                    </p>
                </div>
            </header>

            <div className="patientsLayout">

                <main className="patientsMain">
                    <PatientTable
                        patients={patients}
                        onSelectPatient={handleSelectPatient}
                        selectedPatient={selectedPatient}
                        onCreatePatient={() =>
                            setPanelMode("create")
                        }
                    />

                </main>

                <aside className="patientsSidebar">

                    {panelMode === "profile" && (
                        <div className="patientSummaryCard">
                            <PatientProfile
                                patient={selectedPatient}

                                exploracion={exploracionStatus}
                                loadingExploracion={
                                    loadingExploracionStatus
                                }

                                odontogram={odontogramStatus}
                                loadingOdontogram={
                                    loadingOdontogramStatus
                                }

                                onEditPatient={() =>
                                    setPanelMode("edit")
                                }

                                onOpenExploracion={() =>
                                    setPanelMode("exploracion")
                                }

                                onOpenOdontogram={() =>
                                    setPanelMode("odontogram")
                                }
                            />
                            <History
                                patientId={selectedPatient?.id}
                            />

                           {/* <UpcomingAppointments />*/}

                        </div>
                    )}

                    {panelMode === "create" && (
                        <PatientForm
                            mode="create"
                            onCancel={() =>
                                setPanelMode("profile")
                            }
                            onSave={handleCreatePatient}
                        />
                    )}

                    {panelMode === "edit" && (
                        <PatientForm
                            mode="edit"
                            patient={selectedPatient}
                            onCancel={() =>
                                setPanelMode("profile")
                            }
                            onSave={handleUpdatePatient}
                        />
                    )}

                    {panelMode === "exploracion" && (
                        <ExploracionForm
                            patient={selectedPatient}
                            onCancel={() =>
                                setPanelMode("profile")
                            }
                            onSave={async () => {

                                await loadExploracionStatus(
                                    selectedPatient.id
                                );

                                setPanelMode("profile");

                            }}
                        />
                    )}

                </aside>

            </div>

        </div>
    );
}

export default Pacientes;
```

## 📄 src\services\historyMapper.js
```javascript
const FACE_LABELS = {

    top: "Oclusal",

    bottom: "Lingual",

    left: "Mesial",

    right: "Distal",

    center: "Centro"

};

function getRelation(relation) {

    if (Array.isArray(relation)) {

        return relation[0] ?? null;

    }

    return relation ?? null;

}

function normalizeStatus(status) {

    const normalized = String(status || "")
        .trim()
        .toLowerCase();

    if (normalized === "completado") {

        return "Completado";

    }

    if (normalized === "cancelado") {

        return "Cancelado";

    }

    return "Pendiente";

}

function getHistoryDate(row) {

    const status = normalizeStatus(row.estado);

    if (status === "Completado") {

        return (
            row.fecha_realizacion ||
            row.updated_at ||
            row.fecha ||
            row.created_at
        );

    }

    if (status === "Cancelado") {

        return (
            row.updated_at ||
            row.fecha ||
            row.created_at
        );

    }

    return (
        row.fecha ||
        row.created_at
    );

}

export function mapDatabaseToHistory(rows) {

    const groups = new Map();

    rows.forEach((row) => {

        const groupKey =
            row.grupo_id ||
            `record-${row.id}`;

        const treatment =
            getRelation(row.tratamiento);

        const material =
            getRelation(row.material);

        const eventDate =
            getHistoryDate(row);

        if (!groups.has(groupKey)) {

            groups.set(groupKey, {

                id: groupKey,

                recordIds: [],

                treatmentName:
                    treatment?.nombre ||
                    "Tratamiento sin nombre",

                treatmentColor:
                    treatment?.color || null,

                materialName:
                    material?.nombre || "",

                observations:
                    row.observaciones || "",

                status:
                    normalizeStatus(row.estado),

                date: eventDate,

                cost:
                    row.costo ?? null,

                teeth: []

            });

        }

        const group =
            groups.get(groupKey);

        group.recordIds.push(row.id);

        const faceLabel =
            FACE_LABELS[row.cara] ||
            row.cara ||
            "Pieza completa";

        const description =
            `${row.numero_pieza} (${faceLabel})`;

        if (!group.teeth.includes(description)) {

            group.teeth.push(description);

        }

        /*
            En caso de que las filas de un mismo grupo
            tengan fechas diferentes, conservamos la más reciente.
        */
        if (
            eventDate &&
            (
                !group.date ||
                new Date(eventDate) > new Date(group.date)
            )
        ) {

            group.date = eventDate;

        }

    });

    return Array.from(groups.values())

        .sort((first, second) => {

            return (
                new Date(second.date || 0) -
                new Date(first.date || 0)
            );

        });

}
```

## 📄 src\styles\Header.css
```css
/* ========================================
   HEADER
======================================== */

.header {
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 64px;

    padding: 0 28px;

    background: #ffffff;

    box-sizing: border-box;
}


/* ========================================
   RIGHT SIDE
======================================== */

.headerRight {
    display: flex;
    align-items: center;

    gap: 10px;

    margin-left: auto;
}


/* ========================================
   ICON BUTTON
======================================== */

.headerIconButton {
    position: relative;

    display: flex;

    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;

    padding: 0;

    border: 0;

    border-radius: 9px;

    background: transparent;

    color: #52637a;

    font-size: 16px;

    cursor: pointer;

    transition:
        background 150ms ease,
        color 150ms ease;
}


.headerIconButton:hover {
    background: #f1f5f9;

    color: #15569d;
}


/* ========================================
   NOTIFICATION BADGE
======================================== */

.notificationBadge {
    position: absolute;

    top: 2px;
    right: 2px;

    display: flex;

    align-items: center;
    justify-content: center;

    min-width: 15px;
    height: 15px;

    padding: 0 4px;

    border: 2px solid #ffffff;

    border-radius: 999px;

    background: #15569d;

    color: #ffffff;

    font-size: 8px;
    font-weight: 700;

    line-height: 1;
}


/* ========================================
   USER
======================================== */

.headerUser {
    display: flex;
    align-items: center;

    gap: 10px;

    margin-left: 8px;

    padding-left: 16px;

    border-left: 1px solid #e5eaf0;
}


.headerAvatar {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 34px;
    height: 34px;

    flex-shrink: 0;

    border-radius: 50%;

    background: #e7f0fb;

    color: #15569d;

    font-size: 12px;
    font-weight: 700;
}


.headerUserName {
    color: #27364b;

    font-size: 13px;
    font-weight: 600;

    white-space: nowrap;
}


.headerUserArrow {
    color: #94a3b8;

    font-size: 9px;
}


/* ========================================
   RESPONSIVE
======================================== */

@media (max-width: 800px) {

    .header {
        padding: 0 18px;
    }


    .headerUserName {
        display: none;
    }


    .headerUser {
        padding-left: 10px;
    }

}

.headerUserMenu {
    position: relative;
}

.headerUser {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 7px;
    color: inherit;
    font: inherit;
    background: transparent;
    border: 0;
    border-radius: 9px;
    cursor: pointer;
    transition: background 0.2s ease;
}

.headerUser:hover {
    background: #f3f4f6;
}

.headerUserName {
    max-width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.headerUserArrow {
    transition: transform 0.2s ease;
}

.headerUserArrowOpen {
    transform: rotate(180deg);
}

.headerUserDropdown {
    position: absolute;
    z-index: 1000;
    top: calc(100% + 10px);
    right: 0;
    width: 230px;
    padding: 8px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow:
        0 16px 35px rgba(15, 23, 42, 0.14);
}

.headerUserDropdownInfo {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 10px;
}

.headerUserDropdownInfo strong {
    overflow: hidden;
    color: #111827;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.headerUserDropdownInfo span {
    overflow: hidden;
    color: #6b7280;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.headerUserDropdownInfo small {
    margin-top: 4px;
    color: #2563eb;
    font-size: 11px;
    font-weight: 600;
}

.headerUserDropdownDivider {
    height: 1px;
    margin: 3px 0;
    background: #e5e7eb;
}

.headerLogoutButton {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    color: #b91c1c;
    font: inherit;
    font-size: 13px;
    font-weight: 500;
    text-align: left;
    background: transparent;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
}

.headerLogoutButton:hover {
    background: #fef2f2;
}
```

## 📄 src\styles\Sidebar.css
```css
/* ========================================
   SIDEBAR
======================================== */

.sidebar {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    padding: 0 16px 20px;

    background: #ffffff;

    color: #334155;

    box-sizing: border-box;
}


/* ========================================
   BRAND
======================================== */

.sidebarBrand {
    display: flex;
    align-items: center;

    gap: 12px;

    height: 64px;

    padding: 0 14px;

    border-bottom: 1px solid #eef2f6;

    margin: 0 -16px 28px;

    padding-left: 24px;
}


.sidebarBrandIcon {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    flex-shrink: 0;

    border-radius: 10px;

    background:
        linear-gradient(
            135deg,
            #23b8c7,
            #1586ad
        );

    color: #ffffff;

    font-size: 19px;

    box-shadow:
        0 4px 12px
        rgba(21, 134, 173, 0.18);
}


.sidebarBrandText {
    display: flex;
    flex-direction: column;

    min-width: 0;
}


.sidebarBrandText strong {
    overflow: hidden;

    color: #17345a;

    font-size: 14px;
    font-weight: 700;

    line-height: 1.25;

    white-space: nowrap;
    text-overflow: ellipsis;
}


.sidebarBrandText span {
    margin-top: 2px;

    color: #94a3b8;

    font-size: 11px;

    white-space: nowrap;
}


/* ========================================
   NAVIGATION
======================================== */

.sidebarNavigation {
    display: flex;
    flex-direction: column;

    gap: 6px;

    padding: 0;
}


.sidebarMenuItem {
    display: flex;
    align-items: center;

    gap: 13px;

    width: 100%;

    min-height: 44px;

    padding: 0 14px;

    border-radius: 10px;

    color: #475569;

    font-size: 14px;
    font-weight: 500;

    text-decoration: none;

    box-sizing: border-box;

    transition:
        background 150ms ease,
        color 150ms ease;
}


.sidebarMenuIcon {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 20px;

    flex-shrink: 0;

    color: #64748b;

    font-size: 16px;

    transition: color 150ms ease;
}


.sidebarMenuItem:hover {
    background: #f5f8fc;

    color: #17345a;
}


.sidebarMenuItem:hover .sidebarMenuIcon {
    color: #15569d;
}


/* ========================================
   ACTIVE ITEM
======================================== */

.sidebarMenuItem.active {
    background: #edf5fd;

    color: #15569d;

    font-weight: 600;
}


.sidebarMenuItem.active .sidebarMenuIcon {
    color: #15569d;
}


/* ========================================
   DISABLED / FUTURE SECTIONS
======================================== */

.sidebarMenuItemDisabled {
    cursor: default;
}


.sidebarMenuItemDisabled:hover {
    background: #f8fafc;
}


/* ========================================
   BOTTOM
======================================== */

.sidebarBottom {
    margin-top: auto;
}


.sidebarDivider {
    width: 100%;
    height: 1px;

    margin-bottom: 12px;

    background: #e5eaf0;
}
```

## 📄 src\supabase\client.js
```javascript
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL, 
    import.meta.env.VITE_SUPABASE_ANON_KEY
);
```

## 📄 src\supabase\estados.js
```javascript
export const estados = [
  {
    id: 1,
    nombre: "Aguascalientes",
    municipios: [
      "Aguascalientes",
      "Asientos",
      "Calvillo",
      "Cosío",
      "El Llano",
      "Jesús María",
      "Pabellón de Arteaga",
      "Rincón de Romos",
      "San Francisco de los Romo",
      "San José de Gracia",
      "Tepezalá"
    ]
  },
  {
    id: 2,
    nombre: "Baja California",
    municipios: [
      "Ensenada",
      "Mexicali",
      "Playas de Rosarito",
      "San Quintín",
      "Tecate",
      "Tijuana"
    ]
  },
  {
    id: 3,
    nombre: "Baja California Sur",
    municipios: [
      "Comondú",
      "La Paz",
      "Loreto",
      "Los Cabos",
      "Mulegé"
    ]
  },
  {
    id: 4,
    nombre: "Campeche",
    municipios: [
      "Calkiní",
      "Campeche",
      "Candelaria",
      "Carmen",
      "Champotón",
      "Escárcega",
      "Hecelchakán",
      "Hopelchén",
      "Palizada",
      "Tenabo"
    ]
  },
  {
    id: 5,
    nombre: "Coahuila",
    municipios: [
      "Abasolo",
      "Acuña",
      "Allende",
      "Arteaga",
      "Candela",
      "Castaños",
      "Cuatro Ciénegas",
      "Escobedo",
      "Francisco I. Madero",
      "Frontera",
      "General Cepeda",
      "Guerrero",
      "Hidalgo",
      "Jiménez",
      "Juárez",
      "Lamadrid",
      "Matamoros",
      "Monclova",
      "Morelos",
      "Múzquiz",
      "Nadadores",
      "Nava",
      "Ocampo",
      "Parras",
      "Piedras Negras",
      "Progreso",
      "Ramos Arizpe",
      "Sabinas",
      "Sacramento",
      "Saltillo",
      "San Buenaventura",
      "San Juan de Sabinas",
      "San Pedro",
      "Sierra Mojada",
      "Torreón",
      "Viesca",
      "Villa Unión",
      "Zaragoza"
    ]
  },
  {
    id: 6,
    nombre: "Colima",
    municipios: [
      "Armería",
      "Colima",
      "Comala",
      "Coquimatlán",
      "Cuauhtémoc",
      "Ixtlahuacán",
      "Manzanillo",
      "Minatitlán",
      "Tecomán",
      "Villa de Álvarez"
    ]
  },
  {
    id: 7,
    nombre: "Chiapas",
    municipios: [
      "Acacoyagua",
      "Acala",
      "Acapetahua",
      "Altamirano",
      "Amatán",
      "Amatenango de la Frontera",
      "Amatenango del Valle",
      "Ángel Albino Corzo",
      "Arriaga",
      "Bejucal de Ocampo",
      "Bella Vista",
      "Berriozábal",
      "Bochil",
      "El Bosque",
      "Cacahoatán",
      "Catazajá",
      "Cintalapa",
      "Coapilla",
      "Comitán de Domínguez",
      "La Concordia",
      "Copainalá",
      "Chalchihuitán",
      "Chamula",
      "Chanal",
      "Chapultenango",
      "Chenalhó",
      "Chiapa de Corzo",
      "Chiapilla",
      "Chicoasén",
      "Chicomuselo",
      "Chilón",
      "Escuintla",
      "Francisco León",
      "Frontera Comalapa",
      "Frontera Hidalgo",
      "La Grandeza",
      "Huehuetán",
      "Huixtán",
      "Huitiupán",
      "Huixtla",
      "La Independencia",
      "Ixhuatán",
      "Ixtacomitán",
      "Ixtapa",
      "Ixtapangajoya",
      "Jiquipilas",
      "Jitotol",
      "Juárez",
      "Larráinzar",
      "La Libertad",
      "Mapastepec",
      "Las Margaritas",
      "Mazapa de Madero",
      "Mazatán",
      "Metapa",
      "Mitontic",
      "Motozintla",
      "Nicolás Ruíz",
      "Ocosingo",
      "Ocotepec",
      "Ocozocoautla de Espinosa",
      "Ostuacán",
      "Osumacinta",
      "Oxchuc",
      "Palenque",
      "Pantelhó",
      "Pantepec",
      "Pichucalco",
      "Pijijiapan",
      "El Porvenir",
      "Villa Comaltitlán",
      "Pueblo Nuevo Solistahuacán",
      "Rayón",
      "Reforma",
      "Las Rosas",
      "Sabanilla",
      "Salto de Agua",
      "San Cristóbal de las Casas",
      "San Fernando",
      "San Juan Cancuc",
      "San Lucas",
      "Santiago el Pinar",
      "Siltepec",
      "Simojovel",
      "Sitalá",
      "Socoltenango",
      "Solosuchiapa",
      "Soyaló",
      "Suchiapa",
      "Suchiate",
      "Sunuapa",
      "Tapachula",
      "Tapalapa",
      "Tapilula",
      "Tecpatán",
      "Tenejapa",
      "Teopisca",
      "Tila",
      "Tonalá",
      "Totolapa",
      "La Trinitaria",
      "Tumbalá",
      "Tuxtla Gutiérrez",
      "Tuxtla Chico",
      "Tuzantán",
      "Tzimol",
      "Unión Juárez",
      "Venustiano Carranza",
      "Villa Corzo",
      "Villaflores",
      "Yajalón",
      "San Lucas",
      "Zinacantán",
      "San Juan Cancuc",
      "Aldama"
    ]
  },
  {
    id: 8,
    nombre: "Chihuahua",
    municipios: [
      "Ahumada",
      "Aldama",
      "Allende",
      "Aquiles Serdán",
      "Ascensión",
      "Bachíniva",
      "Balleza",
      "Batopilas",
      "Bocoyna",
      "Buenaventura",
      "Camargo",
      "Carichí",
      "Casas Grandes",
      "Coronado",
      "Coyame del Sotol",
      "La Cruz",
      "Cuauhtémoc",
      "Cusihuiriachi",
      "Chihuahua",
      "Chínipas",
      "Delicias",
      "Dr. Belisario Domínguez",
      "Galeana",
      "Santa Isabel",
      "Gómez Farías",
      "Gran Morelos",
      "Guachochi",
      "Guadalupe",
      "Guadalupe y Calvo",
      "Guazapares",
      "Guerrero",
      "Hidalgo del Parral",
      "Huejotitán",
      "Ignacio Zaragoza",
      "Janos",
      "Jiménez",
      "Juárez",
      "Julimes",
      "López",
      "Madera",
      "Maguarichi",
      "Manuel Benavides",
      "Matachí",
      "Matamoros",
      "Meoqui",
      "Morelos",
      "Moris",
      "Namiquipa",
      "Nonoava",
      "Nuevo Casas Grandes",
      "Ocampo",
      "Ojinaga",
      "Praxedis G. Guerrero",
      "Riva Palacio",
      "Rosales",
      "Rosario",
      "San Francisco de Borja",
      "San Francisco de Conchos",
      "San Francisco del Oro",
      "Santa Bárbara",
      "Santa Isabel",
      "Satevó",
      "Saucillo",
      "Temósachic",
      "El Tule",
      "Urique",
      "Uruachi",
      "Valle de Zaragoza"
    ]
  },
  {
    id: 9,
    nombre: "Ciudad de México",
    municipios: [
      "Álvaro Obregón",
      "Azcapotzalco",
      "Benito Juárez",
      "Coyoacán",
      "Cuajimalpa de Morelos",
      "Cuauhtémoc",
      "Gustavo A. Madero",
      "Iztacalco",
      "Iztapalapa",
      "La Magdalena Contreras",
      "Miguel Hidalgo",
      "Milpa Alta",
      "Tláhuac",
      "Tlalpan",
      "Venustiano Carranza",
      "Xochimilco"
    ]
  },
  {
    id: 10,
    nombre: "Durango",
    municipios: [
      "Canatlán",
      "Canelas",
      "Coneto de Comonfort",
      "Cuencamé",
      "Durango",
      "El Oro",
      "General Simón Bolívar",
      "Gómez Palacio",
      "Guadalupe Victoria",
      "Guanaceví",
      "Hidalgo",
      "Indé",
      "Lerdo",
      "Mapimí",
      "Mezquital",
      "Nazas",
      "Nombre de Dios",
      "Ocampo",
      "El Salto",
      "Pánuco de Coronado",
      "Peñón Blanco",
      "Poanas",
      "Pueblo Nuevo",
      "Rodeo",
      "San Bernardo",
      "San Dimas",
      "San Juan de Guadalupe",
      "San Juan del Río",
      "San Luis del Cordero",
      "San Pedro del Gallo",
      "Santa Clara",
      "Santiago Papasquiaro",
      "Súchil",
      "Tamaula",
      "Tepehuanes",
      "Tlahualilo",
      "Topia",
      "Vicente Guerrero"
    ]
  },
  {
    id: 11,
    nombre: "Guanajuato",
    municipios: [
      "Abasolo",
      "Acámbaro",
      "San Miguel de Allende",
      "Apaseo el Alto",
      "Apaseo el Grande",
      "Atarjea",
      "Celaya",
      "Manuel Doblado",
      "Comonfort",
      "Coroneo",
      "Cortazar",
      "Cuerámaro",
      "Doctor Mora",
      "Dolores Hidalgo Cuna de la Independencia Nacional",
      "Guanajuato",
      "Huanímaro",
      "Irapuato",
      "Jaral del Progreso",
      "Jerécuaro",
      "León",
      "Moroleón",
      "Ocampo",
      "Pénjamo",
      "Pueblo Nuevo",
      "Purísima del Rincón",
      "Romita",
      "Salamanca",
      "Salvatierra",
      "San Diego de la Unión",
      "San Felipe",
      "San Francisco del Rincón",
      "San José Iturbide",
      "San Luis de la Paz",
      "Santa Catarina",
      "Santa Cruz de Juventino Rosas",
      "Santiago Maravatío",
      "Silao de la Victoria",
      "Tarandacuao",
      "Tarimoro",
      "Tierra Blanca",
      "Uriangato",
      "Valle de Santiago",
      "Victoria",
      "Villagrán",
      "Xichú",
      "Yuriria"
    ]
  },
  {
    id: 12,
    nombre: "Guerrero",
    municipios: [
      "Acapulco de Juárez",
      "Ahuacuotzingo",
      "Ajuchitlán del Progreso",
      "Alcozauca de Guerrero",
      "Alpoyeca",
      "Apaxtla",
      "Arcelia",
      "Atenango del Río",
      "Atlamajalcingo del Monte",
      "Atlixtac",
      "Atoyac de Álvarez",
      "Ayutla de los Libres",
      "Azoyú",
      "Benito Juárez",
      "Buenavista de Cuéllar",
      "Coahuayutla de José María Izazaga",
      "Cocula",
      "Copala",
      "Copalillo",
      "Copanatoyac",
      "Coyuca de Benítez",
      "Coyuca de Catalán",
      "Cuajinicuilapa",
      "Cualác",
      "Cuautepec",
      "Cuetzala del Progreso",
      "Cutzamala de Pinzón",
      "Chilapa de Álvarez",
      "Chilpancingo de los Bravo",
      "Florencio Villarreal",
      "General Canuto A. Neri",
      "General Heliodoro Castillo",
      "Huamuxtitlán",
      "Huitzuco de los Figueroa",
      "Iguala de la Independencia",
      "Igualapa",
      "Ixcateopan de Cuauhtémoc",
      "Zihuatanejo de Azueta",
      "Juan R. Escudero",
      "Leonardo Bravo",
      "Malinaltepec",
      "Mártir de Cuilapan",
      "Metlatónoc",
      "Mochitlán",
      "Olinalá",
      "Ometepec",
      "Pedro Ascencio Alquisiras",
      "Petatlán",
      "Pilcaya",
      "Pungarabato",
      "Quechultenango",
      "San Luis Acatlán",
      "San Marcos",
      "San Miguel Totolapan",
      "Taxco de Alarcón",
      "Tecoanapa",
      "Técpan de Galeana",
      "Teloloapan",
      "Tepecoacuilco de Trujano",
      "Tetipac",
      "Tixtla de Guerrero",
      "Tlacoachistlahuaca",
      "Tlacoapa",
      "Tlalchapa",
      "Tlalixtaquilla de Maldonado",
      "Tlapa de Comonfort",
      "Tlapehuala",
      "La Unión de Isidoro Montes de Oca",
      "Xalpatláhuac",
      "Xochihuehuetlán",
      "Xochistlahuaca",
      "Zapotitlán Tablas",
      "Zirándaro",
      "Zitlala"
    ]
  },
  {
    id: 13,
    nombre: "Hidalgo",
    municipios: [
      "Acatlán",
      "Acaxochitlán",
      "Actopan",
      "Agua Blanca de Iturbide",
      "Ajacuba",
      "Alfajayucan",
      "Almoloya",
      "Apan",
      "El Arenal",
      "Atitalaquia",
      "Atlapexco",
      "Atotonilco el Grande",
      "Atotonilco de Tula",
      "Calnali",
      "Cardonal",
      "Cuautepec de Hinojosa",
      "Chapantongo",
      "Chapulhuacán",
      "Chilcuautla",
      "Eloxochitlán",
      "Emiliano Zapata",
      "Epazoyucan",
      "Francisco I. Madero",
      "Huasca de Ocampo",
      "Huautla",
      "Huazalingo",
      "Huehuetla",
      "Huejutla de Reyes",
      "Huichapan",
      "Ixmiquilpan",
      "Jacala de Ledezma",
      "Jaltocán",
      "Juárez Hidalgo",
      "Lolotla",
      "Metepec",
      "San Agustín Metzquititlán",
      "Metztitlán",
      "Mineral del Chico",
      "Mineral del Monte",
      "La Misión",
      "Mixquiahuala de Juárez",
      "Molango de Escamilla",
      "Nicolás Flores",
      "Nopala de Villagrán",
      "Omitlán de Juárez",
      "San Felipe Orizatlán",
      "Pacula",
      "Pachuca de Soto",
      "Pisaflores",
      "Progreso de Obregón",
      "San Agustín Tlaxiaca",
      "San Bartolo Tutotepec",
      "San Salvador",
      "Santiago de Anaya",
      "Santiago Tulantepec de Lugo Guerrero",
      "Singuilucan",
      "Tasquillo",
      "Tecozautla",
      "Tenango de Doria",
      "Tepeapulco",
      "Tepehuacán de Guerrero",
      "Tepeji del Río de Ocampo",
      "Tepetitlán",
      "Tetepango",
      "Tezontepec de Aldama",
      "Tianguistengo",
      "Tizayuca",
      "Tlahuelilpan",
      "Tlahuiltepa",
      "Tlanalapa",
      "Tlanchinol",
      "Tlaxcoapan",
      "Tolcayuca",
      "Tula de Allende",
      "Tulancingo de Bravo",
      "Xochiatipan",
      "Xochicoatlán",
      "Yahualica",
      "Zacualtipán de Ángeles",
      "Zapotlán de Juárez",
      "Zempoala",
      "Zimapán"
    ]
  },
  {
    id: 14,
    nombre: "Jalisco",
    municipios: [
      "Acatic",
      "Acatlán de Juárez",
      "Ahualulco de Mercado",
      "Amacueca",
      "Amatitán",
      "Ameca",
      "San Juanito de Escobedo",
      "Arandas",
      "El Arenal",
      "Atemajac de Brizuela",
      "Atengo",
      "Atenguillo",
      "Atotonilco el Alto",
      "Atoyac",
      "Autlán de Navarro",
      "Ayotlán",
      "Ayutla",
      "La Barca",
      "Bolaños",
      "Cabo Corrientes",
      "Casimiro Castillo",
      "Cihuatlán",
      "Zapotlán el Grande",
      "Cocula",
      "Colotlán",
      "Concepción de Buenos Aires",
      "Cuautitlán de García Barragán",
      "Cuautla",
      "Cuquío",
      "Chapala",
      "Chimaltitán",
      "Chiquilistlán",
      "Degollado",
      "Ejutla",
      "Encarnación de Díaz",
      "Etzatlán",
      "El Grullo",
      "Guachinango",
      "Guadalajara",
      "Hostotipaquillo",
      "Huejúcar",
      "Huejuquilla el Alto",
      "La Huerta",
      "Ixtlahuacán de los Membrillos",
      "Ixtlahuacán del Río",
      "Jalostotitlán",
      "Jamay",
      "Jesús María",
      "Jilotlán de los Dolores",
      "Jocotepec",
      "Juanacatlán",
      "Juchitlán",
      "Lagos de Moreno",
      "El Limón",
      "Magdalena",
      "Santa María del Oro",
      "La Manzanilla de la Paz",
      "Mascota",
      "Mazamitla",
      "Mexticacán",
      "Mezquitic",
      "Mixtlán",
      "Ocotlán",
      "Ojuelos de Jalisco",
      "Pihuamo",
      "Poncitlán",
      "Puerto Vallarta",
      "Villa Purificación",
      "Quitupan",
      "El Salto",
      "San Cristóbal de la Barranca",
      "San Diego de Alejandría",
      "San Gabriel",
      "San Marcos",
      "San Martín de Bolaños",
      "San Martín Hidalgo",
      "San Miguel el Alto",
      "Gómez Farías",
      "San Sebastián del Oeste",
      "Santa María de los Ángeles",
      "Sayula",
      "Tala",
      "Talpa de Allende",
      "Tamazula de Gordiano",
      "Tapalpa",
      "Tecalitlán",
      "Tecolotlán",
      "Techaluta de Montenegro",
      "Tenamaxtlán",
      "Teocaltiche",
      "Teocuitatlán de Corona",
      "Tepatitlán de Morelos",
      "Tequila",
      "Teuchitlán",
      "Tizapán el Alto",
      "Tlajomulco de Zúñiga",
      "Tlaquepaque",
      "Tolimán",
      "Tomatlán",
      "Tonalá",
      "Tonaya",
      "Tonila",
      "Totatiche",
      "Tototlán",
      "Tuxcacuesco",
      "Tuxcueca",
      "Tuxpan",
      "Unión de San Antonio",
      "Unión de Tula",
      "Valle de Guadalupe",
      "Valle de Juárez",
      "San Gabriel",
      "Villa Corona",
      "Villa Guerrero",
      "Villa Hidalgo",
      "Cañadas de Obregón",
      "Yahualica de González Gallo",
      "Zacoalco de Torres",
      "Zapopan",
      "Zapotiltic",
      "Zapotitlán de Vadillo",
      "Zapotlán del Rey",
      "Zapotlanejo",
      "San Ignacio Cerro Gordo"
    ]
  },
  {
    id: 15,
    nombre: "México",
    municipios: [
      "Acambay",
      "Acolman",
      "Aculco",
      "Almoloya de Alquisiras",
      "Almoloya de Juárez",
      "Almoloya del Río",
      "Amanalco",
      "Amatepec",
      "Amecameca",
      "Apaxco",
      "Atenco",
      "Atizapán",
      "Atizapán de Zaragoza",
      "Atlacomulco",
      "Atlautla",
      "Axapusco",
      "Ayapango",
      "Calimaya",
      "Capulhuac",
      "Coacalco de Berriozábal",
      "Coatepec Harinas",
      "Cocotitlán",
      "Coyotepec",
      "Cuautitlán",
      "Chalco",
      "Chapa de Mota",
      "Chapultepec",
      "Chiautla",
      "Chicoloapan",
      "Chiconcuac",
      "Chimalhuacán",
      "Donato Guerra",
      "Ecatepec de Morelos",
      "Ecatzingo",
      "Huehuetoca",
      "Hueypoxtla",
      "Huixquilucan",
      "Isidro Fabela",
      "Ixtapaluca",
      "Ixtapan de la Sal",
      "Ixtapan del Oro",
      "Ixtlahuaca",
      "Xalatlaco",
      "Jaltenco",
      "Jilotepec",
      "Jilotzingo",
      "Jiquipilco",
      "Jocotitlán",
      "Joquicingo",
      "Juchitepec",
      "Lerma",
      "Malinalco",
      "Melchor Ocampo",
      "Metepec",
      "Mexicaltzingo",
      "Morelos",
      "Naucalpan de Juárez",
      "Nezahualcóyotl",
      "Nextlalpan",
      "Nicolás Romero",
      "Nopaltepec",
      "Ocoyoacac",
      "Ocuilan",
      "El Oro",
      "Otumba",
      "Otzoloapan",
      "Otzolotepec",
      "Ozumba",
      "Papalotla",
      "La Paz",
      "Polotitlán",
      "Rayón",
      "San Antonio la Isla",
      "San Felipe del Progreso",
      "San Martín de las Pirámides",
      "San Mateo Atenco",
      "San Simón de Guerrero",
      "Santo Tomás",
      "Soyaniquilpan de Juárez",
      "Sultepec",
      "Tecámac",
      "Tejupilco",
      "Temamatla",
      "Temascalapa",
      "Temascalcingo",
      "Temascaltepec",
      "Temoaya",
      "Tenancingo",
      "Tenango del Aire",
      "Tenango del Valle",
      "Teoloyucan",
      "Teotihuacán",
      "Tepetlaoxtoc",
      "Tepetlixpa",
      "Tepotzotlán",
      "Tequixquiac",
      "Texcoco",
      "Tezoyuca",
      "Tianguistenco",
      "Timilpan",
      "Tlalmanalco",
      "Tlalnepantla de Baz",
      "Tlatlaya",
      "Toluca",
      "Tonatico",
      "Tultepec",
      "Tultitlán",
      "Valle de Bravo",
      "Villa de Allende",
      "Villa del Carbón",
      "Villa Guerrero",
      "Villa Victoria",
      "Xonacatlán",
      "Zacazonapan",
      "Zacualpan",
      "Zinacantepec",
      "Zumpahuacán",
      "Zumpango",
      "Cuautitlán Izcalli",
      "Valle de Chalco Solidaridad",
      "Luvianos",
      "San José del Rincón",
      "Tonanitla"
    ]
  },
  {
    id: 16,
    nombre: "Michoacán",
    municipios: [
      "Acuitzio",
      "Aguililla",
      "Álvaro Obregón",
      "Angamacutiro",
      "Angangueo",
      "Apatzingán",
      "Aporo",
      "Aquila",
      "Ario",
      "Arteaga",
      "Briseñas",
      "Buenavista",
      "Carácuaro",
      "Coahuayana",
      "Coalcomán de Vázquez Pallares",
      "Coeneo",
      "Contepec",
      "Copándaro",
      "Cotija",
      "Cuitzeo",
      "Charapan",
      "Charo",
      "Chavinda",
      "Cherán",
      "Chilchota",
      "Chinicuila",
      "Chucándiro",
      "Churintzio",
      "Churumuco",
      "Ecuandureo",
      "Epitacio Huerta",
      "Erongarícuaro",
      "Gabriel Zamora",
      "Hidalgo",
      "La Huacana",
      "Huandacareo",
      "Huaniqueo",
      "Huetamo",
      "Huiramba",
      "Indaparapeo",
      "Irimbo",
      "Ixtlán",
      "Jacona",
      "Jiménez",
      "Jiquilpan",
      "Juárez",
      "Jungapeo",
      "Lagunillas",
      "Madero",
      "Maravatío",
      "Marcos Castellanos",
      "Lázaro Cárdenas",
      "Morelia",
      "Morelos",
      "Múgica",
      "Nahuatzen",
      "Nocupétaro",
      "Nuevo Parangaricutiro",
      "Nuevo Urecho",
      "Numarán",
      "Ocampo",
      "Pajacuarán",
      "Panindícuaro",
      "Parácuaro",
      "Paracho",
      "Pátzcuaro",
      "Penjamillo",
      "Peribán",
      "La Piedad",
      "Purépero",
      "Puruándiro",
      "Queréndaro",
      "Quiroga",
      "Cojumatlán de Régules",
      "Los Reyes",
      "Sahuayo",
      "San Lucas",
      "Santa Ana Maya",
      "Salvador Escalante",
      "Senguio",
      "Susupuato",
      "Tacámbaro",
      "Tancítaro",
      "Tangamandapio",
      "Tangancícuaro",
      "Tanhuato",
      "Taretan",
      "Tarímbaro",
      "Tepalcatepec",
      "Tingambato",
      "Tingüindín",
      "Tiquicheo de Nicolás Romero",
      "Tlalpujahua",
      "Tlazazalca",
      "Tocumbo",
      "Tumbiscatío",
      "Turicato",
      "Tuxpan",
      "Tuzantla",
      "Tzintzuntzan",
      "Tzitzio",
      "Uruapan",
      "Venustiano Carranza",
      "Villamar",
      "Vista Hermosa",
      "Yurécuaro",
      "Zacapu",
      "Zamora",
      "Zináparo",
      "Zinapécuaro",
      "Ziracuaretiro",
      "Zitácuaro",
      "José Sixto Verduzco"
    ]
  },
  {
    id: 17,
    nombre: "Morelos",
    municipios: [
      "Amacuzac",
      "Atlatlahucan",
      "Axochiapan",
      "Ayala",
      "Coatlán del Río",
      "Cuautla",
      "Cuernavaca",
      "Emiliano Zapata",
      "Huitzilac",
      "Jantetelco",
      "Jiutepec",
      "Jojutla",
      "Jonacatepec",
      "Mazatepec",
      "Miacatlán",
      "Ocuituco",
      "Puente de Ixtla",
      "Temixco",
      "Tepalcingo",
      "Tepoztlán",
      "Tetecala",
      "Tetela del Volcán",
      "Tlalnepantla",
      "Tlaltizapán de Zapata",
      "Tlaquiltenango",
      "Tlayacapan",
      "Totolapan",
      "Xochitepec",
      "Yautepec",
      "Yecapixtla",
      "Zacatepec",
      "Zacualpan de Amilpas",
      "Temoac",
      "Coajomulco"
    ]
  },
  {
    id: 18,
    nombre: "Nayarit",
    municipios: [
      "Acaponeta",
      "Ahuacatlán",
      "Amatlán de Cañas",
      "Compostela",
      "Huajicori",
      "Ixtlán del Río",
      "Jala",
      "Xalisco",
      "Del Nayar",
      "Rosamorada",
      "Ruíz",
      "San Blas",
      "San Pedro Lagunillas",
      "Santa María del Oro",
      "Santiago Ixcuintla",
      "Tecuala",
      "Tepic",
      "Tuxpan",
      "La Yesca",
      "Bahía de Banderas"
    ]
  },
  {
    id: 19,
    nombre: "Nuevo León",
    municipios: [
      "Abasolo",
      "Agualeguas",
      "Los Aldamas",
      "Allende",
      "Anáhuac",
      "Apodaca",
      "Aramberri",
      "Bustamante",
      "Cadereyta Jiménez",
      "El Carmen",
      "Cerralvo",
      "Ciénega de Flores",
      "China",
      "Doctor Arroyo",
      "Doctor Coss",
      "Doctor González",
      "Galeana",
      "García",
      "San Pedro Garza García",
      "General Bravo",
      "General Escobedo",
      "General Terán",
      "General Treviño",
      "General Zaragoza",
      "General Zuazua",
      "Guadalupe",
      "Los Herreras",
      "Higueras",
      "Hualahuises",
      "Iturbide",
      "Juárez",
      "Lampazos de Naranjo",
      "Linares",
      "Marín",
      "Melchor Ocampo",
      "Mier y Noriega",
      "Mina",
      "Montemorelos",
      "Monterrey",
      "Parás",
      "Pesquería",
      "Los Ramones",
      "Rayones",
      "Sabinas Hidalgo",
      "Salinas Victoria",
      "San Nicolás de los Garza",
      "Santa Catarina",
      "Santiago",
      "Vallecillo",
      "Villaldama"
    ]
  },
  {
    id: 20,
    nombre: "Oaxaca",
    municipios: [
      "Abejones",
      "Acatlán de Pérez Figueroa",
      "Asunción Cacalotepec",
      "Asunción Cuyotepeji",
      "Asunción Ixtaltepec",
      "Asunción Nochixtlán",
      "Asunción Ocotlán",
      "Asunción Tlacolulita",
      "Ayotzintepec",
      "El Barrio de la Soledad",
      "Calihualá",
      "Candelaria Loxicha",
      "Ciénega de Zimatlán",
      "Ciudad Ixtepec",
      "Coatecas Altas",
      "Coicoyán de las Flores",
      "La Compañía",
      "Concepción Buenavista",
      "Concepción Pápalo",
      "Constancia del Rosario",
      "Cosolapa",
      "Cosoltepec",
      "Cuilápam de Guerrero",
      "Cuyamecalco Villa de Zaragoza",
      "Chahuites",
      "Chalcatongo de Hidalgo",
      "Chiquihuitlán de Benito Juárez",
      "Eloxochitlán de Flores Magón",
      "Fresnillo de Trujano",
      "Guadalupe de Ramírez",
      "Guadalupe Etla",
      "Guadalupe Hidalgo",
      "Guelatao de Juárez",
      "Guevea de Humboldt",
      "Mesones Hidalgo",
      "Villa Hidalgo",
      "Heroica Ciudad de Huajuapan de León",
      "Huautepec",
      "Huautla de Jiménez",
      "Ixtlán de Juárez",
      "Jaltepec",
      "Jamiltepec",
      "Magdalena Apasco",
      "Magdalena Jaltepec",
      "Santa Magdalena Jicotlán",
      "Magdalena Mixtepec",
      "Magdalena Ocotlán",
      "Magdalena Peñasco",
      "Magdalena Teitipac",
      "Magdalena Tequisistlán",
      "Magdalena Tlacotepec",
      "Magdalena Zahuatlán",
      "Mariscala de Juárez",
      "Mártires de Tacubaya",
      "Matías Romero Avendaño",
      "Mazatlán Villa de Flores",
      "Miahuatlán de Porfirio Díaz",
      "Mixistlán de la Reforma",
      "Monjas",
      "Natividad",
      "Nazareno Etla",
      "Nejapa de Madero",
      "Ixpantepec Nieves",
      "Santiago Niltepec",
      "Oaxaca de Juárez",
      "Ocotlán de Morelos",
      "La Pe",
      "Pinotepa de Don Luis",
      "Pinotepa Nacional",
      "Pluma Hidalgo",
      "San José del Progreso",
      "Putla Villa de Guerrero",
      "Santa Catarina Quioquitani",
      "Reforma de Pineda",
      "La Reforma",
      "Reyes Etla",
      "Rojas de Cuauhtémoc",
      "Salina Cruz",
      "San Agustín Amatengo",
      "San Agustín Atenango",
      "San Agustín Chayuco",
      "San Agustín de las Juntas",
      "San Agustín Etla",
      "San Agustín Loxicha",
      "San Agustín Tlacotepec",
      "San Agustín Yatareni",
      "San Andrés Cabecera Nueva",
      "San Andrés Dinicuiti",
      "San Andrés Huaxpaltepec",
      "San Andrés Huayápam",
      "San Andrés Ixtlahuaca",
      "San Andrés Lagunas",
      "San Andrés Nuxiño",
      "San Andrés Paxtlán",
      "San Andrés Sinaxtla",
      "San Andrés Solaga",
      "San Andrés Teotilálpam",
      "San Andrés Tepetlapa",
      "San Andrés Yaá",
      "San Andrés Zabache",
      "San Andrés Zautla",
      "San Antonino Castillo Velasco",
      "San Antonino el Alto",
      "San Antonino Monte Verde",
      "San Antonio Acutla",
      "San Antonio de la Cal",
      "San Antonio Huitepec",
      "San Antonio Nanahuatipam",
      "San Antonio Sinicahua",
      "San Antonio Tepetlapa",
      "San Baltazar Chichicapam",
      "San Baltazar Loxicha",
      "San Baltazar Yatzachi el Bajo",
      "San Bartolo Coyotepec",
      "San Bartolo Soyaltepec",
      "San Bartolo Yautepec",
      "San Bernardo Mixtepec",
      "San Blas Atempa",
      "San Carlos Yautepec",
      "San Cristóbal Amatlán",
      "San Cristóbal Amoltepec",
      "San Cristóbal Lachirioag",
      "San Cristóbal Suchixtlahuaca",
      "San Dionisio Ocotepec",
      "San Dionisio Ocotlán",
      "San Dionisio del Mar",
      "San Esteban Atatlahuca",
      "San Felipe Jalapa de Díaz",
      "San Felipe Tejalápam",
      "San Felipe Usila",
      "San Francisco Cahuacuá",
      "San Francisco Cajonos",
      "San Francisco Chapulapa",
      "San Francisco Chindúa",
      "San Francisco del Mar",
      "San Francisco Huehuetlán",
      "San Francisco Ixhuatán",
      "San Francisco Jaltepetongo",
      "San Francisco Lachigoló",
      "San Francisco Logueche",
      "San Francisco Nuxaño",
      "San Francisco Ozolotepec",
      "San Francisco Sola",
      "San Francisco Telixtlahuaca",
      "San Francisco Teopan",
      "San Francisco Tlapancingo",
      "San Gabriel Mixtepec",
      "San Ildefonso Amatlán",
      "San Ildefonso Sola",
      "San Ildefonso Villa Alta",
      "San Jacinto Amilpas",
      "San Jacinto Tlacotepec",
      "San Jerónimo Coatlán",
      "San Jerónimo Silacayoapilla",
      "San Jerónimo Sosola",
      "San Jerónimo Taviche",
      "San Jerónimo Tecóatl",
      "San Jorge Nuchita",
      "San José Ayuquila",
      "San José Chiltepec",
      "San José del Peñasco",
      "San José Estancia Grande",
      "San José Independencia",
      "San José Lachiguiri",
      "San José Tenango",
      "San Juan Achiutla",
      "San Juan Atepec",
      "San Juan Bautista Atatlahuca",
      "San Juan Bautista Coixtlahuaca",
      "San Juan Bautista Cuicatlán",
      "San Juan Bautista Guelache",
      "San Juan Bautista Jayacatlán",
      "San Juan Bautista Lo de Soto",
      "San Juan Bautista Suchitepec",
      "San Juan Bautista Tlacoatzintepec",
      "San Juan Bautista Tlachichilco",
      "San Juan Bautista Tuxtepec",
      "San Juan Cacahuatepec",
      "San Juan Ciénega",
      "San Juan Coatzóspam",
      "San Juan Colorado",
      "San Juan Comaltepec",
      "San Juan Cotzocón",
      "San Juan Chicomezúchil",
      "San Juan Chilateca",
      "San Juan del Río",
      "San Juan Diuxi",
      "San Juan Evangelista Analco",
      "San Juan Guelavía",
      "San Juan Guichicovi",
      "San Juan Ihualtepec",
      "San Juan Juquila Mixes",
      "San Juan Juquila Vijanos",
      "San Juan Lachao",
      "San Juan Lachigalla",
      "San Juan Lajarcia",
      "San Juan Lalana",
      "San Juan de los Cués",
      "San Juan Mazatlán",
      "San Juan Mixtepec -Dto. 08 -",
      "San Juan Mixtepec -Dto. 26 -",
      "San Juan Ñumí",
      "San Juan Ozolotepec",
      "San Juan Petlapa",
      "San Juan Quiahije",
      "San Juan Quiotepec",
      "San Juan Sayultepec",
      "San Juan Tabaá",
      "San Juan Tamazola",
      "San Juan Teita",
      "San Juan Teitipac",
      "San Juan Tepeuxila",
      "San Juan Teposcolula",
      "San Juan Yaeé",
      "San Juan Yatzona",
      "San Juan Yucuita",
      "San Lorenzo Albarradas",
      "San Lorenzo Cacaotepec",
      "San Lorenzo Cuaunecuiltitla",
      "San Lorenzo Texmelúcan",
      "San Lorenzo Victoria",
      "San Lucas Camotlán",
      "San Lucas Ojitlán",
      "San Lucas Quiaviní",
      "San Lucas Zoquiápam",
      "San Luis Amatlán",
      "San Marcial Ozolotepec",
      "San Marcos Arteaga",
      "San Martín de los Cansecos",
      "San Martín Huamelúlpam",
      "San Martín Itunyoso",
      "San Martín Lachilá",
      "San Martín Peras",
      "San Martín Tilcajete",
      "San Martín Toxpalan",
      "San Martín Zacatepec",
      "San Mateo Cajonos",
      "San Mateo del Mar",
      "San Mateo Etlatongo",
      "San Mateo Nejápam",
      "San Mateo Peñasco",
      "San Mateo Piñas",
      "San Mateo Río Hondo",
      "San Mateo Sindihui",
      "San Mateo Tlapiltepec",
      "San Melchor Betaza",
      "San Miguel Achiutla",
      "San Miguel Ahuehuetitlán",
      "San Miguel Aloápam",
      "San Miguel Amatitlán",
      "San Miguel Amultepec",
      "San Miguel Chicahua",
      "San Miguel Chimalapa",
      "San Miguel Coatlán",
      "San Miguel Ejutla",
      "San Miguel Huautla",
      "San Miguel Mixtepec",
      "San Miguel Panixtlahuaca",
      "San Miguel Peras",
      "San Miguel Piedras",
      "San Miguel Quetzaltepec",
      "San Miguel Santa Flor",
      "San Miguel Soyaltepec",
      "San Miguel Suchixtepec",
      "San Miguel Tecomatlán",
      "San Miguel Tenango",
      "San Miguel Tequixtepec",
      "San Miguel Tilquiápam",
      "San Miguel Tlacamama",
      "San Miguel Tlacotepec",
      "San Miguel Tulancingo",
      "San Miguel Yotao",
      "San Nicolás",
      "San Nicolás Hidalgo",
      "San Pablo Coatlán",
      "San Pablo Cuatro Venados",
      "San Pablo Etla",
      "San Pablo Huitzo",
      "San Pablo Huixtepec",
      "San Pablo Macuiltianguis",
      "San Pablo Tijaltepec",
      "San Pablo Villa de Mitla",
      "San Pablo Yaganiza",
      "San Pedro Amuzgos",
      "San Pedro Apóstol",
      "San Pedro Atoyac",
      "San Pedro Cajonos",
      "San Pedro Comitancillo",
      "San Pedro Coxcaltepec Cántaros",
      "San Pedro Huamelula",
      "San Pedro Huilotepec",
      "San Pedro Ixcatlán",
      "San Pedro Ixtlahuaca",
      "San Pedro Jaltepetongo",
      "San Pedro Jicayán",
      "San Pedro Jocotipac",
      "San Pedro Juchatengo",
      "San Pedro Mártir",
      "San Pedro Mártir Quiechapa",
      "San Pedro Mártir Yucuxaco",
      "San Pedro Mixtepec -Dto. 22 -",
      "San Pedro Mixtepec -Dto. 26 -",
      "San Pedro Molinos",
      "San Pedro Nopala",
      "San Pedro Ocopetatillo",
      "San Pedro Ocotepec",
      "San Pedro Pochutla",
      "San Pedro Quiatoni",
      "San Pedro Sochiapam",
      "San Pedro Tapanatepec",
      "San Pedro Taviche",
      "San Pedro Teozacoalco",
      "San Pedro Teutila",
      "San Pedro Tidaá",
      "San Pedro Topiltepec",
      "San Pedro Totolápam",
      "San Pedro Yaneri",
      "San Pedro Yólox",
      "San Pedro Yucunama",
      "San Raymundo Jalpan",
      "San Sebastián Abasolo",
      "San Sebastián Coatlán",
      "San Sebastián Ixcapa",
      "San Sebastián Nicananduta",
      "San Sebastián Río Hondo",
      "San Sebastián Tecomaxtlahuaca",
      "San Sebastián Teitipac",
      "San Sebastián Tutla",
      "San Simón Almolongas",
      "San Simón Zahuatlán",
      "Santa Ana",
      "Santa Ana Ateixtlahuaca",
      "Santa Ana Cuauhtémoc",
      "Santa Ana del Valle",
      "Santa Ana Tavela",
      "Santa Ana Tlapacoyan",
      "Santa Ana Yareni",
      "Santa Ana Zegache",
      "Santa Catalina Quierí",
      "Santa Catarina Cuixtla",
      "Santa Catarina Ixtepeji",
      "Santa Catarina Juquila",
      "Santa Catarina Lachatao",
      "Santa Catarina Loxicha",
      "Santa Catarina Mechoacán",
      "Santa Catarina Minas",
      "Santa Catarina Quiané",
      "Santa Catarina Tayata",
      "Santa Catarina Ticuá",
      "Santa Catarina Yosonotú",
      "Santa Catarina Zapoquila",
      "Santa Cruz Acatepec",
      "Santa Cruz Amilpas",
      "Santa Cruz de Bravo",
      "Santa Cruz Itundujia",
      "Santa Cruz Mixtepec",
      "Santa Cruz Nundaco",
      "Santa Cruz Papalutla",
      "Santa Cruz Tacache de Mina",
      "Santa Cruz Tacahua",
      "Santa Cruz Tayata",
      "Santa Cruz Xitla",
      "Santa Cruz Xoxocotlán",
      "Santa Cruz Zenzontepec",
      "Santa Gertrudis",
      "Santa Inés del Monte",
      "Santa Inés Yatzeche",
      "Santa Lucía Miahuatlán",
      "Santa Lucía Monteverde",
      "Santa Lucía Ocotlán",
      "Santa Magdalena Jicotlán",
      "Santa María Alotepec",
      "Santa María Apazco",
      "Santa María la Asunción",
      "Santa María Camotlán",
      "Santa María Chachoápam",
      "Santa María Chilchotla",
      "Santa María Chimalapa",
      "Santa María Colotepec",
      "Santa María Cortijo",
      "Santa María Coyotepec",
      "Santa María del Rosario",
      "Santa María del Tule",
      "Santa María Ecatepec",
      "Santa María Guelacé",
      "Santa María Guienagati",
      "Santa María Huatulco",
      "Santa María Huazolotitlán",
      "Santa María Ipalapa",
      "Santa María Ixcatlán",
      "Santa María Jacatepec",
      "Santa María Jalapa del Marqués",
      "Santa María Jaltianguis",
      "Santa María Lachixío",
      "Santa María Mixtequilla",
      "Santa María Nativitas",
      "Santa María Nduayaco",
      "Santa María Ozolotepec",
      "Santa María Pápalo",
      "Santa María Peñoles",
      "Santa María Petapa",
      "Santa María Quiegolani",
      "Santa María Sola",
      "Santa María Tataltepec",
      "Santa María Tecomavaca",
      "Santa María Temaxcalapa",
      "Santa María Temaxcaltepec",
      "Santa María Teopoxco",
      "Santa María Tepantlali",
      "Santa María Texcatitlán",
      "Santa María Tlahuitoltepec",
      "Santa María Tlalixtac",
      "Santa María Tonameca",
      "Santa María Totolapilla",
      "Santa María Xadani",
      "Santa María Yalina",
      "Santa María Yavesía",
      "Santa María Yolotepec",
      "Santa María Yosoyúa",
      "Santa María Yucuhiti",
      "Santa María Zacatepec",
      "Santa María Zaniza",
      "Santa María Zoquitlán",
      "Santiago Amoltepec",
      "Santiago Apoala",
      "Santiago Apóstol",
      "Santiago Astata",
      "Santiago Atitlán",
      "Santiago Ayuquililla",
      "Santiago Cacaloxtepec",
      "Santiago Camotlán",
      "Santiago Chazumba",
      "Santiago Choápam",
      "Santiago Comaltepec",
      "Santiago Huajolotitlán",
      "Santiago Huauclilla",
      "Santiago Ihuitlán Plumas",
      "Santiago Ixcuintepec",
      "Santiago Ixtayutla",
      "Santiago Jamiltepec",
      "Santiago Jocotepec",
      "Santiago Juxtlahuaca",
      "Santiago Lachiguiri",
      "Santiago Lalopa",
      "Santiago Laollaga",
      "Santiago Laxopa",
      "Santiago Llano Grande",
      "Santiago Matatlán",
      "Santiago Miltepec",
      "Santiago Minas",
      "Santiago Nacaltepec",
      "Santiago Nejapilla",
      "Santiago Nundiche",
      "Santiago Nuyoó",
      "Santiago Pinotepa Nacional",
      "Santiago Suchilquitongo",
      "Santiago Tamazola",
      "Santiago Tapextla",
      "Santiago Tenango",
      "Santiago Tepetlapa",
      "Santiago Tetepec",
      "Santiago Texcalcingo",
      "Santiago Textitlán",
      "Santiago Tilantongo",
      "Santiago Tillo",
      "Santiago Tlazoyaltepec",
      "Santiago Xanica",
      "Santiago Xiacuí",
      "Santiago Yaitepec",
      "Santiago Yaveo",
      "Santiago Yolomécatl",
      "Santiago Yosondúa",
      "Santiago Yucuyachi",
      "Santiago Zacatepec",
      "Santiago Zoochila",
      "Nuevo Zoquiápam",
      "Santo Domingo Ingenio",
      "Santo Domingo Albarradas",
      "Santo Domingo Armenta",
      "Santo Domingo Chihuitán",
      "Santo Domingo de Morelos",
      "Santo Domingo Ixcatlán",
      "Santo Domingo Nuxaá",
      "Santo Domingo Ozolotepec",
      "Santo Domingo Petapa",
      "Santo Domingo Roayaga",
      "Santo Domingo Tehuantepec",
      "Santo Domingo Teojomulco",
      "Santo Domingo Tepuxtepec",
      "Santo Domingo Tlatayápam",
      "Santo Domingo Tomaltepec",
      "Santo Domingo Tonalá",
      "Santo Domingo Tonaltepec",
      "Santo Domingo Xagacía",
      "Santo Domingo Yanhuitlán",
      "Santo Domingo Yodohino",
      "Santo Domingo Zanatepec",
      "Santos Reyes Nopala",
      "Santos Reyes Pápalo",
      "Santos Reyes Tepejillo",
      "Santos Reyes Yucuná",
      "Santo Tomás Jalieza",
      "Santo Tomás Mazaltepec",
      "Santo Tomás Ocotepec",
      "Santo Tomás Tamazulapan",
      "San Vicente Coatlán",
      "San Vicente Lachixío",
      "San Vicente Nuñú",
      "Silacayoápam",
      "Sitio de Xitlapehua",
      "Soledad Etla",
      "Villa de Chilapa de Díaz",
      "Villa de Etla",
      "Villa de Tututepec de Melchor Ocampo",
      "Villa de Zaachila",
      "Villa Díaz Ordaz",
      "Villa Hidalgo",
      "Villa Sola de Vega",
      "Villa Talea de Castro",
      "Villa Tejúpam de la Unión",
      "Yaxe",
      "Yogana",
      "Yutanduchi de Guerrero",
      "Zapotitlán Lagunas",
      "Zapotitlán Palmas",
      "Zimatlán de Álvarez"
    ]
  },
  {
    id: 21,
    nombre: "Puebla",
    municipios: [
      "Acajete",
      "Acateno",
      "Acatlán",
      "Acatzingo",
      "Acteopan",
      "Ahuacatlán",
      "Ahuatlán",
      "Ahuazotepec",
      "Ahuehuetitla",
      "Ajalpan",
      "Albino Zertuche",
      "Aljojuca",
      "Altepexi",
      "Amixtlán",
      "Amozoc",
      "Aquixtla",
      "Atempan",
      "Atexcal",
      "Atlixco",
      "Atoyatempan",
      "Atzala",
      "Atzitzihuacán",
      "Atzitzintla",
      "Axutla",
      "Ayotoxco de Guerrero",
      "Calpan",
      "Caltepec",
      "Camocuautla",
      "Caxhuacan",
      "Coatepec",
      "Coatzingo",
      "Cohetzala",
      "Cohuecan",
      "Coronango",
      "Coxcatlán",
      "Coyomeapan",
      "Coyotepec",
      "Cuapiaxtla de Madero",
      "Cuautempan",
      "Cuautinchán",
      "Cuautlancingo",
      "Cuayuca de Andrade",
      "Cuetzalan del Progreso",
      "Cuyoaco",
      "Chalchicomula de Sesma",
      "Chapulco",
      "Chiautla",
      "Chiautzingo",
      "Chiconcuautla",
      "Chichiquila",
      "Chietla",
      "Chigmecatitlán",
      "Chignahuapan",
      "Chignautla",
      "Chila",
      "Chila de la Sal",
      "Honey",
      "Chilchotla",
      "Chinantla",
      "Domingo Arenas",
      "Eloxochitlán",
      "Epatlán",
      "Esperanza",
      "Francisco Z. Mena",
      "General Felipe Ángeles",
      "Guadalupe",
      "Guadalupe Victoria",
      "Hermenegildo Galeana",
      "Huaquechula",
      "Huatlatlauca",
      "Huauchinango",
      "Huehuetla",
      "Huehuetlán el Chico",
      "Huejotzingo",
      "Hueyapan",
      "Hueytamalco",
      "Hueytlalpan",
      "Huitzilan de Serdán",
      "Huitziltepec",
      "Atlequizayan",
      "Ixcamilpa de Guerrero",
      "Ixcaquixtla",
      "Ixtacamaxtitlán",
      "Ixtepec",
      "Izúcar de Matamoros",
      "Jalpan",
      "Jolalpan",
      "Jonotla",
      "Jopala",
      "Juan C. Bonilla",
      "Juan Galindo",
      "Juan N. Méndez",
      "Lafragua",
      "Libres",
      "La Magdalena Tlatlauquitepec",
      "Mazapiltepec de Juárez",
      "Mixtla",
      "Molcaxac",
      "Cañada Morelos",
      "Naupan",
      "Nauzontla",
      "Nealtican",
      "Nicolás Bravo",
      "Nopalucan",
      "Ocotepec",
      "Ocoyucan",
      "Olintla",
      "Oriental",
      "Pahuatlán",
      "Palmar de Bravo",
      "Pantepec",
      "Petlalcingo",
      "Piaxtla",
      "Puebla",
      "Quecholac",
      "Quimixtlán",
      "Rafael Lara Grajales",
      "Los Reyes de Juárez",
      "San Andrés Cholula",
      "San Antonio Cañada",
      "San Diego la Mesa Tochimiltzingo",
      "San Felipe Teotlalcingo",
      "San Felipe Tepatlán",
      "San Gabriel Chilac",
      "San Gregorio Atzompa",
      "San Jerónimo Tecuanipan",
      "San Jerónimo Xayacatlán",
      "San José Chiapa",
      "San José Miahuatlán",
      "San Juan Atenco",
      "San Juan Atzompa",
      "San Martín Texmelucan",
      "San Martín Totoltepec",
      "San Matías Tlalancaleca",
      "San Miguel Ixitlán",
      "San Miguel Xoxtla",
      "San Nicolás Buenos Aires",
      "San Nicolás de los Ranchos",
      "San Pablo Anicano",
      "San Pedro Cholula",
      "San Pedro Yeloixtlahuaca",
      "San Salvador el Seco",
      "San Salvador el Verde",
      "San Salvador Huixcolotla",
      "San Sebastián Tlacotepec",
      "Santa Catarina Tlaltempan",
      "Santa Inés Ahuatempan",
      "Santa Isabel Cholula",
      "Santiago Miahuatlán",
      "Huehuetlán el Grande",
      "Santo Tomás Hueyotlipan",
      "Soltepec",
      "Tecali de Herrera",
      "Tecamachalco",
      "Tecomatlán",
      "Tehuacán",
      "Tehuitzingo",
      "Tenampulco",
      "Teopantlán",
      "Teotlalco",
      "Tepanco de López",
      "Tepango de Rodríguez",
      "Tepatlaxco de Hidalgo",
      "Tepeaca",
      "Tepemaxalco",
      "Tepeojuma",
      "Tepetzintla",
      "Tepexco",
      "Tepexi de Rodríguez",
      "Tepeyahualco",
      "Tepeyahualco de Cuauhtémoc",
      "Tetela de Ocampo",
      "Teteles de Ávila Castillo",
      "Teziutlán",
      "Tianguismanalco",
      "Tilapa",
      "Tlacotepec de Benito Juárez",
      "Tlacuilotepec",
      "Tlachichuca",
      "Tlahuapan",
      "Tlaltenango",
      "Tlanepantla",
      "Tlaola",
      "Tlapacoya",
      "Tlapanalá",
      "Tlatlauquitepec",
      "Tlaxco",
      "Tochimilco",
      "Tochtepec",
      "Totoltepec de Guerrero",
      "Tulcingo",
      "Tuzamapan de Galeana",
      "Tzicatlacoyan",
      "Venustiano Carranza",
      "Vicente Guerrero",
      "Xayacatlán de Bravo",
      "Xicotepec",
      "Xicotlán",
      "Xiutetelco",
      "Xochiapulco",
      "Xochiltepec",
      "Xochitlán de Vicente Suárez",
      "Xochitlán Todos Santos",
      "Yaonáhuac",
      "Yehualtepec",
      "Zacapala",
      "Zacapoaxtla",
      "Zacatlán",
      "Zapotitlán",
      "Zapotitlán de Méndez",
      "Zaragoza",
      "Zautla",
      "Zihuateutla",
      "Zinacatepec",
      "Zongozotla",
      "Zoquiapan",
      "Zoquitlán"
    ]
  },
  {
    id: 22,
    nombre: "Querétaro",
    municipios: [
      "Amealco de Bonfil",
      "Arroyo Seco",
      "Cadereyta de Montes",
      "Colón",
      "Corregidora",
      "El Marqués",
      "Ezequiel Montes",
      "Huimilpan",
      "Jalpan de Serra",
      "Landa de Matamoros",
      "Pedro Escobedo",
      "Peñamiller",
      "Pinal de Amoles",
      "Querétaro",
      "San Joaquín",
      "San Juan del Río",
      "Tequisquiapan",
      "Tolimán"
    ]
  },
  {
    id: 23,
    nombre: "Quintana Roo",
    municipios: [
      "Bacalar",
      "Benito Juárez",
      "Cozumel",
      "Felipe Carrillo Puerto",
      "Isla Mujeres",
      "José María Morelos",
      "Lázaro Cárdenas",
      "Othón P. Blanco",
      "Puerto Morelos",
      "Solidaridad",
      "Tulum"
    ]
  },
  {
    id: 24,
    nombre: "San Luis Potosí",
    municipios: [
      "Ahualulco",
      "Alaquines",
      "Aquismón",
      "Armadillo de los Infante",
      "Cárdenas",
      "Catorce",
      "Cedral",
      "Cerritos",
      "Cerro de San Pedro",
      "Ciudad del Maíz",
      "Ciudad Fernández",
      "Tancanhuitz",
      "Ciudad Valles",
      "Coxcatlán",
      "Charcas",
      "Ébano",
      "Guadalcázar",
      "Huehuetlán",
      "Lagunillas",
      "Matehuala",
      "Mexquitic de Carmona",
      "Moctezuma",
      "Rayón",
      "Rioverde",
      "Salinas",
      "San Antonio",
      "San Ciro de Acosta",
      "San Luis Potosí",
      "San Martín Chalchicuautla",
      "San Nicolás Tolentino",
      "Santa Catarina",
      "Santa María del Río",
      "Santo Domingo",
      "San Vicente Tancuayalab",
      "Soledad de Graciano Sánchez",
      "Tamasopo",
      "Tamazunchale",
      "Tampacán",
      "Tampamolón Corona",
      "Tamuín",
      "Tanlajás",
      "Tanquián de Escobedo",
      "Tierra Nueva",
      "Vanegas",
      "Venado",
      "Villa de Arista",
      "Villa de Arriaga",
      "Villa de Guadalupe",
      "Villa de Ramos",
      "Villa de Reyes",
      "Villa Hidalgo",
      "Villa Juárez",
      "Xilitla",
      "Zaragoza",
      "Villa de Pozos"
    ]
  },
  {
    id: 25,
    nombre: "Sinaloa",
    municipios: [
      "Ahome",
      "Angostura",
      "Badiraguato",
      "Concordia",
      "Cosalá",
      "Culiacán",
      "Choix",
      "Elota",
      "Escuinapa",
      "El Fuerte",
      "Guasave",
      "Mazatlán",
      "Mocorito",
      "Rosario",
      "Salvador Alvarado",
      "San Ignacio",
      "Sinaloa",
      "Navolato"
    ]
  },
  {
    id: 26,
    nombre: "Sonora",
    municipios: [
      "Aconchi",
      "Agua Prieta",
      "Álamos",
      "Altar",
      "Arivechi",
      "Arizpe",
      "Atil",
      "Bacadéhuachi",
      "Bacanora",
      "Bacerac",
      "Bacoachi",
      "Bácum",
      "Banámichi",
      "Baviácora",
      "Bavispe",
      "Benjamín Hill",
      "Caborca",
      "Cajeme",
      "Cananea",
      "Carbó",
      "La Colorada",
      "Cucurpe",
      "Cumpas",
      "Divisaderos",
      "Empalme",
      "Etchojoa",
      "Fronteras",
      "Granados",
      "Guaymas",
      "Hermosillo",
      "Huachinera",
      "Huásabas",
      "Huatabampo",
      "Huépac",
      "Imuris",
      "Mazatán",
      "Moctezuma",
      "Naco",
      "Nácori Chico",
      "Nacozari de García",
      "Navojoa",
      "Nogales",
      "Ónavas",
      "Opodepe",
      "Oquitoa",
      "Pitiquito",
      "Quiriego",
      "Rayón",
      "Rosario de Tesopaco",
      "Sahuaripa",
      "San Felipe de Jesús",
      "San Ignacio Río Muerto",
      "San Javier",
      "San Luis Río Colorado",
      "San Miguel de Horcasitas",
      "San Pedro de la Cueva",
      "Santa Ana",
      "Santa Cruz",
      "Sáric",
      "Soyopa",
      "Suaqui Grande",
      "Tepache",
      "Trincheras",
      "Tubutama",
      "Ures",
      "Villa Hidalgo",
      "Villa Pesqueira",
      "Yécora",
      "General Plutarco Elías Calles",
      "Benito Juárez",
      "Puerto Peñasco"
    ]
  },
  {
    id: 27,
    nombre: "Tabasco",
    municipios: [
      "Balancán",
      "Cárdenas",
      "Centla",
      "Centro",
      "Comalcalco",
      "Cunduacán",
      "Emiliano Zapata",
      "Huimanguillo",
      "Jalapa",
      "Jalpa de Méndez",
      "Jonuta",
      "Macuspana",
      "Nacajuca",
      "Paraíso",
      "Tacotalpa",
      "Teapa",
      "Tenosique"
    ]
  },
  {
    id: 28,
    nombre: "Tamaulipas",
    municipios: [
      "Abasolo",
      "Aldama",
      "Altamira",
      "Antiguo Morelos",
      "Burgos",
      "Bustamante",
      "Camargo",
      "Casas",
      "Ciudad Madero",
      "Cruillas",
      "Gómez Farías",
      "González",
      "Güémez",
      "Guerrero",
      "Gustavo Díaz Ordaz",
      "Hidalgo",
      "Juárez",
      "Jiménez",
      "Llera",
      "Mainero",
      "El Mante",
      "Matamoros",
      "Méndez",
      "Mier",
      "Miguel Alemán",
      "Miquihuana",
      "Nuevo Laredo",
      "Nuevo Morelos",
      "Ocampo",
      "Padilla",
      "Palmillas",
      "Reynosa",
      "Río Bravo",
      "San Carlos",
      "San Fernando",
      "San Nicolás",
      "Soto la Marina",
      "Tampico",
      "Tula",
      "Valle Hermoso",
      "Victoria",
      "Villagrán",
      "Xicoténcatl"
    ]
  },
  {
    id: 29,
    nombre: "Tlaxcala",
    municipios: [
      "Acuamanala de Miguel Hidalgo",
      "Amaxac de Guerrero",
      "Apetatitlán de Antonio Carvajal",
      "Apizaco",
      "Atlangatepec",
      "Atltzayanca",
      "Benito Juárez",
      "Calpulalpan",
      "El Carmen Tequexquitla",
      "Cuapiaxtla",
      "Cuaxomulco",
      "Chiautempan",
      "Muñoz de Domingo Arenas",
      "Españita",
      "Huamantla",
      "Hueyotlipan",
      "Ixtacuixtla de Mariano Matamoros",
      "Ixtenco",
      "Mazatecochco de José María Morelos",
      "Contla de Juan Cuamatzi",
      "Tepetitla de Lardizábal",
      "Sanctórum de Lázaro Cárdenas",
      "Nanacamilpa de Mariano Arista",
      "Acuitlapilco",
      "Nativitas",
      "Panotla",
      "San Pablo del Monte",
      "Santa Cruz Tlaxcala",
      "Tenancingo",
      "Teolocholco",
      "Tepeyanco",
      "Terrenate",
      "Tetla de la Solidaridad",
      "Tetlatlahuca",
      "Tlaxcala",
      "Tlaxco",
      "Tocatlán",
      "Totolac",
      "Zitlaltépec de Trinidad Sánchez Santos",
      "Tzompantepec",
      "Xaloztoc",
      "Xaltocan",
      "Papalotla de Xicohténcatl",
      "Xicohtzinco",
      "Yauhquemehcan",
      "Zacatelco",
      "San José Teacalco",
      "San Lorenzo Axocomanitla",
      "San Jerónimo Zacualpan",
      "Santa Apolonia Teacalco",
      "Santa Catarina Ayometla",
      "Santa Cruz Quilehtla",
      "Santa Isabel Xiloxoxtla"
    ]
  },
  {
    id: 30,
    nombre: "Veracruz",
    municipios: [
      "Acajete",
      "Acatlán",
      "Acayucan",
      "Actopan",
      "Acula",
      "Acultzingo",
      "Camarón de Tejeda",
      "Alpatláhuac",
      "Alto Lucero de Gutiérrez Barrios",
      "Altotonga",
      "Alvarado",
      "Amatitlán",
      "Naranjos Amatlán",
      "Amatlán de los Reyes",
      "Angel R. Cabada",
      "Apazapan",
      "Aquila",
      "Astacinga",
      "Atlahuilco",
      "Atoyac",
      "Atzacan",
      "Atzalan",
      "Tlaltetela",
      "Ayahualulco",
      "Banderilla",
      "Benito Juárez",
      "Boca del Río",
      "Calcahualco",
      "Camerino Z. Mendoza",
      "Carrillo Puerto",
      "Catemaco",
      "Cazones de Herrera",
      "Cerro Azul",
      "Citlaltépetl",
      "Coacoatzintla",
      "Coahuitlán",
      "Coatepec",
      "Coatzacoalcos",
      "Coatzintla",
      "Coetzala",
      "Colipa",
      "Comapa",
      "Córdoba",
      "Cosamaloapan de Carpio",
      "Cosautlán de Carvajal",
      "Coscomatepec",
      "Cosoleacaque",
      "Cotaxtla",
      "Coxquihui",
      "Coyutla",
      "Cuichapa",
      "Cuitláhuac",
      "Chacaltianguis",
      "Chalma",
      "Chiconamel",
      "Chiconquiaco",
      "Chicontepec",
      "Chinameca",
      "Chinampa de Gorostiza",
      "Las Choapas",
      "Chocamán",
      "Chontla",
      "Chumatlán",
      "Emiliano Zapata",
      "Espinal",
      "Filomeno Mata",
      "Fortín",
      "Gutiérrez Zamora",
      "Hidalgotitlán",
      "Huatusco",
      "Huayacocotla",
      "Hueyapan de Ocampo",
      "Huiloapan de Cuauhtémoc",
      "Ignacio de la Llave",
      "Ilamatlán",
      "Isla",
      "Ixcatepec",
      "Ixhuacán de los Reyes",
      "Ixhuatlán del Café",
      "Ixhuatlancillo",
      "Ixhuatlán del Sureste",
      "Ixhuatlán de Madero",
      "Ixmatlahuacan",
      "Ixtaczoquitlán",
      "Jalacingo",
      "Xalapa",
      "Jalcomulco",
      "Jáltipan",
      "Jamapa",
      "Jesús Carranza",
      "Xico",
      "Jilotepec",
      "Juan Rodríguez Clara",
      "Juchique de Ferrer",
      "Landero y Coss",
      "Lerdo de Tejada",
      "Magdalena",
      "Maltrata",
      "Manlio Fabio Altamirano",
      "Mariano Escobedo",
      "Martínez de la Torre",
      "Mecatlán",
      "Mecayapan",
      "Medellín de Bravo",
      "Miahuatlán",
      "Las Minas",
      "Minatitlán",
      "Misantla",
      "Mixtla de Altamirano",
      "Moloacán",
      "Naolinco",
      "Naranjal",
      "Nautla",
      "Nogales",
      "Oluta",
      "Omealca",
      "Orizaba",
      "Otatitlán",
      "Oteapan",
      "Ozuluama de Mascareñas",
      "Pajapan",
      "Pánuco",
      "Papantla",
      "Paso del Macho",
      "Paso de Ovejas",
      "La Perla",
      "Perote",
      "Platón Sánchez",
      "Playa Vicente",
      "Poza Rica de Hidalgo",
      "Pueblo Viejo",
      "Puente Nacional",
      "Rafael Delgado",
      "Rafael Lucio",
      "Los Reyes",
      "Río Blanco",
      "Saltabarranca",
      "San Andrés Tenejapan",
      "San Andrés Tuxtla",
      "San Juan Evangelista",
      "Santiago Tuxtla",
      "Sayula de Alemán",
      "Soconusco",
      "Sochiapa",
      "Soledad de Doblado",
      "Soteapan",
      "Tamalín",
      "Tamiahua",
      "Tampico Alto",
      "Tancoco",
      "Tantima",
      "Tantoyuca",
      "Tatatila",
      "Castillo de Teayo",
      "Tecolutla",
      "Tehuipango",
      "Álamo Temapache",
      "Tempoal",
      "Tenampa",
      "Tenochtitlán",
      "Teocelo",
      "Tepatlaxco",
      "Tepetlán",
      "Tepetzintla",
      "Tequila",
      "José Azueta",
      "Texcatepec",
      "Texhuacán",
      "Texistepec",
      "Tezonapa",
      "Tierra Blanca",
      "Tihuatlán",
      "Tlacojalpan",
      "Tlacolulan",
      "Tlacotalpan",
      "Tlacotepec de Mejía",
      "Tlachichilco",
      "Tlalixcoyan",
      "Tlalnelhuayocan",
      "Tlapacoyan",
      "Tlaquilpa",
      "Tlilapan",
      "Tomatlán",
      "Tonayán",
      "Totutla",
      "Tuxpan",
      "Tuxtilla",
      "Ursulo Galván",
      "Vega de Alatorre",
      "Veracruz",
      "Villa Aldama",
      "Xoxocotla",
      "Yanga",
      "Yecuatla",
      "Zacualpan",
      "Zaragoza",
      "Zentla",
      "Zongolica",
      "Zontecomatlán de López y Fuentes",
      "Zozocolco de Hidalgo",
      "Agua Dulce",
      "El Higo",
      "Nanchital de Lázaro Cárdenas del Río",
      "Tres Valles",
      "Carlos A. Carrillo",
      "Tatahuicapan de Juárez",
      "Uxpanapa",
      "San Rafael"
    ]
  },
  {
    id: 31,
    nombre: "Yucatán",
    municipios: [
      "Abalá",
      "Acanceh",
      "Akil",
      "Baca",
      "Bokobá",
      "Buctzotz",
      "Cacalchén",
      "Calotmul",
      "Cansahcab",
      "Cantamayec",
      "Celestún",
      "Cenotillo",
      "Conkal",
      "Cuncunul",
      "Cuzamá",
      "Chacsinkín",
      "Chankom",
      "Chapab",
      "Chemax",
      "Chicxulub Pueblo",
      "Chichimilá",
      "Chikindzonot",
      "Chocholá",
      "Chumayel",
      "Dzán",
      "Dzemul",
      "Dzidzantún",
      "Dzilam de Bravo",
      "Dzilam González",
      "Dzitás",
      "Dzoncauich",
      "Espita",
      "Halachó",
      "Hocabá",
      "Hoctún",
      "Homún",
      "Huhí",
      "Hunucmá",
      "Ixil",
      "Izamal",
      "Kanasín",
      "Kantunil",
      "Kaua",
      "Kinchil",
      "Kopomá",
      "Mama",
      "Maní",
      "Maxcanú",
      "Mayapán",
      "Mérida",
      "Mocochá",
      "Motul",
      "Muna",
      "Muxupip",
      "Opichén",
      "Oxkutzcab",
      "Panabá",
      "Peto",
      "Progreso",
      "Quintana Roo",
      "Río Lagartos",
      "Sacalum",
      "Samahil",
      "Sanahcat",
      "San Felipe",
      "Santa Elena",
      "Seyé",
      "Sinanché",
      "Sotuta",
      "Sucilá",
      "Sudzal",
      "Suma",
      "Tahdziú",
      "Tahmek",
      "Teabo",
      "Tecoh",
      "Tekal de Venegas",
      "Tekantó",
      "Tekax",
      "Tekit",
      "Tekom",
      "Telchac Pueblo",
      "Telchac Puerto",
      "Temax",
      "Temozón",
      "Tepakán",
      "Tetiz",
      "Teya",
      "Ticul",
      "Timucuy",
      "Tinúm",
      "Tixcacalcupul",
      "Tixkokob",
      "Tixmehuac",
      "Tixpéhual",
      "Tizimín",
      "Tunkás",
      "Tzucacab",
      "Uayma",
      "Ucú",
      "Umán",
      "Valladolid",
      "Xocchel",
      "Yaxcabá",
      "Yaxkukul",
      "Yobaín"
    ]
  },
  {
    id: 32,
    nombre: "Zacatecas",
    municipios: [
      "Apozol",
      "Apulco",
      "Atolinga",
      "Benito Juárez",
      "Calera",
      "Cañitas de Felipe Pescador",
      "Concepción del Oro",
      "Cuauhtémoc",
      "Chalchihuites",
      "Fresnillo",
      "Trinidad García de la Cadena",
      "Genaro Codina",
      "General Enrique Estrada",
      "General Francisco R. Murguía",
      "El Plateado de Joaquín Amaro",
      "General Pánfilo Natera",
      "Guadalupe",
      "Huanusco",
      "Jalpa",
      "Jerez",
      "Jiménez del Teul",
      "Juan Aldama",
      "Juchipila",
      "Loreto",
      "Luis Moya",
      "Mazapil",
      "Melchor Ocampo",
      "Mezquital del Oro",
      "Miguel Auza",
      "Momax",
      "Monte Escobedo",
      "Morelos",
      "Moyahua de Estrada",
      "Nochistlán de Mejía",
      "Noria de Ángeles",
      "Ojocaliente",
      "Pánuco",
      "Pinos",
      "Río Grande",
      "Sain Alto",
      "El Salvador",
      "Sombrerete",
      "Susticacán",
      "Tabasco",
      "Tepechitlán",
      "Tepetongo",
      "Teúl de González Ortega",
      "Tlaltenango de Sánchez Román",
      "Valparaíso",
      "Vetagrande",
      "Villa de Cos",
      "Villa García",
      "Villa González Ortega",
      "Villa Hidalgo",
      "Villanueva",
      "Zacatecas",
      "Trancoso",
      "Santa María de la Paz"
    ]
  }
];
```

## 📄 src\supabase\exploraciones.js
```javascript
import { supabase } from "./client";


export async function getExploracionByPatient(patientId) {

    const { data, error } = await supabase
        .from("exploraciones")
        .select("*")
        .eq("paciente_id", patientId)
        .maybeSingle();

    if (error) {
        throw error;
    }

    return data;
}


export async function createExploracion(patientId, formData) {

    const { data, error } = await supabase
        .from("exploraciones")
        .insert([
            {
                paciente_id: patientId,
                ...formData
            }
        ])
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}


export async function updateExploracion(
    exploracionId,
    formData
) {

    const { data, error } = await supabase
        .from("exploraciones")
        .update(formData)
        .eq("id", exploracionId)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export async function getExploracionStatus(patientId) {

    const { data, error } = await supabase
        .from("exploraciones")
        .select(`
            id,
            fecha_exploracion,
            updated_at
        `)
        .eq("paciente_id", patientId)
        .maybeSingle();

    if (error) {
        throw error;
    }

    return data;
}
```

## 📄 src\supabase\history.js
```javascript
import { supabase } from "./client";

export async function getPatientTreatmentHistory(patientId) {

    if (!patientId) {

        return [];

    }

    const { data, error } = await supabase

        .from("odontograma_tratamientos")

        .select(`

            id,

            grupo_id,

            tratamiento_id,

            material_id,

            numero_pieza,

            cara,

            observaciones,

            fecha,

            created_at,

            updated_at,

            estado,

            fecha_realizacion,

            costo,

            tratamiento:tratamientos!odontograma_tratamientos_tratamiento_id_fkey (

                id,

                nombre,

                color

            ),

            material:materiales!odontograma_tratamientos_material_id_fkey (

                id,

                nombre

            )

        `)

        .eq("paciente_id", patientId);

    if (error) {

        throw error;

    }

    return data || [];

}
```

## 📄 src\supabase\initialOdontogram.js
```javascript
import { supabase } from "./client";


export async function getInitialConditions() {

    const { data, error } = await supabase

        .from("condiciones_odontograma")

        .select(`
            id,
            nombre,
            codigo,
            alcance,
            color,
            simbolo,
            activo
        `)

        .eq("activo", true)

        .order("id", {
            ascending: true
        });

    if (error) {
        throw error;
    }

    return data || [];
}


export async function getOrCreateInitialEvaluation(
    patientId
) {

    if (!patientId) {

        throw new Error(
            "No se recibió el paciente."
        );

    }

    const {
        data: existingEvaluation,
        error: searchError
    } = await supabase

        .from("odontograma_evaluaciones")

        .select("*")

        .eq(
            "paciente_id",
            patientId
        )

        .eq(
            "tipo",
            "Inicial"
        )

        .maybeSingle();

    if (searchError) {
        throw searchError;
    }

    if (existingEvaluation) {

        return existingEvaluation;

    }

    const {
        data: newEvaluation,
        error: insertError
    } = await supabase

        .from("odontograma_evaluaciones")

        .insert({

            paciente_id: patientId,

            tipo: "Inicial",

            estado: "Borrador"

        })

        .select()

        .single();

    if (insertError) {
        throw insertError;
    }

    return newEvaluation;
}


export async function getInitialFindings(
    evaluationId
) {

    if (!evaluationId) {
        return [];
    }

    const { data, error } = await supabase

        .from("odontograma_hallazgos")

        .select(`
            id,
            evaluacion_id,
            condicion_id,
            numero_pieza,
            cara,
            observaciones,
            grupo_id,
            created_at,
            updated_at,

            condicion:condiciones_odontograma!odontograma_hallazgos_condicion_id_fkey (
                id,
                nombre,
                codigo,
                alcance,
                color,
                simbolo
            )
        `)

        .eq(
            "evaluacion_id",
            evaluationId
        )

        .order(
            "created_at",
            {
                ascending: true
            }
        );

    if (error) {
        throw error;
    }

    return data || [];
}


export async function saveInitialFindings(rows) {

    if (
        !Array.isArray(rows) ||
        rows.length === 0
    ) {

        throw new Error(
            "No existen hallazgos para guardar."
        );

    }

    const { data, error } = await supabase

        .from("odontograma_hallazgos")

        .insert(rows)

        .select();

    if (error) {
        throw error;
    }

    return data || [];
}


export async function deleteInitialFindingGroup(
    groupId
) {

    if (!groupId) {

        throw new Error(
            "No se recibió el grupo del hallazgo."
        );

    }

    const { error } = await supabase

        .from("odontograma_hallazgos")

        .delete()

        .eq(
            "grupo_id",
            groupId
        );

    if (error) {
        throw error;
    }

}

export async function deleteInitialFindingsByTeeth(
    evaluationId,
    toothNumbers
) {

    if (
        !evaluationId ||
        !Array.isArray(toothNumbers) ||
        toothNumbers.length === 0
    ) {
        return;
    }

    const { error } = await supabase
        .from("odontograma_hallazgos")
        .delete()
        .eq(
            "evaluacion_id",
            evaluationId
        )
        .in(
            "numero_pieza",
            toothNumbers
        );

    if (error) {
        throw error;
    }

}


export async function deleteInitialConditionByTeeth(
    evaluationId,
    conditionId,
    toothNumbers
) {

    if (
        !evaluationId ||
        !conditionId ||
        !Array.isArray(toothNumbers) ||
        toothNumbers.length === 0
    ) {
        return;
    }

    const { error } = await supabase
        .from("odontograma_hallazgos")
        .delete()
        .eq(
            "evaluacion_id",
            evaluationId
        )
        .eq(
            "condicion_id",
            conditionId
        )
        .in(
            "numero_pieza",
            toothNumbers
        );

    if (error) {
        throw error;
    }

}

export async function deleteInitialFinding(
    findingId
) {

    if (!findingId) {

        throw new Error(
            "No se recibió el hallazgo a eliminar."
        );

    }

    const {
        data,
        error
    } = await supabase

        .from("odontograma_hallazgos")

        .delete()

        .eq("id", findingId)

        .select("id")

        .maybeSingle();

    if (error) {
        throw error;
    }

    if (!data) {

        throw new Error(
            "No se encontró el hallazgo a eliminar."
        );

    }

    return data;
}

export async function updateInitialFinding(
    findingId,
    {
        conditionId,
        observations
    }
) {

    if (!findingId) {

        throw new Error(
            "No se recibió el hallazgo."
        );

    }

    const {
        data,
        error
    } = await supabase
        .from("odontograma_hallazgos")
        .update({
            condicion_id: conditionId,
            observaciones:
                observations || null,
            updated_at:
                new Date().toISOString()
        })
        .eq("id", findingId)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export async function deleteInitialFindingsByIds(
    findingIds
) {

    if (
        !Array.isArray(findingIds) ||
        findingIds.length === 0
    ) {

        return [];

    }


    const uniqueIds = [
        ...new Set(
            findingIds
        )
    ];


    const {
        data,
        error
    } = await supabase

        .from("odontograma_hallazgos")

        .delete()

        .in(
            "id",
            uniqueIds
        )

        .select("id");


    if (error) {
        throw error;
    }


    return data || [];

}

export async function finalizeInitialEvaluation(
    evaluationId
) {

    if (!evaluationId) {

        throw new Error(
            "No se recibió la evaluación."
        );

    }


    const {
        data,
        error
    } = await supabase

        .from("odontograma_evaluaciones")

        .update({

            estado: "Finalizado",

            updated_at:
                new Date().toISOString()

        })

        .eq(
            "id",
            evaluationId
        )

        .eq(
            "estado",
            "Borrador"
        )

        .select()

        .maybeSingle();


    if (error) {
        throw error;
    }


    if (!data) {

        throw new Error(
            "La evaluación no pudo finalizarse o ya estaba finalizada."
        );

    }


    return data;
}

export async function getInitialEvaluationStatus(
    patientId
) {

    if (!patientId) {
        return null;
    }

    const {
        data,
        error
    } = await supabase

        .from("odontograma_evaluaciones")

        .select(`
            id,
            estado,
            updated_at
        `)

        .eq(
            "paciente_id",
            patientId
        )

        .eq(
            "tipo",
            "Inicial"
        )

        .maybeSingle();


    if (error) {

        console.error(
            "Error consultando estado odontograma:",
            error
        );

        throw error;
    }

    return data;
}
```

## 📄 src\supabase\odontogram.js
```javascript
import { supabase } from "./client";

export async function saveTreatment(rows) {

    const { data, error } = await supabase

        .from("odontograma_tratamientos")

        .insert(rows)

        .select();

    if (error) {

        throw error;

    }

    return data;

}

export async function loadOdontogram(patientId) {

    const { data, error } = await supabase

        .from("odontograma_tratamientos")

        .select(`

            id,

            grupo_id,

            paciente_id,

            tratamiento_id,

            material_id,

            numero_pieza,

            cara,

            observaciones,

            fecha,

            created_at,

            updated_at,

            estado,

            orden,

            fecha_realizacion,

            costo,

            odontologo_id,

            tratamiento:tratamientos!odontograma_tratamientos_tratamiento_id_fkey (

                id,

                nombre,

                color

            ),

            material:materiales!odontograma_tratamientos_material_id_fkey (

                id,

                nombre

            )

        `)

        .eq("paciente_id", patientId)

        .order("fecha", {

            ascending: false,

            nullsFirst: false

        })

        .order("created_at", {

            ascending: false

        });

    if (error) {

        throw error;

    }

    return data || [];

}

export async function deleteTreatmentGroup(
    groupId
) {

    const { error } = await supabase

        .from("odontograma_tratamientos")

        .delete()

        .eq("grupo_id", groupId);

    if (error) {

        throw error;

    }

}

export async function deleteTreatmentsByIds(
    ids
) {

    if (!Array.isArray(ids) || ids.length === 0) {

        return;

    }

    const { error } = await supabase

        .from("odontograma_tratamientos")

        .delete()

        .in("id", ids);

    if (error) {

        throw error;

    }

}

export async function updateTreatment(
    id,
    data
) {

    const { data: result, error } =
        await supabase

            .from("odontograma_tratamientos")

            .update({

                ...data,

                updated_at:
                    new Date().toISOString()

            })

            .eq("id", id)

            .select()

            .single();

    if (error) {

        throw error;

    }

    return result;

}

export async function loadHistory(patientId) {

    return loadOdontogram(patientId);

}

export async function updateTreatmentGroupStatus({
    groupId,
    recordIds,
    status
}) {

    const now = new Date().toISOString();

    const updateData = {
        estado: status,
        updated_at: now
    };

    if (status === "Completado") {
        updateData.fecha_realizacion = now;
    }

    if (status === "Cancelado") {
        updateData.fecha_realizacion = null;
    }

    let query = supabase
        .from("odontograma_tratamientos")
        .update(updateData)
        .eq("estado", "Pendiente");

    if (groupId) {

        query = query.eq("grupo_id", groupId);

    } else if (
        Array.isArray(recordIds) &&
        recordIds.length > 0
    ) {

        query = query.in("id", recordIds);

    } else {

        throw new Error(
            "No se proporcionó un grupo o registros para actualizar."
        );

    }

    const { data, error } = await query.select();

    if (error) {
        throw error;
    }

    return data || [];
}
```

## 📄 src\supabase\patients.js
```javascript
import { supabase } from "./client";

export async function getPatients() {

    const { data, error } = await supabase
        .from("pacientes")
        .select("*")
        .order("created_at", {
            ascending: false
        });


    if (error) throw error;

    return data;
}

export async function createPatient(patient) {

    const { data, error } = await supabase
        .from("pacientes")
        .insert([patient])
        .select();

    if (error) throw error;

    return data[0];

}

export async function updatePatient(id, patient) {

    const { data, error } = await supabase
        .from("pacientes")
        .update(patient)
        .eq("id", id)
        .select();

    if (error) throw error;

    return data[0];

}

export async function updatePatientStatus(
    patientId,
    status
) {

    const { data, error } = await supabase
        .from("pacientes")
        .update({
            status
        })
        .eq("id", patientId)
        .select("id, status")
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export async function deactivatePatient(patientId) {

    if (!patientId) {

        throw new Error(
            "No se recibió el ID del paciente."
        );

    }

    const { data, error } = await supabase

        .from("pacientes")

        .update({
            status: false
        })

        .eq("id", patientId)

        .select("id, status")

        .maybeSingle();

    console.log("Resultado desactivación:", {
        patientId,
        data,
        error
    });

    if (error) {

        throw error;

    }

    if (!data) {

        throw new Error(
            "Supabase no actualizó ninguna fila. Revisa el ID y las políticas RLS."
        );

    }

    return data;

}
```

## 📄 src\supabase\tratamientos.js
```javascript
import { supabase } from "./client";

export async function getTreatments() {

    const { data, error } = await supabase
        .from("tratamientos")
        .select("*")
        .eq("activo", true)
        .order("nombre");

    if (error) throw error;

    return data;
}

export async function getMaterialsByTreatment(treatmentId) {

    const { data, error } = await supabase

        .from("tratamiento_materiales")

        .select(`
            material_id,
            materiales (
                id,
                nombre
            )
        `)

        .eq("tratamiento_id", treatmentId)

        .eq("activo", true);

    if (error) throw error;

    return data;
}
```

## 📄 vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```
