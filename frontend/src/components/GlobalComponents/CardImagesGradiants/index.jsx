import React from 'react'
import { CardStyle } from './style'

export const CardImagesGradiants = ({ url, alt, name }) => {
	return (
		<CardStyle>
			<div className='CardImagesGradiantsCard'>
				<div className='CardImagesGradiantsBoxImg'>
					<img src={url} alt={alt} />
					<div className='CardImagesGradiantsTitle'>
						<h3>{name}</h3>
					</div>
				</div>
			</div>
		</CardStyle>
	)
}
