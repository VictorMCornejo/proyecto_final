import '../../styles/layout/Footer.css';

const Footer=(props)=>{
    return(
        <footer className="footer">
           <div className="contenedorWidget">

                <div className="widget-footer1">
                    <a href="http://localhost:3000">
                        <img src="images/logo.png"  className="logo" alt="MiSitio"/>
                    </a>
                </div>

                <div className="widget-footer2">
                    <a href="/">Home</a>
                    <a href="/nosotros">Nosotros</a>
                    <a href="/servicios">Servicios</a>
                    <a href="/novedades">Novedades</a>
                    <a href="/galeria">Galería</a>
                    <a href="/contacto">Contacto</a>
                </div>

                <div className="widget-footer3">
                    <h3>EMPRESA</h3>
                    <p>Direccion 111</p>
                    <p>Ciudad Autonoma de Buenos Aires - Argentina</p>
                    <p>Telefono 011-1234-5678</p>
                </div>
            </div>

            <div className="copyright">
                <p>Copyright 2023</p>
            </div>
        </footer>
        
    )

}
export default Footer;