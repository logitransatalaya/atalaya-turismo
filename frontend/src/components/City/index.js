import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CityContainer } from './styles'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { getServicesHotel } from '../../state/actions/hotelsActions'
import { Qualification } from 'components/HotelFeatures/Qualification'
import { cities } from '../../json/cities.json'
import { useParams } from 'react-router-dom'

export const City = () => {
	const { locid } = useParams()
	const dispatch = useDispatch()
	const { hotelsCity } = useSelector((state) => state.homeReducer)
	const [hotelsList, setHotelsList] = useState(null)

	useEffect(() => {
		if (hotelsCity) {
			setHotelsList(hotelsCity)
		} else {
			const [currentHotel] = cities.filter(
				(city) => city.urlCode === locid
			)
			setHotelsList(currentHotel)
		}
	}, [hotelsCity, locid])

	const handleButton = (data) => {
		const obj = {
			more: data.more,
			calification: data.calification,
			city: hotelsList.title
		}
		dispatch(getServicesHotel(obj))
	}

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
					{hotelsList.hotels?.map((hotel, i) => (
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
									<Link
										to={`${hotelsList.title}/${hotel.urlCode}`}
										onClick={() => handleButton(hotel)}
									>
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
