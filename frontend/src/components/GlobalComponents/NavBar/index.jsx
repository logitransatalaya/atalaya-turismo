import { useRef } from 'react'
import { StyleNavbar, StyleButton } from './styles'
import { ButtonHandleNav } from '../ButtonHandleNav'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Container } from 'components/GlobalComponents/Container'

export const NavBar = () => {
	const translateRef = useRef()
	const [handleNav, setHandleNav] = useState(false)
	const styleNav = handleNav ? 'navbar navbar_active' : 'navbar'

	const handleOpenNav = () => {
		setHandleNav(!handleNav)
	}

	return (
		<StyleNavbar>
			<Container>
				<nav className={styleNav}>
					<Link className='box_imgLogo' to='/'>
						<img src='/logo-navbar.png' alt='logoAtalaya' />
					</Link>
					<div className='content_options'>
						<ul className='navigation'>
							<li onClick={handleOpenNav}>
								<Link to='/'>INICIO</Link>
							</li>
							<li>
								<div className='topnav' id='myTopnav'>
									<div className='dropdown'>
										<button className='dropbtn'>
											HOTELES
											<i className='fa fa-caret-down'></i>
										</button>
										<div className='dropdown-content'>
											<Link
												onClick={handleOpenNav}
												to='/ciudades/Nacional'
												href='#'
											>
												NACIONALES
											</Link>
											<Link
												onClick={handleOpenNav}
												to='/continentes'
											>
												INTERNACIONALES
											</Link>
										</div>
									</div>
								</div>
							</li>
							<li onClick={handleOpenNav}>
								<Link to='/planes'>PLANES</Link>
							</li>
							<li onClick={handleOpenNav}>
								<Link to='/tours'>TOURS</Link>
							</li>
							<li onClick={handleOpenNav}>
								<Link to='/ofertas'>OFERTAS</Link>
							</li>
							<li onClick={handleOpenNav}>
								<Link to='/salud'>SALUD</Link>
							</li>
							<div
								ref={translateRef}
								className='traslate'
								id='google_translate_element'
							></div>
						</ul>
					</div>
				</nav>
			</Container>
			<div
				className={`element-hidde-navbar ${
					handleNav
						? 'element-hidde-navbar-active'
						: 'element-hidde-navbar'
				}`}
				onClick={handleOpenNav}
			></div>
			<StyleButton onClick={handleOpenNav}>
				<ButtonHandleNav
					handleNav={handleNav}
					handleOpenNav={handleOpenNav}
				/>
			</StyleButton>
		</StyleNavbar>
	)
}
