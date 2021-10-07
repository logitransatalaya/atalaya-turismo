import React, { useEffect, useState } from 'react'
import { Qualification } from '../Qualification'
import { HeaderCardStyled, CardGrid } from './style'
import { ReactComponent as IconPalmera } from '../../../images/icono-palmera.svg'
import { useSelector } from 'react-redux'
import Bedrooms from '../Bedrooms'

const img =
	'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg'
const images = {
	img1: [img, img, img, img],
	img2: [img, img, img, img, img, img]
}

export const HeaderFeature = () => {
	const [screen, setScreen] = useState(null)
	const { calification } = useSelector(
		(state) => state.homeReducer.servicesHotel
	)

	useEffect(() => {
		window.onresize = function () {
			setScreen(window.innerWidth)
		}
	}, [screen])
	return (
		<div>
			<HeaderCardStyled>
				<div>
					<div className='card_title'>TRYP MEDELLIN ESTADIO</div>
					<div className='card_location'>
						<div className='card_icon'>
							<IconPalmera />
						</div>
						<p>Medellin</p>
					</div>
					<div>
						<Qualification stars={calification} />
					</div>
				</div>
			</HeaderCardStyled>
			{screen > 850 ? (
				<CardGrid>
					<div className='card_1'>
						<img
							className='box_card'
							src='https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg'
							alt='img1'
						/>
					</div>
					<div className='card_2'>
						<img
							className='box_card'
							src={
								'https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg'
							}
							alt='img2'
						/>
					</div>
					<div className='card_3'>
						<img
							className='box_card'
							src={
								'https://cdn.forbes.co/2020/02/sofitel-legend-santa-clara-outdoor-pool.jpg'
							}
							alt='img3'
						/>
					</div>
					<div className='card_4'>
						<img
							className='box_card'
							src={
								'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/17/26/1726359_v5.jpeg'
							}
							alt='img4'
						/>
					</div>
				</CardGrid>
			) : (
				<Bedrooms img={images.img1} />
			)}
		</div>
	)
}
