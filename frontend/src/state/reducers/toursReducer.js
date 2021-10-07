import { types } from '../actions/toursActions'

export const initial_state = {
	tours: null,
	currentTour: null
}

export const tourReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_TOURS:
			return {
				...state,
				tours: action.payload
			}

		case types.UPDATE_CURRENT_TOUR:
			return {
				...state,
				currentTour: action.payload
			}

		default:
			return state
	}
}
