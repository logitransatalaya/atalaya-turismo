//creat acción
export const types = {
	GET_ROUTE: 'GET_ROUTE',
	GET_MESSAGE: 'GET_MESSAGE',
	CURRENT_PATH: 'CURRENT_PATH',
	FONT_ELEMENTS_LIST: 'FONT_ELEMENTS_LIST',
	HANDLE_MODAL_IMAGES: 'HANDLE_MODAL_IMAGES'
}

export const getRoute = (route) => ({
	type: types.GET_ROUTE,
	payload: route
})

export const currentPath = (id) => ({
	type: types.CURRENT_PATH,
	payload: id
})

export const handleFontElementList = (list) => ({
	type: types.FONT_ELEMENTS_LIST,
	payload: list
})

export const getMessage = (state) => ({
	type: types.GET_MESSAGE,
	payload: state
})

export const handleModalImages = (data) => ({
	type: types.HANDLE_MODAL_IMAGES,
	payload: data
})
