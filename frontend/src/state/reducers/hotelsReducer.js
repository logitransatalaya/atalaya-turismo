import { types } from '../actions/hotelsActions'

export const initial_state = {
	hotelsList: null,
	stateNacionality: null,
	currentHotel: null,
	CitiesOrCountries: null,
	InternationalHotel: null,
	internationalCities: null,
	aboutInternationalHotel: null
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
				CitiesOrCountries: action.payload
			}

		case types.UPDATE_CURRENT_HOTEL:
			return {
				...state,
				currentHotel: action.payload
			}

		case types.INTERNATIONAL_CITIES:
			return {
				...state,
				internationalCities: action.payload
			}

		case types.INTERNACIONAL_HOTELS:
			return {
				...state,
				InternationalHotel: action.payload
			}
		case types.ABOUT_INTERNACIONAL_HOTEL:
			return {
				...state,
				aboutInternationalHotel: action.payload
			}
		case types.CHANGE_NATIONALITY:
			return {
				...state,
				stateNacionality: action.payload
			}

		default:
			return state
	}
}
