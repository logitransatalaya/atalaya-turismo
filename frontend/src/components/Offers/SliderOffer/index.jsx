import React from 'react'
import { ContainerSplider } from './styles'
import { splideOptionsOfferts } from 'lib/splide'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const SliderOffer = ({ photos }) => {
	return (
		<ContainerSplider>
			<Splide options={splideOptionsOfferts} classname='splider'>
				{photos.map((img, i) => (
					<SplideSlide key={i}>
						<img src={img.url} alt={img.alt} width='100%' />
					</SplideSlide>
				))}
			</Splide>
		</ContainerSplider>
	)
}

export default SliderOffer
