import React from 'react'
import { splideOptions } from 'lib/splide.js'
import { HomePlansCard } from './HomePlansCard'
import Splide from '@splidejs/react-splide/dist/js/components/Splide'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'

export const HomePlans = () => {
	return (
		<div className='plansCard-container'>
			<Splide options={splideOptions}>
				<SplideSlide>
					<div className='plansCard-slide'>
						<HomePlansCard text='REGIONALES' color='orange' />
						<HomePlansCard text='NACIONALES' color='yellow' />
					</div>
				</SplideSlide>
				<SplideSlide>
					<div className='plansCard-slide'>
						<HomePlansCard text='INTERNACIONALES' color='orange' />
						<HomePlansCard text='CORPORATIVOS' color='yellow' />
					</div>
				</SplideSlide>
			</Splide>
		</div>
	)
}
