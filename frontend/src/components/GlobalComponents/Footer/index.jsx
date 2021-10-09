import {
	FooterContainer,
	FooterStyle,
	FooterRedes,
	FooterLey,
	FooterTitle,
	FooterContact,
	FooterWe,
	FooterOtherServices,
	FooterWave,
	FooterBoxIcons,
	FooterContentIcons,
	FooterTours
} from './styles'
import React from 'react'
import { Container } from 'components/Container'
import waveOrange from 'images/orangeWave.png'
import iconFacebook from 'images/iconFacebook.svg'
import iconInstagram from 'images/iconInstagram.svg'

export const Footer = ({ type = 'general', imageUrl }) => {
	return (
		<>
			{type === 'general' && (
				<FooterContainer>
					<Container>
						<FooterStyle>
							<FooterWave>
								<img src={waveOrange} alt='wave' />
							</FooterWave>
							<FooterContact>
								<FooterTitle>CONTÁCTENOS</FooterTitle>
								<li>
									<img src='/footer/casa.svg' alt='' />
									ATALAYA VIAJES Y TURISMO
								</li>
								<li>
									<img src='/footer/chulito.svg' alt='' />
									Registro Nacional de Turismo:{' '}
									<b>RNT 00000</b>
								</li>
								<li>
									<img src='/footer/correo.svg' alt='' />
									atalayaviajesturismo@gmail.com
								</li>
								<li>
									<img src='/footer/telefono.svg' alt='' />
									+57 314 555 4981 - +57 314 555 4761
								</li>
								<li>
									<img src='/footer/ubicacion.svg' alt='' />
									Cra. 49 #45a-35, Oficina 203 Bello,
									Antioquia
								</li>
							</FooterContact>
							<FooterWe>
								<FooterTitle>ACERCA DE NOSOTROS</FooterTitle>
								<li>
									<a
										href='https://www.google.com/?hl=es'
										target='_blank'
										rel='noreferrer'
									>
										Nuestra Historia
									</a>
								</li>
								<li>
									<a
										href='https://www.google.com/?hl=es'
										target='_blank'
										rel='noreferrer'
									>
										Nuestros Valores
									</a>
								</li>
								<li>
									<a
										href='https://www.google.com/?hl=es'
										target='_blank'
										rel='noreferrer'
									>
										Nuestras Sedes
									</a>
								</li>
								<li>
									<a
										href='https://www.google.com/?hl=es'
										target='_blank'
										rel='noreferrer'
									>
										Políticas de privacidad
									</a>
								</li>
								<li>
									<a
										href='https://www.google.com/?hl=es'
										target='_blank'
										rel='noreferrer'
									>
										Políticas de tratamiento de datos
									</a>
								</li>
							</FooterWe>
							<FooterOtherServices>
								<FooterTitle>OTROS SERVICIOS</FooterTitle>
								<li>
									<a
										href='https://www.google.com/?hl=es'
										target='_blank'
										rel='noreferrer'
									>
										Logística Integral
									</a>
								</li>
								<li>
									<a
										href='https://www.google.com/?hl=es'
										target='_blank'
										rel='noreferrer'
									>
										Transporte de Carga
									</a>
								</li>
								<li>
									<a
										href='https://www.google.com/?hl=es'
										target='_blank'
										rel='noreferrer'
									>
										Transportes Especiales
									</a>
								</li>
								<li>
									<a
										href='https://www.google.com/?hl=es'
										target='_blank'
										rel='noreferrer'
									>
										Desarrollo de Software
									</a>
								</li>
								<li>
									<a
										href='https://www.google.com/?hl=es'
										target='_blank'
										rel='noreferrer'
									>
										Marketing y Publicidad
									</a>
								</li>
							</FooterOtherServices>
							<FooterRedes>
								<b>Únase a nuestra comunidad</b>
								<FooterContentIcons>
									<FooterBoxIcons>
										<a
											href='https://www.facebook.com/'
											target='_blank'
											rel='noreferrer'
										>
											<img
												src={iconInstagram}
												alt='iconInstagram'
											/>
										</a>
									</FooterBoxIcons>
									<FooterBoxIcons>
										<a
											href='https://www.instagram.com/?hl=es'
											target='_blank'
											rel='noreferrer'
										>
											<img
												src={iconFacebook}
												alt='iconFacebook'
											/>
										</a>
									</FooterBoxIcons>
								</FooterContentIcons>
							</FooterRedes>
						</FooterStyle>
					</Container>
				</FooterContainer>
			)}
			{type === 'tours' && <ToursFooter imageUrl={imageUrl} />}
			<FooterLey>
				<p>
					ATALAYA VIAJES Y TURISMO Rechaza la explotación, la
					pornografía, el turimo sexual y demás formas de abuso sexual
					con menores, Ley 1336 de 2009 y ley 679 de 2001. ATALAYA
					VIAJES Y TURISMO cumple la Ley 17 de 1981 Resolución de 1367
					de 2000 contra la comercialización y tráfico de especies de
					fauna y flora silvestre.
				</p>
			</FooterLey>
		</>
	)
}

const ToursFooter = ({ imageUrl }) => {
	return (
		<>
			<FooterTours>
				<picture>
					<div className='gradient'></div>
					<img src={imageUrl} alt='' />
				</picture>
				<FooterWave>
					<img src={waveOrange} alt='wave' />
				</FooterWave>
			</FooterTours>
		</>
	)
}
