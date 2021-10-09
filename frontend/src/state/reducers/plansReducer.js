import { types } from 'state/actions/plansAction'

export const initial_state = {
	plansReducer: null,
	currentPlan: null
}

export const PlansReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_ALL_PLANS:
			return {
				...state,
				plansReducer: action.payload
			}

		case types.GET_CURRENT_PLAN:
			return {
				...state,
				currentPlan: action.payload
			}

		default:
			return state
	}
}
