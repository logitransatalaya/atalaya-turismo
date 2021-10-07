import React from 'react'
import { Link } from 'react-router-dom'
import { CityContainer } from './styles'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { getServicesHotel } from '../../state/actions/hotelsActions'
import { Qualification } from 'components/HotelFeatures/Qualification'

export const City = () => {
	const { hotelsCity } = useSelector((state) => state.homeReducer)
	const dispatch = useDispatch()

	if (!hotelsCity[0]) {
		return (
			<Container>
				<h1 style={{ backgroundColor: 'red' }}>Recarga para atras</h1>
				<p>
					Esto pasa porque los datos no son persistentes, cuando se
					conecte a la base de datos esto no va a pasar
				</p>
			</Container>
		)
	}

	const { hotels } = hotelsCity[0]
	const { title } = hotelsCity[0]

	const handleButton = (data) => {
		const obj = {
			more: data.more,
			calification: data.calification
		}
		dispatch(getServicesHotel(obj))
	}

	return (
		<Container>
			<h2>
				Hoteles de{' '}
				<span style={{ color: '#10216f', textTransform: 'uppercase' }}>
					{title}
				</span>
			</h2>
			<CityContainer>
				{hotels &&
					hotels.map((hotel, i) => (
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
										to={`${title}/${hotel.id}`}
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
}
