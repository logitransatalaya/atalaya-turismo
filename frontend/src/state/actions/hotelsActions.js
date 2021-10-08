// creamos la accion
export const types = {
	UPDATE_HOTELS_LIST: 'UPDATE_HOTELS_LIST',
	UPDATE_CITY_LIST: 'UPDATE_CITY_LIST',
	UPDATE_CURRENT_HOTEL: 'UPDATE_CURRENT_HOTEL'
}

export const updateHotelsList = (id) => ({
	type: types.UPDATE_HOTELS_LIST,
	payload: id
})

export const updatecityList = (data) => ({
	type: types.UPDATE_CITY_LIST,
	payload: data
})

export const updateCurrentHotel = (data) => ({
	type: types.UPDATE_CURRENT_HOTEL,
	payload: data
})
