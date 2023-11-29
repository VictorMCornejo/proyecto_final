import '../../styles/layout/Header.css';


const Header=(props)=>{
    return(

        <header className="header"> 
            <div className="flex">

                <a href="/">
                    <img src="images/logo.png" className="logo" alt="MiSitio"/>
                </a>
                
                <div class="contenedor-redes">
                    <a href="http://www.youtube.com"><img src="images/youtube.svg" alt="Youtube" className="img-redes"></img></a>                
                    <a href="http://www.facebook.com"><img src="images/facebook.svg" alt="facebook" className="img-redes"></img></a>    
                    <a href="http://www.instagram.com"><img src="images/square-instagram.svg" alt="instagram" className="img-redes"></img></a>    
                </div>

            </div>
        </header>
    );
}
export default Header;