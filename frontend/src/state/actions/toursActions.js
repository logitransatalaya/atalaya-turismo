// creamos la accion
export const types = {
	GET_TOURS: 'GET_TOURS',
	UPDATE_CURRENT_TOUR: 'UPDATE_CURRENT_TOUR'
}

export const getTours = (data) => ({
	type: types.GET_TOURS,
	payload: data
})

export const updateCurrentTour = (data) => ({
	type: types.UPDATE_CURRENT_TOUR,
	payload: data
})
