import React, { useState, useEffect } from 'react'
import { Button } from '../styles'

const BtnContact = ({ Icon, IconResponsive, title }) => {
	const [showToolTip, setShowToolTip] = useState(true)

	// useEffect(() => {
	// 	const widthScreen = window.innerWidth
	// 	setHandleWidth(widthScreen)

	// 	window.onresize = function () {
	// 		setHandleWidth(window.innerWidth)
	// 	}

	// 	const hiddenTooltip = () => {
	// 		handleWidth < 600 ? setHiddenTooltip(true) : setHiddenTooltip(false)
	// 	}

	// 	hiddenTooltip()
	// }, [handleWidth])

	useEffect(() => {
		const handleToolTip = () => {
			setTimeout(() => {
				setShowToolTip(false)
			}, 4000)
		}
		handleToolTip()
	}, [])

	console.log(showToolTip)

	return (
		<Button>
			{title === 'Whatsapp' ? (
				<a href='https://www.google.com/?hl=es' className='acontainer'>
					<Icon />
					{showToolTip && (
						<span className='tiptextW' showToolTip>
							Contactanos por Whatsapp
						</span>
					)}
				</a>
			) : (
				<a href='https://www.google.com/?hl=es'>
					<Icon />
					{showToolTip && (
						<span className='tiptextW' showToolTip>
							Contactanos por correo
						</span>
					)}
				</a>
			)}
		</Button>
	)
}

export default BtnContact
