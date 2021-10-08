import Splide from '@splidejs/react-splide/dist/js/components/Splide'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'
import { splideOptionsOffers } from 'lib/splide'
import React from 'react'
import { OffersCard } from '../OffersCard'

export const HomeOffersFlash = ({ image }) => {
	return (
		<div className='recomendedCard-container'>
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
	)
}
