import React, { Component } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
import EmployeeHome from './components/EmployeeHome';



export default class App extends Component {
  render() {
    return (
     
      <div className="container">
      <BrowserRouter>  
      

      {/* <div className="picture">
        <img src={pic} /> 

      </div> */}


        <NavBar></NavBar>
        <Routes>     
            <Route exact path="/" element ={<Home/>}/>
            <Route exact path="/empposts" element ={<EmployeeHome/>}/>
            <Route exact path="/add" element ={<CreatePost/>}/>
            <Route exact path="/edit/:id" element ={<EditPost/>}/>
            <Route exact path="/post/:id" element ={<PostDetails/>}/>
        </Routes>
       
    </BrowserRouter>
    </div>
    )

  }
}
 