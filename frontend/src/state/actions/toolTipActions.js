//creat acción
export const types = {
	GET_ROUTE: 'GET_ROUTE',
	GET_MESSAGE: 'GET_MESSAGE',
	HANDLE_MODAL_IMAGES: 'HANDLE_MODAL_IMAGES'
}

export const getRoute = (route) => ({
	type: types.GET_ROUTE,
	payload: route
})

export const getMessage = (state) => ({
	type: types.GET_MESSAGE,
	payload: state
})

export const handleModalImages = (data) => ({
	type: types.HANDLE_MODAL_IMAGES,
	payload: data
})
