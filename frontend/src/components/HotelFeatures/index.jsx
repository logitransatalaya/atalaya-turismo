import { StyleTitle } from './styles'
import Bedrooms from './Bedrooms'
import HotelInfo from './HotelInfo'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { HeaderFeature } from './HeaderFeatur'
import { hotels } from '../../json/hotels.json'
import { Container } from 'components/Container'
import { useSelector, useDispatch } from 'react-redux'
import { MorePopularService } from 'components/MorePopularService'
import { updateCurrentHotel } from '../../state/actions/hotelsActions'

export const HotelFeatures = () => {
	const dispatch = useDispatch()
	const { hotelId, locid } = useParams()
	const { currentHotel, hotelsList } = useSelector(
		(state) => state.hotelsReducer
	)

	useEffect(() => {
		if (!currentHotel) {
			const cityId = parseInt(locid)
			const [hotel] = hotels
				.filter((hotel) => hotel.idcity === cityId)
				.filter((hotel) => hotel.urlCode === hotelId)
			// const res = fetch(`api.com?cityId=${cityId}`)
			dispatch(updateCurrentHotel(hotel))
		} else {
			const currentHotelCityId = currentHotel.urlCode

			if (hotelId !== currentHotelCityId) {
				const [hotel] = hotelsList.filter(
					(hotel) => hotel.urlCode === hotelId
				)
				dispatch(updateCurrentHotel(hotel))
			}
		}
	}, [hotelsList, currentHotel, dispatch, hotelId, locid])

	return (
		<>
			{currentHotel && (
				<Container>
					<div>
						<HeaderFeature
							city={''}
							photos={currentHotel.more.photos}
						/>
					</div>
					<div>
						<StyleTitle>
							<span className='line'></span>
							<h2 className='title'>SERVICIOS MÁS POPULARES</h2>
							<span className='line'></span>
						</StyleTitle>
						<MorePopularService currentHotel={currentHotel} />
					</div>
					<div>
						<StyleTitle>
							<span className='line'></span>
							<h2 className='title'>HABITACIONES DEL HOTEL</h2>
							<span className='line'></span>
						</StyleTitle>
						<Bedrooms img={currentHotel.more.photos.photos2} />
					</div>
					<div>
						<StyleTitle about='about'>
							<span className='line'></span>
							<h2 className='title'>
								SOBRE EL HOTEL TRYP MEDELLíN
							</h2>
							<span className='line'></span>
						</StyleTitle>
						<HotelInfo />
					</div>
				</Container>
			)}
		</>
	)
}
