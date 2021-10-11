import { Container } from 'components/Container'
import React, { useEffect } from 'react'
import { PlansContainer } from './styles'
import { plans } from '../../json/plans'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPlans } from '../../state/actions/plansAction'
import { Link } from 'react-router-dom'
import { Title } from 'components/GlobalComponents/Title'

export const Plans = () => {
	const dispatch = useDispatch()
	const { plansReducer } = useSelector((state) => state.PlansReducer)

	useEffect(() => {
		if (!plansReducer) {
			dispatch(getAllPlans(plans))
		}
	}, [plansReducer, dispatch])

	return (
		<Container>
			{plansReducer && (
				<PlansContainer>
					<Title text={'PLANES NACIONALES'} about={false} />
					<div className='plansContent'>
						{plansReducer.map((img, i) => (
							<Link to={`/planes/${img.urlCode}`} key={i}>
								<div className='plansCard' key={img.id}>
									<div className='plansBoxImg'>
										<img src={img.url} alt={img.name} />
									</div>
									<div className='plansCardTitle'>
										<p>{img.name}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</PlansContainer>
			)}
		</Container>
	)
}
