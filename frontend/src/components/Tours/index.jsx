import { tours } from 'json/tours.json'
import { ToursStyled } from './styles'
import { Link, useHistory } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from 'components/Container'
import { updateCurrentTour } from 'state/actions/toursActions'

export const Tours = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const handleClick = (tour) => {
		dispatch(updateCurrentTour(tour))
	}

	useEffect(() => {
		history.replace('/tours')
	}, [history])

	return (
		<Container>
			<ToursStyled>
				<h2>Estas en los tours</h2>
				<div className='ToursCards-container'>
					{tours.map((tour, i) => (
						<Link
							onClick={() => handleClick(tour)}
							to={`tours/${tour.urlCode}`}
							key={i}
						>
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
