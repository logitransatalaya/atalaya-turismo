import { types } from 'state/actions/toolTipActions'

export const initial_state = {
	currentRoute: null
}

export const toolTipReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_ROUTE:
			return {
				...state,
				currentRoute: action.payload
			}
		default:
			return state
	}
}
