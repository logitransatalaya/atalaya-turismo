import { HomeStyled } from './styles.js'
import React from 'react'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { PlansCard } from './PlansCard'
import { WhyAtalaya } from '../WhyAtalaya'

export const Home = () => {
	return (
		<HomeStyled>
			<div className='plansCard-container'>
				<Splide
					options={{
						type: 'loop',
						perPage: 2,
						gap: '1rem',
						perMove: 1,
						arrows: false,
						autoplay: true,
						padding: {
							left: '0.5rem',
							right: '0.5rem'
						},
						classes: {
							pagination:
								'splide__pagination dotPaginations_color'
						},
						breakpoints: {
							650: {
								perPage: 1,
								height: '10rem'
							}
						}
					}}
				>
					<SplideSlide>
						<div className='plansCard-slide'>
							<PlansCard text='REGIONALES' color='orange' />
							<PlansCard text='NACIONALES' color='yellow' />
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className='plansCard-slide'>
							<PlansCard text='INTERNACIONALES' color='orange' />
							<PlansCard text='CORPORATIVOS' color='yellow' />
						</div>
					</SplideSlide>
				</Splide>
			</div>
			<div>Aqui va la imagen de destinos destacados </div>
			<div>Aqui van las pfertas flash </div>
			<div>
				<WhyAtalaya />
			</div>
		</HomeStyled>
	)
}
