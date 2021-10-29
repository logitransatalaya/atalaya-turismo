import React from 'react'
import { Room } from './styles'
import { SliderRooms } from './styles'
import { Splide } from '@splidejs/react-splide'
import { splideOptionsBedrooms } from 'lib/splide'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'

const Bedrooms = ({ img }) => {
	return (
		<SliderRooms>
			<div className='containerRooms'>
				<Splide options={splideOptionsBedrooms}>
					{img.map((images, i) => (
						<SplideSlide key={i} className='splideslide'>
							<Room>
								<img
									src={images.url_img}
									alt={images.name_img}
								/>
							</Room>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</SliderRooms>
	)
}

export default Bedrooms
