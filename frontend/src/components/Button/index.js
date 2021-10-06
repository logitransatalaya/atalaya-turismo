import React from 'react'
import { ButtonStyled } from './styles'

export const Button = ({ text, bgColor, color }) => {
	return (
		<ButtonStyled bgColor={bgColor} color={color}>
			{text}
		</ButtonStyled>
	)
}
