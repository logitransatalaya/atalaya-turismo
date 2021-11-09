import Bedrooms from './Bedrooms'
import HotelInfo from './HotelInfo'
import { useLocation } from 'react-router'
import { useParams } from 'react-router-dom'
import { HeaderFeature } from './HeaderFeatur'
import { Container } from 'components/Container'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMessage } from 'state/actions/toolTipActions'
import { Title } from 'components/GlobalComponents/Title'
import { MorePopularService } from 'components/Hotels/HotelFeatures/MorePopularService'
import { useApi } from 'hooks/useApi'

export const HotelFeatures = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const { hotelId, locid } = useParams()
	const { currentHotel } = useSelector((state) => state.hotelsReducer)
	const [city, setCity] = useState('')
	const { getHotelFeatures } = useApi()

	// peticion a la api mediante el id del hotel
	useEffect(() => {
		if (!currentHotel) {
			getHotelFeatures(locid, hotelId, setCity)
		} else if (currentHotel.id !== parseInt(hotelId)) {
			getHotelFeatures(locid, hotelId, setCity)
		}
	}, [locid, hotelId, currentHotel, getHotelFeatures])

	// cambio del mensaje para el boton de whatsapp
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
						stars={currentHotel.stars}
						cityName={city}
						city={currentHotel.name}
						photos={currentHotel.photos_inside}
					/>
					<Title text={'SERVICIOS MÁS POPULARES'} about='true' />
					<MorePopularService currentHotel={currentHotel} />
					<Title text={'HABITACIONES DEL HOTEL'} about='true' />
					<Bedrooms img={currentHotel.photos_outside} />
					<Title text={'SOBRE EL HOTEL TRYP MEDELLíN'} about='true' />
					<HotelInfo
						comentens={currentHotel.comments}
						desc={currentHotel.description}
					/>
				</Container>
			)}
		</>
	)
}
