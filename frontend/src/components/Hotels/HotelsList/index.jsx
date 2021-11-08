import { Link } from 'react-router-dom'
import { CityContainer } from './styles'
import { useParams } from 'react-router-dom'
import { Container } from 'components/Container'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'
import { Button } from 'components/GlobalComponents/Button'
import { updateHotelsList } from 'state/actions/hotelsActions'
import { Qualification } from 'components/Hotels/HotelFeatures/Qualification'

export const HotelsList = () => {
	const { locid } = useParams()
	const { hotelsList } = useSelector((state) => state.hotelsReducer)
	const dispatch = useDispatch()
	const [nameCity, setNameCity] = useState('')

	useEffect(() => {
		;(async () => {
			try {
				const response = await fetch(
					`http://50.62.81.171:5000/api/hotels/${locid}`
				)
				const data = await response.json()
				dispatch(updateHotelsList(data.hotels))
				setNameCity(data.city[0].name)
			} catch (error) {
				console.error(error)
			}
		})()
	}, [locid, dispatch])

	return (
		hotelsList && (
			<Container>
				<h2>
					<Title text={`Ciudad ${nameCity}`} />
				</h2>
				<CityContainer>
					{hotelsList.map((hotel, i) => (
						<div className='cityCard' key={i}>
							<div className='cityBoxImg'>
								<img src={hotel.url_img} alt={hotel.name} />
							</div>
							<div className='cityInfo'>
								<p className='cityInfo_title'>{hotel.name}</p>
								<p>
									<small>Dirección: {hotel.addres}</small>
								</p>
								<div className='cityInfoCalification'>
									<Qualification stars={hotel.stars} />
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
									<Link to={`${locid}/${hotel.id}`}>
										<Button
											text={'Ver más'}
											bgColor={'#10216f'}
											color={'#fff'}
											wRes={'100%'}
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
