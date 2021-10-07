import { combineReducers } from 'redux'
import { tourReducer } from './toursReducer'
import { homeReducer } from './hotelsReducer'

export default combineReducers({
	homeReducer,
	tourReducer
})
