import React, { useEffect, useState } from 'react'
import { ContainerBtns } from './styles'
import BtnContact from './BtnsContacts'
import wspweb from 'images/svg/wspweb.svg'
import mailweb from 'images/svg/mailweb.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { updateRoute } from 'state/actions/toolTipActions'

const FloatingButtons = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const { currentRoute } = useSelector((state) => state.toolTipReducer)
	const [route, setRoute] = useState(history.location.pathname)
	const { pathname } = history.location

	useEffect(() => {
		dispatch(updateRoute(pathname))
		setRoute(pathname)
		console.log(pathname, currentRoute)
	}, [])

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
