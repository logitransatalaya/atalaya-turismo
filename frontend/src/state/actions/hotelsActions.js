// creamos la accion
export const types = {
	LOGIN_USER: 'LOGIN_USER',
	GET_HOTELS: 'GET_HOTELS',
	GET_SERVICES_HOTEL: 'GET_SERVICES_HOTEL',
	GET_ALL_HOTELS: 'GET_ALL_HOTELS',
	GET_SERVICES_HOTEL_HOTEL: 'GET_SERVICES_HOTEL_HOTEL'
}

export const getHotels = (id) => ({
	type: types.GET_HOTELS,
	payload: id
})

export const getServicesHotel = (data) => ({
	type: types.GET_SERVICES_HOTEL,
	payload: data
})

export const getAllHotels = (data) => ({
	type: types.GET_ALL_HOTELS,
	payload: data
})

export const getServicesHotelReducer = (data) => ({
	type: types.GET_SERVICES_HOTEL_HOTEL,
	payload: data
})
