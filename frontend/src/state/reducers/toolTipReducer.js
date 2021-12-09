import { types } from 'state/actions/toolTipActions'

export const initial_state = {
	currentRoute: null,
	currentMessage: {
		route: '',
		title: '',
		page: ''
	},
	modalImages: {
		stateShow: false,
		urlImg: null,
		numImg: null
	},
	googleTranslate: {
		currentPath: null,
		fontElementsList: null
	}
}

export const toolTipReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_ROUTE:
			return {
				...state,
				currentRoute: action.payload
			}
		case types.CURRENT_PATH:
			return {
				...state,
				googleTranslate: {
					...state.googleTranslate,
					currentPath: action.payload
				}
			}
		case types.FONT_ELEMENTS_LIST:
			return {
				...state,
				googleTranslate: {
					...state.googleTranslate,
					fontElementsList: action.payload
				}
			}
		case types.GET_MESSAGE: {
			return {
				...state,
				currentMessage: action.payload
			}
		}
		case types.HANDLE_MODAL_IMAGES: {
			return {
				...state,
				modalImages: {
					stateShow: !state.modalImages.stateShow,
					urlImg: action.payload,
					numImg: action.payload
				}
			}
		}
		default:
			return state
	}
}
