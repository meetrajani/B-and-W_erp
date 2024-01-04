import './App.css';
import Header from './componets/common/Header';
import Asidebar from './componets/common/Asidebar';
import { Route, Routes } from 'react-router-dom';
import Subadmins from './componets/admin/body/Subadmins';
import Faculty from './componets/admin/body/Faculty';
import Student from './componets/admin/body/Student';
import {admin, subadminsidebar} from './componets/common/Data/sidebarData'
import Facultysubadmin from './componets/subadmin/body/Facultysubadmin';
import Studentsubadmin from './componets/subadmin/body/Studentsubadmin';

function App() {

  let role = "subadmin"

  if(role === "subadmin"){
    return(
      <>
        <Header/>
        <div className="row">
          <div className="col-2">
            <Asidebar data={admin}/>
          </div>
          <div className="col-10">
            <Routes>
              <Route path='/subadmin'element={<Subadmins/>}/>
              <Route path='/Faculty'element={<Faculty/>}/>
              <Route path='/Student'element={<Student/>}/>
            </Routes>
          </div>
        </div>
      </>
    ) 
  }else if(role === "subadmin"){
    return(
      <>
        <Header/>
        <div className="row">
          <div className="col-2">
            <Asidebar data={subadminsidebar}/>
          </div>
          <div className="col-10">
            <Routes>
              <Route path='/subadmin/faculty'element={<Facultysubadmin/>}/>
              <Route path='/subadmin/student'element={<Studentsubadmin/>}/>
            </Routes>
          </div>
        </div>
      </>
    ) 
  }
}

export default App;
