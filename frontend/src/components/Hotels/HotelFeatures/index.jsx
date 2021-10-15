import Bedrooms from './Bedrooms'
import HotelInfo from './HotelInfo'
import { useApi } from 'hooks/useApi'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { HeaderFeature } from './HeaderFeatur'
import { Container } from 'components/Container'
import { Title } from 'components/GlobalComponents/Title'
import { MorePopularService } from 'components/Hotels/HotelFeatures/MorePopularService'
import { getMessage } from 'state/actions/toolTipActions'
import { useLocation } from 'react-router'

export const HotelFeatures = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const { getCurrentHotel } = useApi()
	const { hotelId, locid, city } = useParams()
	const { currentHotel, hotelsList } = useSelector(
		(state) => state.hotelsReducer
	)

	useEffect(
		() => getCurrentHotel(locid, hotelId, currentHotel, hotelsList),
		[getCurrentHotel, hotelsList, currentHotel, hotelId, locid]
	)

	useEffect(() => {
		if (currentHotel) {
			dispatch(
				getMessage({
					route: location.pathname,
					title: currentHotel.name,
					page: 'hotel'
				})
			)
		}
	}, [dispatch, currentHotel, location])

	return (
		<>
			{currentHotel && (
				<Container>
					<HeaderFeature
						city={city}
						photos={currentHotel.more.photos}
					/>
					<Title text={'SERVICIOS MÁS POPULARES'} about='true' />
					<MorePopularService currentHotel={currentHotel} />
					<Title text={'HABITACIONES DEL HOTEL'} about='true' />
					<Bedrooms img={currentHotel.more.photos.photos2} />
					<Title text={'SOBRE EL HOTEL TRYP MEDELLíN'} about='true' />
					<HotelInfo />
				</Container>
			)}
		</>
	)
}
