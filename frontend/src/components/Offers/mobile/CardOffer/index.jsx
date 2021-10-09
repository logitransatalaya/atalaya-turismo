import React from 'react'
import InfoOffer from '../InfoOffer'
import SliderOffer from '../../SliderOffer'
import { Card } from './styles'
import Cardinfo from '../Cardinfo'

const CardOffer = () => {
	return (
		<Card>
			<div className='containerSF'>
				<SliderOffer />
				<InfoOffer />
			</div>
			<Cardinfo />
		</Card>
	)
}

export default CardOffer
