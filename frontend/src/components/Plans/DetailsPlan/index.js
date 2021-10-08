import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'

import { getCurrentPlan } from '../../../state/actions/plansAction'
import { plans } from '../../../json/plans.json'

import { Rojo } from './styles'

export const DetailsPlan = () => {
	const { urlCode } = useParams()
	const dispatch = useDispatch()
	const { currentPlan } = useSelector((state) => state.PlansReducer)
	useEffect(() => {
		if (!currentPlan) {
			const [currentPlanJson] = plans.filter(
				(plan) => plan.urlCode === urlCode
			)
			dispatch(getCurrentPlan(currentPlanJson))
		} else if (currentPlan.urlCode !== urlCode) {
			const [currentPlanJson] = plans.filter(
				(plan) => plan.urlCode === urlCode
			)
			dispatch(getCurrentPlan(currentPlanJson))
		}
	}, [currentPlan, dispatch, urlCode])

	return (
		<Rojo>
			{currentPlan && (
				<h2>
					{currentPlan.name} - {urlCode}
				</h2>
			)}
		</Rojo>
	)
}
