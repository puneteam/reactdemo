import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

import LoginApp from './components/LoginApp';
import MainComponent from './components/MainComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/HeaderComponent';
//import Navbar from './components/Navbar';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import CreateTeacherComponent from './components/CreateTeacherComponent';
import ListTeacherComponent from './components/ListTeacherComponent';
import ViewTeacherComponent from './components/ViewTeacherComponent';

//import { menuItems } from './components/menuItems';

import Dropdown1 from './components/Dropdown1';
import Footer from './components/FooterComponent';
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
              <Header />
              
                <div className="container">
             
                    <Switch> 
                        <Route path="/login" component={LoginApp}></Route>
                        <Route path = "/m" component = {MainComponent}></Route>
                       {/*<Route path = "/menu" component = {Navbar}></Route>*/}
                        <Route path = "/dd" component = {Dropdown1}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>

                         
                          <Route path = "/teachers" component = {ListTeacherComponent}></Route>
                          <Route path = "/add-teacher/:id" component = {CreateTeacherComponent}></Route>
                          <Route path = "/view-teacher/:id" component = {ViewTeacherComponent}></Route>
                          
                          
                    </Switch>
                </div>
              <Footer />
        </Router>
    </div>
    
  );
}}