import "./Header.css"
import { NavLink } from 'react-router-dom'

function Header() {
	return (
		<header>
			<h1 className="header-p">DUEL BAR</h1>
			<nav className="header-nav">
				<ul>
					<li className='right'>
						<NavLink className='hLink' to="/">Inicio</NavLink>
					</li>
					<li className='right'>
						<NavLink className='hLink' to="/List">Juegos</NavLink>
					</li>
					<li className='right'>
						<NavLink className='hLink' to="/Menu">Menu</NavLink>
					</li>
					<li className='right'>
						<NavLink className='hLink' to="/Users">Usuarios</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;