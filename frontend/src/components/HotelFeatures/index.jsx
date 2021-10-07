import React from 'react'
import { Title } from './styles'
import Bedrooms from './Bedrooms'
import HotelInfo from './HotelInfo'
import { HeaderFeature } from './HeaderFeatur'
import { Container } from 'components/Container'
import { MorePopularService } from 'components/MorePopularService'
import { useSelector } from 'react-redux'

export const HotelFeatures = () => {
	const { servicesHotel } = useSelector((state) => state.homeReducer)
	const { city } = servicesHotel
	const { photos } = servicesHotel.more
	const { photos2 } = photos

	return (
		<Container>
			<div>
				<HeaderFeature city={city} photos={photos} />
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
				<Bedrooms img={photos2} />
			</div>
			<div>
				<Title about='about'>
					<span className='line'></span>
					<h2 className='title'>SOBRE EL HOTEL TRYP MEDELLíN</h2>
					<span className='line'></span>
				</Title>
				<HotelInfo />
			</div>
		</Container>
	)
}
