import { ToursStyled } from './styles'
import React, { useEffect } from 'react'
import { Container } from 'components/Container'
import { Link, useHistory } from 'react-router-dom'
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
				try {
					const response = await fetch(
						'http://50.62.81.171:5000/api/tours/'
					)
					const data = await response.json()
					dispatch(getTours(data.Toures))
				} catch (error) {
					console.error(error)
				}
			})()
		}
		history.replace('/tours')
	}, [history, dispatch, tours])

	return (
		<Container>
			<ToursStyled>
				<Title text={'TOURES ANTIOQUEÑOS'} />
				<div className='ToursCards-container'>
					{tours?.map((tour, i) => (
						<Link to={`tours/${tour.id}`} key={i}>
							<div className='hotelCard'>
								<div className='hotelCardBoxImg'>
									<img
										src={tour.url_img_card}
										alt={tour.title}
									/>
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
