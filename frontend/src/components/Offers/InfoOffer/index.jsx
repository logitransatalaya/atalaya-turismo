import React, { useRef } from 'react'
import Cardinfo from '../Cardinfo'
import { InfoO } from './styles'

const InfoOffer = () => {
	const acordionRef = useRef()

	return (
		<InfoO>
			<div className='accordion' ref={acordionRef}>
				<h2>San andrés</h2>
				<span>V</span>
			</div>
			<div className='panel'>
				<ul className='services'>
					<li className='service'>
						<span>Tiquetes aereos</span>
					</li>
					<li className='service'>
						<span>Tarjeta ingreso a la isla</span>
					</li>
					<li className='service'>
						<span>Tarjeta de asistencia médica.</span>
					</li>
					<li className='service'>
						<span>Alojamiento 3 noches y 4 días.</span>
					</li>
					<li className='service'>
						<span>Alimentación en plan elegido.</span>
					</li>
					<li className='service'>
						<span>Snack de media tarde (plan full).</span>
					</li>
					<li className='service'>
						<span>
							Bar abierto establecidos por los horarios del hotel
							elegido (plan full).
						</span>
					</li>
					<li className='service'>
						<span>
							Traslado hotel aeropuerto, aeropuerto hotel.
						</span>
					</li>
					<li className='service'>
						<span>Tour Jhony Cay.</span>
					</li>
					<li className='service'>
						<span>Tour a la vuelta de la isla.</span>
					</li>
					<li className='service'>
						<span>Paseo en yate por la bahía.</span>
					</li>
					<li className='service'>
						<span>Vista al acuario.</span>
					</li>
				</ul>
				<Cardinfo />
			</div>
		</InfoO>
	)
}

export default InfoOffer
