export const types = {
	GET_ALL_PLANS: 'GET_ALL_PLANS'
}

export const getAllPlans = (data) => ({
	type: types.GET_ALL_PLANS,
	payload: data
})
