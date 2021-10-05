import React from 'react'
import { PlansCard } from './PlansCard'
import image from '../../images/btn.png'
import { HomeStyled } from './styles.js'
import { Benefits } from '../BenefitsSection'
import { Container } from 'components/Container/index.jsx'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { splideOptions, splideOptionsOffers } from 'lib/splide.js'

import { OffersCard } from './OffersCard/index.jsx'
import SliderComponent from './Slider/index.jsx'

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
							<OffersCard image={image} />
						</SplideSlide>
						<SplideSlide>
							<OffersCard image={image} />
						</SplideSlide>
						<SplideSlide>
							<OffersCard image={image} />
						</SplideSlide>
						<SplideSlide>
							<OffersCard image={image} />
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
