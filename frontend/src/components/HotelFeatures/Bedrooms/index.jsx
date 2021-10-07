import React from 'react'
import { Room } from './styles'
import { SliderRooms } from './styles'
import imgPrueba from '../../../images/btn.png'
import { Splide } from '@splidejs/react-splide'
import { splideOptionsBedrooms } from 'lib/splide'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'

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
