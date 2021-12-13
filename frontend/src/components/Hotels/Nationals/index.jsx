import { useApi } from 'hooks/useApi'
import { HotelsContainer } from './styles'
import { useSearch } from 'hooks/useSearch'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getDataHotels } from 'helpers/getDataHotels'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from 'components/GlobalComponents/Loader'
import { Search } from 'components/GlobalComponents/Search'
import { changeNacionality } from 'state/actions/hotelsActions'
import { Container } from 'components/GlobalComponents/Container'
import { ModalFilter } from 'components/GlobalComponents/modalFilter'
import { CardImagesGradiants } from 'components/GlobalComponents/CardImagesGradiants'

export const CitiesOrCountries = () => {
	// estados locales
	const dispatch = useDispatch()
	const { getCities } = useApi()
	const { nacionality } = useParams()
	const [arrayFilter, setArrayFilter] = useState([])
	const { CitiesOrCountries, stateNacionality } = useSelector(
		(state) => state.hotelsReducer
	)

	// hook para capturar el cambio de texto en el buscador
	const [text, handleInputChange] = useSearch({
		searchText: ''
	})
	const { searchText } = text

	// funcion para enviar el array de hoteles y hacer el filtro por lo que el usuario esta buscando
	useEffect(() => {
		getDataHotels(CitiesOrCountries, searchText, setArrayFilter)
	}, [CitiesOrCountries, searchText])

	// funcion para traer todos los hoteles
	useEffect(() => {
		if (CitiesOrCountries === null || nacionality !== stateNacionality) {
			getCities(nacionality)
		}
	}, [CitiesOrCountries, getCities, nacionality, stateNacionality])

	// funcion para hacer el cambio de ciudad y poder hacer la compracion para la peticion a la db
	useEffect(() => {
		dispatch(changeNacionality(nacionality))
	}, [nacionality, dispatch])
	return (
		<Container>
			<Search
				searchText={searchText}
				handleInputChange={handleInputChange}
				placeHolder={`Qué ${
					nacionality === 'Nacional' ? `Ciudad ` : 'Pais '
				}estás buscando...`}
				text={nacionality === 'Nacional' ? `CIUDADES` : 'PAISES'}
			/>
			<HotelsContainer>
				{CitiesOrCountries && CitiesOrCountries?.length !== 0 ? (
					<div className='content'>
						{searchText === '' ? (
							CitiesOrCountries?.map((city, i) => (
								<Link
									key={i}
									to={`/ciudades/hoteles/${nacionality}/${city.name}`}
								>
									<CardImagesGradiants
										url={city.url_img}
										alt={city.name}
										name={city.name}
									/>
								</Link>
							))
						) : arrayFilter?.length ? (
							arrayFilter?.map((city, i) => (
								<Link
									key={i}
									to={`/ciudades/hoteles/${nacionality}/${city.name}`}
								>
									<CardImagesGradiants
										url={city.url_img}
										alt={city.name}
										name={city.name}
									/>
								</Link>
							))
						) : (
							<ModalFilter text={searchText} />
						)}
					</div>
				) : (
					<>
						<Loader />
					</>
				)}
			</HotelsContainer>
		</Container>
	)
}
