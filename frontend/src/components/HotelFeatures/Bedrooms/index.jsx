import React from 'react'
import { SliderRooms } from './styles'
import { Splide } from '@splidejs/react-splide'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'
import { Room } from './styles'
import imgPrueba from '../../../images/btn.png'
import { splideOptionsBedrooms } from 'lib/splide'

const Bedrooms = () => {
	return (
		<SliderRooms>
			<div className='containerRooms'>
				<Splide options={splideOptionsBedrooms}>
					<SplideSlide className='splideslide'>
						<Room>
							<img src={imgPrueba} alt='habitación' />
						</Room>
					</SplideSlide>
					<SplideSlide className='splideslide'>
						<Room>
							<img src={imgPrueba} alt='habitación' />
						</Room>
					</SplideSlide>
					<SplideSlide className='splideslide'>
						<Room>
							<img src={imgPrueba} alt='habitación' />
						</Room>
					</SplideSlide>
					<SplideSlide className='splideslide'>
						<Room>
							<img src={imgPrueba} alt='habitación' />
						</Room>
					</SplideSlide>
					<SplideSlide className='splideslide'>
						<Room>
							<img src={imgPrueba} alt='habitación' />
						</Room>
					</SplideSlide>
					<SplideSlide className='splideslide'>
						<Room>
							<img src={imgPrueba} alt='habitación' />
						</Room>
					</SplideSlide>
					<SplideSlide className='splideslide'>
						<Room>
							<img src={imgPrueba} alt='habitación' />
						</Room>
					</SplideSlide>
					<SplideSlide className='splideslide'>
						<Room>
							<img src={imgPrueba} alt='habitación' />
						</Room>
					</SplideSlide>
				</Splide>
			</div>
		</SliderRooms>
	)
}

export default Bedrooms
