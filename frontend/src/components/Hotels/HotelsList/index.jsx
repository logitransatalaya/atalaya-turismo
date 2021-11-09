import { Link } from 'react-router-dom'
import { CityContainer } from './styles'
import { useParams } from 'react-router-dom'
import { Container } from 'components/Container'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'
import { Button } from 'components/GlobalComponents/Button'
import { Qualification } from 'components/Hotels/HotelFeatures/Qualification'
import { useApi } from 'hooks/useApi'

export const HotelsList = () => {
	const { locid } = useParams()
	const { hotelsList } = useSelector((state) => state.hotelsReducer)
	const [nameCity, setNameCity] = useState('')
	const { getHotelList } = useApi()

	useEffect(() => {
		getHotelList(locid, setNameCity)
	}, [locid, getHotelList, setNameCity])

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
