import { ContainerCards } from './style'
import { HotelInfoService } from './HotelInfoService'
import React, { useEffect, useState } from 'react'

export const HotelMorePopularService = ({ currentHotel }) => {
	const { services_hotel } = currentHotel
	const [countServices, setCountServices] = useState(false)
	const [handleWidth, setHandleWidth] = useState(window.innerWidth)

	useEffect(() => {
		window.onresize = function () {
			setHandleWidth(window.innerWidth)
		}
	}, [])

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
							<HotelInfoService
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
						<HotelInfoService
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
