import React from 'react'
import { ContainerBtns } from './styles'
import BtnContact from './BtnsContacts'
import { ReactComponent as wspweb } from 'images/svg/wspweb.svg'
import { ReactComponent as mailweb } from 'images/svg/mailweb.svg'

const FloatingButtons = () => {
	return (
		<ContainerBtns>
			<BtnContact
				Icon={wspweb}
				iconResponsive='wspmobile'
				title='Whatsapp'
			/>
			<BtnContact
				Icon={mailweb}
				iconResponsive='viajesyturismomobile'
				title='viajes y turismo'
			/>
		</ContainerBtns>
	)
}

export default FloatingButtons
