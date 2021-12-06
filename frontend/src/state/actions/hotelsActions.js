// creamos la accion
export const types = {
	UPDATE_CITY_LIST: 'UPDATE_CITY_LIST',
	CHANGE_NATIONALITY: 'CHANGE_NATIONALITY',
	UPDATE_HOTELS_LIST: 'UPDATE_HOTELS_LIST',
	INTERNATIONAL_HOTEL: 'INTERNATIONAL_HOTEL',
	INTERNATIONAL_CITIES: 'INTERNATIONAL_CITIES',
	UPDATE_CURRENT_HOTEL: 'UPDATE_CURRENT_HOTEL',
	ABOUT_INTERNACIONAL_HOTEL: 'ABOUT_INTERNACIONAL_HOTEL'
}
// == Nacionales == //
export const updateHotelsList = (data) => ({
	type: types.UPDATE_HOTELS_LIST,
	payload: data
})

export const updatecityList = (data) => ({
	type: types.UPDATE_CITY_LIST,
	payload: data
})

export const updateCurrentHotel = (data) => ({
	type: types.UPDATE_CURRENT_HOTEL,
	payload: data
})

// == Internacionales == //
export const internationalCities = (data) => ({
	type: types.INTERNATIONAL_CITIES,
	payload: data
})

export const internationalHotels = (data) => ({
	type: types.INTERNACIONAL_HOTELS,
	payload: data
})

export const aboutInternationalHotel = (data) => ({
	type: types.ABOUT_INTERNACIONAL_HOTEL,
	payload: data
})
export const changeNacionality = (data) => ({
	type: types.CHANGE_NATIONALITY,
	payload: data
})
