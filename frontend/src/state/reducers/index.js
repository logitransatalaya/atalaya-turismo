import { combineReducers } from 'redux'
import { homeReducer } from './hotelsReducer'
import { toolTipReducer } from './toolTipReducer'
import { tourReducer } from './toursReducer'

export default combineReducers({
	homeReducer,
	tourReducer,
	toolTipReducer
})
