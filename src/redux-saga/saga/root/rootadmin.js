import { takeLatest } from "redux-saga/effects";
import { DELETE_FACULTY_PROGESS, GET_FACULTY_PROGESS, GET_STUDENT_PROGESS, POST_FACULTY_PROGESS } from "../../admin/action/action";
import { manageFaculty, manageFacultyDelete, manageFacultyPost, manageStudent} from "../manageadmin/manageadmin";


// SUBADMIN

export function* rootReducerStudent() {
    yield takeLatest(GET_STUDENT_PROGESS,manageStudent)
}

// FACULTY

export function* rootReducerFaculty() {
    yield takeLatest(GET_FACULTY_PROGESS,manageFaculty)
}

export function* rootReducerFacultyPost() {
    yield takeLatest(POST_FACULTY_PROGESS,manageFacultyPost)
}

export function* rootReducerFacultyDelete() {
    yield takeLatest(DELETE_FACULTY_PROGESS,manageFacultyDelete)
}