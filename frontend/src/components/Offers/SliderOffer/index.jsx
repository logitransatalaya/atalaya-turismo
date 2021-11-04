import React from 'react'
import { ContainerSplider } from './styles'
import { splideOptionsOfferts } from 'lib/splide'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const SliderOffer = ({ photos }) => {
	return (
		<ContainerSplider>
			<Splide options={splideOptionsOfferts} classname='splider'>
				{photos.map((img, i) => {
					return (
						<SplideSlide key={i}>
							<img
								src={img.url_img}
								alt={img.name_img}
								width='100%'
								height='100%'
							/>
						</SplideSlide>
					)
				})}
			</Splide>
		</ContainerSplider>
	)
}

export default SliderOffer
