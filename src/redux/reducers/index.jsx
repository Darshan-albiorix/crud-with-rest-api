import { combineReducers } from "redux";
import getPassengerReducer from "./passengersReducer";

const rootReducer = combineReducers({
    passengers: getPassengerReducer
})

export default rootReducer;