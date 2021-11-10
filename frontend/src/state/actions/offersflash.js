export const types = {
	GET_ALL_OFFERS_FLASH: 'GET_ALL_OFFERS_FLASH'
}

export const getAllOffersFlash = (data) => ({
	type: types.GET_ALL_OFFERS_FLASH,
	payload: data
})
