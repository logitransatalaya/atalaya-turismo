import Bedrooms from '../Bedrooms'
import { useSelector } from 'react-redux'
import { Qualification } from '../Qualification'
import React, { useEffect, useState } from 'react'
import { HeaderCardStyled, CardGrid } from './style'
import { ReactComponent as IconLocation } from '../../../images/ubicacion.svg'

export const HeaderFeature = ({ city, photos }) => {
	const { photos1 } = photos
	const [screen, setScreen] = useState(window.innerWidth)
	const { calification } = useSelector(
		(state) => state.homeReducer.servicesHotel
	)

	useEffect(() => {
		window.onresize = function () {
			setScreen(window.innerWidth)
		}
	}, [screen])

	return (
		<>
			<HeaderCardStyled>
				<div>
					<div className='card_title'>TRYP MEDELLIN ESTADIO</div>
					<div className='card_location'>
						<div className='card_icon'>
							<IconLocation />
						</div>
						<p>{city}</p>
					</div>
					<div>
						<Qualification stars={calification} />
					</div>
				</div>
			</HeaderCardStyled>
			{screen > 850 ? (
				<CardGrid>
					{photos1.map((photo, i) => (
						<div className={`card_${i + 1}`} key={i}>
							<img
								className='box_card'
								src={photo}
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
