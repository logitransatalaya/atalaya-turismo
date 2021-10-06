import React from 'react'
import { Slider } from 'components/Home/Slider/styles'
import { Splide } from '@splidejs/react-splide'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'
import { Room } from './styles'
import imgPrueba from '../../../images/btn.png'
import { splideOptionsBedrooms } from 'lib/splide'

const Bedrooms = () => {
	return (
		<Slider>
			<Splide options={splideOptionsBedrooms}>
				<SplideSlide>
					<Room>
						<img src={imgPrueba} alt='habitación' />
					</Room>
				</SplideSlide>
				<SplideSlide>
					<Room>
						<img src={imgPrueba} alt='habitación' />
					</Room>
				</SplideSlide>
				<SplideSlide>
					<Room>
						<img src={imgPrueba} alt='habitación' />
					</Room>
				</SplideSlide>
				<SplideSlide>
					<Room>
						<img src={imgPrueba} alt='habitación' />
					</Room>
				</SplideSlide>
				<SplideSlide>
					<Room>
						<img src={imgPrueba} alt='habitación' />
					</Room>
				</SplideSlide>
				<SplideSlide>
					<Room>
						<img src={imgPrueba} alt='habitación' />
					</Room>
				</SplideSlide>
				<SplideSlide>
					<Room>
						<img src={imgPrueba} alt='habitación' />
					</Room>
				</SplideSlide>
				<SplideSlide>
					<Room>
						<img src={imgPrueba} alt='habitación' />
					</Room>
				</SplideSlide>
			</Splide>
		</Slider>
	)
}

export default Bedrooms
