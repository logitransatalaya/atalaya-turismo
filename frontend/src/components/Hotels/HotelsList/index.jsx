import { useApi } from 'hooks/useApi'
import { CityContainer } from './styles'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { HotelListCardInfo } from './HotelListCardInfo'
import { Title } from 'components/GlobalComponents/Title'
import { Loader } from 'components/GlobalComponents/Loader'
import { Container } from 'components/GlobalComponents/Container'

export const HotelsList = () => {
	// Estados del componente
	const { locid } = useParams()
	const { getHotelList } = useApi()
	const [nameCity, setNameCity] = useState('')
	const { hotelsList } = useSelector((state) => state.hotelsReducer)

	// Peticion a la db
	useEffect(() => {
		if (hotelsList === null || nameCity === '') {
			getHotelList(locid, setNameCity)
		}
	}, [getHotelList, hotelsList, locid, nameCity])

	return (
		<Container>
			<Title text={`Ciudad ${nameCity}`} fontWeight='true' />
			<CityContainer>
				{hotelsList?.length ? (
					hotelsList.map((hotel, i) => (
						<HotelListCardInfo
							hotel={hotel}
							key={i}
							locid={locid}
						/>
					))
				) : (
					<Loader />
				)}
			</CityContainer>
		</Container>
	)
}
