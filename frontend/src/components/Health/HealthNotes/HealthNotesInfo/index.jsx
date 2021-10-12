import React from 'react'
import { StyleCard } from './style'

export const HealthNotesInfo = ({ text, Icon }) => {
	return (
		<StyleCard>
			<div className='row'>
				<Icon className='icon' />
				<div className='Healt_text'>
					<p>{text}</p>
				</div>
			</div>
		</StyleCard>
	)
}
