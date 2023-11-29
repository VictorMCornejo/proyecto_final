import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';


import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import GaleriaPage from './pages/GaleriaPage';
import NovedadesPage from './pages/NovedadesPage';
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';


function App(){
  return(
    <div className="contenedor">
      <Header/>

      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/novedades" element={<NovedadesPage/>}/>
            <Route path="/nosotros" element={<NosotrosPage/>}/>
            <Route path="/servicios" element={<ServiciosPage/>}/>
            <Route path="/galeria" element={<GaleriaPage/>}/>
            <Route path="/contacto" element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}
export default App;
