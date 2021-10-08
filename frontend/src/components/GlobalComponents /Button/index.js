import React from 'react'
import { ButtonStyled } from './styles'

export const Button = ({ text, bgColor, color, w }) => {
	return (
		<ButtonStyled bgColor={bgColor} color={color} w={w}>
			{text}
		</ButtonStyled>
	)
}
