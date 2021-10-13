import { Slider } from './styles'
import { splideOptionsLoop } from 'lib/splide'
import React, { useEffect, useState } from 'react'
import slideMobile from 'images/imagenbannerhomemovil.png'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import slideDefault from '../../../images/bannerdestinosdestacados.png'

const SliderComponent = () => {
	const [handleWidth, setHandleWidth] = useState(window.innerWidth)

	useEffect(() => {
		window.onresize = () => {
			setHandleWidth(window.innerWidth)
		}
	}, [handleWidth])

	const handleImage = () => {
		return handleWidth < 900 ? slideMobile : slideDefault
	}

	return (
		<Slider>
			<Splide options={splideOptionsLoop}>
				<SplideSlide>
					<img
						src={handleImage()}
						alt='mas destacados'
						width='100%'
					/>
				</SplideSlide>
				<SplideSlide>
					<img
						src={handleImage()}
						alt='mas destacados'
						width='100%'
					/>
				</SplideSlide>
				<SplideSlide>
					<img
						src={handleImage()}
						alt='mas destacados'
						width='100%'
					/>
				</SplideSlide>
			</Splide>
		</Slider>
	)
}

export default SliderComponent
