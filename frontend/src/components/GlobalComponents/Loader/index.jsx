import React from 'react'
import lottie from 'lottie-web'
import { useRef, useEffect } from 'react'
import './style.css'

export const Loader = () => {
	const loader = useRef(null)
	useEffect(() => {
		lottie.loadAnimation({
			container: loader.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('images/lottie/loading.json')
		})
	}, [])
	return <div className='loader' ref={loader}></div>
}
