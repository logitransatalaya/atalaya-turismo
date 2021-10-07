import React from 'react'
import { Title } from './styles'
import Bedrooms from './Bedrooms'
import HotelInfo from './HotelInfo'
import { HeaderFeature } from './HeaderFeatur'
import { Container } from 'components/Container'
import { MorePopularService } from 'components/MorePopularService'

export const HotelFeatures = () => {
	return (
		<Container>
			<div>
				<HeaderFeature />
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
				<Bedrooms />
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
