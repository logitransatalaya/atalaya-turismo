import React, { useEffect } from 'react'
import { offers } from '../../json/offers'
import CardOffer from './mobile/CardOffer'
import { Container } from 'components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'
import { getAllOffers } from '../../state/actions/offersActions'

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
			<Title text={'NUESTRAS OFERTAS'} />
			{offersReducer &&
				offersReducer.map((offer) => (
					<CardOffer data={offer} key={offer.id} />
				))}
		</Container>
	)
}
