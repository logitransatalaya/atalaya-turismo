import { useApi } from 'hooks/useApi'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import HotelBedrooms from './HotelBedrooms'
import HotelComments from './HotelComments'
import { useParams } from 'react-router-dom'
import { useWhatsapp } from 'hooks/useWhatsapp'
import React, { useEffect, useState } from 'react'
import { HotelHeaderFeatur } from './HotelHeaderFeatur'
import { Title } from 'components/GlobalComponents/Title'
import { Loader } from 'components/GlobalComponents/Loader'
import { Container } from 'components/GlobalComponents/Container'
import { HotelMorePopularService } from 'components/Hotels/Nationals/HotelFeatures/HotelMorePopularService'

export const HotelFeatures = () => {
	//
	const location = useLocation()
	const [city, setCity] = useState('')
	const { currentHotel } = useSelector((state) => state.hotelsReducer)
	const { hotelId, locid } = useParams()
	const { messageWhatsapp } = useWhatsapp()
	const { getHotelFeatures } = useApi()

	// peticion a la api mediante el id del hotel
	useEffect(() => {
		if (currentHotel === null) getHotelFeatures(locid, hotelId, setCity)
		else if (currentHotel) {
			if (currentHotel.id !== parseInt(hotelId) || city === '') {
				getHotelFeatures(locid, hotelId, setCity)
			}
			messageWhatsapp(location.pathname, currentHotel.name, 'hotel')
		}
	}, [
		locid,
		hotelId,
		currentHotel,
		getHotelFeatures,
		location,
		messageWhatsapp,
		city
	])
	return (
		<>
			{currentHotel ? (
				<Container>
					<HotelHeaderFeatur
						stars={currentHotel.stars}
						cityName={city}
						city={currentHotel.name}
						photos={currentHotel.photos_inside}
					/>
					<Title text={'SERVICIOS MÁS POPULARES'} about='true' />
					<HotelMorePopularService currentHotel={currentHotel} />
					<Title text={'HABITACIONES DEL HOTEL'} about='true' />
					<HotelBedrooms img={currentHotel.photos_outside} />
					<Title text={` HOTEL ${currentHotel.name}`} about='true' />
					<HotelComments
						comentens={currentHotel.comments}
						desc={currentHotel.description}
					/>
				</Container>
			) : (
				<Loader />
			)}
		</>
	)
}
