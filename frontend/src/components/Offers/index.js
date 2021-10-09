import { Container } from 'components/Container'
import { TitleOffers } from './styles'
import React from 'react'
import CardOffer from './mobile/CardOffer'

export const Offers = () => {
	return (
		<Container>
			<TitleOffers>
				<h2>Ofertas</h2>
			</TitleOffers>
			<CardOffer></CardOffer>
		</Container>
	)
}
