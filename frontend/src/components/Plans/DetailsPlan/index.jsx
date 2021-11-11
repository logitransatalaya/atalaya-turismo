import { useApi } from 'hooks/useApi'
import { Includes } from './Includes'
import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import { Container } from 'components/Container'
import { IncludesMovile } from '../IncludesMovile'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'
import { getMessage } from 'state/actions/toolTipActions'
import { Button } from 'components/GlobalComponents/Button'
import Bedrooms from 'components/Hotels/HotelFeatures/Bedrooms'
import { CurrentPlanConatainer, CurrentPlanServices } from './styles'

export const DetailsPlan = () => {
	const stateOpenInfo = {
		infoIncludes: false,
		infoNoIncludes: false,
		infoNotes: false
	}

	const dispatch = useDispatch()
	const location = useLocation()
	const { urlCode } = useParams()
	const [openInfo, setOpenInfo] = useState(stateOpenInfo)
	const { infoIncludes, infoNoIncludes, infoNotes } = openInfo
	const { currentPlan } = useSelector((state) => state.PlansReducer)
	const [handleScreen, setHandleScreen] = useState(window.innerWidth)
	const [include, setInclude] = useState(true)
	const { getDetailsPlans } = useApi()

	// funcion para abrir los menus en moiles
	const handleContentInfo = (key, value) => {
		setOpenInfo({
			...openInfo,
			[key]: value
		})
	}

	// funcion que hace la peticion a la db
	useEffect(() => {
		if (!currentPlan) {
			getDetailsPlans(getDetailsPlans)
		} else if (currentPlan.id !== parseInt(urlCode)) {
			getDetailsPlans(getDetailsPlans)
		}
	}, [currentPlan, getDetailsPlans, urlCode])

	// funcion que hace el cambio en redux para el mensaje de wpp
	useEffect(() => {
		if (currentPlan) {
			dispatch(
				getMessage({
					route: location.pathname,
					title: currentPlan.destination_name,
					page: 'plans'
				})
			)
		}
	}, [currentPlan, dispatch, location])

	// funcion que calcula los cambios de pantalla
	useEffect(() => {
		window.onresize = function () {
			setHandleScreen(window.innerWidth)
		}
	}, [handleScreen])

	const handleInclude = () => {
		setInclude(!include)
	}

	return (
		<>
			{currentPlan && (
				<>
					<Container>
						<CurrentPlanConatainer>
							<Title text={currentPlan.destination_name} />
							{handleScreen > 600 ? (
								<div className='containerImages'>
									{currentPlan.photos.map((url, i) => {
										return (
											<img
												key={i}
												src={url.url_img}
												alt={url.name_img}
											/>
										)
									})}
								</div>
							) : (
								<Bedrooms img={currentPlan.photos} />
							)}

							<div className='currentPlan_desc'>
								<p>{currentPlan.description}</p>
							</div>
						</CurrentPlanConatainer>
					</Container>
					<CurrentPlanServices>
						{handleScreen > 600 ? (
							<div className='contentMax_services'>
								<h2>INCLUYE</h2>
								<div className='services_content'>
									{include ? (
										<>
											<Includes
												includes={currentPlan.includes}
											/>
										</>
									) : (
										<Includes
											includes={currentPlan.noIncludes}
										/>
									)}
								</div>
								<div className='box_buttons'>
									<Button
										onClick={handleInclude}
										text={
											include ? 'No Incluye' : 'incluye'
										}
										bgColor='#10216f'
									/>
								</div>
							</div>
						) : (
							<div className='contentMovile_s'>
								<IncludesMovile
									currentPlan={currentPlan.includes}
									keyContent={'infoIncludes'}
									infoIncludes={infoIncludes}
									handleContentInfo={handleContentInfo}
									title={'INCLUYE'}
								/>
								<IncludesMovile
									currentPlan={currentPlan.noIncludes}
									keyContent={'infoNoIncludes'}
									infoIncludes={infoNoIncludes}
									handleContentInfo={handleContentInfo}
									title={'NO INCLUYE'}
								/>
								<IncludesMovile
									currentPlan={currentPlan.notes}
									keyContent={'infoNotes'}
									infoIncludes={infoNotes}
									handleContentInfo={handleContentInfo}
									title={'NOTAS'}
								/>
							</div>
						)}
					</CurrentPlanServices>
				</>
			)}
		</>
	)
}
