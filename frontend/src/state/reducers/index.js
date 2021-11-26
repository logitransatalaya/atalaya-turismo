import { tourReducer } from './toursReducer'
import { PlansReducer } from './plansReducer'
import { hotelsReducer } from './hotelsReducer'
import { OffersReducer } from './offersReducer'
import { toolTipReducer } from './toolTipReducer'
import { combineReducers } from 'redux'
import { OffersFlashReducer } from './offersFlashReducer'
import { bannerHomeReducer } from './bannerHomeReducer'

export default combineReducers({
	hotelsReducer,
	tourReducer,
	toolTipReducer,
	PlansReducer,
	OffersReducer,
	OffersFlashReducer,
	bannerHomeReducer
})
