import { takeLatest } from "redux-saga/effects";
import { DELETE_STUDENT_PROGESS, GET_STUDENT_PROGESS, POST_STUDENT_PROGESS } from "../../student/action/action";
import { manageStudent, manageStudentdelete, manageStudentpost } from "../managestudent/managestudent";


// GET STUDENT

export function* rootReducerStudent() {
    yield takeLatest(GET_STUDENT_PROGESS,manageStudent)
}

// POST STUDENT

export function* rootReducerStudentpost() {
    yield takeLatest(POST_STUDENT_PROGESS,manageStudentpost)
}

// DELETE STUDENT 

export function* rootReducerStudentdelete() {
    yield takeLatest(DELETE_STUDENT_PROGESS,manageStudentdelete)
}