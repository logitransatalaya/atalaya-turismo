// creamos la accion
export const types = {
	UPDATE_HOTELS_LIST: 'UPDATE_HOTELS_LIST',
	UPDATE_CITY_LIST: 'UPDATE_CITY_LIST',
	UPDATE_CURRENT_HOTEL: 'UPDATE_CURRENT_HOTEL',
	INTERNACIONAL_LIST_HOTELS: 'INTERNACIONAL_LIST_HOTELS',
	CITY_INTERNATIONAL_LIST: 'CITY_INTERNATIONAL_LIST',
	INTERNATIONAL_HOTEL: 'INTERNATIONAL_HOTEL'
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
export const internationalListHotels = (data) => ({
	type: types.INTERNACIONAL_LIST_HOTELS,
	payload: data
})

export const cityInternationalList = (data) => ({
	type: types.CITY_INTERNATIONAL_LIST,
	payload: data
})

export const InternationalHotel = (data) => ({
	type: types.INTERNATIONAL_HOTEL,
	payload: data
})
