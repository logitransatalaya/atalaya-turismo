import { useApi } from 'hooks/useApi'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { CityContainer } from './styles'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from 'components/Container'
import { Button } from 'components/GlobalComponents/Button'
import { Qualification } from 'components/Hotels/HotelFeatures/Qualification'
import { Title } from 'components/GlobalComponents/Title'

export const HotelsList = () => {
	const { locid, city } = useParams()
	const { getHotels } = useApi()
	const { hotelsList } = useSelector((state) => state.hotelsReducer)

	useEffect(
		() => getHotels(locid, hotelsList),
		[getHotels, locid, hotelsList]
	)

	return (
		hotelsList && (
			<Container>
				<h2>
					<Title text={`Ciudad ${city}`} about={false} />
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
