import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'components/GlobalComponents/Button'
import { HotelQualification } from 'components/Hotels/HotelFeatures/HotelQualification'

export const HotelListCardInfo = ({ hotel, locid }) => {
	return (
		<div className='cityCard'>
			<div className='cityBoxImg'>
				<img src={hotel.url_img} alt={hotel.name} />
			</div>
			<div className='cityInfo'>
				<p className='cityInfo_title'>{hotel.name}</p>
				<p>
					<small>Dirección: {hotel.addres}</small>
				</p>
				<div className='cityInfoCalification'>
					<HotelQualification stars={hotel.stars} />
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
						<small>tarjeta sujeta a disponibilidad</small>
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
	)
}
