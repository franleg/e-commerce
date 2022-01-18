import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="container-fluid footer-container">
            <div className="row">
                <div className="col-lg-4 col-xs-12 newsletter-container">
                    <h2>
                        Regístrate en nuestro
                        <br/>
                        Newsletter
                    </h2>
                    <input type="email" placeholder="E-MAIL"/>
                    <input type="submit" value="ENVIAR"/> 
                </div>                  
                <div className="col-lg-4 col-xs-12 categories-container">
                    <h2>
                        Categorias
                    </h2>
                    <h3 className="category-link">
                        <Link to="/categorias/auriculares" className="link">Auriculares</Link>
                    </h3>
                    <h3 className="category-link">
                        <Link to="/categorias/monitores-de-estudio" className="link">Monitores de estudio</Link>
                    </h3>
                    <h3 className="category-link">
                        <Link to="/categorias/reproductores-dj" className="link">Reproductores Dj</Link>
                    </h3>
                    <h3 className="category-link">
                        <Link to="/categorias/mixers" className="link">Mixers</Link>
                    </h3>                        
                </div>
                <div className="col-lg-4 col-xs-12 contact-container">
                    <h2>
                        Contacto
                    </h2>
                    <h3>
                        +54 9 11-3875-0092
                    </h3>
                    <h3>
                        Belgrano, Capital Federal
                    </h3>
                    <h3>
                        e.store@hotmail.com
                    </h3>
                </div>             
            </div>
            <div className="row">
                <div className="col-lg-12 col-xs-12 social-container">
                    <hr className="footer-hr"/>
                    <FontAwesomeIcon icon={faInstagram}/>    
                    <FontAwesomeIcon icon={faFacebook} className="facebook-icon"/>
                    <FontAwesomeIcon icon={faGithub}/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-xs-12 text-center copyright-container">
                    <h5 className="copyright">
                        © 2022 | E STORE | ARGENTINA
                    </h5>
                    <h5>
                        Creado por Franco Legnazzi
                    </h5>

                </div>
            </div>
        </div>
    )
}

export default Footer
