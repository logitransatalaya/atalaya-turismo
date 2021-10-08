import { combineReducers } from 'redux'
import { hotelsReducer } from './hotelsReducer'
import { toolTipReducer } from './toolTipReducer'
import { tourReducer } from './toursReducer'

export default combineReducers({
	hotelsReducer,
	tourReducer,
	toolTipReducer
})
