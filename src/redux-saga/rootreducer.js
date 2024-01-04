import { combineReducers } from "redux";
import facultyReducer from "./faculty/reducer/reducer"
import StudentReducer from "./student/reducer/reducer"
import SubadminReducer from "./subadmin/reducer/reducer"

const rootReducer = combineReducers({
    facultyReducer,
    StudentReducer,
    SubadminReducer
})

export default rootReducer