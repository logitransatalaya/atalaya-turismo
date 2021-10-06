import React from 'react'
import { Container } from 'components/Container'
import Bedrooms from './Bedrooms'
import { Title } from './styles'
import HotelInfo from './HotelInfo'

export const HotelFeatures = () => {
	return (
		<Container>
			<div>
				<h1>Aqui van las caracteristicas de el hotel </h1>
			</div>
			<hr />
			<div>
				<Title>
					<span className='line'></span>
					<h2 className='title'>SERVICIOS MÁS POPULARES</h2>
					<span className='line'></span>
				</Title>
			</div>
			<hr />
			<div>
				<Title>
					<span className='line'></span>
					<h2 className='title'>SERVICIOS MÁS POPULARES</h2>
					<span className='line'></span>
				</Title>
			</div>
			<hr />
			<div>
				<Title>
					<span className='line'></span>
					<h2 className='title'>HABITACIONES DEL HOTEL</h2>
					<span className='line'></span>
				</Title>
				<Bedrooms />
			</div>
			<hr />
			<div>
				<Title about>
					<span className='line'></span>
					<h2 className='title'>SOBRE EL HOTEL TRYP MEDELLíN</h2>
					<span className='line'></span>
				</Title>
				<HotelInfo />
			</div>
		</Container>
	)
}
