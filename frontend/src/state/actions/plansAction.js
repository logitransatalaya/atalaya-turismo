export const types = {
	GET_ALL_PLANS: 'GET_ALL_PLANS',
	GET_CURRENT_PLAN: 'GET_CURRENT_PLAN'
}

export const getAllPlans = (data) => ({
	type: types.GET_ALL_PLANS,
	payload: data
})

export const getCurrentPlan = (data) => ({
	type: types.GET_CURRENT_PLAN,
	payload: data
})
