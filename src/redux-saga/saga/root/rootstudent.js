import { takeLatest } from "redux-saga/effects";
import { GET_STUDENT_PROGESS, POST_STUDENT_PROGESS } from "../../student/action/action";
import { manageStudent, manageStudentpost } from "../managestudent/managestudent";


// GET STUDENT

export function* rootReducerStudent() {
    yield takeLatest(GET_STUDENT_PROGESS,manageStudent)
}

// POST STUDENT

export function* rootReducerStudentpost() {
    yield takeLatest(POST_STUDENT_PROGESS,manageStudentpost)
}