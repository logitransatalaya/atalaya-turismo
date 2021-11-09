import { useApi } from 'hooks/useApi'
import { ToursStyled } from './styles'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'components/Container'
import { Link, useHistory } from 'react-router-dom'
import { Title } from 'components/GlobalComponents/Title'

export const Tours = () => {
	const history = useHistory()
	const { tours } = useSelector((state) => state.tourReducer)
	const { getToursApi } = useApi()
	useEffect(() => {
		if (!tours) {
			getToursApi()
		}
		history.replace('/tours')
	}, [history, getToursApi, tours])

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
