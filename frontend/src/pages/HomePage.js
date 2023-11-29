import '../styles/pages/HomePage.css'
import '../styles/layout/Opciones.css'
import '../components/layout/Carousel'
import Carousel from '../components/layout/Carousel';
import PortadaPrincipal from '../components/layout/PortadaPrincipal';
import Contactate from '../components/layout/Contactate';

const HomePage=(prop)=>{
    return(
        <div className="main">

            <PortadaPrincipal/>

            <section className="seccion1">
                <h2>LISTA DE PLANES</h2>
                <div className="contenedor-opciones">
                    <div className="opcion">
                        <h3>PLAN ORO</h3>
                        <h4>El mas exigente</h4>
                        <p>Brinda máxima calidad a través de una gama mayor de profesionales y servicios en todo el país, con diferenciales de confort.</p>
                        <a href="/servicios#servicio1"><button>Conocer mas</button></a>
                    </div>

                    <div className="opcion">
                        <h3>PLAN PLATA</h3>
                        <h4>Para toda la familia</h4>
                        <p>Se caracteriza por una combinación de calidad, agilidad y una perfecta relación costo-beneficio.</p>
                        <a href="/servicios#servicio2"><button>Conocer mas</button></a>
                    </div>

                    <div className="opcion">
                        <h3>PLAN BRONCE</h3>
                        <h4>El mas economico</h4>
                        <p>Es una alternativa para quienes desean acceder a un servicio de calidad sin priorizar detalles adicionales y optimizando su presupuesto.</p>
                        <a href="/servicios#servicio3"><button>Conocer mas</button></a>
                    </div>                
                </div>
            </section>


           
            {/* SVG ARRIBA*/}
            <svg className="svg-blanco" id="wave" viewBox="0 0 1440 170" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0,136L80,119C160,102,320,68,480,65.2C640,62,800,91,960,90.7C1120,91,1280,62,1440,68C1600,74,1760,113,1920,127.5C2080,142,2240,130,2400,113.3C2560,96,2720,74,2880,76.5C3040,79,3200,108,3360,119C3520,130,3680,125,3840,116.2C4000,108,4160,96,4320,99.2C4480,102,4640,119,4800,107.7C4960,96,5120,57,5280,56.7C5440,57,5600,96,5760,116.2C5920,136,6080,136,6240,130.3C6400,125,6560,113,6720,116.2C6880,119,7040,136,7200,130.3C7360,125,7520,96,7680,96.3C7840,96,8000,125,8160,133.2C8320,142,8480,130,8640,119C8800,108,8960,96,9120,87.8C9280,79,9440,74,9600,70.8C9760,68,9920,68,10080,70.8C10240,74,10400,79,10560,76.5C10720,74,10880,62,11040,73.7C11200,85,11360,119,11440,136L11520,153L11520,170L11440,170C11360,170,11200,170,11040,170C10880,170,10720,170,10560,170C10400,170,10240,170,10080,170C9920,170,9760,170,9600,170C9440,170,9280,170,9120,170C8960,170,8800,170,8640,170C8480,170,8320,170,8160,170C8000,170,7840,170,7680,170C7520,170,7360,170,7200,170C7040,170,6880,170,6720,170C6560,170,6400,170,6240,170C6080,170,5920,170,5760,170C5600,170,5440,170,5280,170C5120,170,4960,170,4800,170C4640,170,4480,170,4320,170C4160,170,4000,170,3840,170C3680,170,3520,170,3360,170C3200,170,3040,170,2880,170C2720,170,2560,170,2400,170C2240,170,2080,170,1920,170C1760,170,1600,170,1440,170C1280,170,1120,170,960,170C800,170,640,170,480,170C320,170,160,170,80,170L0,170Z"></path></svg>
           
            <section className="fondo-blanco seccion1">
                <h2>POR QUE ELEGIRNOS?</h2>
                <p>Somos una Compañia con presencia en el mercado Nacional e Internacional, y trabajamos diariamente para que nuestros clientes encuentren soluciones para cada una de sus necesidades</p>
                <p>En casi 30 años trabajamos para ser una empresa ética y honesta, mantenemos relaciones a largo plazo con nuestros clientes y recibimos muchas recomendaciones que nos demuestran que vamos en un correcto camino de mejora contínua.  Logramos ser una buena empresa con quién trabajar.</p>    
                <p>La calidad es nuestro compromiso con las empresas que confían en nosotros. Nuestros procesos están sometidos a una constante evaluación, así como nuestros productos, empleados, documentación, pruebas de funcionamiento y comunicación.</p>
            </section>

            {/* SVG ABAJO*/}
            <svg className="svg-blanco" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" ><path  /*fill-opacity="1"*/ d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,165.3C840,192,960,256,1080,277.3C1200,299,1320,277,1380,266.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

            <section className="confian">
                <h2>confian en nosotros</h2>
                <Carousel/>
            </section>

            <Contactate/>
        </div>
    );
}
export default HomePage;