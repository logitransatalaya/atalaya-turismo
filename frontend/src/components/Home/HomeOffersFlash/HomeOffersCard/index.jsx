import React from 'react'
import { CardStyle } from './styles'
import imgCO from 'images/iconCountries/co.png'
import { formatNumber } from 'helpers/formatNumber'

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
				<p>
					Desde:{' '}
					<span className='offersCard-price'>
						{formatNumber(cop)}{' '}
						<img
							src={imgCO}
							alt='Colombia icon'
							className='offersCard-imgIcon'
						/>
					</span>
				</p>
				<p className='offersCard-perPerson'>Por persona</p>
			</div>
			<button onClick={handleBooking} className='btn btn_offert'>
				SOLICITAR OFERTA
			</button>
		</CardStyle>
	)
}
