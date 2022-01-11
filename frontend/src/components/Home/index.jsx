import React from 'react'
import { HomeStyled } from './styles.js'
// import { HomePlans } from './HomePlans'
import HomeSlider from './HomeSlider/index.jsx'
import { HomeOffersFlash } from './HomeOffersFlash'
import { Title } from 'components/GlobalComponents/Title'
import { HomeWhyAtalaya } from './HomeWhyAtalaya/index.jsx'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { Container } from 'components/GlobalComponents/Container/index.jsx'

// componente global del home
export const Home = () => {
	return (
		<HomeStyled>
			<Container>
				{/* <HomePlans /> */}
				<HomeSlider />
				<Title text={'OFERTAS FLASH'} fontWeight='true' mt='2rem' />
				<HomeOffersFlash />
				<HomeWhyAtalaya />
			</Container>
			<div className='benefitsSection-imageBackground'>
				<img src='/home/benefitsSection-background.png' alt='' />
			</div>
		</HomeStyled>
	)
}
