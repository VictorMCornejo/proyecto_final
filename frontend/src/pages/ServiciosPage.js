import PortadaEstatica from "../components/layout/PortadaEstatica";
import '../components/layout/Contactate';
import '../components/layout/PortadaEstatica';
import '../styles/pages/ServiciosPage.css';
import Contactate from "../components/layout/Contactate";

const ServiciosPage=(prop)=>{
    return(
        <div className="main">
            <PortadaEstatica/>
            <i className="bi bi-bookmark-star-fill"></i>
            <section className="seccion1 mt-5">
               <h2 id="servicio1">CONOCE TODOS LOS PLANES QUE TENEMOS PARA VOS</h2>
           </section>

            {/* SVG ARRIBA*/}
            <svg className="svg-blanco" id="wave" viewBox="0 0 1440 170" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0,136L80,119C160,102,320,68,480,65.2C640,62,800,91,960,90.7C1120,91,1280,62,1440,68C1600,74,1760,113,1920,127.5C2080,142,2240,130,2400,113.3C2560,96,2720,74,2880,76.5C3040,79,3200,108,3360,119C3520,130,3680,125,3840,116.2C4000,108,4160,96,4320,99.2C4480,102,4640,119,4800,107.7C4960,96,5120,57,5280,56.7C5440,57,5600,96,5760,116.2C5920,136,6080,136,6240,130.3C6400,125,6560,113,6720,116.2C6880,119,7040,136,7200,130.3C7360,125,7520,96,7680,96.3C7840,96,8000,125,8160,133.2C8320,142,8480,130,8640,119C8800,108,8960,96,9120,87.8C9280,79,9440,74,9600,70.8C9760,68,9920,68,10080,70.8C10240,74,10400,79,10560,76.5C10720,74,10880,62,11040,73.7C11200,85,11360,119,11440,136L11520,153L11520,170L11440,170C11360,170,11200,170,11040,170C10880,170,10720,170,10560,170C10400,170,10240,170,10080,170C9920,170,9760,170,9600,170C9440,170,9280,170,9120,170C8960,170,8800,170,8640,170C8480,170,8320,170,8160,170C8000,170,7840,170,7680,170C7520,170,7360,170,7200,170C7040,170,6880,170,6720,170C6560,170,6400,170,6240,170C6080,170,5920,170,5760,170C5600,170,5440,170,5280,170C5120,170,4960,170,4800,170C4640,170,4480,170,4320,170C4160,170,4000,170,3840,170C3680,170,3520,170,3360,170C3200,170,3040,170,2880,170C2720,170,2560,170,2400,170C2240,170,2080,170,1920,170C1760,170,1600,170,1440,170C1280,170,1120,170,960,170C800,170,640,170,480,170C320,170,160,170,80,170L0,170Z"></path></svg>
           <section className="fondo-blanco seccion1">
                <h2 id="servicio1">PLAN ORO</h2>
               <h5 className="text-center mb-5">Brinda máxima calidad a través de una gama mayor de profesionales y servicios en todo el país, con diferenciales de confort.</h5>
               <h2 id="servicio2 mt-5" >PLAN PLATA</h2>
               <h5 className="text-center mb-5">Se caracteriza por una combinación de calidad, agilidad y una perfecta relación costo-beneficio.</h5>
               <h2 id="servicio3 mt-5">PLAN BRONCE</h2>
               <h5 className="text-center mb-5">Es una alternativa para quienes desean acceder a un servicio de calidad sin priorizar detalles adicionales y optimizando su presupuesto.</h5>
           </section>

           <Contactate/>
        </div>
    );
}
export default ServiciosPage;