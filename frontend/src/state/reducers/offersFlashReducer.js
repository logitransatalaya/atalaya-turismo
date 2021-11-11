import { types } from 'state/actions/offersflash'

export const initial_state = {
	offersflash: null
}

export const OffersFlashReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_ALL_OFFERS_FLASH:
			return {
				...state,
				offersflash: action.payload
			}
		default:
			return state
	}
}
