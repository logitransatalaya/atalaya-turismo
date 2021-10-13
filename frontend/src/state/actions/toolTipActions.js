//creat acción
export const types = {
	GET_ROUTE: 'GET_ROUTE',
	GET_MESSAGE: 'GET_MESSAGE'
}

export const getRoute = (route) => ({
	type: types.GET_ROUTE,
	payload: route
})

export const getMessage = (state) => ({
	type: types.GET_MESSAGE,
	payload: state
})
