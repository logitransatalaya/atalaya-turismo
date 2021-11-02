import Bedrooms from '../Bedrooms'
import { useDispatch } from 'react-redux'
import { Qualification } from '../Qualification'
import React, { useEffect, useState } from 'react'
import { HeaderCardStyled, CardGrid } from './style'
import { ModalImg } from 'components/GlobalComponents/ModalImg'
import { ReactComponent as IconLocation } from 'images/ubicacion.svg'
import { handleModalImages } from '../../../../state/actions/toolTipActions'

export const HeaderFeature = ({ stars, cityName, city, photos }) => {
	const dispatch = useDispatch()
	const [screen, setScreen] = useState(window.innerWidth)

	useEffect(() => {
		window.onresize = () => setScreen(window.innerWidth)
	}, [screen])

	const handleShow = (img) => {
		dispatch(handleModalImages(img))
	}

	return (
		<>
			<HeaderCardStyled>
				<ModalImg handleShow={handleShow} />
				<div>
					<div className='card_title'>{city}</div>
					<div className='card_location'>
						<div className='card_icon'>
							<IconLocation />
						</div>
						<p>{cityName}</p>
					</div>
					<div>
						<Qualification stars={stars} />
					</div>
				</div>
			</HeaderCardStyled>
			{screen > 850 ? (
				<CardGrid>
					{photos.map((photo, i) => {
						return (
							<div
								className={`card_${i + 1} card_hidden`}
								key={i}
								onClick={() => handleShow(photo.url_img)}
							>
								<img
									className='box_img'
									src={photo.url_img}
									alt={`img${i + 1}`}
								/>
							</div>
						)
					})}
				</CardGrid>
			) : (
				<Bedrooms img={photos} />
			)}
		</>
	)
}
