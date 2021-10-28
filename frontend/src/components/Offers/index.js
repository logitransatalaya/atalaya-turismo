import { Container } from 'components/Container'

import React, { useEffect } from 'react'
import CardOffer from './mobile/CardOffer'
import { offers } from '../../json/offers'
import { getAllOffers } from '../../state/actions/offersActions'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'
export const Offers = () => {
	const dispatch = useDispatch()
	const { offersReducer } = useSelector((state) => state.OffersReducer)

	useEffect(() => {
		if (!offersReducer) {
			dispatch(getAllOffers(offers))
		}
	}, [offersReducer, dispatch])

	return (
		<Container>
			<Title text={'NUESTRAS OFERTAS'} about={false} />
			{offersReducer &&
				offersReducer.map((offer) => (
					<CardOffer data={offer} key={offer.id} />
				))}
		</Container>
	)
}
