import { all } from "redux-saga/effects";
import { rootReducerFacultUpdate, rootReducerFaculty, rootReducerFacultyDelete, rootReducerFacultyPost} from "./root/rootfaculty";
import { rootReducerStudent, rootReducerStudentdelete, rootReducerStudentpost, rootReducerStudentupdate } from "./root/rootstudent";
import { rootReducerSubadmin, rootReducerSubadmindelete, rootReducerSubadminpost } from "./root/rootsubadmin";

export function* rootindex() {
    yield all ([
        rootReducerSubadmin(),
        rootReducerSubadminpost(),
        rootReducerSubadmindelete(),
        rootReducerFaculty(),
        rootReducerFacultyDelete(),
        rootReducerFacultyPost(),
        rootReducerFacultUpdate(),
        rootReducerStudent(),
        rootReducerStudentpost(),
        rootReducerStudentdelete(),
        rootReducerStudentupdate()
    ])
}
