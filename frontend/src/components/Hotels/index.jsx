import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { HotelsContainer } from './styles'
import { cities } from '../../json/cities.json'
import { Container } from 'components/Container'
import { useSelector, useDispatch } from 'react-redux'
import { updatecityList } from '../../state/actions/hotelsActions'
import { Title } from 'components/GlobalComponents/Title'

export const Hotels = () => {
	const dispatch = useDispatch()
	const { cityList } = useSelector((state) => state.hotelsReducer)

	useEffect(() => {
		if (!cityList) dispatch(updatecityList(cities))
	}, [cityList, dispatch])

	return (
		<Container>
			<Title text={`HOTELES`} about={false} />
			<HotelsContainer>
				{cityList &&
					cityList.map((city, i) => (
						<Link key={i} to={`hoteles/${city.id}`}>
							<div className='hotelCard'>
								<div className='hotelCardBoxImg'>
									<img src={city.urlImg} alt={city.title} />
									<div className='hotelCardTitle'>
										<h3>{city.title}</h3>
									</div>
								</div>
							</div>
						</Link>
					))}
			</HotelsContainer>
		</Container>
	)
}
