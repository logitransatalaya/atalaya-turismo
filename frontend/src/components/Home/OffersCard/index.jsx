import React from 'react'
import { CardStyle } from './styles'
export const OffersCard = ({ image }) => {
	return (
		<CardStyle>
			<div className='borde'>
				<div>
					<img src={image} alt='' />
				</div>
				<h1>aqui va un titulo </h1>
				<p>DESDE</p>
				<p>2'2960.000</p>
				<p>por persona </p>
			</div>
		</CardStyle>
	)
}
