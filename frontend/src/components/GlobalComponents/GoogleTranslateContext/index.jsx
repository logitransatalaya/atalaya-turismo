/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { useGoogleTranslate } from 'hooks/useGoogleTranslate'

export const GoogleTranslateContext = ({ children }) => {
	const location = useLocation()
	const { currentPath, fontElementsList } = useSelector(
		(state) => state.toolTipReducer.googleTranslate
	)
	const { mutationObserver, dropFontElements } =
		useGoogleTranslate(currentPath)

	useEffect(() => {
		const observerOptions = {
			attributes: true,
			childList: true,
			characterData: true
		}
		console.log('entra')
		mutationObserver.observe(document.body, observerOptions)
		document.cookie = 'googtrans=; valor=null; expires=sesión; path=/;'
		return () => mutationObserver.disconnect()
		// No include mutationOberserver dependencie to the array please!
	}, [currentPath])

	useEffect(() => {
		dropFontElements(fontElementsList)
	}, [location.pathname])

	return <div>{children}</div>
}
