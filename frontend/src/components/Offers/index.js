import { Container } from 'components/Container'
import { TitleOffers } from './styles'
import React, { useEffect } from 'react'
import CardOffer from './mobile/CardOffer'
import { offers } from '../../json/offers'
import { getAllOffers } from '../../state/actions/offersActions'
import { useDispatch, useSelector } from 'react-redux'
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
			<TitleOffers>
				<h2>Ofertas</h2>
			</TitleOffers>
			{offersReducer &&
				offersReducer.map((offer) => (
					<CardOffer data={offer} key={offer.id} />
				))}
		</Container>
	)
}
