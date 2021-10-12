import { Container } from 'components/Container'
import React from 'react'
import { HealthHeader } from './HealthHeader'
import { HealthIncludes } from './HealthIncludes'
import { HealthNotes } from './HealthNotes'
import { StyleHealth } from './styles'

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
