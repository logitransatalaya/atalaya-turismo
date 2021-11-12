import { useApi } from 'hooks/useApi'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import OffersCard from './OffersCard'
import { Container } from 'components/Container'
import { Title } from 'components/GlobalComponents/Title'
import { ContainerOffers } from './style'
import { Loader } from 'components/GlobalComponents/Loader'

export const Offers = () => {
	const { offersReducer } = useSelector((state) => state.OffersReducer)
	const { getOffers } = useApi()

	useEffect(() => {
		if (offersReducer === null) {
			getOffers()
		}
	}, [offersReducer, getOffers])

	return (
		<ContainerOffers>
			<Container>
				<Title text={'NUESTRAS OFERTAS'} fontWeight='true' />
				{offersReducer ? (
					offersReducer.map((offer) => {
						return <OffersCard data={offer} key={offer.id} />
					})
				) : (
					<Loader />
				)}
			</Container>
		</ContainerOffers>
	)
}
