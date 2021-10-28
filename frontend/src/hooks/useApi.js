import { useDispatch } from 'react-redux'
import { hotels } from 'json/hotels.json'
import { tours } from 'json/tours.json'
import {
	updateCurrentHotel,
	updateHotelsList
} from 'state/actions/hotelsActions'
import { updateCurrentTour } from 'state/actions/toursActions'

export const useApi = () => {
	const dispatch = useDispatch()

	const getHotels = (locid, hotelsList) => {
		const cityId = parseInt(locid)
		const currentHotelsListCityId = hotelsList && hotelsList[0].idcity

		if (!hotelsList) {
			const res = hotels.filter((hotel) => hotel.idcity === cityId)
			dispatch(updateHotelsList(res))
		} else if (cityId !== currentHotelsListCityId) {
			const res = hotels.filter((hotel) => hotel.idcity === cityId)
			dispatch(updateHotelsList(res))
		}
	}

	const getCurrentHotel = (locid, hotelId, currentHotel, hotelsList) => {
		const cityId = parseInt(locid)
		const currentHotelCityId = currentHotel?.urlCode

		if (!currentHotel) {
			const [hotel] = hotels
				.filter((hotel) => hotel.idcity === cityId)
				.filter((hotel) => hotel.urlCode === hotelId)
			dispatch(updateCurrentHotel(hotel))
		} else if (hotelId !== currentHotelCityId) {
			const [hotel] = hotelsList.filter(
				(hotel) => hotel.urlCode === hotelId
			)
			dispatch(updateCurrentHotel(hotel))
		}
	}

	const getCurrentTour = (urlCode, currentTour) => {
		const currentUrlCode = currentTour?.urlCode

		if (!currentTour) {
			const [tour] = tours.filter((el) => el.urlCode === urlCode)
			dispatch(updateCurrentTour(tour))
		} else if (currentUrlCode !== urlCode) {
			const [tour] = tours.filter((el) => el.urlCode === urlCode)
			dispatch(updateCurrentTour(tour))
		}
	}

	return {
		getHotels,
		getCurrentHotel,
		getCurrentTour
	}
}
