import { ArrowScroll } from './styles'
import React, { useEffect, useState } from 'react'
import arrowTop from '../../../../images/svg/arrow.svg'

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false)

	useEffect(() => {
		const checkScrollTop = () => {
			if (!showScroll && window.pageYOffset > 400) {
				setShowScroll(true)
			} else if (showScroll && window.pageYOffset <= 400) {
				setShowScroll(false)
			}
		}
		window.addEventListener('scroll', checkScrollTop)
	})

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div>
			<ArrowScroll
				onClick={scrollTop}
				display={showScroll ? `flex` : `none`}
			>
				<img src={arrowTop} alt='Arrow top' />
			</ArrowScroll>
		</div>
	)
}

export default ScrollArrow
