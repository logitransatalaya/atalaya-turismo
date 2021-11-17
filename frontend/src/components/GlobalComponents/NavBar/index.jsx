import { Container } from 'components/GlobalComponents/Container'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonHandleNav } from '../ButtonHandleNav'
import { StyleNavbarBrayan, StyleButton } from './styles'

export const NavBar = () => {
	const [handleNav, setHandleNav] = useState(false)

	const styleNav = handleNav ? 'navbar navbar_active' : 'navbar'

	const handleOpenNav = () => {
		setHandleNav(!handleNav)
	}

	return (
		<StyleNavbarBrayan>
			<Container>
				<nav className={styleNav}>
					<Link className='box_imgLogo' to='/'>
						<img src='/logo.png' alt='logoAtalaya' />
					</Link>
					<div className='content_options'>
						<ul className='navigation'>
							<li onClick={handleOpenNav}>
								<Link to='/'>INICIO</Link>
							</li>
							<li onClick={handleOpenNav}>
								<Link to='/hoteles'>HOTELES</Link>{' '}
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
						</ul>
					</div>
				</nav>
			</Container>
			<StyleButton onClick={handleOpenNav}>
				<ButtonHandleNav
					handleNav={handleNav}
					handleOpenNav={handleOpenNav}
				/>
			</StyleButton>
		</StyleNavbarBrayan>
	)
}
