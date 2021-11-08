import { getCurrentPlan } from 'state/actions/plansAction'

export const api = async (urlCode, dispatch) => {
	try {
		const response = await fetch(
			`http://50.62.81.171:5000/api/plans/${urlCode}`
		)
		const data = await response.json()

		dispatch(getCurrentPlan(data.planes[0]))
	} catch (error) {
		console.log(error)
	}
}
