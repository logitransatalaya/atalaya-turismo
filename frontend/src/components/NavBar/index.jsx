import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
	return (
		<nav className='navBar-container'>
			<span>
				<img src='' alt='' />
			</span>
			<a className='loginIcon' href='/'>
				User icon
			</a>
			<a className='burgerIcon' href='/'>
				menuburger icon
			</a>
			<ul className='navbarList'>
				<li>
					<Link to='/'>INICIO</Link>
				</li>
				<li>
					<Link to='/hoteles'>HOTELES</Link>{' '}
				</li>
				<li>
					<Link to='/transporte'>TRANSPORTE</Link>
				</li>
				<li>
					<Link to='/planes'>PLANES</Link>
				</li>
				<li>
					<Link to='/tours'>TOURS</Link>
				</li>
				<li>
					<Link to='/ofertas'>OFERTAS</Link>
				</li>
				<li>
					<Link to='/medios-de-pago'>MEDIOS DE PAGO</Link>
				</li>
			</ul>
		</nav>
	)
}
