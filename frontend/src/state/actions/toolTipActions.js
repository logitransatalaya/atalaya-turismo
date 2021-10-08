//creat acción
export const types = {
	GET_ROUTE: 'GET_ROUTE',
	UPDATE_CURRENT_ROUTE: 'UPDATE_CURRENT_ROUTE'
}

export const getRoute = (array) => ({
	types: types.GET_ROUTE,
	payload: array
})

export const updateRoute = (route) => ({
	type: types.UPDATE_CURRENT_ROUTE,
	payload: route
})
