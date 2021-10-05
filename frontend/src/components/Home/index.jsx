import React from 'react'
import { PlansCard } from './PlansCard'
import { HomeStyled } from './styles.js'
import { Benefits } from '../BenefitsSection'
import { splideOptions } from 'lib/splide.js'
import { Container } from 'components/Container/index.jsx'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

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
				<div>Aqui va la imagen de destinos destacados </div>
				<div>Aqui van las pfertas flash </div>
				<div>
					<Benefits />
				</div>
			</HomeStyled>
		</Container>
	)
}
