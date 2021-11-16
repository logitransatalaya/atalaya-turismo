import { Button } from 'components/GlobalComponents/Button'
import React, { useState } from 'react'
import { PlansIncludesInfo } from './PlansIncludesInfo'

export const PlansInclude = ({ currentPlan }) => {
	const [include, setInclude] = useState(true)

	// funcion para cambiar el texto del botton(Include-NoInclude)
	const handleInclude = () => {
		setInclude(!include)
	}

	return (
		<div className='contentMax_services'>
			<h2>{include ? 'INCLUYE' : 'NO INCLUYE'}</h2>
			<div className='services_content'>
				{include ? (
					<PlansIncludesInfo includes={currentPlan.includes} />
				) : (
					<PlansIncludesInfo includes={currentPlan.noIncludes} />
				)}
			</div>
			<div className='box_buttons'>
				<Button
					onClick={handleInclude}
					text={include ? 'No Incluye' : 'incluye'}
					bgColor='#10216f'
				/>
			</div>
		</div>
	)
}
