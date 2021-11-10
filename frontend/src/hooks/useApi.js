import {
	updatecityList,
	updateCurrentHotel,
	updateHotelsList
} from 'state/actions/hotelsActions'
import { api2 } from 'helpers/api2'
import { useDispatch } from 'react-redux'
import { getAllPlans, getCurrentPlan } from 'state/actions/plansAction'
import { getAllOffers } from 'state/actions/offersActions'
import { getTours, updateCurrentTour } from 'state/actions/toursActions'
import { getAllOffersFlash } from 'state/actions/offersflash'

export const useApi = () => {
	const dispatch = useDispatch()

	const getCities = async () => {
		const data = await api2({
			url1: 'ciudades',
			url2: null,
			url3: null
		})

		dispatch(updatecityList(data?.cities))
	}

	const getHotelList = async (locid, setNameCity) => {
		const data = await api2({
			url1: 'hotels',
			url2: locid,
			url3: null
		})
		dispatch(updateHotelsList(data?.hotels))
		setNameCity(data?.city[0].name)
	}

	const getHotelFeatures = async (locid, hotelId, setCity) => {
		const data = await api2({
			url1: 'hotels',
			url2: locid,
			url3: hotelId
		})
		dispatch(updateCurrentHotel(data?.hotel[0]))
		setCity(data?.city[0].name)
	}

	const getOffers = async () => {
		const data = await api2({
			url1: 'offers',
			url2: null,
			url3: null
		})
		dispatch(getAllOffers(data?.offers))
	}
	const getPlans = async () => {
		const data = await api2({
			url1: 'plans',
			url2: null,
			url3: null
		})
		dispatch(getAllPlans(data?.planes))
	}
	const getDetailsPlans = async (urlCode) => {
		const data = await api2({
			url1: 'plans',
			url2: urlCode,
			url3: null
		})
		dispatch(getCurrentPlan(data?.planes[0]))
	}

	const getToursApi = async () => {
		const data = await api2({
			url1: 'tours',
			url2: null,
			url3: null
		})
		dispatch(getTours(data?.Toures))
		dispatch(updateCurrentTour(data?.Toures[0]))
	}
	const getCurrentTour = async (urlCode) => {
		const data = await api2({
			url1: 'tours',
			url2: urlCode,
			url3: null
		})
		dispatch(updateCurrentTour(data?.Toures[0]))
	}
	const getOffersFlash = async () => {
		const data = await api2({
			url1: 'offersflash',
			url2: null,
			url3: null
		})
		dispatch(getAllOffersFlash(data))
	}

	return {
		getPlans,
		getCities,
		getOffers,
		getToursApi,
		getHotelList,
		getCurrentTour,
		getOffersFlash,
		getDetailsPlans,
		getHotelFeatures
	}
}
