import React from 'react'
import './style.css'
import { WhyCard } from './WhyCard'
import { ReactComponent as IconMapa } from '../../images/icono-mapa.svg'
import { ReactComponent as IconBarco } from '../../images/icono-barco.svg'
import { ReactComponent as IconAvion } from '../../images/icono-avion.svg'
import { ReactComponent as IconMundo } from '../../images/icono-mundo.svg'
import { ReactComponent as IconPalmera } from '../../images/icono-palmera.svg'
import { ReactComponent as IconMaleta } from '../../images/icono-maleta.svg'

export const WhyAtalaya = () => {
	return (
		<div>
			<div className='WhyAtalaya_bg_image'>
				<hr />
				<div className='WhyAtalaya_title'>
					<h1>¿ POR QUE ATALAYA VIAJES Y TURISMO ?</h1>
				</div>
				<div className='WhyAtalaya_row'>
					<WhyCard
						Icon={IconMundo}
						bg={'WhyAtalaya_bg'}
						titleCard={'Hoteles Exclusivos'}
					/>
					<WhyCard Icon={IconBarco} titleCard={'Comodidad'} />
					<WhyCard
						Icon={IconMapa}
						bg={'WhyAtalaya_bg'}
						titleCard={'Acompañamiento'}
					/>
					<WhyCard
						Icon={IconAvion}
						titleCard={'Beneficios Especiales'}
					/>
					<WhyCard
						Icon={IconPalmera}
						bg={'WhyAtalaya_bg'}
						titleCard={'Facilidad de Pago'}
					/>
					<WhyCard
						Icon={IconMaleta}
						titleCard={'Respaldo de calidad '}
					/>
				</div>
			</div>
		</div>
	)
}