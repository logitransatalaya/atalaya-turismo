import { combineReducers } from 'redux'
import { homeReducer } from './hotelsReducer'
import { tourReducer } from './toursReducer'

export default combineReducers({
	homeReducer,
	tourReducer
})
