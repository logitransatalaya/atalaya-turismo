import { types } from '../actions/hotelsActions'

export const initial_state = {
	cityList: null,
	hotelsList: null,
	currentHotel: null
}

export const hotelsReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.UPDATE_HOTELS_LIST:
			return {
				...state,
				hotelsList: action.payload
			}

		case types.UPDATE_CITY_LIST:
			return {
				...state,
				cityList: action.payload
			}

		case types.UPDATE_CURRENT_HOTEL:
			return {
				...state,
				currentHotel: action.payload
			}

		default:
			return state
	}
}
