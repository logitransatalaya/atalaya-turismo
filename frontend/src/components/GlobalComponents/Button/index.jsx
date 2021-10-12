import React from 'react'
import { ButtonStyled } from './styles'

export const Button = ({ text, bgColor, color, wDesc, wRes, fs, onClick }) => {
	return (
		<ButtonStyled
			onClick={onClick}
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
