import { combineReducers } from 'redux'
import { hotelsReducer } from './hotelsReducer'
import { toolTipReducer } from './toolTipReducer'
import { tourReducer } from './toursReducer'
import { PlansReducer } from './plansReducer'
import { OffersReducer } from './offersReducer'

export default combineReducers({
	hotelsReducer,
	tourReducer,
	toolTipReducer,
	PlansReducer,
	OffersReducer
})
