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
│   │   │   │   ├── Header
│   │   │   │   │   ├── PatientHeader.css
│   │   │   │   │   └── PatientHeader.jsx
│   │   │   │   ├── Legend.jsx
│   │   │   │   ├── PendingTreatments.css
│   │   │   │   ├── PendingTreatments.jsx
│   │   │   │   ├── Toolbar
│   │   │   │   │   ├── Toolbar.css
│   │   │   │   │   ├── Toolbar.jsx
│   │   │   │   │   └── ToolbarButton.jsx
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
│   │   │   │   └── useOdontogram.js
│   │   │   ├── layout
│   │   │   │   ├── Workspace.css
│   │   │   │   └── Workspace.jsx
│   │   │   ├── services
│   │   │   │   └── treatmentEngine.js
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
│   │   ├── Sidebar.jsx
│   │   ├── StatsCards
│   │   │   ├── StatsCards.css
│   │   │   └── StatsCards.jsx
│   │   └── UpcomingAppointments
│   │       ├── UpcomingAppointments.css
│   │       └── UpcomingAppointments.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── Agenda.jsx
│   │   ├── Dashboard.jsx
│   │   └── Pacientes.jsx
│   ├── styles
│   │   ├── Header.css
│   │   ├── Sidebar.css
│   │   └── global.css
│   └── supabase
│       ├── client.js
│       ├── estados.js
│       ├── odontogram.js
│       ├── patients.js
│       └── tratamientos.js
└── vite.config.js
```

## 🔄 Changes Since Last Export
- Added: 109
- Modified: 0
- Removed: 0

## 🌱 Git Info
- Branch: main
- Commit: 2c13131

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
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
```

## 📄 src\App.jsx
```jsx
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

            {<Header />}

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
```

## 📄 src\components\ActionMenu\ActionMenu.jsx
```jsx
import { useState, useRef, useEffect } from "react";
import "./ActionMenu.css";

function ActionMenu({

    onEdit,
    onDeactivate,
    onOdontogram,
    onExploracion

}) {

    const [open, setOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(e){

            if(menuRef.current && !menuRef.current.contains(e.target)){

                setOpen(false);

            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {

            document.removeEventListener("mousedown", handleClickOutside);

        };

    }, []);

    return (

        <div
            className="actionMenu"
            ref={menuRef}
        >

            <button
                className="menuButton"
                onClick={() => setOpen(!open)}
            >

                ⋮

            </button>

            {open && (

                <div className="menuDropdown">

                    <button onClick={onEdit}>

                        Datos Personales

                    </button>

                    <button onClick={onOdontogram}>

                        Odontogrmama

                    </button>

                    <button onClick={onExploracion}>

                        Exploración

                    </button>

                    <button onClick={onDeactivate}>

                        Desactivar

                    </button>

                </div>

            )}

        </div>

    );

}

export default ActionMenu;
```

## 📄 src\components\Exploracion\Exploracion.css
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

.checkboxGroup{

    display:flex;

    gap:20px;

    flex-wrap:wrap;

    margin-top:10px;

}

.checkboxGroup label{

    display:flex;

    align-items:center;

    gap:6px;

    font-size:14px;

}

.radioGroup{

    display:flex;

    gap:20px;

    flex-wrap:wrap;

}

