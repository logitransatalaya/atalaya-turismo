import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { InfoService } from './InfoService'
import { ContainerCards } from './style'

export const MorePopularService = () => {
	const { servicesHotel } = useSelector((state) => state.homeReducer)

	// if (servicesHotel.length === 0) {
	// 	return (
	// 		<div>
	// 			<h1 style={{ backgroundColor: 'blue' }}>Dale atras, please</h1>
	// 			<p>Estyo pasa por que los datos no son persistentes</p>
	// 		</div>
	// 	)
	// }

	const { services } = servicesHotel.more

	const [countServices, setCountServices] = useState(true)
	const [handleWidth, setHandleWidth] = useState(window.innerWidth)

	useEffect(() => {
		window.onresize = function () {
			setHandleWidth(window.innerWidth)
		}
	}, [handleWidth])

	const handleServices = () => {
		setCountServices(!countServices)
	}

	const auxServices = countServices ? services : services.slice(0, 4)
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
			{auxServices &&
				auxServices.map((service, i) => (
					<InfoService
						key={i}
						iconName={service.iconName}
						text={service.text}
					/>
				))}
			{ButtonPhoneServices}
		</ContainerCards>
	)
}
