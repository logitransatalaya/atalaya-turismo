import React from 'react'
import { Info } from './style'
export const InfoService = ({ Icon }) => {
	return (
		<Info>
			<div className='icon'>
				<Icon />
			</div>
			<div className='text'>
				{' '}
				<p>Limpieza de habitacion</p>{' '}
			</div>
		</Info>
	)
}
