import React, {useEffect , Component} from 'react';
import { Routes , Route } from 'react-router-dom';
//import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './component/Common/Navbar';
import Listpost from './component/Listpost/Listpost';
import Newpost from './component/Newpost/Newpost';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import Logout from './component/Logout/Logout';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}


render(){
  return (
    <div class="outer">
      <div className="container">
    <Navbar /><br />
    <Routes>
        <Route path='/listpost' element={<Listpost/>} />
   
        <Route path='/newpost' element={<Newpost />} />
   
        <Route path='/signup' element={<Signup />} />
    
        <Route path='/login' element={<Login />} />
    
        <Route path='/logout' element={<Logout />} />
    </Routes>
      </div>
    </div>
  );
};
}

export default App;
