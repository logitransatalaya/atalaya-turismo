import { types } from '../actions/hotelsActions'

export const initial_state = {
	locations: null,
	hotelsCity: null,
	servicesHotel: null
}

export const homeReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_HOTELS:
			return {
				...state,
				hotelsCity: action.payload
			}

		case types.GET_ALL_HOTELS:
			return {
				...state,
				locations: action.payload
			}

		case types.GET_SERVICES_HOTEL:
			return {
				...state,
				servicesHotel: action.payload
			}

		default:
			return state
	}
}
