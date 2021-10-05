import { HomeStyled } from './styles.js'
import React from 'react'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { PlansCard } from './PlansCard'
import { WhyAtalaya } from '../WhyAtalaya'
import { Container } from 'components/Container/index.jsx'
import { splideOptions } from 'lib/splide.js'

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
					<WhyAtalaya />
				</div>
			</HomeStyled>
		</Container>
	)
}
