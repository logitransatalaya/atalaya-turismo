import { useApi } from 'hooks/useApi'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import { ToursDetailsStyled } from './styles'
import { Skeleton } from 'components/Skeletons'
import { Container } from 'components/Container'
import { useSelector, useDispatch } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'
import { getMessage } from 'state/actions/toolTipActions'
import { Footer } from 'components/GlobalComponents/Footer'
import { ToursCharacteristics } from './ToursCharacteristics'

export const ToursDetails = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const { urlCode } = useParams()
	const { currentTour } = useSelector((state) => state.tourReducer)
	const { getCurrentTour } = useApi()

	// Funcion para peticion de la base de datos
	useEffect(() => {
		if (currentTour === null) {
			getCurrentTour(urlCode)
		} else if (currentTour.id !== parseInt(urlCode)) {
			getCurrentTour(urlCode)
		}
	}, [urlCode, currentTour, getCurrentTour])

	// Funcion para cambiar el mensaje de wpp
	useEffect(() => {
		if (currentTour) {
			dispatch(
				getMessage({
					route: location.pathname,
					title: currentTour.title,
					page: 'tour'
				})
			)
		}
	}, [dispatch, currentTour, location])

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
								data={currentTour.include}
								num={'1'}
							/>
							<ToursCharacteristics
								data={currentTour.text_include_two}
								num={'2'}
							/>
						</div>
						<p className='characteristics-specialItem'>
							<img src='/tours/icono-mapa.svg' alt='' />
							{currentTour.unique}
						</p>
					</div>
				</ToursDetailsStyled>
			</Container>
			<Footer type='tours' imageUrl={currentTour.url_image_description} />
		</>
	)
}
