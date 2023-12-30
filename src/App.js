import './App.css';
import Header from './componets/common/Header';
import Asidebar from './componets/common/Asidebar';
import { Route, Routes } from 'react-router-dom';
import Subadmins from './componets/admin/body/Subadmins';
import Faculty from './componets/admin/body/Faculty';
import Student from './componets/admin/body/Student';
import {admin} from './componets/common/Data/sidebarData'

function App() {

  let role = "admin"

  if(role === "admin"){
    return(
      <>
        <Header/>
        <div className="row">
          <div className="col-2">
            <Asidebar data={admin}/>
          </div>
          <div className="col-10">
            <Routes>
              <Route path='/'element={<Subadmins/>}/>
              <Route path='/Faculty'element={<Faculty/>}/>
              <Route path='/Student'element={<Student/>}/>
            </Routes>
          </div>
        </div>
      </>
    ) 
  }
}

export default App;
