import React from 'react'
import { CardStyle } from './styles'
export const OffersCard = ({ image, title }) => {
	return (
		<CardStyle>
			<div className='offersCard-imgContainer'>
				<img src={image} alt='' />
			</div>
			<h1>{title}</h1>
			<div className='offersCard-textContent'>
				<p>DESDE</p>
				<p className='offersCard-price'>COP 2'2960.000</p>
				<p>por persona</p>
			</div>
			<button className='btn btn_offert'>VER OFERTA</button>
		</CardStyle>
	)
}
