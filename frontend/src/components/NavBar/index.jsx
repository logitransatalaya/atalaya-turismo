import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'components/Container'

export const NavBar = () => {
	return (
		<div className='navBar-background'>
			<Container>
				<nav className='navBar-container'>
					<span className='logoContainer'>
						<img src='/logo.png' alt='' />
					</span>
					<div className='iconsContainer'>
						<a className='loginIcon' href='/'>
							<img src='/home/user-navbar.png' alt='' />
						</a>
						<a className='burgerIcon' href='/'>
							<img src='/home/burgerMenu-navbar.png' alt='' />
						</a>
					</div>
					<div className='navbarDesktop'>
						<div className='navbarButtonsContainer'>
							<button>REGISTRATE</button>
							<button>INICIA SESIÓN</button>
						</div>
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
					</div>
				</nav>
			</Container>
		</div>
	)
}
