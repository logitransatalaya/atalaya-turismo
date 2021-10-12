import { Container } from 'components/Container'
import React from 'react'
import { HealthNotesInfo } from './HealthNotesInfo'
import { ReactComponent as IconEdificio } from 'images/svg/icono-edificio.svg'
import { ReactComponent as IconAmbulancia } from 'images/svg/icnono-ambulancia.svg'
import { ReactComponent as IconNotas } from 'images/svg/icono-notas.svg'
import { ReactComponent as IconCruz } from 'images/svg/icono-cruz.svg'
import { ReactComponent as IconParqueadero } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconEstetoscopio } from 'images/svg/icono-estetoscopio.svg'

export const HealthNotes = () => {
	return (
		<Container>
			<h2 className='healt_title'>Notas</h2>
			<div className='Healt_content_grid'>
				<div>
					<HealthNotesInfo
						text={
							'Contamos con hoteles con altos estanadres de calidad para hospedarturistas en el sector salud'
						}
						Icon={IconEdificio}
					/>
					<HealthNotesInfo
						text={
							'Trasporte especializado y personalizado para los pacientes con todo lo requerido para brindar comodidad y cuidar su salud'
						}
						Icon={IconAmbulancia}
					/>
					<HealthNotesInfo
						text={
							'Planes personalizados para cada requerimiento de salud'
						}
						Icon={IconNotas}
					/>
					<HealthNotesInfo
						text={
							'Hospitalidad y clinicas especializadas reconocidas y con altos estandaresde calidad'
						}
						Icon={IconCruz}
					/>
					<HealthNotesInfo
						text={
							'Medicos, especialistas y cirujanos altamente calificados y certidicados para cuidar de tu salud'
						}
						Icon={IconEstetoscopio}
					/>
				</div>
				<div className='Healt_content_button'>
					<div></div>
					<div className='bg'>
						<button className='btn'>hola brayan</button>
					</div>
				</div>
			</div>
		</Container>
	)
}
