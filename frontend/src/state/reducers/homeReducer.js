import { types } from '../actions/homeActions'

export const initial_state = {
	login: false
}

export const homeReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.LOGIN_USER:
			return {
				...state,
				login: true
			}
		default:
			return state
	}
}
