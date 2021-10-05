import React from 'react'
import { Slider } from './styles'
import slideDefault from '../../../images/bannerdestinosdestacados.png'

const SliderComponent = () => {
	return (
		<Slider>
			<img src={slideDefault} alt='Destinos destacados' width='100%' />
		</Slider>
	)
}

export default SliderComponent
