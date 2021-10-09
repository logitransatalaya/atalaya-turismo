import { ToursStyled } from './styles'
import { tours } from 'json/tours.json'
import React, { useEffect } from 'react'
import { Container } from 'components/Container'
import { Link, useHistory } from 'react-router-dom'

export const Tours = () => {
	const history = useHistory()

	useEffect(() => {
		history.replace('/tours')
	}, [history])

	return (
		<Container>
			<ToursStyled>
				<div className='title'>
					<h2>TOURES ANTIOQUIA</h2>
				</div>
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
