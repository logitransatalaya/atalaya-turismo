import { useApi } from 'hooks/useApi'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardOffer from './mobile/CardOffer'
import { Container } from 'components/Container'
import { Title } from 'components/GlobalComponents/Title'
import { ContainerOffers } from './style'
import { Loader } from 'components/GlobalComponents/Loader'

export const Offers = () => {
	const { offersReducer } = useSelector((state) => state.OffersReducer)
	const { getOffers } = useApi()

	useEffect(() => {
		if (!offersReducer) {
			getOffers()
		}
	}, [offersReducer, getOffers])

	return (
		<ContainerOffers>
			<Container>
				<Title text={'NUESTRAS OFERTAS'} fontWeight />
				{offersReducer ? (
					offersReducer.map((offer) => {
						return <CardOffer data={offer} key={offer.id} />
					})
				) : (
					<Loader />
				)}
			</Container>
		</ContainerOffers>
	)
}
