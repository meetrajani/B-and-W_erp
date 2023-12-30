import { all } from "redux-saga/effects";
import { rootReducerFaculty, rootReducerFacultyDelete, rootReducerFacultyPost} from "./root/rootfaculty";
import { rootReducerStudent } from "./root/rootstudent";

export function* rootindex() {
    yield all ([rootReducerFaculty(),rootReducerFacultyDelete(),rootReducerFacultyPost(),rootReducerStudent()])
}
