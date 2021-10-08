import { StyleTitle } from 'components/HotelFeatures/styles'
import React from 'react'

export const Title = ({ text }) => {
	return (
		<div>
			<StyleTitle>
				<span className='line'></span>
				<h2 className='title'>{text}</h2>
				<span className='line'></span>
			</StyleTitle>
		</div>
	)
}
