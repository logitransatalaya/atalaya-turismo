import './styles.css'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { Container } from 'components/Container'

export const NavBar = () => {
	const state = {
		true: '/home/user-navbar.png',
		false: '/home/burgerMenu-navbar.png'
	}
	const navbarRef = useRef(null)
	const [urlImg, setUrlImg] = useState(state.false)

	const openNavbar = () => {
		navbarRef.current.classList.toggle('navbarVisible')

		if (urlImg === state.true) setUrlImg(state.false)
		else setUrlImg(state.true)
	}

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
						<span className='burgerIcon' onClick={openNavbar}>
							<img src={urlImg} alt='' />
						</span>
					</div>
					<div ref={navbarRef} className='navbarDesktop'>
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
