import React from 'react'
import './style.css'

export const WhyCard = ({ Icon, bg, fill }) => {
	console.log(bg)
	return (
		<div className={`WhyCard_card ${bg}`}>
			<div className='WhyCard_icon'>
				<div className='WhyCard_style_icon' style={{ fill: `${fill}` }}>
					<Icon />
				</div>
			</div>
			<div className='WhyCard_info'>
				<h3 className='WhyCard_title'>Hoteles exclusivos</h3>
				<div>
					<p className='WhyCard_text'>
						Nos encargamos que de una forma fácil y segura adquieras
						nuestros servicios sin importar cual sea el destino que
						quieras visitar siempre tendremos una opción exclusiva
						para ti.
					</p>
				</div>
			</div>
		</div>
	)
}
