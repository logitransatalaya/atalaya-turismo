import { Splide, SplideSlide } from '@splidejs/react-splide'
import { splideOptionsOfferts } from 'lib/splide'
import React from 'react'
import { ContainerSplider } from './styles'

const SliderOffer = () => {
	return (
		<ContainerSplider>
			<Splide options={splideOptionsOfferts} classname='splider'>
				<SplideSlide>
					<img
						src='https://cdn.pixabay.com/photo/2018/02/28/16/38/st-andrews-3188376_960_720.jpg'
						alt='San Andres'
						width='100%'
					/>
				</SplideSlide>
				<SplideSlide>
					<img
						src='https://cdn.pixabay.com/photo/2018/02/28/16/38/st-andrews-3188376_960_720.jpg'
						alt='San Andres'
						width='100%'
					/>
				</SplideSlide>
				<SplideSlide>
					<img
						src='https://cdn.pixabay.com/photo/2018/02/28/16/38/st-andrews-3188376_960_720.jpg'
						alt='San Andres'
						width='100%'
					/>
				</SplideSlide>
			</Splide>
		</ContainerSplider>
	)
}

export default SliderOffer
