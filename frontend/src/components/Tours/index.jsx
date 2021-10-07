import React from 'react'
import tours from 'json/tours.json'
import { ToursStyled } from './styles'
import { Link } from 'react-router-dom'
import { Container } from 'components/Container'

export const Tours = () => {
	console.log(tours)
	return (
		<Container>
			<ToursStyled>
				<h2>Estas en los tours</h2>
				<div className='ToursCards-container'>
					{tours.tours.map((el, i) => (
						<Link to={`tours/hola`} key={i}>
							<div className='hotelCard'>
								<div className='hotelCardBoxImg'>
									<img src={el.urlImg} alt={el.title} />
									<div className='hotelCardTitle'>
										<h3>{el.title}</h3>
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
