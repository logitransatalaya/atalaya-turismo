import React from 'react'
import { CardStyle } from './styles'
export const OffersCard = ({ title }) => {
	return (
		<CardStyle>
			<div className='offersCard-imgContainer'>
				<img
					src='https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg'
					alt=''
				/>
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
