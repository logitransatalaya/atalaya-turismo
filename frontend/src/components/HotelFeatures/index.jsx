import { Title } from './styles'
import Bedrooms from './Bedrooms'
import HotelInfo from './HotelInfo'
import { useParams } from 'react-router-dom'
import { hotels } from '../../json/hotels.json'
import { Container } from 'components/Container'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MorePopularService } from 'components/MorePopularService'
import { updateCurrentHotel } from '../../state/actions/hotelsActions'
import { HeaderFeature } from './HeaderFeatur'

export const HotelFeatures = () => {
	const { hotelId, locid } = useParams()
	const { currentHotel } = useSelector((state) => state.hotelsReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!currentHotel) {
			console.log('entra')
			const cityId = parseInt(locid)
			const [hotel] = hotels
				.filter((hotel) => hotel.idcity === cityId)
				.filter((hotel) => hotel.urlCode === hotelId)
			// const res = fetch(`api.com?cityId=${cityId}`)
			dispatch(updateCurrentHotel(hotel))
		}
	}, [])

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
						<Title>
							<span className='line'></span>
							<h2 className='title'>SERVICIOS MÁS POPULARES</h2>
							<span className='line'></span>
						</Title>
						<MorePopularService currentHotel={currentHotel} />
					</div>
					<div>
						<Title>
							<span className='line'></span>
							<h2 className='title'>HABITACIONES DEL HOTEL</h2>
							<span className='line'></span>
						</Title>
						<Bedrooms img={currentHotel.more.photos.photos2} />
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
