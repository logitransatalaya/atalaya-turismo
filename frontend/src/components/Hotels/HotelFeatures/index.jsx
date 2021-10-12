import Bedrooms from './Bedrooms'
import HotelInfo from './HotelInfo'
import { useApi } from 'hooks/useApi'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { HeaderFeature } from './HeaderFeatur'
import { Container } from 'components/Container'
import { Title } from 'components/GlobalComponents/Title'
import { MorePopularService } from 'components/Hotels/HotelFeatures/MorePopularService'

export const HotelFeatures = () => {
	const { getCurrentHotel } = useApi()
	const { hotelId, locid, city } = useParams()
	const { currentHotel, hotelsList } = useSelector(
		(state) => state.hotelsReducer
	)

	useEffect(
		() => getCurrentHotel(locid, hotelId, currentHotel, hotelsList),
		[getCurrentHotel, hotelsList, currentHotel, hotelId, locid]
	)

	return (
		<>
			{currentHotel && (
				<Container>
					<HeaderFeature
						city={city}
						photos={currentHotel.more.photos}
					/>
					<Title text={'SERVICIOS MÁS POPULARES'} />
					<MorePopularService currentHotel={currentHotel} />
					<Title text={'HABITACIONES DEL HOTEL'} />
					<Bedrooms img={currentHotel.more.photos.photos2} />
					<Title text={'SOBRE EL HOTEL TRYP MEDELLíN'} />
					<HotelInfo />
				</Container>
			)}
		</>
	)
}
