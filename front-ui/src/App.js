import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'

import LoginApp from './components/LoginApp';
import MainComponent from './components/MainComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/HeaderComponent';

import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import CreateTeacherComponent from './components/CreateTeacherComponent';
import ListTeacherComponent from './components/ListTeacherComponent';
import ViewTeacherComponent from './components/ViewTeacherComponent';
import SignUp from './components/SignUp';
import SignInNew from './components/SignInNew';
import Dropdown1 from './components/Dropdown1';


//import Footer from './components/FooterComponent';
export default class App extends React.Component {

  render()
  {
  return (
  <div>
    <header>
      <div className="nav-area">
       {/* <a href="/#" className="logo">
          User
  </a>
       <Navbar />*/}
      </div>
    </header>

        <Router>
        <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
         
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
             {/* <Header />
              <LoginApp/>
              <Login/>*/}
              <SignInNew/>
                
                <div className="auth-wrapper">
        <div className="auth-inner">
                    <Switch> 
                  
            <Route path="/sign-in" component={SignInNew} />
            <Route path="/sign-up" component={SignUp} />
                  {/*<Route path="/login" component={LoginApp}></Route>*/}
                        <Route path = "/m" component = {MainComponent}></Route>
                    
                        <Route path = "/dd" component = {Dropdown1}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>

                         
                          <Route path = "/teachers" component = {ListTeacherComponent}></Route>
                          <Route path = "/add-teacher/:id" component = {CreateTeacherComponent}></Route>
                          <Route path = "/view-teacher/:id" component = {ViewTeacherComponent}></Route>
                          
                          
                    </Switch>
                </div>
             {/* <Footer />*/}
             </div>
        </Router>
        
    </div>
    
  );
}}