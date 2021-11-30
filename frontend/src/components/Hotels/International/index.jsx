import { useApi } from 'hooks/useApi'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HotelsContainer } from './styles'
import { Title } from 'components/GlobalComponents/Title'
import { Loader } from 'components/GlobalComponents/Loader'
import { Container } from 'components/GlobalComponents/Container'
import { CardImagesGradiants } from 'components/GlobalComponents/CardImagesGradiants'

export const CitiesInternational = () => {
	// estados locales
	const { getCities } = useApi()
	const { cityList, cityInternatinalList } = useSelector(
		(state) => state.hotelsReducer
	)

	// peticion a la db
	useEffect(() => {
		if (cityList === null) {
			getCities()
		}
	}, [cityList, getCities])

	return (
		<Container>
			<Title
				text={`HOTELES INTERNACIONALES`}
				fontWeight='true'
				about='true'
			/>
			<HotelsContainer>
				{cityList ? (
					<div className='content'>
						{cityList.map((city, i) => (
							<Link key={i} to={`hoteles/${city.id}`}>
								<CardImagesGradiants
									url={city.url_img}
									alt={city.name}
									name={city.name}
								/>
							</Link>
						))}
					</div>
				) : (
					<Loader />
				)}
			</HotelsContainer>
		</Container>
	)
}
