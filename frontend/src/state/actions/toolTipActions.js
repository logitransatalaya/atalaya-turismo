//creat acción
export const types = {
	GET_ROUTE: 'GET_ROUTE'
}

export const getRoute = (route) => ({
	type: types.GET_ROUTE,
	payload: route
})
