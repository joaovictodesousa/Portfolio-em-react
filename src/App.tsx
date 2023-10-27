import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Sobremim from './Pages/Sobremim';
import Naoencontrada from './Pages/Naoencontrada';
import Experiencia from './Pages/Experiencia';
import Projetos from './Pages/Projetos';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Inicio />} />
       <Route path="/sobremim"  element={<Sobremim />} />
       <Route path="/projetos"  element={<Projetos />} />
       <Route path="/experiencia"  element={<Experiencia />} />
       <Route path="*" element={ <Naoencontrada />} />  {/* Pagina de 404 */}
       </Routes>
   </BrowserRouter>
  );
}

export default App;
