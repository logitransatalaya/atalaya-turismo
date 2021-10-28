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
	const { currentRoute, currentMessage } = useSelector(
		(state) => state.toolTipReducer
	)
	const [routes, setRoute] = useState({
		message: 'Contactanos por WhatsApp',
		messageWsp: 'Deseo%20contactarme%20con%20un%20asesor'
	})

	useEffect(() => {
		const currentPath = location.pathname
		if (!currentRoute || currentRoute) {
			dispatch(getRoute(currentPath))
		}
	}, [dispatch, location, currentRoute])

	useEffect(() => {
		if (currentMessage && currentMessage.page === 'hotel') {
			setRoute({
				...routes,
				message: 'Reserva este hotel AQUÍ',
				messageWsp: `Deseo%20reservar%20el%20hotel%20${currentMessage.title}`
			})
		} else if (currentMessage && currentMessage.page === 'tour') {
			setRoute({
				...routes,
				message: 'Reserva este tour AQUÍ',
				messageWsp: `Deseo%20reservar%20un%20cupo%20para%20el%20tour%20${currentMessage.title}`
			})
		} else if (currentMessage && currentMessage.page === 'plans') {
			setRoute({
				...routes,
				message: 'Reserva este plan AQUÍ',
				messageWsp: `Deseo%20reservar%20el%20plan%20a%20${currentMessage.title}`
			})
		}
		// eslint-disable-next-line
	}, [currentMessage])

	useEffect(() => {
		if (currentMessage && currentMessage.route !== currentRoute) {
			setRoute({
				message: 'Contactanos por WhatsApp',
				messageWsp: 'Deseo%20contactarme%20con%20un%20asesor'
			})
		}
	}, [currentRoute, currentMessage])

	const handleAction = () => {
		window.open(`https://wa.me/573145554761?text=${routes.messageWsp}`)
	}

	return (
		<ContainerBtns>
			<BtnContact
				state={currentMessage}
				icon={wspweb}
				title='Whatsapp'
				pathname={currentRoute}
				routes={routes}
				onClick={handleAction}
			/>
			<BtnContact icon={mailweb} title='viajes y turismo' />
		</ContainerBtns>
	)
}

export default FloatingButtons
