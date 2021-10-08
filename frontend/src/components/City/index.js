import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { CityContainer } from './styles'
import { hotels } from 'json/hotels.json'
import { Button } from 'components/Button'
import { useParams } from 'react-router-dom'
import { Container } from 'components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { updateHotelsList } from 'state/actions/hotelsActions'
import { Qualification } from 'components/HotelFeatures/Qualification'

export const City = () => {
	const { locid } = useParams()
	const dispatch = useDispatch()
	const { hotelsList } = useSelector((state) => state.hotelsReducer)

	useEffect(() => {
		const cityId = parseInt(locid)

		if (!hotelsList) {
			const res = hotels.filter((hotel) => hotel.idcity === cityId)
			dispatch(updateHotelsList(res))
			// const res = fetch(`api.com?cityId=${cityId}`)
		} else {
			const currentHotelsListCityId = hotelsList[0].idcity

			if (cityId !== currentHotelsListCityId) {
				const res = hotels.filter((hotel) => hotel.idcity === cityId)
				dispatch(updateHotelsList(res))
			}
		}
	}, [dispatch, hotelsList, locid])

	return (
		hotelsList && (
			<Container>
				<h2>
					<span
						style={{ color: '#10216f', textTransform: 'uppercase' }}
					>
						{hotelsList.title}
					</span>
				</h2>
				<CityContainer>
					{hotelsList.map((hotel, i) => (
						<div className='cityCard' key={i}>
							<div className='cityBoxImg'>
								<img src={hotel.urlImg} alt={hotel.name} />
							</div>
							<div className='cityInfo'>
								<p className='cityInfo_title'>{hotel.name}</p>
								<p>
									<small>Dirección: {hotel.addres}</small>
								</p>
								<div className='cityInfoCalification'>
									<Qualification stars={hotel.calification} />
								</div>
							</div>
							<div className='cityPrice'>
								<div>
									<p className='cityPrice_title'>
										Cop: <b>{hotel.price}</b>
									</p>
								</div>
								<div>
									<p className='cityPrice_subTitle'>
										DESDE Cop {hotel.price}
									</p>
									<p className='cityPrice_card'>
										<small>
											tarjeta sujeta a disponibilidad
										</small>
									</p>
									<Link to={`${locid}/${hotel.urlCode}`}>
										<Button
											text={'Ver más'}
											bgColor={'#10216f'}
											color={'#fff'}
											w={'100%'}
										/>
									</Link>
								</div>
							</div>
						</div>
					))}
				</CityContainer>
			</Container>
		)
	)
}
