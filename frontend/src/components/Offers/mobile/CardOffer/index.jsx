import React, { useEffect, useState } from 'react'
import InfoOffer from '../InfoOffer'
import SliderOffer from '../../SliderOffer'
import { Card } from './styles'
import Cardinfo from '../Cardinfo'

const CardOffer = ({ data }) => {
	const [width, setWidth] = useState(0)
	const { photos } = data
	useEffect(() => {
		setWidth(window.innerWidth)
		window.onresize = () => {
			setWidth(window.innerWidth)
		}
	}, [width])
	return (
		<Card>
			{data && (
				<div className='containerSF'>
					<SliderOffer photos={photos} />
					<InfoOffer data={data} />
				</div>
			)}
			{width > 800 && <Cardinfo data={data} />}
		</Card>
	)
}

export default CardOffer
