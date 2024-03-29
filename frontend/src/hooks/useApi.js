import {
	aboutInternationalHotel,
	internationalCities,
	internationalHotels,
	updatecityList,
	updateCurrentHotel,
	updateHotelsList
} from 'state/actions/hotelsActions'
import { api } from 'helpers/api'
import { useDispatch } from 'react-redux'
import { getAllOffers } from 'state/actions/offersActions'
import { getAllOffersFlash } from 'state/actions/offersflash'
import { getAllBanner } from 'state/actions/bannerHomeAction'
import { getAllPlans, getCurrentPlan } from 'state/actions/plansAction'
import { getTours, updateCurrentTour } from 'state/actions/toursActions'

export const useApi = () => {
	const dispatch = useDispatch()

	// == HOTELES NACIONALES == //
	const getCities = async (nacionality) => {
		const data = await api({
			url1: 'hoteles',
			url2: nacionality,
			url3: null
		})
		dispatch(updatecityList(data?.location))
	}

	const getHotelList = async (locid, setNameCity, nacionality) => {
		const data = await api({
			url1: 'hoteles',
			url2: nacionality,
			url3: locid
		})
		dispatch(updateHotelsList(data?.hotels))
		setNameCity(data?.location[0].name)
	}

	const getHotelFeatures = async (nacionality, city, hotelId) => {
		const data = await api({
			url1: 'hoteles',
			url2: nacionality,
			url3: city,
			url4: hotelId
		})
		dispatch(updateCurrentHotel(data?.hotel[0]))
	}

	// == HOTELES INTERNACIONALES == //
	const getCountry = async () => {
		const data = await api({
			url1: '',
			url2: null,
			url3: null
		})
		dispatch(internationalCities(data?.cities))
	}

	const getInternationalHotels = async () => {
		const data = await api({
			url1: 'hotels-international',
			url2: null,
			url3: null
		})
		dispatch(internationalHotels(data))
	}

	const getAboutInternationalHotel = async () => {
		const data = await api({
			url1: 'about-hotels-international',
			url2: null,
			url3: null
		})
		dispatch(aboutInternationalHotel(data))
	}

	// == OFERTAS  == //

	const getOffers = async () => {
		const data = await api({
			url1: 'offers',
			url2: null,
			url3: null
		})
		dispatch(getAllOffers(data?.offers))
	}
	const getPlans = async () => {
		const data = await api({
			url1: 'plans',
			url2: null,
			url3: null
		})
		dispatch(getAllPlans(data?.planes))
	}
	const getDetailsPlans = async (urlCode) => {
		const data = await api({
			url1: 'plans',
			url2: urlCode,
			url3: null
		})
		dispatch(getCurrentPlan(data?.planes[0]))
	}

	const getToursApi = async () => {
		const data = await api({
			url1: 'tours',
			url2: null,
			url3: null
		})
		dispatch(getTours(data?.Toures))
		dispatch(updateCurrentTour(data?.Toures[0]))
	}

	const getCurrentTour = async (urlCode) => {
		const data = await api({
			url1: 'tours',
			url2: urlCode,
			url3: null
		})
		dispatch(updateCurrentTour(data?.Toures[0]))
	}

	const getOffersFlash = async () => {
		const data = await api({
			url1: 'offersflash',
			url2: null,
			url3: null
		})
		dispatch(getAllOffersFlash(data?.offersflash))
	}
	const getBanners = async () => {
		const data = await api({
			url1: 'banners',
			url2: null,
			url3: null
		})
		dispatch(getAllBanner(data))
	}

	return {
		getPlans,
		getCities,
		getOffers,
		getBanners,
		getToursApi,
		getHotelList,
		getCurrentTour,
		getOffersFlash,
		getDetailsPlans,
		getHotelFeatures,
		getCountry,
		getInternationalHotels,
		getAboutInternationalHotel
	}
}
