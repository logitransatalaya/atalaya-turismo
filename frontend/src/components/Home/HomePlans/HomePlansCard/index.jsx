import React from 'react'
import { PlansCardStyled } from './styles'

export const HomePlansCard = ({ text, color }) => {
	return (
		<PlansCardStyled href='/'>
			<p className='plansCard-title'>PLANES</p>
			<p className={`plansCard-plan plansCard-${color}`}>{text}</p>
		</PlansCardStyled>
	)
}
