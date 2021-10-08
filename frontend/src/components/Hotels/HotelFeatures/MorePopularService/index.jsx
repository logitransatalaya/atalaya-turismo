import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { InfoService } from './InfoService'
import { ContainerCards } from './style'

export const MorePopularService = ({ currentHotel }) => {
	const { services } = currentHotel?.more

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
