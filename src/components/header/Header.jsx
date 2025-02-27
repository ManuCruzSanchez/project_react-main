import "./Header.css"
import { NavLink } from 'react-router-dom'

function Header(){
    return(
        <header>
            <h1 className="header-p">DUEL BAR</h1>
            <nav className="header-nav">
            <ul>
				<li>
					<NavLink to="/">Inicio</NavLink>
				</li>
				<li className='right'>
					<NavLink to="/List">Lista</NavLink>
				</li>
				<li className='right'>
					<NavLink to="/Menu">Menú</NavLink>
				</li>
			</ul>
            </nav>
        </header>
    )
}

export default Header;