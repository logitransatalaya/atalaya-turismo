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
import { updateCurrentTour } from 'state/actions/toursActions'

export const ToursDetails = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const { urlCode } = useParams()
	const { currentTour } = useSelector((state) => state.tourReducer)

	useEffect(() => {
		if (!currentTour) {
			;(async () => {
				const response = await fetch(
					`http://127.0.0.1:8000/api/tours/${urlCode}`
				)
				const data = await response.json()
				dispatch(updateCurrentTour(data.Toures[0]))
			})()
		} else if (currentTour.id !== parseInt(urlCode)) {
			;(async () => {
				const response = await fetch(
					`http://127.0.0.1:8000/api/tours/${urlCode}`
				)
				const data = await response.json()
				dispatch(updateCurrentTour(data.Toures[0]))
			})()
		}
	}, [urlCode, currentTour, dispatch])

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
							<div>
								{currentTour.include.map((text, i) => {
									return (
										<p key={i}>
											<img
												src={`/tours/column1-${
													i + 1
												}.svg`}
												alt=''
											/>
											{text.text_include}
										</p>
									)
								})}
							</div>
							<div>
								{currentTour.include.map((text, i) => (
									<p key={i}>
										<img
											src={`/tours/column2-${i + 1}.svg`}
											alt=''
										/>

										{text.text_include}
									</p>
								))}
							</div>
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
