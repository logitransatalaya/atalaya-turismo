/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import imgNL from '../../../images/iconCountries/nl.png'
import imgUS from '../../../images/iconCountries/us.png'
import imgCO from '../../../images/iconCountries/co.png'
import imgBZ from '../../../images/iconCountries/bz.png'
import { useGoogleTranslate } from 'hooks/useGoogleTranslate'

export const GoogleTranslateContext = ({ children }) => {
	const [iconElement, setIconElement] = useState(null)
	const [intervalFlag, setIntervalFlag] = useState(true)

	const interval = () => {
		let index = 0
		const urls = [imgCO, imgNL, imgBZ, imgUS]

		iconElement?.setAttribute('src', urls[0])
		iconElement?.setAttribute(
			'style',
			'width: 25px; height:100%; margin-left: 0.5rem'
		)

		setInterval(() => {
			iconElement?.setAttribute('src', urls[index])

			if (index === urls.length - 1) index = 0
			else index += 1
		}, 4000)
	}

	const { mutationObserver } = useGoogleTranslate(setIconElement)

	useEffect(() => {
		const observerOptions = {
			attributes: true,
			childList: true,
			characterData: true
		}
		mutationObserver.observe(document.body, observerOptions)
		document.cookie = 'googtrans=; valor=null; expires=sesión; path=/;'
		return () => mutationObserver.disconnect()
		// No include mutationOberserver dependency to the array please!
	}, [])

	useEffect(() => {
		if (iconElement !== null && intervalFlag) {
			interval()
			setIntervalFlag(false)
		}
	}, [iconElement])

	return <div>{children}</div>
}
