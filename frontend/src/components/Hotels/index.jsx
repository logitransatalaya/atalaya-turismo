import { useApi } from 'hooks/useApi'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HotelsContainer } from './styles'
import { Container } from 'components/Container'
import { Title } from 'components/GlobalComponents/Title'
import { Loader } from 'components/GlobalComponents/Loader'

export const Hotels = () => {
	const { cityList } = useSelector((state) => state.hotelsReducer)
	const { getCities } = useApi()

	useEffect(() => {
		if (!cityList) {
			getCities()
		}
	}, [cityList, getCities])
	return (
		<Container>
			<Title text={`HOTELES`} fontWeight />
			<HotelsContainer>
				{cityList ? (
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
					))
				) : (
					<Loader />
				)}
			</HotelsContainer>
		</Container>
	)
}
