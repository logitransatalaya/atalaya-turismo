// creamos la accion
export const types = {
	LOGIN_USER: 'LOGIN_USER',
	GET_HOTELS: 'GET_HOTELS'
}

export const loginUser = (data) => ({
	type: types.LOGIN_USER,
	payload: data
})

export const getHotels = (id) => ({
	type: types.GET_HOTELS,
	payload: id
})
