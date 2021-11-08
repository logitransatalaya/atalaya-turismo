import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { HotelsContainer } from './styles'
import { Container } from 'components/Container'
import { useSelector, useDispatch } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'
import { updatecityList } from '../../state/actions/hotelsActions'

export const Hotels = () => {
	const dispatch = useDispatch()
	const { cityList } = useSelector((state) => state.hotelsReducer)

	useEffect(() => {
		if (!cityList) {
			;(async () => {
				try {
					const response = await fetch(
						'http://50.62.81.171:5000/api/ciudades/'
					)
					const data = await response.json()
					dispatch(updatecityList(data.cities))
				} catch (error) {
					console.error(error)
				}
			})()
		}
	}, [cityList, dispatch])
	return (
		<Container>
			<Title text={`HOTELES`} />
			<HotelsContainer>
				{cityList &&
					cityList.map((city, i) => (
						<Link key={i} to={`hoteles/${city.id}`}>
							<div className='hotelCard'>
								<div className='hotelCardBoxImg'>
									<img src={city.url_img} alt={city.name} />
									<div className='hotelCardTitle'>
										<h3>{city.name}</h3>
									</div>
								</div>
							</div>
						</Link>
					))}
			</HotelsContainer>
		</Container>
	)
}
