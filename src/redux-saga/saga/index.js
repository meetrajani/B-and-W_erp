import { all } from "redux-saga/effects";
import { rootReducerFaculty, rootReducerFacultyDelete, rootReducerFacultyPost, rootReducerStudent } from "./root/rootadmin";

export function* rootFaculty() {
    yield all ([rootReducerFaculty(),rootReducerFacultyDelete(),rootReducerFacultyPost(),rootReducerStudent()])
}