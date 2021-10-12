import React, { useState, useEffect } from 'react'
import { Button } from '../styles'

const BtnContact = ({ icon, title, pathname, routes }) => {
	const [showToolTip, setShowToolTip] = useState(true)

	useEffect(() => {
		const handleToolTip = () => {
			setTimeout(() => {
				setShowToolTip(false)
			}, 4000)
		}
		handleToolTip()
	}, [])

	const handleDisappear = () => {
		const animationMail =
			showToolTip === false ? `tiptextM animation` : `tiptextM`
		const animationwsp =
			showToolTip === false ? `tiptextW animation` : `tiptextW`
		return { animationMail, animationwsp }
	}

	return (
		<Button>
			{title === 'Whatsapp' ? (
				<a
					href='https://www.google.com/?hl=es'
					target='_blank'
					rel='noreferrer'
					className='acontainer'
				>
					<img src={icon} alt={title} className='icons' />

					<span className={handleDisappear().animationwsp}>
						{routes.message}
					</span>
				</a>
			) : (
				<a
					href='https://www.google.com/?hl=es'
					target='_blank'
					rel='noreferrer'
					className='acontainer'
				>
					<img src={icon} alt={title} className='icons' />

					<span className={handleDisappear().animationMail}>
						Contactanos por correo
					</span>
				</a>
			)}
		</Button>
	)
}

export default BtnContact
