import React from 'react'
import { Room } from './styles'
import { SliderRooms } from './styles'
import { Splide } from '@splidejs/react-splide'
import { splideOptionsBedroomsModal } from 'lib/splide'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'

const ImgBedroomsModal = ({ img, num }) => {
	console.log(num)
	return img ? (
		<SliderRooms>
			<div className='containerRooms'>
				<Splide options={{ start: num, ...splideOptionsBedroomsModal }}>
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
	) : null
}

export default ImgBedroomsModal
