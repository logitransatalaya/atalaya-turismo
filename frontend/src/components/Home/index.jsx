import React from 'react'
import { HomePlans } from './HomePlans'
import { HomeStyled } from './styles.js'
import image from '../../images/btn.png'
import { Benefits } from './BenefitsSection'
import SliderComponent from './Slider/index.jsx'
import { HomeOffersFlash } from './HomeOffersFlash'
import { Title } from 'components/GlobalComponents/Title'
import { Container } from 'components/Container/index.jsx'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export const Home = () => {
	return (
		<Container>
			<HomeStyled>
				<HomePlans />
				<SliderComponent />
				<Title text={'OFERTAS FLASH'} />
				<HomeOffersFlash image={image} />
				<Benefits />
			</HomeStyled>
		</Container>
	)
}
