import { useApi } from 'hooks/useApi'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { ToursDetailsStyled } from './styles'
import { Skeleton } from 'components/Skeletons'
import { Container } from 'components/Container'
import { Title } from 'components/GlobalComponents/Title'
import { getMessage } from 'state/actions/toolTipActions'
import { useLocation } from 'react-router'
import { Footer } from 'components/GlobalComponents/Footer'

export const ToursDetails = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const { urlCode } = useParams()
	const { getCurrentTour } = useApi()
	const { currentTour } = useSelector((state) => state.tourReducer)

	useEffect(
		() => getCurrentTour(urlCode, currentTour),
		[getCurrentTour, currentTour, urlCode]
	)

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
					<Title text={currentTour.title} about={false} />
					<div className='description'>
						<div className='descriptionImg-container'>
							<img
								src={currentTour.descriptionImg}
								alt={currentTour.title}
							/>
						</div>
						<p>{currentTour.description}</p>
					</div>
					<div className='characteristics-container'>
						<h5>INCLUYE:</h5>
						<div className='characteristics-content'>
							<div>
								{currentTour.characteristics.column1.map(
									(text, i) => (
										<p key={i}>
											<img
												src={`/tours/column1-${
													i + 1
												}.svg`}
												alt=''
											/>
											{text}
										</p>
									)
								)}
							</div>
							<div>
								{currentTour.characteristics.column2.map(
									(text, i) => (
										<p key={i}>
											<img
												src={`/tours/column2-${
													i + 1
												}.svg`}
												alt=''
											/>

											{text}
										</p>
									)
								)}
							</div>
						</div>
						<p className='characteristics-specialItem'>
							<img src='/tours/icono-mapa.svg' alt='' />
							{currentTour.characteristics.unique}
						</p>
					</div>
				</ToursDetailsStyled>
			</Container>
			<Footer type='tours' imageUrl={currentTour.descriptionImg} />
		</>
	)
}