.radioGroup label{

    display:flex;

    align-items:center;

    gap:6px;

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

function ExploracionForm({ mode, patient, onCancel, onSave }) {

    const [formData, setFormData] = useState({

    nombre: "",

    apellido: "",

    edad: "",

    cabeza: "",

    creaneo: "",

    cara : "",

    perfil: "",

    piel: "",

    musculos: "",

    cuello: "",

    otros_cabeza_cuello: ""

    });


    const [step, setStep] = useState(1);


    useEffect(() => {

        if (mode === "edit" && patient) {

            setFormData({

                nombre: patient.nombre || "",

                apellido: patient.apellido || "",

                edad: patient.edad || "",

                cabeza: patient.cabeza || "",

                craneo: patient.craneo || "",

                cara: patient.cara || "",

                perfil: patient.perfil || "",

                piel: patient.perfil || "",

                musculos: patient.perfil || "",

                cuello: patient.perfil || "",

                otros_cabeza_cuello: patient.perfil || ""

                });

        }

        if (mode === "create") {

            setFormData({

            nombre: "",

            apellido: "",

            edad: "",

            fecha_nacimiento: "",

            cabeza: "",
            
            craneo:"",

            cara:"",

            perfil: "",

            piel: "",

            musculos: "",

            cuello: "",

            otros_cabeza_cuello: ""
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

            {/*<h2>

                {mode === "create"

                    ? "Nuevo Paciente"

                    : "Editar Paciente"}

            </h2>*/}

            {step === 1 && (

                    <SignosVitalesDataStep

                        formData={formData}

                        handleChange={handleChange}

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

                    />

                )}

                <div className="formButtons">

                    {step == 1 ? (

                        <button

                            className="cancelButton"
                            onClick={() => onCancel()}

                        >

                            Cancelar

                        </button>

                    ) : (

                        <button

                            className="cancelButton"
                            onClick={() => setStep(step - 1)}

                        >

                            Anterior

                        </button>

                    )}

                    {step < 6 ? (

                        <button
                            className="saveButton"
                            onClick={() => setStep(step + 1)}

                        >

                            Siguiente

                        </button>

                    ) : (

                        <button
                            className="saveButton"
                            onClick={() => onSave(formData)}

                        >

                            Guardar

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
                { value: "hipotonicos", label: "Hipotónicos" },
                { value: "hipertonicos", label: "Hipertónicos" },
                { value: "epasticos", label: "Epásticos" },
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
                { value: "denticion_primaria", label: "Plano terminal en dentición primaria" },
                { value: "escalon_mesial", label: "Escalón mesial" },
                { value: "escalon_distal", label: "Escalón distal" },
                { value: "plano_terminal_recto", label: "Plano terminal recto" },
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

    handleChange

}){


    return(
        <>
            <div className="formGroup">
            <h2>Signos Vitales</h2>
                <label>Peso</label>

                <input
                type="number"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
            />


            </div>

            <div className="formGroup">

                <label>Talla</label>

                <input
                    type="text"
                    name="talla"
                    value={formData.talla}
                    onChange={handleChange}
                />

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
                name="frecuencia_cardiaca"
                value={formData.frecuencia_cardiaca}
                onChange={handleChange}
            />
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
                name="frecuencia_respiratoria"
                value={formData.frecuencia_respiratoria}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
                <label>Temperatura</label>

                <input
                type="number"
                name="temperatura"
                value={formData.temperatura}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
                <label>Nivel de glucosa</label>

                <input
                type="text"
                name="glucosa"
                value={formData.glucosa}
                onChange={handleChange}
            />
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
                    { value: "saburral", label: "Saburral" },
                    { value: "fisural", label: "Fisural" },
                    { value: "geografica", label: "Geográfica" },
                    { value: "descamacion", label: "Descamación" },
                    { value: "tamaño_aumentado", label: "Tamaño aumentado" },

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
                name="carrilos_color"
                value={formData.carrillos_color}
                onChange={handleChange}
            />
            <RadioGroup
                label=""
                name="carrillos"
                value={formData.carrillos}
                options={[
                    { value: "linea_alba", label: "Línea alba o clusat" },
                    { value: "mordisqueo", label: "Mordisqueo" }
                ]}
                onChange={handleChange}
            />
            <label
            >Otros (especificar):</label>
                <input
                type="text"
                name="carrilos_especificar"
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
                    { value: "agrandamientos", label: "Agrandamientos" },
                    { value: "tonus", label: "Tonus" },
                    { value: "unilateral", label: "Unilateral" },
                    { value: "bilateral", label: "Bilateral" },
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
                value={formData.piso_boca_color}
                onChange={handleChange}
            />
            <label
            style={{marginTop:10}}
            >Forma y Tamaño</label>
                <input
                type="text"
                name="paladar_forma_tamaño"
                value={formData.paladar_forma_tamaño}
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
                name="piso_boca_especificar"
                value={formData.piso_boca_especificar}
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

function TejidosBlandosDataStep3({
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
            <RadioGroup
                label=""
                name="encias"
                value={formData.encias}
                options={[
                    { value: "sangrado", label: "Sangrado" },
                    { value: "exudado", label: "Exudado" }
                ]}
                onChange={handleChange}
            />
            <label
            >Otros (especificar):</label>
                <input
                type="text"
                name="carrilos_especificar"
                value={formData.carrillos_especificar}
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

## 📄 src\components\Form\RadioGroup.css
```css
.radioGroup{

    display:flex;

    gap:20px;

    flex-wrap:wrap;

    margin-top:8px;

}

.radioOption{

    display:flex;

    align-items:center;

    gap:8px;

    cursor:pointer;

}

.groupLabel{

    font-weight:600;

    display:block;

    margin-bottom:6px;

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

        <div className="formGroup">

            <label className="groupLabel">

                {label}

            </label>

            <div className="radioGroup">

                {options.map((option) => (

                    <label
                        key={option.value}
                        className="radioOption"
                    >

                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                        />

                        {option.label}

                    </label>

                ))}

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
```

## 📄 src\components\History\History.css
```css
.historyCard{

background:white;

padding:20px;

border-radius:18px;

box-shadow:

0 2px 8px rgba(15,23,42,.03),

0 20px 40px rgba(15,23,42,.05);

}

.historyCard h3{

margin-bottom:15px;

}

.historyItem{

padding:12px 0;

border-bottom:1px solid #ececec;

position:relative;

padding-left:20px;

font-size:14px;

}

.historyItem:last-child{

border:none;

}

.historyItem strong{

display:block;

margin-bottom:5px;

color:#17334d;

}

.historyItem p{

color:#666;

}

.historyItem::before{

content:"";

position:absolute;

left:4px;

top:10px;

bottom:-12px;

width:2px;

background:#dfe9f2;

}

.historyItem::after{

content:"";

position:absolute;

left:0;

top:8px;

width:10px;

height:10px;

background:#2ccbc0;

border-radius:50%;

}
```

## 📄 src\components\History\History.jsx
```jsx
import "./History.css";

function History(){

return(

<div className="historyCard">

<h3>Cronología de Historial</h3>

<div className="historyItem">

<strong>15/10/23</strong>

<p>Limpieza y revisión</p>

</div>

<div className="historyItem">

<strong>03/08/23</strong>

<p>Resina pieza 13</p>

</div>

</div>

)

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
.odontogramCanvas{

    width:100%;

    height:100%;

    display:flex;

    justify-content:center;

    align-items:center;

    padding:32px;

    background:#EEF2F7;

    overflow:hidden;

}

.odontogramPaper{

    width:100%;

    height:100%;

    background:white;

    border-radius:20px;

    border:1px solid #D9E2EC;

    display:flex;

    justify-content:center;

    align-items:center;

    box-shadow:

        0 8px 20px rgba(15,23,42,.05);

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

## 📄 src\components\OdontogramV2\components\Header\PatientHeader.css
```css
.patientHeader{

    display:flex;

    align-items:center;

    gap:24px;

    padding:20px 28px;

    border-bottom:1px solid #E2E8F0;

    background:white;

}

.backButton{

    border:none;

    background:#2563EB;

    color:white;

    padding:12px 18px;

    border-radius:10px;

    cursor:pointer;

    font-weight:600;

}

.backButton:hover{

    opacity:.9;

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

## 📄 src\components\OdontogramV2\components\PendingTreatments.css
```css
.pendingTreatments{

    margin-top:20px;

}

.pendingTreatments h3{

    margin-bottom:15px;

}

.treatmentCard{

    background:#fff;

    border-radius:12px;

    padding:18px;

    margin-bottom:16px;

    box-shadow:0 2px 8px rgba(0,0,0,.08);

}

.treatmentCard h4{

    margin:12px 0 4px;

    color:#374151;

    font-size:14px;

}

.treatmentCard p{

    margin:0;

    color:#4b5563;

    font-size:14px;

}

.deleteButton{

    margin-top:15px;

    padding:8px 14px;

    border:none;

    border-radius:8px;

    background:#dc2626;

    color:white;

    cursor:pointer;

    transition:.2s;

}

.deleteButton:hover{

    background:#b91c1c;

}

.editButton{

    margin-top:15px;

    margin-right:10px;

    padding:8px 14px;

    border:none;

    border-radius:8px;

    background:#2563eb;

    color:white;

    cursor:pointer;

}

.editButton:hover{

    background:#1d4ed8;

}
```

## 📄 src\components\OdontogramV2\components\PendingTreatments.jsx
```jsx
import "./PendingTreatments.css";


function PendingTreatments({

    pendingTreatments,

    onDelete,

    onEdit

}) {

    return (

        <div className="pendingTreatments">

            <h3>Tratamientos pendientes</h3>
                {pendingTreatments.map((item) => (
                    <div
                        key={item.id}
                        className="treatmentCard"
                    >

                        <h4>

                            🦷 Dientes


                        </h4>

                        <strong>

                            {item.teeth.join(", ")}

                        </strong>
                        <h4>

                            🩺 Tratamiento

                        </h4>

                        <p>

                            {item.treatmentName}

                        </p>
                        <h4>

                            🧱 Material

                        </h4>

                        <p>

                            {item.materialName || "-"}

                        </p>
                        <h4>

                            📝 Observaciones

                        </h4>

                        <p>

                            {item.observations || "-"}

                        </p>
                        <h4>

                            Estado

                        </h4>

                        <p>

                            {item.status}

                        </p>
                        <button

                            className="deleteButton"

                            onClick={() => onDelete(item.id)}

                        >

                            Eliminar

                        </button>

                        <button

                            className="editButton"

                            onClick={() => onEdit(item)}

                        >

                            Editar

                        </button>
                    </div>

                ))}
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
import ToothRenderer from "./Tooth/ToothRenderer";
import ToothNumber from "./ToothNumber";

function ToothGroup({

    tooth,

    x,

    y,

    onFaceClick

}) {

    return (

        <g transform={`translate(${x}, ${y})`}>

            <ToothNumber number={tooth.number} />

            <ToothRenderer

                tooth={tooth}

                onFaceClick={onFaceClick}

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
function ToothNumber({ number }) {

    return (

        <text
            x="20"
            y="-8"
            textAnchor="middle"
            fontSize="8"
            fontWeight="600"
            fill="#475569"
        >
            {number}
        </text>

    );

}

export default ToothNumber;
```

## 📄 src\components\OdontogramV2\components\TreatmentPanel.css
```css
.treatmentPanel{

    margin-top:20px;

    background:#fff;

    border-radius:12px;

    padding:20px;

    box-shadow:0 2px 8px rgba(0,0,0,.08);

}

.treatmentPanel h3{

    margin:0 0 20px;

    font-size:20px;

    color:#2d3748;

}

.treatmentPanel .formGroup{

    display:flex;

    flex-direction:column;

    margin-bottom:18px;

}

.treatmentPanel label{

    margin-bottom:6px;

    font-weight:600;

    color:#4a5568;

}

.treatmentPanel input,

.treatmentPanel select,

.treatmentPanel textarea{

    padding:10px;

    border:1px solid #d1d5db;

    border-radius:8px;

    font-size:14px;

    outline:none;

    transition:.2s;

}

.treatmentPanel input:focus,

.treatmentPanel select:focus,

.treatmentPanel textarea:focus{

    border-color:#2563eb;

}

.treatmentPanel textarea{

    resize:vertical;

    min-height:90px;

}

.selectedTeeth{

    background:#f8fafc;

    border:1px solid #e2e8f0;

    border-radius:8px;

    padding:12px;

    margin-bottom:20px;

}

.selectedTeeth span{

    font-weight:600;

    color:#2563eb;

}

.treatmentButtons{

    display:flex;

    justify-content:flex-end;

    gap:12px;

    margin-top:20px;

}

.treatmentButtons button{

    padding:10px 18px;

    border:none;

    border-radius:8px;

    cursor:pointer;

    font-size:14px;

}

.saveTreatment{

    background:#2563eb;

    color:white;

}

.saveTreatment:hover{

    background:#1d4ed8;

}

.clearTreatment{

    background:#e5e7eb;

}

.clearTreatment:hover{

    background:#d1d5db;

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

        applyTreatment

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

    async function handleTreatmentChange(e) {

        const treatmentId = e.target.value;

        const selectedOption = e.target.options[e.target.selectedIndex];

        const treatmentName = selectedOption.text;

        setTreatmentData(prev => ({

            ...prev,

            treatmentId,

            treatmentName,

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
            <div className="formGroup">
            <p>

                Dientes seleccionados:

            </p>

            <strong>
                {formatSelectedFaces()}
            </strong>
            </div>

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
            <div className="formGroup">
            
            {materials.length > 0 && (

                <>

                    <label>Material</label>

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

                </>

            )}
            </div>
            <div className="formGroup">
            <label>
                Observaciones
            </label>
            <textarea
                name="observations"
                disabled={selectedFaces.length === 0}
                value={treatmentData.observations}
                onChange={handleChange}

            />
            </div>
            <div className="formButtons">

                <button

                    className="saveButton"

                    disabled={

                        selectedFaces.length === 0 ||

                        !treatmentData.treatmentId

                    }

                    onClick={applyTreatment}

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

## 📄 src\components\OdontogramV2\context\OdontogramContext.jsx
```jsx
import { createContext, useContext } from "react";
import { useOdontogram } from "../hooks/useOdontogram";

const OdontogramContext = createContext();

export function OdontogramProvider({ children }) {

    const odontogram = useOdontogram();

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

    treatmentId,

    treatmentName,

    materialId,

    materialName

}){

    return{

        id: treatmentId,

        name: treatmentName,

        material:{

            id: materialId,

            name: materialName

        }

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

## 📄 src\components\OdontogramV2\hooks\useOdontogram.js
```javascript
import { useState, useMemo } from "react";
import { createTreatment } from "../data/createTreatment";
import { createOdontogram } from "../data/createOdontogram";
import { applyTreatmentToFaces } from "../services/treatmentEngine";

export function useOdontogram() {

    const [odontogram, setOdontogram] = useState(
        createOdontogram()
    );

    function toggleFaceSelection(toothNumber, faceId){

        setOdontogram(prev => {

            const updated = structuredClone(prev);

            updated[toothNumber].faces[faceId].selected =
                !updated[toothNumber].faces[faceId].selected;

            return updated;

        });

    }

    const selectedFaces = useMemo(() => {

        const faces = [];

        Object.values(odontogram).forEach(tooth => {

            Object.entries(tooth.faces).forEach(([faceId, face]) => {

                if(face.selected){

                    faces.push({

                        toothNumber: tooth.number,

                        faceId

                    });

                }

            });

        });

        return faces;

    }, [odontogram]);

    function applyTreatment(){

        if(selectedFaces.length === 0){

            return;

        }

        if(!treatmentData.treatmentId){

            return;

        }

        const updated = applyTreatmentToFaces(

            odontogram,

            selectedFaces,

            treatmentData

        );

        setOdontogram(updated);

        setTreatmentData({

            treatmentId: "",

            treatmentName: "",

            materialId: "",

            materialName: "",

            observations: ""

        });

    }
    const [treatmentData, setTreatmentData] = useState({

        treatmentId: "",

        treatmentName: "",

        materialId: "",

        materialName: "",

        observations: ""

    });

    async function saveSelectedTreatment(){

    }   

    return{

        odontogram,

        toggleFaceSelection,

        selectedFaces,

        applyTreatment,

        treatmentData,

        setTreatmentData,

        saveSelectedTreatment
    };

}
```

## 📄 src\components\OdontogramV2\layout\Workspace.css
```css
.workspace{

    display:flex;

    flex-direction:column;

    height:100%;

    width:100%;

    gap:18px;

}

.workspaceToolbar{

    flex:0 0 auto;

}

.workspaceCanvas{

    flex:1;

    min-height:520px;

    background:white;

    border-radius:16px;

    border:1px solid #E2E8F0;

    display:flex;

    justify-content:center;

    align-items:center;

    overflow:hidden;

}

.workspaceBottom{

    display:grid;

    grid-template-columns:380px 1fr;

    gap:18px;

}

.workspaceLeft{

    background:white;

    border:1px solid #E2E8F0;

    border-radius:16px;

    padding:18px;

}

.workspaceRight{

    background:white;

    border:1px solid #E2E8F0;

    border-radius:16px;

    padding:18px;

}
```

## 📄 src\components\OdontogramV2\layout\Workspace.jsx
```jsx
import "./Workspace.css";

function Workspace({

    toolbar,

    canvas,

    leftPanel,

    rightPanel

}){

    return(

        <div className="workspace">

            <div className="workspaceToolbar">

                {toolbar}

            </div>

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
.odontogramSvg{

    width:100%;

    height:100%;

}
```

## 📄 src\components\OdontogramV2\Odontogram.jsx
```jsx
import "./Odontogram.css";
import ToothGroup from "./components/ToothGroup";
import { getToothPosition } from "./utils/getToothPosition";
import { useOdontogramContext } from "./context/OdontogramContext";

function Odontogram(){
    const {

        odontogram,

        toggleFaceSelection,

        selectedFaces

    } = useOdontogramContext();
    return(
        <svg
            className="odontogramSvg"
            viewBox="0 0 1800 900"
            preserveAspectRatio="xMidYMid meet"
        >

            {Object.values(odontogram).map(tooth => {

                const {x,y}=getToothPosition(tooth.number);

                return(

                <ToothGroup
                    key={tooth.number}
                    tooth={tooth}
                    x={x}
                    y={y}
                    onFaceClick={toggleFaceSelection}
                />

                );

            })}
        </svg>
    );

}

export default Odontogram;
```

## 📄 src\components\OdontogramV2\OdontogramModule.css
```css
.odontogramModule{

    display:flex;

    flex-direction:column;

    height:100vh;

    background:#F8FAFC;

}
```

## 📄 src\components\OdontogramV2\OdontogramModule.jsx
```jsx
import "./OdontogramModule.css";
import { OdontogramProvider } from "./context/OdontogramContext";
import Toolbar from "./components/Toolbar/Toolbar";
import Odontogram from "./Odontogram";
import TreatmentPanel from "./components/TreatmentPanel";
import PendingTreatments from "./components/PendingTreatments";
import Workspace from "./layout/Workspace";
import PatientHeader from "./components/Header/PatientHeader";
import OdontogramCanvas from "./components/Canvas/OdontogramCanvas";

function OdontogramModule({
    patient,
    onCancel
})
    {
    return(
        <div className="odontogramModule">
        <OdontogramProvider>

            <PatientHeader

                patient={patient}

                onCancel={onCancel}

            />

            <Workspace

                toolbar={<Toolbar/>}

                canvas={

                    <OdontogramCanvas>

                        <Odontogram/>

                    </OdontogramCanvas>

                }

                leftPanel={<TreatmentPanel/>}

                /*rightPanel={<PendingTreatments/>}*/

            />

        </OdontogramProvider>
            
        </div>
    );

}

export default OdontogramModule;
```

## 📄 src\components\OdontogramV2\services\treatmentEngine.js
```javascript
import { createTreatment } from "../data/createTreatment";

export function applyTreatmentToFaces(

    odontogram,

    selectedFaces,

    treatmentData

){

    const updated = structuredClone(odontogram);

    selectedFaces.forEach(({ toothNumber, faceId }) => {

        const face = updated[toothNumber].faces[faceId];

        face.treatment = createTreatment({

            treatmentId: treatmentData.treatmentId,

            treatmentName: treatmentData.treatmentName,

            materialId: treatmentData.materialId,

            materialName: treatmentData.materialName,

            observations: treatmentData.observations

        });

        face.status = "pending";

        face.updatedAt = new Date().toISOString();

        face.selected = false;

    });

    return updated;

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
import { TREATMENT_COLORS } from "./colors";

export function getFaceColor(face){

    if(face.selected){

        return TREATMENT_COLORS.selected;

    }

    if(face.treatment){

        const nombre = face.treatment.treatmentName
            ?.toLowerCase();

        if(TREATMENT_COLORS[nombre]){

            return TREATMENT_COLORS[nombre];

        }

    }

    if(face.status === "pendiente"){

        return TREATMENT_COLORS.pendiente;

    }

    if(face.status === "completado"){

        return TREATMENT_COLORS.completado;

    }

    return TREATMENT_COLORS.healthy;

}
```

## 📄 src\components\OdontogramV2\utils\getToothPosition.js
```javascript
import {

    TOOTH_SIZE,

    TOOTH_GAP,

    MIDLINE_GAP,

    ARCH_SPACING,

    START_X,

    START_Y,

    ARCH_CURVE

} from "../config/layout";

const UPPER_RIGHT = [18,17,16,15,14,13,12,11];

const UPPER_LEFT = [21,22,23,24,25,26,27,28];

const LOWER_RIGHT = [48,47,46,45,44,43,42,41];

const LOWER_LEFT = [31,32,33,34,35,36,37,38];

export function getToothPosition(number){

    let row = 0;

    let index = 0;

    let side = "right";

    if(UPPER_RIGHT.includes(number)){

        row = 0;

        side = "right";

        index = UPPER_RIGHT.indexOf(number);

    }

    else if(UPPER_LEFT.includes(number)){

        row = 0;

        side = "left";

        index = UPPER_LEFT.indexOf(number);

    }

    else if(LOWER_RIGHT.includes(number)){

        row = 1;

        side = "right";

        index = LOWER_RIGHT.indexOf(number);

    }

    else{

        row = 1;

        side = "left";

        index = LOWER_LEFT.indexOf(number);

    }

    const x = side === "right"

        ? START_X + index * (TOOTH_SIZE + TOOTH_GAP)

        : START_X
            + 8 * (TOOTH_SIZE + TOOTH_GAP)
            + MIDLINE_GAP
            + index * (TOOTH_SIZE + TOOTH_GAP);

    const distanceFromCenter = Math.abs(index - 3.5);

    const curve = Math.pow(distanceFromCenter, 2) * ARCH_CURVE / 12;

    const y = row === 0

        ? START_Y + curve

        : START_Y + ARCH_SPACING - curve;

    return { x, y };

}
```

## 📄 src\components\PatientForm\PatientForm.css
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

## 📄 src\components\PatientForm\PatientForm.jsx
```jsx
import "./PatientForm.css";
import { useState, useEffect} from "react"; 
import PersonalDataStep from "./Steps/PersonalDataStep";
import FamilyDataStep from "./Steps/FamilyDataStep";
import MedicalDataStep from "./Steps/MedicalDataStep";
import AntecedentesStep from "./Steps/AntecedentesStep";

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

            {/*<h2>

                {mode === "create"

                    ? "Nuevo Paciente"

                    : "Editar Paciente"}

            </h2>*/}

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

                <div className="formButtons">

                    {step == 1 ? (

                        <button

                            className="cancelButton"
                            onClick={() => onCancel()}

                        >

                            Cancelar

                        </button>

                    ) : (

                        <button

                            className="cancelButton"
                            onClick={() => setStep(step - 1)}

                        >

                            Anterior

                        </button>

                    )}

                    {step < 3 ? (

                        <button
                            className="saveButton"
                            onClick={() => setStep(step + 1)}

                        >

                            Siguiente

                        </button>

                    ) : (

                        <button
                            className="saveButton"
                            onClick={() => onSave(formData)}

                        >

                            Guardar

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
.patientProfile{

background:white;

border-radius:18px;

padding:22px;

box-shadow:

0 2px 8px rgba(15,23,42,.03),

0 20px 40px rgba(15,23,42,.05);

}

.profileHeader{

display:flex;

gap:18px;

align-items:center;

margin-bottom:10px;

}

.profileHeader img{

width:110px;

height:110px;

border-radius:16px;

object-fit:cover;

}

.profileHeader h2{

font-size: 30px;

color:#263238;


}

.profileHeader small{

display:block;

color:#666;

margin-bottom:6px;

}

.profileHeader h1{

font-size:40px;

color:#17334d;

}

.profileSection{

padding-top:16px;

margin-top:10px;

border-top:1px solid #eef2f6;

}

.profileSection h3{

margin-bottom:10px;

font-size:20px;

color:#263238;

}

.profileSection p{

margin:7px 0;

font-size:14px;

color:#666;

}

.profileSection strong{

color:#222;

}
```

## 📄 src\components\PatientProfile\PatientProfile.jsx
```jsx
import "./PatientProfile.css";

function PatientProfile({ patient }) {

    if (!patient) {
                return (
            <div className="patientProfile">
                <p>Cargando paciente...</p>
            </div>
        );
    }
    return (
        <div className="patientProfile">

            <div className="profileHeader">


                <div>

                    <h2>{patient.nombre} {patient.apellido}</h2>

                </div>

            </div>

            <div className="profileSection">

                <h3>Datos Personales</h3>

                <p><strong>Fecha Nac:</strong> {patient.fecha_nacimiento}</p>

                <p><strong>Domicilio:</strong> {patient.domicilio}</p>

            </div>

            <div className="profileSection">

                <h3>Historial Médico</h3>

                <p><strong>Antecedentes Padre:</strong> {patient.antecedentes_padre || "Ninguno"}</p>

                <p><strong>Antecedentes Madre:</strong> {patient.antecedentes_madre || "Ninguno"}</p>

                <p><strong>Antecedentes Hermanos:</strong> {patient.antecedentes_hermanos || "Ninguno"}</p>

                <p><strong>Antecedentes Personales:</strong> {patient.antecedentes_personales || "Ninguno"}</p>

            </div>

        </div>
    );
}

export default PatientProfile;
```

## 📄 src\components\PatientTable\PatientTable.css
```css
.tableCard{

margin-top: -11px;

background:white;

border-radius:20px;

padding:22px;

box-shadow:0 10px 20px rgba(0,0,0,.05);

}

.tableCard h3{

font-size:22px;

margin-bottom:17px;

color:#263238;

}

table{


width:100%;

border-collapse:collapse;

}

thead{

border-bottom:2px solid #edf1f5;

}

th{

text-align:left;

padding:16px 14px;

font-size:13px;

color:#777;

font-weight:600;

}

td{ 

padding:18px 14px;

border-bottom:1px solid #eef2f5;

font-size:15px;

color:#555;

}

.patient{

display:flex;

align-items:center;

gap:12px;

font-weight:600;

}

.patient img{

width:38px;

height:38px;

border-radius:50%;

}

.status{

background:#dff9eb;

padding:8px 16px;

border-radius:30px;

color:#1e8b58;

font-weight:600;

font-size:14px;

border:1px solid #b7ecd2;
}
.statusActive{
    background:#dff9eb;
    color:#1e8b58;
    border:1px solid #b7ecd2;
}

.statusInactive{
    background:#ffe5e5;
    color:#c0392b;
    border:1px solid #f5b7b1;
}

.pagination{

display:flex;

justify-content:flex-end;

gap:8px;

margin-top:20px;

}

.pagination button{

width:36px;

height:36px;

border:none;

border-radius:10px;

background:#eef4fa;

cursor:pointer;

}

.current{

background:#17334d !important;

color:white;

}

tbody tr{

    transition:.2s;

}

tbody tr:hover{

    background:#ebf5ff;

}

.tableHeader{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
}

.newPatientButton{
    background:#173852;
    color:white;
    border:none;
    padding:10px 18px;
    border-radius:10px;
    cursor:pointer;
    font-weight:600;
    transition:.2s;
}

.newPatientButton:hover{
    background:#224b69;
}

.search{

    display:flex;

    border:1px solid #dde7ef;

    align-items:center;

    gap:12px;

    width:340px;

    padding:12px 18px;

    border-radius:14px;

    background:white;


}

.search svg{

    color:#7b8794;

}

.search input{

    border:none;

    outline:none;

    width:100%;

    background:none;

    font-size:15px;

}
```

## 📄 src\components\PatientTable\PatientTable.jsx
```jsx
import ActionMenu from "../ActionMenu/ActionMenu";
import "./PatientTable.css";
import { useState, useEffect} from "react";
import { FaSearch } from "react-icons/fa";
function PatientTable({
    patients,
    onSelectPatient,
    selectedPatient,
    onCreatePatient,
    onEditPatient,
    onOdontogramPatient,
    onExploracionPatient
}) {




return(

<div className="tableCard">

<div className="tableHeader">


<div className="search">

    <FaSearch />

    <input
        type="text"
        placeholder="Buscar paciente"
    />

</div>

<button className="newPatientButton" onClick={onCreatePatient}>

+ Nuevo Paciente
</button>
</div>



<table>

<thead>

<tr>

<th>Nombre</th>

<th>Edad</th>

<th>Teléfono</th>

<th>Dirección</th>

<th>Estado</th>

<th></th>

</tr>

</thead>

<tbody>

    {patients.map((patient) => (

        <tr onClick={() => onSelectPatient(patient)}>

            <td className="patient">

                {patient.nombre} {patient.apellido}

            </td>

            <td>{patient.edad}</td>

            <td>{patient.telefono}</td>

            <td>{patient.domicilio}</td>

            <td>
            <span
                className={`status ${
                    patient.status ? "statusActive" : "statusInactive"
                }`}
            >
                {patient.status ? "Activo" : "Inactivo"}
            </span>

            </td>
            <td>
            <ActionMenu
                onEdit={() => {

                    onSelectPatient(patient);

                    onEditPatient();

                }}

                onDeactivate={() => {}}

                onOdontogram={() => {
                    onOdontogramPatient();
                }}

                onExploracion={() => {
                    onExploracionPatient();
                }}


            />
            </td>
        </tr>

    ))}

</tbody>

</table>

<div className="pagination">

<button>{"<"}</button>

<button className="current">1</button>

<button>{">"}</button>

</div>

</div>

)

}

export default PatientTable;
```

## 📄 src\components\Sidebar.jsx
```jsx
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

## 📄 src\index.css
```css
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

body {
  margin: 0;
}

#root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}
```

## 📄 src\main.jsx
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
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

## 📄 src\pages\Pacientes.jsx
```jsx
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

function Pacientes() {

    const [patients, setPatients] = useState([]);

    const [selectedPatient, setSelectedPatient] = useState(null);

    const [panelMode, setPanelMode] = useState("profile");

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
            onCancel={() => setPanelMode("profile")}
        />

    );

}
    return (
        <div className="dashboard">


            <div className="dashboardGrid">

                <div className="leftColumn">

                <PatientTable
                    patients={patients}
                    onSelectPatient={setSelectedPatient}
                    selectedPatient={selectedPatient}
                    onCreatePatient={() => setPanelMode("create")}
                    onEditPatient={() => setPanelMode("edit")}
                    onOdontogramPatient={() => setPanelMode("odontogram")}
                    onExploracionPatient={() => setPanelMode("exploracion")}                />
                </div>

                <div className="rightColumn">

                    {panelMode === "profile" && (
                        <>
                            <PatientProfile patient={selectedPatient}/>
                            <History/>
                            <UpcomingAppointments/>
                        </>
                    )}

                    {panelMode === "create" && (
                        <PatientForm
                            mode="create"
                            onCancel={() => setPanelMode("profile")}
                            onSave={handleCreatePatient}
                        />
                    )}

                    {panelMode === "edit" && (
                        <PatientForm
                            mode="edit"
                            patient={selectedPatient}
                            onCancel={() => setPanelMode("profile")}
                            onSave={handleUpdatePatient}
                        />
                    )}

                    {panelMode === "odontogram" && (
                        <OdontogramModule
                            patient={selectedPatient}
                            onCancel={() => setPanelMode("profile")}
                        />
                    )}

                    {panelMode === "exploracion" && (
                        <ExploracionForm
                            mode="edit"
                            patient={selectedPatient}
                            onCancel={() => setPanelMode("profile")}
                            onSave={handleUpdatePatient}
                        />
                    )}

                </div>

            </div>

        </div>
    );
}

export default Pacientes;
```

## 📄 src\styles\global.css
```css
:root{

    --primary:#17354f;

    --secondary:#2ccbc0;

    --background:#edf5fb;

    --card:#ffffff;

    --text:#1f2937;

    --subtitle:#7b8794;

    --border:#edf1f6;

    --shadow:0 10px 30px rgba(15,23,42,.06);

    --radius:20px;

}

*{

    margin:0;
    padding:0;
    box-sizing:border-box;

}

body{

    font-family:"Inter",sans-serif;

    background:#eef5fb;

    color:#27323f;

}

button{

    font-family:inherit;

}

.app{

    display:flex;

    min-height:100vh;

}

.main{

    flex:1;

    display:flex;

    flex-direction:column;

}

.dashboard{

    padding: 26px;

    background:#edf5fb;

    flex:1;

}

.dashboardTitle{

    font-size:32px;

    font-weight:600;

    margin-bottom:15px;

    margin-top: -15px;

    color:#1f2937;

}

.dashboardGrid{

    display:grid;

    grid-template-columns:2fr 450px;

    gap:18px;

    align-items:start;

}

.leftColumn{

    display:flex;

    flex-direction:column;

    gap:10px;

}

.rightColumn{

    margin-top:-15px;

    display:flex;

    flex-direction:column;

    gap:10px;
    
    transition:all .3s ease;

}


@media (max-width:1400px){

.dashboardGrid{

grid-template-columns:1fr;

}

}

@media (max-width:900px){

.sidebar{

display:none;

}

.header{

padding:18px;

}

.cards{

grid-template-columns:repeat(2,1fr);

}

}

@media (max-width:650px){

.cards{

grid-template-columns:1fr;

}

table{

display:block;

overflow:auto;

}

.search{

display:none;

}

.dashboardTitle{

font-size:32px;

}

}
```

## 📄 src\styles\Header.css
```css
.header{

    height:82px;

    display:flex;

    align-items:center;

    justify-content:space-between;

    padding:0 35px;

    background:white;

    border-bottom:1px solid #ececec;

}

.header h1{

    font-size:34px;

    color:#1f2937;

}

.header span{

    color:#666;

    font-weight:400;

    font-size:20px;

}

.headerRight{

    display:flex;

    align-items:center;

    gap:18px;

}

.search{

    display:flex;

    border:1px solid #dde7ef;

    align-items:center;

    gap:12px;

    width:340px;

    padding:12px 18px;

    border-radius:14px;

    background:white;


}

.search svg{

    color:#7b8794;

}

.search input{

    border:none;

    outline:none;

    width:100%;

    background:none;

    font-size:15px;

}

.header button{

    width:44px;

    height:44px;

    border:1px solid #e7edf4;

    background:white;

    border-radius:50%;

    cursor:pointer;

    font-size:18px;

    transition:.2s;

}

.header button:hover{

    background:#eef5fb;

}
```

## 📄 src\styles\Sidebar.css
```css
.sidebar{

    width:230px;
    background:#173852;
    color:white;

    display:flex;
    flex-direction:column;

    min-height:100vh;
    padding-top:12px;

}

.logo{

    display:flex;
    align-items:center;

    gap:12px;

    padding:24px;

    font-size:20px;
    font-weight:700;

}

.logoIcon{

    width:30px;
    height:30px;

    border-radius:12px;

    background:#2ad0c9;

}

.avatar{

    display:flex;
    justify-content:center;

    margin-bottom:30px;

}

.avatar img{

    width:95px;

    height:95px;

    border-radius:50%;

    border:6px solid rgba(255,255,255,.12);

}

nav{

    display:flex;
    flex-direction:column;

    gap:10px;

    padding:0 14px;

}

.menu{
    display:flex;

    align-items:center;

    gap:15px;

    padding:14px;

    border-radius:12px;

    color:white;

    text-decoration:none;

    transition:.2s;

}

.menu:hover{

    background:#294864;

}


.menu.active{

    background:#294864;

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

## 📄 src\supabase\odontogram.js
```javascript
import { supabase } from "../client";

export async function saveTreatment(data){

    const { data: result, error } = await supabase

        .from("odontograma_tratamientos")

        .insert(data)

        .select()

        .single();

    if(error){

        throw error;

    }

    return result;

}

export async function loadOdontogram(patientId){

}

export async function updateTreatment(id,data){

}

export async function deleteTreatment(id){

}

export async function loadHistory(patientId){

}
```

## 📄 src\supabase\patients.js
```javascript
import { supabase } from "./client";

export async function getPatients() {

    const { data, error } = await supabase
        .from("pacientes")
        .select("*");

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
