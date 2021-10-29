import Bedrooms from '../Bedrooms'
import { Qualification } from '../Qualification'
import React, { useEffect, useState } from 'react'
import { HeaderCardStyled, CardGrid } from './style'
import { ReactComponent as IconLocation } from 'images/ubicacion.svg'
import { ModalImg } from 'components/GlobalComponents/ModalImg'
import { handleModalImages } from '../../../../state/actions/toolTipActions'
import { useDispatch } from 'react-redux'

export const HeaderFeature = ({ city, photos }) => {
	const dispatch = useDispatch()
	const { photos1 } = photos
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
					<div className='card_title'>TRYP MEDELLIN ESTADIO</div>
					<div className='card_location'>
						<div className='card_icon'>
							<IconLocation />
						</div>
						<p>{city}</p>
					</div>
					<div>
						<Qualification stars={3} />
					</div>
				</div>
			</HeaderCardStyled>
			{screen > 850 ? (
				<CardGrid>
					{photos1.map((photo, i) => (
						<div
							className={`card_${i + 1} card_hidden`}
							key={i}
							onClick={() => handleShow(photo.urlCode)}
						>
							<img
								className='box_img'
								src={photo.urlCode}
								alt={`img${i + 1}`}
							/>
						</div>
					))}
				</CardGrid>
			) : (
				<Bedrooms img={photos1} />
			)}
		</>
	)
}
