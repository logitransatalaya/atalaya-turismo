import { Boximgsmall } from './styles'
import { Container } from 'components/Container'
import React, { useEffect, useState } from 'react'
import { HealthNotesInfo } from './HealthNotesInfo'
import { Button } from 'components/GlobalComponents/Button'
import imagenSaludSmall from 'images/img-bg-screen-small.png'
import { ReactComponent as IconCruz } from 'images/svg/icono-cruz.svg'
import { ReactComponent as IconNotas } from 'images/svg/icono-notas.svg'
import { ReactComponent as IconEdificio } from 'images/svg/icono-edificio.svg'
import { ReactComponent as IconCalendario } from 'images/svg/icono-calendario.svg'
import { ReactComponent as IconAmbulancia } from 'images/svg/icnono-ambulancia.svg'
import { ReactComponent as IconEstetoscopio } from 'images/svg/icono-estetoscopio.svg'

export const HealthNotes = () => {
	const [screen, setScreen] = useState(window.innerWidth)

	const handleBooking = () => {
		window.open(
			`https://wa.me/573205701705?text=Me%20interesa%20solicitar%20informacion%20sobre%20el%20plan%20salud.`
		)
	}

	useEffect(() => {
		window.onresize = () => setScreen(window.innerWidth)
	}, [screen])

	return (
		<Container>
			{screen < 950 ? (
				<div className='bg'>
					<Button
						onClick={handleBooking}
						text='Reservar'
						bgColor='#53a8c6'
						fs='1.9rem'
					/>
				</div>
			) : (
				''
			)}
			<h2 className='healt_title'>Notas</h2>
			<div className='Healt_content'>
				<HealthNotesInfo
					text='Contamos con hoteles con altos estanadres de calidad para hospedarturistas en el sector salud'
					Icon={IconEdificio}
				/>
				<HealthNotesInfo
					text='Trasporte especializado y personalizado para los pacientes con todo lo requerido para brindar comodidad y cuidar su salud'
					Icon={IconAmbulancia}
				/>
				<HealthNotesInfo
					text='Planes personalizados para cada requerimiento de salud'
					Icon={IconNotas}
				/>
				<HealthNotesInfo
					text='Hospitalidad y clinicas especializadas reconocidas y con altos estandaresde calidad'
					Icon={IconCruz}
				/>
				<HealthNotesInfo
					text='Medicos, especialistas y cirujanos altamente calificados y certidicados para cuidar de tu salud'
					Icon={IconEstetoscopio}
				/>
				<HealthNotesInfo
					text='Citas y acompañamiento en todo el proceso'
					Icon={IconCalendario}
				/>
			</div>
			{screen > 950 ? (
				<div className='Healt_content_button'>
					<div className='bg'>
						<Button
							onClick={handleBooking}
							text='Reservar'
							bgColor='#53a8c6'
							fs='1.9rem'
						/>
					</div>
				</div>
			) : (
				''
			)}

			<Boximgsmall>
				<img src={imagenSaludSmall} alt='imagen' />
				<div className='boxWhite'></div>
			</Boximgsmall>
		</Container>
	)
}
