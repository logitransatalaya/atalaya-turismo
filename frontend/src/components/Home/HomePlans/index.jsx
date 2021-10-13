import React from 'react'
import { PlansCard } from './PlansCard'
import { splideOptions } from 'lib/splide.js'
import Splide from '@splidejs/react-splide/dist/js/components/Splide'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'

export const HomePlans = () => {
	return (
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
						<PlansCard text='INTERNACIONALES' color='orange' />
						<PlansCard text='CORPORATIVOS' color='yellow' />
					</div>
				</SplideSlide>
			</Splide>
		</div>
	)
}
