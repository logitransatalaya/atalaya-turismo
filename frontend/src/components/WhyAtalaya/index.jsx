import React from 'react'
import './style.css'
import { WhyCard } from './WhyCard'

export const WhyAtalaya = () => {
	return (
		<div>
			<div>
				<h1>¿ POR QUE ATALAYA VIAJES Y TURISMO ?</h1>
			</div>
			<div className='WhyAtalaya_row'>
				<WhyCard />
				<WhyCard />
				<WhyCard />
				<WhyCard />
				<WhyCard />
				<WhyCard />
			</div>
		</div>
	)
}
