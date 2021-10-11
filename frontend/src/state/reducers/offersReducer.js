import { types } from 'state/actions/offersActions'

export const initial_state = {
	offersReducer: null,
	currentOffers: null
}

export const OffersReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_ALL_OFFERS:
			return {
				...state,
				offersReducer: action.payload
			}

		case types.GET_CURRENT_OFFER:
			return {
				...state,
				currentOffers: action.payload
			}

		default:
			return state
	}
}
