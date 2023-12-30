import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { GET_FACULTY_PROGESS, GET_STUDENT_PROGESS } from '../../redux-saga/admin/action/action'

const Asidebar = ({data}) => {

    const dispatch=useDispatch()

    useEffect(()=>{
        if(data[0].role==="admin"){
            dispatch({type:GET_FACULTY_PROGESS})
            dispatch({type:GET_STUDENT_PROGESS})
        }else if(data[0].role==="subadmin"){
            dispatch({type:GET_FACULTY_PROGESS})
            dispatch({type:GET_STUDENT_PROGESS})
        }
    },[])

    return (
        <div>
            <div>
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse shadow-lg">
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                            {
                                data?.map((val, index) => {
                                    return (
                                        <li key={index} className="nav-item">
                                            <Link to={`${val.path}`} className="nav-link active" aria-current="page" href="#">
                                                {val.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}

export default Asidebar