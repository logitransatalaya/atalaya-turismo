import { getCurrentPlan } from 'state/actions/plansAction'

export const api = async (urlCode, dispatch) => {
	const response = await fetch(`http://127.0.0.1:8000/api/plans/${urlCode}`)
	const data = await response.json()

	dispatch(getCurrentPlan(data.planes[0]))
}
