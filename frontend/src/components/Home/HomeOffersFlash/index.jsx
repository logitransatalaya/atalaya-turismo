import React from 'react'
import { useEffect } from 'react'
import { useApi } from 'hooks/useApi'
import { useSelector } from 'react-redux'
import { splideOptionsOffers } from 'lib/splide'
import { HomeOffersCard } from './HomeOffersCard'
import Splide from '@splidejs/react-splide/dist/js/components/Splide'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'
import { Title } from 'components/GlobalComponents/Title'

// const offersflash = [
// 	{
// 		id: 1,
// 		url_img:
// 			'https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg',
// 		title: 'Mexico',
// 		cop: 2960000
// 	},
// 	{
// 		id: 1,
// 		url_img:
// 			'https://media-cdn.tripadvisor.com/media/photo-s/16/24/88/76/decameron-aquarium.jpg',
// 		title: 'Colombia',
// 		cop: 2960000
// 	},
// 	{
// 		id: 1,
// 		url_img: 'https://i.ibb.co/QXWfmgH/Hotel-tayrona-rodadero-piscina.jpg',
// 		title: 'Chile',
// 		cop: 2960000
// 	},
// 	{
// 		id: 1,
// 		url_img: 'https://i.ibb.co/bQ2Zrm9/Hotel-tayrona-rodadero-lobby.jpg',
// 		title: 'Punta Cana',
// 		cop: 2960000
// 	}
// ]
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
