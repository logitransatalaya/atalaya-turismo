import React from 'react'
import { InfoService } from './InfoService'
import { ContainerCards } from './style'

import { useSelector } from 'react-redux'

export const MorePopularService = () => {
	const { servicesHotel } = useSelector((state) => state.homeReducer)

	if (!servicesHotel[0]) {
		return (
			<div>
				<h1 style={{ backgroundColor: 'blue' }}>Dale atras, please</h1>
				<p>Estyo pasa por que los datos no son persistentes</p>
			</div>
		)
	}

	const { services } = servicesHotel.more

	return (
		<ContainerCards>
			{services &&
				services.map((service, i) => (
					<InfoService
						key={i}
						iconName={service.iconName}
						text={service.text}
					/>
				))}
		</ContainerCards>
	)
}
