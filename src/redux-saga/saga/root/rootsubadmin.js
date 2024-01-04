import { takeLatest } from "redux-saga/effects";
import { DELETE_SUBADMIN_PROGESS, GET_SUBADMIN_PROGESS, POST_SUBADMIN_PROGESS } from "../../subadmin/action/action";
import { manageSubadmin, manageSubadmindelete, manageSubadminpost } from "../managesubadmin/managesubadmin";

// GET SUBADMIN

export function* rootReducerSubadmin() {
    yield takeLatest(GET_SUBADMIN_PROGESS,manageSubadmin)
}

// POST SUBADMIN

export function* rootReducerSubadminpost() {
    yield takeLatest(POST_SUBADMIN_PROGESS,manageSubadminpost)
}

// DELETE SUBADMIN

export function* rootReducerSubadmindelete() {
    yield takeLatest(DELETE_SUBADMIN_PROGESS,manageSubadmindelete)
}