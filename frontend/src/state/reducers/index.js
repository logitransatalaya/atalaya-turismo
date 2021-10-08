import { combineReducers } from 'redux'
import { homeReducer } from './hotelsReducer'
import { toolTipReducer } from './toolTipReducer'
import { tourReducer } from './toursReducer'
import { PlansReducer } from './plansReducer'

export default combineReducers({
	homeReducer,
	tourReducer,
	toolTipReducer,
	PlansReducer
})
