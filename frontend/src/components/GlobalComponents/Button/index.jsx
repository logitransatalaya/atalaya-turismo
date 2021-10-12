import React from 'react'
import { ButtonStyled } from './styles'

export const Button = ({ text, bgColor, color, wDesc, wRes }) => {
	return (
		<ButtonStyled bgColor={bgColor} color={color} wRes={wRes} wDesc={wDesc}>
			{text}
		</ButtonStyled>
	)
}
