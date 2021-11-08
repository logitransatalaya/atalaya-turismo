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
				try {
					const response = await fetch(
						`http://50.62.81.171:5000/api/offers/`
					)
					const data = await response.json()
					dispatch(getAllOffers(data.offers))
				} catch (error) {
					console.error(error)
				}
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
