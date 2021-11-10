import React from 'react'
import { CardStyle } from './styles'

export const OffersCard = ({ image, title, cop }) => {
	return (
		<CardStyle>
			<div className='offersCard-imgContainer'>
				<img src={image} alt={title} />
			</div>
			<h1>{title}</h1>
			<div className='offersCard-textContent'>
				<p>DESDE</p>
				<p className='offersCard-price'>COP {cop}</p>
				<p>Por persona</p>
			</div>
			<button className='btn btn_offert'>VER OFERTA</button>
		</CardStyle>
	)
}
