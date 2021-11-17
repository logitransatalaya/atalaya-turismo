import { useApi } from 'hooks/useApi'
import { Link } from 'react-router-dom'
import { PlansContainer } from './styles'
import { Container } from 'components/GlobalComponents/Container'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'
import { Loader } from 'components/GlobalComponents/Loader'
import { CardImagesGradiants } from 'components/GlobalComponents/CardImagesGradiants'

export const Plans = () => {
	const { plansReducer } = useSelector((state) => state.PlansReducer)
	const { getPlans } = useApi()

	useEffect(() => {
		if (plansReducer === null) {
			getPlans()
		}
	}, [plansReducer, getPlans])

	return (
		<Container>
			<Title text={'PLANES NACIONALES'} fontWeight='true' about='true' />
			{plansReducer ? (
				<PlansContainer>
					<div className='plansContent'>
						{plansReducer?.map((img, i) => {
							return (
								<Link to={`/planes/${img.id}`} key={i}>
									<CardImagesGradiants
										url={img.url_img_card}
										alt={img.destination_name}
										name={img.destination_name}
									/>
								</Link>
							)
						})}
					</div>
				</PlansContainer>
			) : (
				<Loader />
			)}
		</Container>
	)
}
