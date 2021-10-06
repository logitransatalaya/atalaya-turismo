import { SplideSlide, Splide } from '@splidejs/react-splide'
import React from 'react'
import { ContainerHotelInfo, SplideInfo } from './styles'
import { splideOptionsVertical } from 'lib/splide'

const HotelInfo = () => {
	return (
		<ContainerHotelInfo>
			<div className='item1'>
				<div className='info'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Tenetur vero voluptates ex fuga natus animi, maxime
						dolor laborum. Libero vero modi magni dolorem, error
						ducimus. Animi ducimus odio cupiditate fuga?
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Expedita, nemo neque! Amet magnam magni eveniet earum
						excepturi placeat iusto repellat aliquam porro et labore
						reiciendis architecto, corporis quibusdam incidunt modi?
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Perferendis neque nihil aliquid ut sed illo ipsum
						consectetur nobis cupiditate? Nesciunt beatae, enim
						quibusdam a quisquam alias aut voluptatibus. Ducimus,
						mollitia.
					</p>
				</div>
			</div>
			<div className='item2'>
				{/* slider */}
				<div className='sliderContain'></div>
			</div>
		</ContainerHotelInfo>
	)
}

export default HotelInfo
