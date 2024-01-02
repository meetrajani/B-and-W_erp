import { combineReducers } from "redux";
import facultyReducer from "./faculty/reducer/reducer"
import StudentReducer from "./student/reducer/reducer"

const rootReducer = combineReducers({
    facultyReducer,
    StudentReducer
})

export default rootReducer