/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useGoogleTranslate } from 'hooks/useGoogleTranslate'

export const GoogleTranslateContext = ({ children }) => {
	const { mutationObserver } = useGoogleTranslate()

	useEffect(() => {
		const observerOptions = {
			attributes: true,
			childList: true,
			characterData: true
		}
		mutationObserver.observe(document.body, observerOptions)
		document.cookie = 'googtrans=; valor=null; expires=sesión; path=/;'
		return () => mutationObserver.disconnect()
		// No include mutationOberserver dependencie to the array please!
	}, [])

	return <div>{children}</div>
}
