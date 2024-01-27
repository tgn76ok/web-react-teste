import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './templates/Apps';
import NotaMil from './templates/NotaMil';
import ProvasAntigas from './templates/ProvasAntigas';
import Assuntos from './templates/Assuntos';
import Calculadora from './templates/Calculadora';
import Dicas from './templates/Dicas';
import Cronometro from './templates/cronometro'
import reportWebVitals from './reportWebVitals';

import HeaderG from './components/HeaderG'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <HeaderG/>

      <Routes>
        <Route path="/" element={<App/>}  />
        <Route path="/NotaMil" element={<NotaMil/>}  />
        <Route path="/ProvasAntigas" element={<ProvasAntigas/>}  />
        <Route path="/Assunto" element={<Assuntos/>}  />
        <Route path="/Calculadora" element={<Calculadora/>}  />
        <Route path="/Dicas" element={<Dicas/>}  />
        <Route path="/Cronometro" element={<Cronometro/>}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
