import React from 'react'
import { HealthHeaderContainer } from './styles'
import bannerSaludD from 'images/bannerSalud.png'
import bannerSaludM from 'images/bannerSaludM.png'

export const HealthHeader = ({ screen }) => {
	return (
		<HealthHeaderContainer>
			<div className='contentBanner'>
				{screen > 850 ? (
					<img src={bannerSaludD} alt='Salud Banner' />
				) : (
					<img src={bannerSaludM} alt='Salud Banner' />
				)}
			</div>
		</HealthHeaderContainer>
	)
}
