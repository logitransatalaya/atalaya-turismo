import { useApi } from 'hooks/useApi'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HotelsContainer } from './styles'
import { Container } from 'components/Container'
import { Title } from 'components/GlobalComponents/Title'
import { Loader } from 'components/GlobalComponents/Loader'
import { CardImagesGradiants } from 'components/GlobalComponents/CardImagesGradiants'

export const Hotels = () => {
	const { cityList } = useSelector((state) => state.hotelsReducer)
	const { getCities } = useApi()

	useEffect(() => {
		if (cityList === null) {
			getCities()
		}
	}, [cityList, getCities])

	return (
		<Container>
			<Title text={`HOTELES`} fontWeight='true' />
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
