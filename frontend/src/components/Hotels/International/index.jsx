import React from 'react'
import { Link } from 'react-router-dom'
import { HotelsContainer } from './styles'
import { Title } from 'components/GlobalComponents/Title'
import { Loader } from 'components/GlobalComponents/Loader'
import { Container } from 'components/GlobalComponents/Container'
import { CardImagesGradiants } from 'components/GlobalComponents/CardImagesGradiants'

const arrayContinents = [
	{
		name: 'Asia',
		url: 'https://i0.wp.com/www.lugarnia.com/wp-content/uploads/2018/06/monumentos-mas-espectaculares-de-asia-muralla_1000x500.jpg?resize=960%2C480&ssl=1'
	},
	{
		name: 'America',
		url: 'https://www.caracteristicas.co/wp-content/uploads/2017/02/brasil-e1563852621332.jpg'
	},
	{
		name: 'Oceania',
		url: 'https://www.caracteristicas.co/wp-content/uploads/2017/03/oceania-poblacion-e1564277030833.jpg'
	},
	{
		name: 'Africa',
		url: 'https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/nuestrorumbo/7/7-patrimonios-de-la-humanidad-de-africa-1.jpg'
	}
]
export const CitiesInternational = () => {
	return (
		<Container>
			<Title text={`CONTINENTES `} fontWeight='true' />
			<HotelsContainer>
				{arrayContinents ? (
					<div className='content'>
						{arrayContinents?.map((city, i) => (
							<Link key={i} to={`ciudades/${city.name}`}>
								<CardImagesGradiants
									url={city.url}
									alt={'lll'}
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
