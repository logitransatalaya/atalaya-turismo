import { StyleHealth } from './styles'
import { HealthNotes } from './HealthNotes'
import { HealthHeader } from './HealthHeader'
import { HealthIncludes } from './HealthIncludes'
import React, { useEffect, useState } from 'react'
import { Container } from 'components/GlobalComponents/Container'

export const Health = () => {
	const [screen, setScreen] = useState(window.innerWidth)

	useEffect(() => {
		window.onresize = () => setScreen(window.innerWidth)
	}, [])

	return (
		<StyleHealth>
			<HealthHeader screen={screen} />
			<Container>
				<HealthIncludes />
			</Container>
			<div className='bg-image'>
				<HealthNotes screen={screen} />
			</div>
		</StyleHealth>
	)
}
