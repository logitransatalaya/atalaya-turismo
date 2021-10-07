import React from 'react'
import { ToursDetailsStyled } from './styles'
import { Container } from 'components/Container'

export const ToursDetails = () => {
	return (
		<Container>
			<ToursDetailsStyled className='ToursDetails'>
				<header>
					<h3>PEÑOL Y GUATAPÉ</h3>
					<a href='/'>
						<img src='/tours/whatsapp.png' alt='' />
					</a>
				</header>
				<div className='separator'></div>
				<div className='description'>
					<div className='descriptionImg-container'>
						<img
							src='/home/benefitsSection-background.png'
							alt=''
						/>
					</div>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Vero exercitationem ad nulla numquam nostrum rem
						illo laudantium aut natus labore aliquam, esse,
						repellendus fugiat ab, modi consequuntur reiciendis
						ipsum. Temporibus, earum! Libero provident aliquam
						numquam animi ad laborum blanditiis mollitia.
					</p>
				</div>
				<div className='characteristics-container'>
					<h5>INCLUYE:</h5>
					<div className='characteristics-content'>
						<div>
							<p>
								<img src='/footer/casa.svg' alt='' />
								Transporte en van o bus de turismo de acuerdo al
								número de pasajeros
							</p>
							<p>
								<img src='/footer/casa.svg' alt='' />
								Tarjeta de asistencia médica
							</p>
							<p>
								<img src='/footer/casa.svg' alt='' />
								Desayuno
							</p>
							<p>
								<img src='/footer/casa.svg' alt='' />
								almuerzo según menú
							</p>
							<p>
								<img src='/footer/casa.svg' alt='' />
								Paseo en barco por el embalse
							</p>
						</div>
						<div>
							<p>
								<img src='/footer/casa.svg' alt='' />
								Transporte en van o bus de turismo de acuerdo al
								número de pasajeros
							</p>
							<p>
								<img src='/footer/casa.svg' alt='' />
								Tarjeta de asistencia médica
							</p>
							<p>
								<img src='/footer/casa.svg' alt='' />
								Desayuno
							</p>
							<p>
								<img src='/footer/casa.svg' alt='' />
								almuerzo según menú
							</p>
							<p>
								<img src='/footer/casa.svg' alt='' />
								Paseo en barco por el embalse
							</p>
						</div>
					</div>
					<p className='characteristics-specialItem'>
						<img src='/footer/casa.svg' alt='' />
						Acompañamiento de un guía profesional de turismo (solo
						español). En caso de necesitar guía bilingüe puede
						solicitarse este servicio con solicitud previa y con
						suplemento tarifario.
					</p>
				</div>
			</ToursDetailsStyled>
		</Container>
	)
}
