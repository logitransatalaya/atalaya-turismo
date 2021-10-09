import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'

import { getCurrentPlan } from '../../../state/actions/plansAction'
import { plans } from '../../../json/plans.json'

import { CurrentPlanConatainer, CurrentPlanServices } from './styles'
import { Container } from 'components/Container'
import Bedrooms from 'components/Hotels/HotelFeatures/Bedrooms'

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

	const [handleScreen, setHandleScreen] = useState(window.innerWidth)

	useEffect(() => {
		window.onresize = function () {
			setHandleScreen(window.innerWidth)
		}
	}, [handleScreen])

	const stateOpenInfo = {
		infoIncludes: false,
		infoNoIncludes: false,
		infoNotes: false
	}

	const [openInfo, setOpenInfo] = useState(stateOpenInfo)
	const { infoIncludes, infoNoIncludes, infoNotes } = openInfo

	const handleContentInfo = (k, v) => {
		setOpenInfo({
			...openInfo,
			[k]: v
		})
	}

	return (
		<>
			{currentPlan && (
				<>
					<Container>
						<CurrentPlanConatainer>
							{
								<>
									<div className='currentPlan_title'>
										<h2>plan {currentPlan.name}</h2>
										<div className='line'></div>
									</div>

									{handleScreen > 600 ? (
										<div className='containerImages'>
											{currentPlan.photos.map(
												(url, i) => (
													<img
														key={i}
														src={url.urlCode}
														alt={url.name}
													/>
												)
											)}
										</div>
									) : (
										<Bedrooms img={currentPlan.photos} />
									)}

									<div className='currentPlan_desc'>
										<p>{currentPlan.desc}</p>
									</div>
								</>
							}
						</CurrentPlanConatainer>
					</Container>
					<CurrentPlanServices>
						{handleScreen > 600 ? (
							<div className='contentMax_services'>
								<h2>INCLUYE</h2>
								<div className='services_content'>
									{currentPlan.IncludesPlan.map(
										(service, i) => (
											<div
												key={i}
												className='box_services'
											>
												<span>{service.des}</span>
											</div>
										)
									)}
								</div>
								<div className='box_buttons'>
									<span>No incluye</span>
									<span>Notas</span>
								</div>
							</div>
						) : (
							<div className='contentMovile_s'>
								<div
									className={
										infoIncludes
											? 'includesMovile_s bg_active'
											: 'includesMovile_s'
									}
									onClick={() =>
										handleContentInfo(
											'infoIncludes',
											!infoIncludes
										)
									}
								>
									<div
										className={
											infoIncludes
												? 'boxInfo boxInfo_active'
												: 'boxInfo'
										}
									>
										<h4>INCLUYE</h4>
										<span>V</span>
									</div>
									{infoIncludes && (
										<div className='contentInfo'>
											<p>Hola</p>
											<p>que</p>
											<p>hace</p>
											<p>Hola</p>
										</div>
									)}
								</div>
								<div
									className={
										infoNoIncludes
											? 'noIncludesMovile_s bg_active'
											: 'noIncludesMovile_s'
									}
									onClick={() =>
										handleContentInfo(
											'infoNoIncludes',
											!infoNoIncludes
										)
									}
								>
									<div
										className={
											infoNoIncludes
												? 'boxInfo boxInfo_active'
												: 'boxInfo'
										}
									>
										<h4>NO INCLUYE</h4>
										<span>V</span>
									</div>
									{infoNoIncludes && (
										<div className='contentInfo'>
											<p>Hola</p>
											<p>que</p>
											<p>hace</p>
											<p>Hola</p>
										</div>
									)}
								</div>
								<div
									className={
										infoNotes
											? 'notesMovile_s bg_active'
											: 'notesMovile_s'
									}
									onClick={() =>
										handleContentInfo(
											'infoNotes',
											!infoNotes
										)
									}
								>
									<div
										className={
											infoNotes
												? 'boxInfo boxInfo_active'
												: 'boxInfo'
										}
									>
										<h4>NOTAS</h4>
										<span>V</span>
									</div>
									{infoNotes && (
										<div className='contentInfo'>
											<p>Hola</p>
											<p>que</p>
											<p>hace</p>
											<p>Hola</p>
										</div>
									)}
								</div>
							</div>
						)}
					</CurrentPlanServices>
				</>
			)}
		</>
	)
}
