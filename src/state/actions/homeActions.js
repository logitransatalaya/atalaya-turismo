// creamos la accion
export const types = {
	LOGIN_USER: 'LOGIN_USER'
}

export const loginUser = (data) => ({
	type: types.LOGIN_USER,
	payload: data
})
