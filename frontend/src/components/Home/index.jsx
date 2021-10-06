import React from 'react'
import { PlansCard } from './PlansCard'
import image from '../../images/btn.png'
import { HomeStyled } from './styles.js'
import { Benefits } from '../BenefitsSection'
import SliderComponent from './Slider/index.jsx'
import { OffersCard } from './OffersCard/index.jsx'
import { Container } from 'components/Container/index.jsx'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { splideOptions, splideOptionsOffers } from 'lib/splide.js'

export const Home = () => {
	return (
		<Container>
			<HomeStyled>
				<div className='plansCard-container'>
					<Splide options={splideOptions}>
						<SplideSlide>
							<div className='plansCard-slide'>
								<PlansCard text='REGIONALES' color='orange' />
								<PlansCard text='NACIONALES' color='yellow' />
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className='plansCard-slide'>
								<PlansCard
									text='INTERNACIONALES'
									color='orange'
								/>
								<PlansCard text='CORPORATIVOS' color='yellow' />
							</div>
						</SplideSlide>
					</Splide>
				</div>
				<SliderComponent />
				<div className='plansCard-container'>
					<Splide options={splideOptionsOffers}>
						<SplideSlide>
							<OffersCard image={image} title={'CANCUN'} />
						</SplideSlide>
						<SplideSlide>
							<OffersCard image={image} title={'MEXICO'} />
						</SplideSlide>
						<SplideSlide>
							<OffersCard image={image} title={'COLOMBIA'} />
						</SplideSlide>
						<SplideSlide>
							<OffersCard image={image} title={'CHILE'} />
						</SplideSlide>
					</Splide>
				</div>
				<div>
					<Benefits />
				</div>
			</HomeStyled>
		</Container>
	)
}