import React from 'react'
import { StyleHealth } from './styles'
import { HealthNotes } from './HealthNotes'
import { HealthHeader } from './HealthHeader'
import { Container } from 'components/Container'
import { HealthIncludes } from './HealthIncludes'

export const Health = () => {
	return (
		<StyleHealth>
			<HealthHeader />
			<Container>
				<HealthIncludes />
			</Container>
			<div className='bg-image'>
				<HealthNotes />
			</div>
		</StyleHealth>
	)
}
