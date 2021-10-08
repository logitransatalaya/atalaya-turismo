import React from 'react'
import { BenefitsCardStyled } from './styles.js'

export const BenefitsCard = ({ bg, Icon, title, text }) => {
	return (
		<BenefitsCardStyled bg={bg}>
			<div className='benefitsCard-icon'>
				<Icon />
			</div>
			<div className='benefitsCard-textContent'>
				<h3 className='benefitsCard-title'>{title}</h3>
				<div>
					<p className='benefitsCard-description'>{text}</p>
				</div>
			</div>
		</BenefitsCardStyled>
	)
}
