export const types = {
	GET_ALL_BANNER: 'GET_ALL_BANNER'
}

export const getAllBanner = (data) => ({
	type: types.GET_ALL_BANNER,
	payload: data
})
