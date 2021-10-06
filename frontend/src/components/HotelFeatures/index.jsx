import React from 'react'
import { HeaderFeature } from './HeaderFeatur'
import { Container } from 'components/Container'
import { MorePopularService } from 'components/MorePopularService'

export const HotelFeatures = () => {
	return (
		<Container>
			<div>
				<HeaderFeature />
			</div>
			<hr />
			<div>
				<MorePopularService />
			</div>
			<hr />
			<div>
				<h1>HABITACIONES DEL HOTEL </h1>
			</div>
			<hr />
			<div>
				<h1>SOBRE EL HOTEL TRYP MEDELLIN </h1>
			</div>
		</Container>
	)
}
