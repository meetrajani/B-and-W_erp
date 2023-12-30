import React from 'react'
import { Link } from 'react-router-dom'

const Asidebar = ({data}) => {
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