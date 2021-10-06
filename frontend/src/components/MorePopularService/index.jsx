import React from 'react'
import { InfoService } from './InfoService'
import { ContainerCards, ContainerCardsInfo } from './style'

import { useSelector } from 'react-redux'

export const MorePopularService = () => {
	const { servicesHotel } = useSelector((state) => state.homeReducer)
	const services = servicesHotel

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
