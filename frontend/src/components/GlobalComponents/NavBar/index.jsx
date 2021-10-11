import { Link } from 'react-router-dom'
import { NavbarStyled } from './styles.js'
import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'components/Container'

export const NavBar = () => {
	const state = {
		true: '/home/boton-x.png',
		false: '/home/burgerMenu-navbar.png'
	}
	const navbarRef = useRef(null)
	const [urlImg, setUrlImg] = useState(state.false)
	const [scree, setScreen] = useState(window.innerWidth)

	const openNavbar = () => {
		navbarRef.current.classList.toggle('navbarVisible')
		if (urlImg === state.true) setUrlImg(state.false)
		else setUrlImg(state.true)
	}

	useEffect(() => {
		window.onresize = () => setScreen(window.innerWidth)
	}, [scree])

	return (
		<NavbarStyled>
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
							{scree < 950 ? (
								<span className='logoContainerMenu'>
									<img src='/logo.png' alt='' />
								</span>
							) : (
								''
							)}
							<li>
								<Link onClick={openNavbar} to='/'>
									INICIO
								</Link>
							</li>
							<li>
								<Link onClick={openNavbar} to='/hoteles'>
									HOTELES
								</Link>{' '}
							</li>
							<li>
								<Link onClick={openNavbar} to='/planes'>
									PLANES
								</Link>
							</li>
							<li>
								<Link onClick={openNavbar} to='/tours'>
									TOURS
								</Link>
							</li>
							<li>
								<Link onClick={openNavbar} to='/ofertas'>
									OFERTAS
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</Container>
		</NavbarStyled>
	)
}
