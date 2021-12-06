import { useRef } from 'react'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { StyleNavbar, StyleButton } from './styles'
import { ButtonHandleNav } from '../ButtonHandleNav'
import { Container } from 'components/GlobalComponents/Container'

export const NavBar = () => {
	const translateRef = useRef()
	const [handleNav, setHandleNav] = useState(false)
	const styleNav = handleNav ? 'navbar navbar_active' : 'navbar'

	const handleOpenNav = () => {
		setHandleNav(!handleNav)
	}

	useEffect(() => {
		// const images = document.getElementById('google_translate_element')
		// console.log(images)
		// translateRef.current.removeChild(images[0])

		setTimeout(() => {
			const [img] = translateRef.current.getElementsByClassName(
				'goog-te-gadget-icon'
			)

			img?.setAttribute(
				'src',
				'https://cdn-icons-png.flaticon.com/512/323/323310.png'
			)
			img?.setAttribute('style', 'width: 25px; height:100%')
		}, 200)
		// setTimeout(() => {
		// 	const [body] = document.getElementsByTagName('body')
		// 	// const [googleModal] =
		// 	// document.getElementsByClassName('skiptranslate')
		// 	// googleModal.style.display = 'none'
		// 	body.style.top = '0px'
		// }, 1000)
	}, [translateRef])

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
			<StyleButton onClick={handleOpenNav}>
				<ButtonHandleNav
					handleNav={handleNav}
					handleOpenNav={handleOpenNav}
				/>
			</StyleButton>
		</StyleNavbar>
	)
}
