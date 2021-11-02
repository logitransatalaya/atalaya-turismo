import { ContainerCards } from './style'
import { InfoService } from './InfoService'
import React, { useEffect, useState } from 'react'

export const MorePopularService = ({ currentHotel }) => {
	const { services_hotel } = currentHotel
	const [countServices, setCountServices] = useState(false)
	const [handleWidth, setHandleWidth] = useState(window.innerWidth)

	useEffect(() => {
		window.onresize = function () {
			setHandleWidth(window.innerWidth)
		}
	}, [handleWidth])

	const handleServices = () => {
		setCountServices(!countServices)
	}

	const auxServices = countServices
		? services_hotel
		: services_hotel.slice(0, 4)
	const auxIcon = countServices
		? 'cardButton cardButtonRotate'
		: ' cardButton'

	let ButtonPhoneServices =
		handleWidth < 800 ? (
			<span className={auxIcon} onClick={handleServices}>
				V
			</span>
		) : null

	return (
		<ContainerCards>
			<div className='layoutD'>
				{services_hotel &&
					services_hotel.map((service, i) => {
						return (
							<InfoService
								key={i}
								iconName={service.id_service.name_service}
								text={service.id_service.text_service}
							/>
						)
					})}
			</div>
			<div className='layoutM'>
				{auxServices &&
					auxServices.map((service, i) => (
						<InfoService
							key={i}
							iconName={service.id_service.name_service}
							text={service.id_service.text_service}
						/>
					))}
				{ButtonPhoneServices}
			</div>
		</ContainerCards>
	)
}
