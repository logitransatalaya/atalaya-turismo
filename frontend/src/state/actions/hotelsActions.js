// creamos la accion
export const types = {
	GET_HOTELS: 'GET_HOTELS',
	GET_ALL_HOTELS: 'GET_ALL_HOTELS',
	GET_SERVICES_HOTEL: 'GET_SERVICES_HOTEL'
}

export const getHotels = (id) => ({
	type: types.GET_HOTELS,
	payload: id
})

export const getAllHotels = (data) => ({
	type: types.GET_ALL_HOTELS,
	payload: data
})

export const getServicesHotel = (data) => ({
	type: types.GET_SERVICES_HOTEL,
	payload: data
})
