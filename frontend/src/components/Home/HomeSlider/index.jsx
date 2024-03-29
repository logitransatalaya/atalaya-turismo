import { Slider } from './styles'
import { splideOptionsBanners } from 'lib/splide'
import React, { useEffect, useState } from 'react'
// movil //
import slideDefault00 from '../../../images/destinos-movil.jpg'
import slideDefault11 from '../../../images/caño-movil.jpg'
import slideDefault22 from '../../../images/san-andres-movil.jpg'
import slideDefault33 from '../../../images/mina-sal-movil.jpg'
import slideDefault44 from '../../../images/guatape-movil.jpg'
import slideDefault66 from '../../../images/desierto-movil.jpg'
import slideDefault77 from '../../../images/cartagena-movil.jpg'
// web //
import slideDefault0 from '../../../images/destinos-web.jpg'
import slideDefault1 from '../../../images/caño.png'
import slideDefault2 from '../../../images/san-andres.png'
import slideDefault3 from '../../../images/guatape.png'
import slideDefault4 from '../../../images/desierto.png'
import slideDefault5 from '../../../images/cartagena.png'
import slideDefault6 from '../../../images/mina-de-sal.png'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useSelector } from 'react-redux'
import { useApi } from '../../../hooks/useApi'
const arrayInfo = [
	{
		url: slideDefault0,
		urlMovil: slideDefault00,
		alt: 'mas destacados'
	},
	{
		url: slideDefault1,
		urlMovil: slideDefault11,
		alt: 'mas destacados'
	},
	{
		url: slideDefault2,
		urlMovil: slideDefault22,
		alt: 'mas destacados'
	},
	{
		url: slideDefault3,
		urlMovil: slideDefault33,
		alt: 'mas destacados'
	},
	{
		url: slideDefault4,
		urlMovil: slideDefault44,
		alt: 'mas destacados'
	},
	{
		url: slideDefault5,
		urlMovil: slideDefault11,
		alt: 'mas destacados'
	},
	{
		url: slideDefault6,
		urlMovil: slideDefault66,
		alt: 'mas destacados'
	},
	{
		url: slideDefault6,
		urlMovil: slideDefault77,
		alt: 'mas destacados'
	}
]
const HomeSlider = () => {
	// Estado para capturar el tamaño de la pantalla
	const [handleWidth, setHandleWidth] = useState(window.innerWidth)
	const { banners } = useSelector((state) => state.bannerHomeReducer)
	const { getBanners } = useApi()

	// funcion para hacer la peticion a la db
	useEffect(() => {
		if (banners === null) {
			getBanners()
		}
	}, [banners, getBanners])

	// funcion para capturar el tamaño de pantalla
	useEffect(() => {
		window.onresize = () => setHandleWidth(window.innerWidth)
	}, [])

	return (
		<Slider>
			<Splide options={splideOptionsBanners}>
				{arrayInfo?.map((data, i) => (
					<SplideSlide key={i}>
						<img
							src={handleWidth > 650 ? data.url : data.urlMovil}
							alt={data.description}
							width='100%'
						/>
					</SplideSlide>
				))}
			</Splide>
		</Slider>
	)
}

export default HomeSlider
