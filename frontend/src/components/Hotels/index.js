import { Container } from 'components/Container'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HotelsContainer } from './styles'
import { getHotels } from '../../state/actions/hotelsActions'

export const Hotels = () => {
	const dispatch = useDispatch()
	const { locations } = useSelector((state) => state.homeReducer)

	const handleHotels = (id) => {
		dispatch(getHotels(id))
	}

	return (
		<Container>
			<HotelsContainer>
				{locations &&
					locations.map((loc, i) => (
						<Link
							key={i}
							to={`hoteles/${loc.title}`}
							onClick={() => handleHotels(loc.id)}
						>
							<div className='hotelCard'>
								<div className='hotelCardBoxImg'>
									<img src={loc.urlImg} alt={loc.title} />
									<div className='hotelCardTitle'>
										<h3>{loc.title}</h3>
									</div>
								</div>
							</div>
						</Link>
					))}
				{locations &&
					locations.map((loc, i) => (
						<div key={i} className='hotelCard'>
							<div className='hotelCardBoxImg'>
								<img src={loc.urlImg} alt={loc.title} />
								<div className='hotelCardTitle'>
									<h3>{loc.title}</h3>
								</div>
							</div>
						</div>
					))}
				{locations &&
					locations.map((loc, i) => (
						<div key={i} className='hotelCard'>
							<div className='hotelCardBoxImg'>
								<img src={loc.urlImg} alt={loc.title} />
								<div className='hotelCardTitle'>
									<h3>{loc.title}</h3>
								</div>
							</div>
						</div>
					))}
			</HotelsContainer>
		</Container>
	)
}
