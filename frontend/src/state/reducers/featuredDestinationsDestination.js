import { types } from '../actions/featuredDestinationsAction'

export const initial_state = {
	featureDestination: null
}

export const featureDestinationReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_ALL_FEATURE_DESTINATION:
			return {
				...state,
				featureDestination: action.payload
			}
		default:
			return state
	}
}
