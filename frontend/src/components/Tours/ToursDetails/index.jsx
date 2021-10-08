import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { ToursDetailsStyled } from './styles'
import { tours } from 'json/tours.json'
import { Container } from 'components/Container'
import React, { useEffect, useState } from 'react'
import { Skeleton } from 'components/Skeletons'

export const ToursDetails = () => {
	const { urlCode } = useParams()
	const [tour, setTour] = useState(null)
	const { currentTour } = useSelector((state) => state.tourReducer)

	useEffect(() => {
		if (currentTour) {
			setTour(currentTour)
		} else {
			setTimeout(() => {
				const [res] = tours.filter((el) => el.urlCode === urlCode)
				setTour(res)
			}, 2000)
			// ;(async () => {
			// 	//consumir api para buscar un viaje con el urlCode al que ingreso
			// 	// const res = await fetch(`hhtps://nuestroServer.com?urlCode=${tour}`)
			// 	console.log('entra')
			// })()
		}
	}, [currentTour, urlCode])

	return !tour ? (
		<Skeleton type='toursDescription' />
	) : (
		<Container>
			<ToursDetailsStyled className='ToursDetails'>
				<header>
					<h3>{tour.title}</h3>
					<a href='/'>
						<img src='/tours/whatsapp.png' alt='' />
					</a>
				</header>
				<div className='separator'></div>
				<div className='description'>
					<div className='descriptionImg-container'>
						<img src={tour.descriptionImg} alt={tour.title} />
					</div>
					<p>{tour.description}</p>
				</div>
				<div className='characteristics-container'>
					<h5>INCLUYE:</h5>
					<div className='characteristics-content'>
						<div>
							{tour.characteristics.column1.map((text, i) => (
								<p key={i}>
									<img
										src={`/tours/column1-${i + 1}.svg`}
										alt=''
									/>
									{text}
								</p>
							))}
						</div>
						<div>
							{tour.characteristics.column2.map((text, i) => (
								<p key={i}>
									<img
										src={`/tours/column2-${i + 1}.svg`}
										alt=''
									/>

									{text}
								</p>
							))}
						</div>
					</div>
					<p className='characteristics-specialItem'>
						<img src='/tours/icono-mapa.svg' alt='' />
						{tour.characteristics.unique}
					</p>
				</div>
			</ToursDetailsStyled>
		</Container>
	)
}
