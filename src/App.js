import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lol from './pages/Lol';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      {/* Cabecera de la aplicación, presente en todas las páginas */}
      <Header />
      
      <Routes>
        {/* Ruta Home */}
        <Route path="/" element={<Home />} />

        {/* Ruta Lol*/}
        <Route path="/lol" element={<Lol />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
