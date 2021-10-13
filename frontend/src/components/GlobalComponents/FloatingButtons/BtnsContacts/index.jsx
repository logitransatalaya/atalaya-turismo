import React, { useState, useEffect } from 'react'
import { Button } from '../styles'

const BtnContact = ({ icon, title, routes, onClick, state }) => {
	const [showToolTip, setShowToolTip] = useState(true)

	useEffect(() => {
		if (state && state.page === 'hotel') {
			setShowToolTip(true)
		} else if (state && state.page === 'tour') {
			setShowToolTip(true)
		} else if (state && state.page === 'plans') {
			setShowToolTip(true)
		}

		const handleToolTip = () => {
			setTimeout(() => {
				setShowToolTip(false)
			}, 4000)
		}
		handleToolTip()
	}, [state])

	const handleDisappear = () => {
		const animationMail =
			showToolTip === false ? `tiptextM animation` : `tiptextM`
		const animationwsp =
			showToolTip === false ? `tiptextW animation` : `tiptextW`
		return { animationMail, animationwsp }
	}

	return (
		<Button onClick={onClick}>
			{title === 'Whatsapp' ? (
				<div className='acontainer'>
					<img src={icon} alt={title} className='icons' />

					<span className={handleDisappear().animationwsp}>
						{routes.message}
					</span>
				</div>
			) : (
				<div className='acontainer'>
					<img src={icon} alt={title} className='icons' />

					<span className={handleDisappear().animationMail}>
						Contactanos por correo
					</span>
				</div>
			)}
		</Button>
	)
}

export default BtnContact
