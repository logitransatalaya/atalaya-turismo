import { Container } from 'components/Container'
import React from 'react'
import { HealthHeader } from './HealthHeader'
import { HealthIncludes } from './HealthIncludes'
import { HealthNotes } from './HealthNotes'

export const Health = () => {
	return (
		<div>
			<HealthHeader />
			<Container>
				<HealthIncludes />
			</Container>
			<HealthNotes />
		</div>
	)
}
