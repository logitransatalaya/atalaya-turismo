import { combineReducers } from 'redux'
import { tourReducer } from './toursReducer'
import { homeReducer } from './hotelsReducer'
import { toolTipReducer } from './toolTipReducer'

export default combineReducers({
	homeReducer,
	tourReducer,
	toolTipReducer
})
