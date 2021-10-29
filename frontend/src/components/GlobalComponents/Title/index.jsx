import React from 'react'
import { StyleTitle } from './styles'

export const Title = ({ text, color, about }) => {
	return (
		<>
			<StyleTitle color={color} about={about}>
				<span className='line'></span>
				<h2 className='title'>{text}</h2>
				<span className='line'></span>
			</StyleTitle>
		</>
	)
}
