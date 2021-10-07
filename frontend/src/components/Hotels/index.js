import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HotelsContainer } from './styles'
import { Container } from 'components/Container'
import { useSelector, useDispatch } from 'react-redux'
import { getHotels, getAllHotels } from '../../state/actions/hotelsActions'

import { cities } from '../../json/cities.json'

export const Hotels = () => {
	const dispatch = useDispatch()
	const { locations } = useSelector((state) => state.homeReducer)

	const [stateHotel, setStateHotel] = useState(null)

	useEffect(() => {
		if (locations) {
			setStateHotel(locations)
		} else {
			setStateHotel(cities)
			dispatch(getAllHotels(cities))
		}
	}, [stateHotel, locations, dispatch])

	const handleHotels = (data) => {
		dispatch(getHotels(data))
	}

	return (
		<Container>
			<HotelsContainer>
				{stateHotel &&
					stateHotel.map((loc, i) => (
						<Link
							key={i}
							to={`hoteles/${loc.title}`}
							onClick={() => handleHotels(loc)}
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
			</HotelsContainer>
		</Container>
	)
}
