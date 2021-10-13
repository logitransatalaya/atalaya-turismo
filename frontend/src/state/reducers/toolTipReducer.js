import { types } from 'state/actions/toolTipActions'

export const initial_state = {
	currentRoute: null,
	currentMessage: {
		route: '',
		title: '',
		page: ''
	}
}

export const toolTipReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_ROUTE:
			return {
				...state,
				currentRoute: action.payload
			}
		case types.GET_MESSAGE: {
			return {
				...state,
				currentMessage: action.payload
			}
		}
		default:
			return state
	}
}
