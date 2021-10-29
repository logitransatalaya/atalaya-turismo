import { ToursStyled } from './styles'
import React, { useEffect } from 'react'
import { Container } from 'components/Container'
import { Link, useHistory } from 'react-router-dom'
import { tours as toursJson } from 'json/tours.json'
import { getTours } from 'state/actions/toursActions'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'

export const Tours = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const { tours } = useSelector((state) => state.tourReducer)

	useEffect(() => {
		if (!tours) {
			;(async () => {
				const response = await fetch('http://127.0.0.1:8000/api/tours/')
				const data = await response.json()
				console.log(data)
			})()
			dispatch(getTours(toursJson))
		}
		history.replace('/tours')
	}, [history, dispatch, tours])

	return (
		<Container>
			<ToursStyled>
				<Title text={'TOURES ANTIOQUEÑOS'} />
				<div className='ToursCards-container'>
					{tours?.map((tour, i) => (
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
