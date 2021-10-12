import React from 'react'
import { ButtonStyled } from './styles'

export const Button = ({ text, bgColor, color, wDesc, wRes, fs }) => {
	return (
		<ButtonStyled
			bgColor={bgColor}
			color={color}
			wRes={wRes}
			wDesc={wDesc}
			fs={fs}
		>
			{text}
		</ButtonStyled>
	)
}
