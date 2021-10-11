export const types = {
	GET_ALL_OFFERS: 'GET_ALL_OFFERS',
	GET_CURRENT_OFFER: 'GET_CURRENT_OFFER'
}

export const getAllOffers = (data) => ({
	type: types.GET_ALL_OFFERS,
	payload: data
})

export const getCurrentOffer = (data) => ({
	type: types.GET_CURRENT_OFFER,
	payload: data
})
