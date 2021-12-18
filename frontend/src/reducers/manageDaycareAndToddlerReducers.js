import daycareReducer from "./daycareReducer"
import toddlerReducer from "./toddlerReducer"
import adminReducer from "./adminReducer"
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    daycareReducer,
    toddlerReducer,
    adminReducer
})

export default allReducers