import { useApi } from 'hooks/useApi'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ToursDetailsStyled } from './styles'
import { useWhatsapp } from 'hooks/useWhatsapp'
import { useParams, useLocation } from 'react-router'
import { Title } from 'components/GlobalComponents/Title'
import { Footer } from 'components/GlobalComponents/Footer'
import { ToursCharacteristics } from './ToursCharacteristics'
import { Skeleton } from 'components/GlobalComponents/Skeletons'
import { Container } from 'components/GlobalComponents/Container'

export const ToursDetails = () => {
	const location = useLocation()
	const { urlCode } = useParams()
	const { getCurrentTour } = useApi()
	const { messageWhatsapp } = useWhatsapp()
	const { currentTour } = useSelector((state) => state.tourReducer)

	// Funcion para peticion de la base de datos y cambiar el estado de wpp
	useEffect(() => {
		if (currentTour === null) {
			getCurrentTour(urlCode)
		} else if (currentTour) {
			if (currentTour.id !== parseInt(urlCode)) {
				getCurrentTour(urlCode)
			}
			messageWhatsapp(location.pathname, currentTour.title, 'tour')
		}
	}, [urlCode, currentTour, getCurrentTour, location, messageWhatsapp])

	return !currentTour ? (
		<Skeleton type='toursDescription' />
	) : (
		<>
			<Container>
				<ToursDetailsStyled className='ToursDetails'>
					<Title text={currentTour.title} />
					<div className='description'>
						<div className='descriptionImg-container'>
							<img
								src={currentTour.url_image_description}
								alt={currentTour.title}
							/>
						</div>
						<p>{currentTour.description}</p>
					</div>
					<div className='characteristics-container'>
						<h5>INCLUYE:</h5>
						<div className='characteristics-content'>
							<ToursCharacteristics
								data={currentTour.column_one}
							/>
							<ToursCharacteristics
								data={currentTour.column_two}
							/>
						</div>
						<p className='characteristics-specialItem'>
							<img
								src={`/tours/${currentTour.icon_unique}.svg`}
								alt=''
							/>
							<span>{currentTour.unique}</span>
						</p>
					</div>
				</ToursDetailsStyled>
			</Container>
			<Footer type='tours' imageUrl={currentTour.url_img_bottom} />
		</>
	)
}
