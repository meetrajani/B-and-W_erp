import { takeLatest } from "redux-saga/effects";
import { GET_STUDENT_PROGESS } from "../../student/action/action";
import { manageStudent } from "../managestudent/managestudent";


// SUBADMIN

export function* rootReducerStudent() {
    yield takeLatest(GET_STUDENT_PROGESS,manageStudent)
}