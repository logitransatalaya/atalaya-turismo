import React, { useEffect, useState } from 'react'
import Cardinfo from '../Cardinfo'
import { InfoO } from './styles'

const InfoOffer = ({ data }) => {
	const [accordion, setAccordion] = useState(false)
	const [width, setWidth] = useState(0)
	const { name } = data
	const { services } = data

	const handleAccordion = () => {
		if (width < 800) {
			setAccordion(!accordion)
		} else {
			setAccordion(true)
		}
	}

	useEffect(() => {
		setWidth(window.innerWidth)
		window.onresize = () => {
			setWidth(window.innerWidth)
		}

		if (width > 800) {
			setAccordion(true)
			return
		}
	}, [width, accordion])

	return (
		<InfoO>
			<div className='accordion' onClick={handleAccordion}>
				<h2>{name}</h2>
				<span className={accordion ? `rotate` : ``}>V</span>
			</div>
			<div className={`panel ${accordion ? `` : `disappear`}`}>
				<ul className='services'>
					{services.map((service) => (
						<li key={service} className='service'>
							<span>{service}</span>
						</li>
					))}
				</ul>
				{width < 800 && <Cardinfo data={data} />}
			</div>
		</InfoO>
	)
}

export default InfoOffer
