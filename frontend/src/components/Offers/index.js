import { useApi } from 'hooks/useApi'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardOffer from './mobile/CardOffer'
import { Container } from 'components/Container'
import { Title } from 'components/GlobalComponents/Title'

export const Offers = () => {
	const { offersReducer } = useSelector((state) => state.OffersReducer)
	const { getOffers } = useApi()

	useEffect(() => {
		if (!offersReducer) {
			getOffers()
		}
	}, [offersReducer, getOffers])

	return (
		<Container>
			<Title text={'NUESTRAS OFERTAS'} />
			{offersReducer &&
				offersReducer.map((offer) => {
					return <CardOffer data={offer} key={offer.id} />
				})}
		</Container>
	)
}
