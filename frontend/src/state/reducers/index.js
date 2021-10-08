import { combineReducers } from 'redux'
import { hotelsReducer } from './hotelsReducer'
import { toolTipReducer } from './toolTipReducer'
import { tourReducer } from './toursReducer'
import { PlansReducer } from './plansReducer'

export default combineReducers({
	hotelsReducer,
	tourReducer,
	toolTipReducer,
	PlansReducer
})
