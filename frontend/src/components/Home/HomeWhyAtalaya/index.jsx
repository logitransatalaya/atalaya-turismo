import React from 'react'
import { BenefitsSectionStyled } from './styles.js'
import { HomeBenefitsCard } from './HomeBenefitsCard'
import { Title } from 'components/GlobalComponents/Title'
import { ReactComponent as IconMapa } from 'images/icono-mapa.svg'
import { ReactComponent as IconBarco } from 'images/icono-barco.svg'
import { ReactComponent as IconAvion } from 'images/icono-avion.svg'
import { ReactComponent as IconMundo } from 'images/icono-mundo.svg'
import { ReactComponent as IconMaleta } from 'images/icono-maleta.svg'
import { ReactComponent as IconPalmera } from 'images/icono-palmera.svg'

export const HomeWhyAtalaya = () => {
	return (
		<BenefitsSectionStyled>
			<Title
				text={'¿POR QUÉ ATALAYA VIAJES Y TURISMO?'}
				about
				fontWeight
			/>
			<div className='benefitsCards-container'>
				<HomeBenefitsCard
					Icon={IconMundo}
					title='Hoteles Exclusivos'
					text='Contamos con el portafolio
					de hoteles más exclusivos
					en los territorios nacionales,
					internacionales y urbanos
					más cotizados.'
				/>
				<HomeBenefitsCard
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
				<HomeBenefitsCard
					Icon={IconMapa}
					title='Acompañamiento'
					text='Con nosotros encontrarás un
					acompañamiento constante
					para que disfrutes cada destino
					de una forma única e inolvidable.'
				/>
				<HomeBenefitsCard
					bg
					Icon={IconAvion}
					title='Beneficios Especiales'
					text='Adquiriendo nuestros servicios
					participas en programas de
					fidelización para que cada
					vez que compres obtengas
					muchos beneficios.'
				/>
				<HomeBenefitsCard
					Icon={IconPalmera}
					title='Facilidad de Pago'
					text='Contamos con diferentes
					medios de pago para brindarte
					seguridad y comodidad a la hora
					de realizar tus transacciones.'
				/>
				<HomeBenefitsCard
					bg
					Icon={IconMaleta}
					title='Respaldo de calidad '
					text='Contamos con un equipo
					humano altamente capacitado
					para cumplir tus expectativas'
				/>
			</div>
		</BenefitsSectionStyled>
	)
}
