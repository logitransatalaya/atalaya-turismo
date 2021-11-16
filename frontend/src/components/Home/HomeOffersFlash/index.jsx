import React from 'react'
import { useEffect } from 'react'
import { useApi } from 'hooks/useApi'
import { useSelector } from 'react-redux'
import { splideOptionsOffers } from 'lib/splide'
import { HomeOffersCard } from './HomeOffersCard'
import Splide from '@splidejs/react-splide/dist/js/components/Splide'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'

export const HomeOffersFlash = () => {
	const { getOffersFlash } = useApi()
	const { offersflash } = useSelector((state) => state.OffersFlashReducer)

	useEffect(() => {
		if (offersflash === null) {
			getOffersFlash()
		}
	}, [offersflash, getOffersFlash])

	return (
		<div className='recomendedCard-container'>
			{offersflash && (
				<Splide options={splideOptionsOffers}>
					{offersflash.map((ofers, i) => (
						<SplideSlide key={i}>
							<HomeOffersCard
								image={ofers.url_img}
								title={ofers.title}
								cop={ofers.cop}
							/>
						</SplideSlide>
					))}
				</Splide>
			)}
		</div>
	)
}
