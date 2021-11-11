import React from 'react'
import { HomeStyled } from './styles.js'
// import { HomePlans } from './HomePlans'
import HomeSlider from './HomeSlider/index.jsx'
import { HomeOffersFlash } from './HomeOffersFlash'
import { Title } from 'components/GlobalComponents/Title'
import { Container } from 'components/Container/index.jsx'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { HomeBenefitsSection } from './HomeBenefitsSection/index.jsx'

// componente global de home
export const Home = () => {
	return (
		<HomeStyled>
			<Container>
				{/* <HomePlans /> */}
				<HomeSlider />
				<Title text={'OFERTAS FLASH'} fontWeight />
				<HomeOffersFlash />
				<HomeBenefitsSection />
			</Container>
			<div className='benefitsSection-imageBackground'>
				<img src='/home/benefitsSection-background.png' alt='' />
			</div>
		</HomeStyled>
	)
}
