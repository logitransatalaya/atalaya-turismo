import { HomeStyled } from './styles.js'
import React from 'react'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { PlansCard } from './PlansCard'
import { WhyAtalaya } from '../WhyAtalaya'
import { Container } from 'components/Container/index.jsx'
import { splideOptions, splideOptionsOffers } from 'lib/splide.js'
import image from '../../images/btn.png'

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
					<WhyAtalaya />
				</div>
			</HomeStyled>
		</Container>
	)
}
