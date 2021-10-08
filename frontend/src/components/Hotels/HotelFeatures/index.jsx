import { StyleTitle } from './styles'
import Bedrooms from './Bedrooms'
import HotelInfo from './HotelInfo'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { HeaderFeature } from './HeaderFeatur'
import { Container } from 'components/Container'
import { useSelector } from 'react-redux'
import { MorePopularService } from 'components/Hotels/HotelFeatures/MorePopularService'
import { useApi } from 'hooks/useApi'

export const HotelFeatures = () => {
	const { getCurrentHotel } = useApi()
	const { hotelId, locid } = useParams()
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
