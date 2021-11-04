import React, { useEffect } from 'react'
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
			;(async () => {
				const response = await fetch(
					`http://127.0.0.1:8000/api/offers/`
				)
				const data = await response.json()
				dispatch(getAllOffers(data.offers))
			})()
		}
	}, [offersReducer, dispatch])
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
