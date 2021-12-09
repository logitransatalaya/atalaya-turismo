import React from 'react'
import { CardStyle } from './styles'

export const HomeOffersCard = ({ image, title, cop }) => {
	const handleBooking = () => {
		window.open(
			`https://wa.me/573205702937?text=Me%20interesa%20ver%20la%20oferta%20flash%20${title}.`
		)
	}

	return (
		<CardStyle>
			<div className='offersCard-imgContainer'>
				<img src={image} alt={title} />
			</div>
			<h1>{title}</h1>
			<div className='offersCard-textContent'>
				<p>DESDE</p>
				<p className='offersCard-price'>
					COP <span>{cop}</span>
				</p>
				<p>Por persona</p>
			</div>
			<button onClick={handleBooking} className='btn btn_offert'>
				SOLICITAR OFERTA
			</button>
		</CardStyle>
	)
}
