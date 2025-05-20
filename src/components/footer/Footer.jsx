import { NavLink } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer-back">
            <ul>
                <li className="footer-li">
                    <p className="footer-p">
                        © 2025 DuelBar - Todos los derechos reservados |
                        <NavLink to="/Privacy"> Política de privacidad</NavLink> |
                        <NavLink to="/Terms"> Términos y condiciones</NavLink>
                    </p>
                </li>
                <li className="footer-li">
                    <p className="footer-p">
                        <NavLink to="/">Inicio</NavLink> | 
                        <NavLink to="/List"> Lista</NavLink> |
                        <NavLink to="/Users"> Usuarios</NavLink> |
                        <NavLink to="/Rss"> RSS</NavLink>
                    </p>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;