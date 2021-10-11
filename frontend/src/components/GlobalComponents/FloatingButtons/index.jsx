import React, { useEffect } from 'react'
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

	useEffect(() => {
		const currentPath = location.pathname
		if (!currentRoute || currentRoute) {
			dispatch(getRoute(currentPath))
		}
	}, [dispatch, location, currentRoute])

	console.log(currentRoute)
	return (
		<ContainerBtns>
			<BtnContact
				icon={wspweb}
				title='Whatsapp'
				pathname={currentRoute}
			/>
			<BtnContact icon={mailweb} title='viajes y turismo' />
		</ContainerBtns>
	)
}

export default FloatingButtons
