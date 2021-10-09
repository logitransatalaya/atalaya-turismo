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
					{img.map((imges, i) => (
						<SplideSlide key={i} className='splideslide'>
							<Room>
								<img src={imges.urlCode} alt={imges.name} />
							</Room>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</SliderRooms>
	)
}

export default Bedrooms
