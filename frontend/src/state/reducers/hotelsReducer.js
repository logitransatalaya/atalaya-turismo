import { types } from '../actions/hotelsActions'

export const initial_state = {
	cityList: null,
	hotelsList: null,
	currentHotel: null,
	cityInternatinalList: null,
	hotelInternationalList: null,
	currentInternationalHotel: null
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

		case types.INTERNACIONAL_LIST_HOTELS:
			return {
				...state,
				cityInternatinalList: action.payload
			}

		case types.CITY_INTERNATIONAL_LIST:
			return {
				...state,
				hotelInternationalList: action.payload
			}
		case types.INTERNATIONAL_HOTEL:
			return {
				...state,
				currentInternationalHotel: action.payload
			}
		default:
			return state
	}
}
