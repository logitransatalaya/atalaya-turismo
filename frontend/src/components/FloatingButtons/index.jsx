import React from 'react'
import { ContainerBtns } from './styles'
import BtnContact from './BtnsContacts'
import wspweb from 'images/svg/wspweb.svg'
import mailweb from 'images/svg/mailweb.svg'

const FloatingButtons = () => {
	return (
		<ContainerBtns>
			<BtnContact icon={wspweb} title='Whatsapp' />
			<BtnContact icon={mailweb} title='viajes y turismo' />
		</ContainerBtns>
	)
}

export default FloatingButtons
