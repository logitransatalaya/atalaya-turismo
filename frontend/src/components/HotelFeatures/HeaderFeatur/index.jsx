import React from 'react'
import { Qualification } from '../Qualification'
import { HeaderCardStyled, CardGrid } from './style'
import { ReactComponent as IconPalmera } from '../../../images/icono-palmera.svg'

export const HeaderFeature = () => {
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
						<Qualification />
					</div>
				</div>
			</HeaderCardStyled>
			<CardGrid>
				<div className='card_1'>
					<img
						className='box_card'
						src='https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg'
						alt=''
					/>
				</div>
				<div className='card_2'>
					<img
						className='box_card'
						src={
							'https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg'
						}
						alt=''
					/>
				</div>
				<div className='card_3'>
					<img
						className='box_card'
						src={
							'https://cdn.forbes.co/2020/02/sofitel-legend-santa-clara-outdoor-pool.jpg'
						}
						alt=''
					/>
				</div>
				<div className='card_4'>
					<img
						className='box_card'
						src={
							'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/17/26/1726359_v5.jpeg'
						}
						alt=''
					/>
				</div>
			</CardGrid>
		</div>
	)
}
