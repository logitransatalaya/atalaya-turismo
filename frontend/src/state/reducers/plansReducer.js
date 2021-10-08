import { types } from 'state/actions/toolTipActions'

export const initial_state = {
	plansReducer: null
}

export const PlansReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_ALL_PLANS:
			return {
				...state,
				plansReducer: action.payload
			}
		default:
			return state
	}
}
