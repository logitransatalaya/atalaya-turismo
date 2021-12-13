import React, { useState } from 'react'
import { Room } from './styles'
import { SliderRooms } from './styles'
import { useDispatch } from 'react-redux'
import { Splide } from '@splidejs/react-splide'
import { splideOptionsBedrooms } from 'lib/splide'
import { ModalImg } from 'components/GlobalComponents/ModalImg'
import { handleModalImages } from 'state/actions/toolTipActions'
import SplideSlide from '@splidejs/react-splide/dist/js/components/SplideSlide'

const HotelBedrooms = ({ img }) => {
	const [state, setState] = useState(false)
	const dispatch = useDispatch()
	const handleShow = (img, num) => {
		dispatch(handleModalImages({ img, num }))
	}
	return img ? (
		<SliderRooms>
			{state && (
				<ModalImg
					handleShow={handleShow}
					photos={img}
					state={state}
					setState={setState}
				/>
			)}

			<div className='containerRooms'>
				<Splide options={splideOptionsBedrooms}>
					{img.map((images, i) => {
						return (
							<SplideSlide key={i} className='splideslide'>
								<div
									onClick={() => {
										handleShow(images.url_img, i + 1)
										setState(!state)
									}}
								>
									<Room>
										<img
											src={images.url_img}
											alt={images.name_img}
										/>
									</Room>
								</div>
							</SplideSlide>
						)
					})}
				</Splide>
			</div>
		</SliderRooms>
	) : null
}

export default HotelBedrooms
