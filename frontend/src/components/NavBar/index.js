import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
	return (
		<nav>
			<span>Logo</span>
			<ul>
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
