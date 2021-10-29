import { InfoO } from './styles'
import Cardinfo from '../Cardinfo'
import React, { useEffect, useState } from 'react'
import { Button } from 'components/GlobalComponents/Button'

const InfoOffer = ({ data }) => {
	console.log(data.no_includes)
	const [accordion, setAccordion] = useState(false)
	const [width, setWidth] = useState(0)
	const { name } = data
	const { services, no_includes } = data

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

	const [showInfo, setShowInfo] = useState(true)

	const handleShowInfo = () => {
		setShowInfo(!showInfo)
	}

	return (
		<InfoO>
			<div className='accordion' onClick={handleAccordion}>
				<h2>{name}</h2>
				<span className={accordion ? `rotate` : ``}>V</span>
			</div>
			<div className={`panel ${accordion ? `` : `disappear`}`}>
				<ul className='services'>
					<h4 className='title_includes'>
						{showInfo ? 'Lo que incluye' : 'Lo que no incluye'}
					</h4>
					{showInfo
						? services.map((service) => (
								<li key={service} className='service'>
									<span>{service}</span>
								</li>
						  ))
						: no_includes.map((service) => (
								<li key={service} className='service'>
									<span>{service}</span>
								</li>
						  ))}
				</ul>
				<div className='content_button'>
					<Button
						onClick={handleShowInfo}
						text={
							showInfo
								? 'Ver lo que NO incluye'
								: 'Ver lo que incluye'
						}
						bgColor='#10216f'
					/>
				</div>
				{width < 800 && <Cardinfo data={data} />}
			</div>
		</InfoO>
	)
}

export default InfoOffer
