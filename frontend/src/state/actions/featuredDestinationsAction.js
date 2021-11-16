export const types = {
	GET_ALL_FEATURE_DESTINATION: 'GET_ALL_FEATURE_DESTINATION'
}

export const getAllFeatureDestination = (data) => ({
	type: types.GET_ALL_FEATURE_DESTINATION,
	payload: data
})
