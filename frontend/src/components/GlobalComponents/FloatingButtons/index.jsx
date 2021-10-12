import React, { useEffect, useState } from 'react'
import { ContainerBtns } from './styles'
import BtnContact from './BtnsContacts'
import wspweb from 'images/svg/wspweb.svg'
import mailweb from 'images/svg/mailweb.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { getRoute } from 'state/actions/toolTipActions'

const FloatingButtons = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const { currentRoute } = useSelector((state) => state.toolTipReducer)
	const { currentHotel } = useSelector((state) => state.hotelsReducer)
	const { currentTour } = useSelector((state) => state.tourReducer)
	const [routes, setRoute] = useState({
		route: '',
		message: '',
		messageWsp: ''
	})

	useEffect(() => {
		const currentPath = location.pathname
		if (!currentRoute || currentRoute) {
			dispatch(getRoute(currentPath))
		}
	}, [dispatch, location, currentRoute])

	useEffect(() => {
		if (currentHotel && routes.route !== currentRoute) {
			console.log('entro')
			const { idcity, urlCode, name } = currentHotel
			const hotel = name.replaceAll(' ', '%20')
			setRoute({
				...routes,
				route: `/hoteles/${idcity}/${urlCode}`,
				message: `Deseo reserval este hotel!`,
				messageWsp: `Deseo%20reservar%20el%20hotel%20${hotel}`
			})
		}
		if (currentTour && routes.route !== currentRoute) {
			console.log('entro')
			const { title, urlCode } = currentTour
			const tour = title.replaceAll(' ', '%20')
			setRoute({
				...routes,
				route: `/tours/${urlCode}`,
				message: `Deseo reservar este tour`,
				messageWsp: `Deseo%20reservar%20un%20cupo%20para%20${tour}`
			})
			return
		}
	}, [currentHotel, currentTour])

	console.log(currentRoute)
	console.log(routes.route)
	console.log(routes)

	return (
		<ContainerBtns>
			<BtnContact
				icon={wspweb}
				title='Whatsapp'
				pathname={currentRoute}
				routes={routes}
			/>
			<BtnContact icon={mailweb} title='viajes y turismo' />
		</ContainerBtns>
	)
}

export default FloatingButtons
