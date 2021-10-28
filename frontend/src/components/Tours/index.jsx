import { ToursStyled } from './styles'
import { tours } from 'json/tours.json'
import React, { useEffect } from 'react'
import { Container } from 'components/Container'
import { Link, useHistory } from 'react-router-dom'
import { Title } from 'components/GlobalComponents/Title'
import { useDispatch, useSelector } from 'react-redux'
import { getTours } from 'state/actions/toursActions'

export const Tours = () => {
	const dispatch = useDispatch()
	const { tourss } = useSelector((state) => state.tourReducer)
	const history = useHistory()

	useEffect(() => {
		if (!tourss) {
			;(async () => {
				const response = await fetch('http://127.0.0.1:8000/api/tours/')
				const data = await response.json()
				console.log(data)
			})()
			dispatch(getTours(tours))
		}
		history.replace('/tours')
	}, [history, dispatch, tours])

	return (
		<Container>
			<ToursStyled>
				<Title text={'TOURES ANTIOQUEÑOS'} />
				<div className='ToursCards-container'>
					{tours.map((tour, i) => (
						<Link to={`tours/${tour.urlCode}`} key={i}>
							<div className='hotelCard'>
								<div className='hotelCardBoxImg'>
									<img src={tour.cardImg} alt={tour.title} />
									<div className='hotelCardTitle'>
										<h3>{tour.title}</h3>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</ToursStyled>
		</Container>
	)
}
