import React from 'react'
import { Slider } from './styles'
import { splideOptionsLoop } from 'lib/splide'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import slideDefault from '../../../images/bannerdestinosdestacados.png'

const SliderComponent = () => {
	return (
		<Slider>
			<Splide options={splideOptionsLoop}>
				<SplideSlide>
					<div className='imgcontainer'>
						<img
							src={slideDefault}
							alt='mas destacados'
							width='100%'
						/>
					</div>
				</SplideSlide>
				<SplideSlide>
					<img src={slideDefault} alt='mas destacados' width='100%' />
				</SplideSlide>
				<SplideSlide>
					<img src={slideDefault} alt='mas destacados' width='100%' />
				</SplideSlide>
			</Splide>
		</Slider>
	)
}

export default SliderComponent
