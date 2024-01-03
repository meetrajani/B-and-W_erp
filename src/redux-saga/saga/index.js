import { all } from "redux-saga/effects";
import { rootReducerFacultUpdate, rootReducerFaculty, rootReducerFacultyDelete, rootReducerFacultyPost} from "./root/rootfaculty";
import { rootReducerStudent, rootReducerStudentdelete, rootReducerStudentpost, rootReducerStudentupdate } from "./root/rootstudent";

export function* rootindex() {
    yield all ([rootReducerFaculty(),
        rootReducerFacultyDelete(),
        rootReducerFacultyPost(),
        rootReducerFacultUpdate(),
        rootReducerStudent(),
        rootReducerStudentpost(),
        rootReducerStudentdelete(),
        rootReducerStudentupdate()
    ])
}
