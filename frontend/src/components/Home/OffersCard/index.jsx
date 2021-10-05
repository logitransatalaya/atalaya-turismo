import React from 'react'
import { CardStyle } from './styles'
export const OffersCard = ({ image, title }) => {
	return (
		<CardStyle>
			<div className='borde'>
				<div>
					<img
						style={{ width: '270px', marginTop: '10px' }}
						src={image}
						alt=''
					/>
				</div>
				<h1>{title}</h1>
				<p>DESDE</p>
				<p>2'2960.000</p>
				<p>por persona </p>
				<button className='btn btn_offert'>VER OFERTA</button>
			</div>
		</CardStyle>
	)
}
