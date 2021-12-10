import { useApi } from 'hooks/useApi'
import { CityContainer } from './styles'
import { useSearch } from 'hooks/useSearch'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getDataHotels } from 'helpers/getDataHotels'
import { useDispatch, useSelector } from 'react-redux'
import { HotelListCardInfo } from './HotelListCardInfo'
import { Search } from 'components/GlobalComponents/Search'
import { Loader } from 'components/GlobalComponents/Loader'
import { updateCurrentHotel } from 'state/actions/hotelsActions'
import { Container } from 'components/GlobalComponents/Container'

export const HotelsList = () => {
	// Estados del componente
	const dispatch = useDispatch()
	const { getHotelList } = useApi()
	const { city, nacionality } = useParams()
	const [nameCity, setNameCity] = useState('')
	const [arrayFilter, setArrayFilter] = useState([])
	const { hotelsList } = useSelector((state) => state.hotelsReducer)

	// Peticion a la db para la lista de hoteles
	useEffect(() => {
		if (hotelsList === null || nameCity === '') {
			getHotelList(city, setNameCity, nacionality)
		}
	}, [getHotelList, hotelsList, city, nameCity, nacionality])

	// funcion para enviar el array de hoteles y hacer el filtro por lo que el usuario esta buscando
	useEffect(() => {
		dispatch(updateCurrentHotel({ currentHotel: null }))
	}, [dispatch])

	// hook para capturar el cambio de texto en el buscador
	const [text, handleInputChange] = useSearch({
		searchText: ''
	})
	const { searchText } = text
	// funcion para enviar el array de hoteles y hacer el filtro por lo que el usuario esta buscando
	useEffect(() => {
		getDataHotels(hotelsList, searchText, setArrayFilter)
	}, [hotelsList, searchText])

	return (
		<Container>
			<Search
				handleInputChange={handleInputChange}
				placeHolder='Qué Hotel estás Buscando...'
				text={`HOTELES`}
			/>
			<CityContainer>
				{hotelsList?.length ? (
					searchText === '' ? (
						hotelsList?.map((hotel, i) => (
							<HotelListCardInfo
								city={city}
								nacionality={nacionality}
								hotel={hotel}
								key={i}
								locid={city}
							/>
						))
					) : (
						arrayFilter?.map((hotel, i) => (
							<HotelListCardInfo
								hotel={hotel}
								key={i}
								locid={city}
							/>
						))
					)
				) : (
					<Loader />
				)}
			</CityContainer>
		</Container>
	)
}
