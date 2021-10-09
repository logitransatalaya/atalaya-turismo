import React from 'react'
import { BenefitsCard } from './BenefitsCard'
import { BenefitsSectionStyled } from './styles.js'
import { ReactComponent as IconMapa } from 'images/icono-mapa.svg'
import { ReactComponent as IconBarco } from 'images/icono-barco.svg'
import { ReactComponent as IconAvion } from 'images/icono-avion.svg'
import { ReactComponent as IconMundo } from 'images/icono-mundo.svg'
import { ReactComponent as IconMaleta } from 'images/icono-maleta.svg'
import { ReactComponent as IconPalmera } from 'images/icono-palmera.svg'

export const Benefits = () => {
	return (
		<BenefitsSectionStyled>
			<div className='line-separator'></div>
			<h3>¿POR QUÉ ATALAYA VIAJES Y TURISMO?</h3>
			<div className='benefitsCards-container'>
				<BenefitsCard
					Icon={IconMundo}
					title='Hoteles Exclusivos'
					text='Contamos con el portafolio
					de hoteles más exclusivos
					en los territorios nacionales,
					internacionales y urbanos
					más cotizados.'
				/>
				<BenefitsCard
					bg
					Icon={IconBarco}
					title='Comodidad'
					text='Nos encargamos que de una
					forma fácil y segura adquieras
					nuestros servicios sin importar
					cual sea el destino que quieras
					visitar siempre tendremos una
					opción exclusiva para ti.'
				/>
				<BenefitsCard
					Icon={IconMapa}
					title='Acompañamiento'
					text='Con nosotros encontrarás un
					acompañamiento constante
					para que disfrutes cada destino
					de una forma única e inolvidable.'
				/>
				<BenefitsCard
					bg
					Icon={IconAvion}
					title='Beneficios Especiales'
					text='Adquiriendo nuestros servicios
					participas en programas de
					fidelización para que cada
					vez que compres obtengas
					muchos beneficios.'
				/>
				<BenefitsCard
					Icon={IconPalmera}
					title='Facilidad de Pago'
					text='Contamos con diferentes
					medios de pago para brindarte
					seguridad y comodidad a la hora
					de realizar tus transacciones.'
				/>
				<BenefitsCard
					bg
					Icon={IconMaleta}
					title='Respaldo de calidad '
					text='Contamos con un equipo
					humano altamente capacitado
					para cumplir tus expectativas'
				/>
			</div>
			<div className='benefitsSection-imageBackground'>
				<img src='/home/benefitsSection-background.png' alt='' />
			</div>
		</BenefitsSectionStyled>
	)
}
