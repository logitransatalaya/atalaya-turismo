import { types } from '../actions/bannerHomeAction'

export const initial_state = {
	banners: null
}

export const bannerHomeReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_ALL_BANNER:
			return {
				...state,
				banners: action.payload
			}
		default:
			return state
	}
}
