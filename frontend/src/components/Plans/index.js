import { Container } from 'components/Container'
import React, { useEffect, useState } from 'react'
import { PlansContainer } from './styles'
import { plans } from '../../json/plans'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPlans } from '../../state/actions/plansAction'

export const Plans = () => {
	const dispatch = useDispatch()
	const [stateAllPlans, setStateAllPlans] = useState(null)
	const { plansReducer } = useSelector((state) => state.PlansReducer)

	useEffect(() => {
		if (plansReducer) {
			setStateAllPlans(plansReducer)
		} else {
			setStateAllPlans(plans)
			dispatch(getAllPlans(plans))
		}
	}, [plansReducer, dispatch])

	return (
		<Container>
			{stateAllPlans && (
				<PlansContainer>
					<h2 className='plansTitle'>PLANES NACIONALES</h2>
					<div className='plansContent'>
						{stateAllPlans.map((img) => (
							<div className='plansCard' key={img.id}>
								<div className='plansBoxImg'>
									<img src={img.url} alt={img.name} />
								</div>
								<div className='plansCardTitle'>
									<p>{img.name}</p>
								</div>
							</div>
						))}
					</div>
				</PlansContainer>
			)}
		</Container>
	)
}
