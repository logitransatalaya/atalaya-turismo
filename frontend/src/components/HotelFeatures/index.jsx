import React, { useEffect, useState } from 'react'
import { Title } from './styles'
import Bedrooms from './Bedrooms'
import HotelInfo from './HotelInfo'
import { HeaderFeature } from './HeaderFeatur'
import { Container } from 'components/Container'
import { MorePopularService } from 'components/MorePopularService'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { hotels } from '../../json/hotels.json'
import { getServicesHotelReducer } from '../../state/actions/hotelsActions'

export const HotelFeatures = () => {
	const { servicesHotel } = useSelector((state) => state.homeReducer)
	const { hotelId } = useParams()
	const dispatch = useDispatch()

	const [stateCurrentHotel, setStateCurrentHotel] = useState(null)

	useEffect(() => {
		if (servicesHotel) {
			setStateCurrentHotel(servicesHotel)
		} else {
			const [currentHotel] = hotels.filter(
				(hotel) => hotel.urlCode === hotelId
			)
			dispatch(getServicesHotelReducer(currentHotel))
			setStateCurrentHotel(currentHotel)
		}
	}, [dispatch, hotelId, servicesHotel])

	return (
		<>
			{stateCurrentHotel && (
				<Container>
					<div>
						<HeaderFeature
							city={stateCurrentHotel.city}
							photos={stateCurrentHotel.more.photos}
						/>
					</div>
					<div>
						<Title>
							<span className='line'></span>
							<h2 className='title'>SERVICIOS MÁS POPULARES</h2>
							<span className='line'></span>
						</Title>
						<MorePopularService />
					</div>
					<div>
						<Title>
							<span className='line'></span>
							<h2 className='title'>HABITACIONES DEL HOTEL</h2>
							<span className='line'></span>
						</Title>
						<Bedrooms img={stateCurrentHotel.more.photos.photos2} />
					</div>
					<div>
						<Title about='about'>
							<span className='line'></span>
							<h2 className='title'>
								SOBRE EL HOTEL TRYP MEDELLíN
							</h2>
							<span className='line'></span>
						</Title>
						<HotelInfo />
					</div>
				</Container>
			)}
		</>
	)
}
