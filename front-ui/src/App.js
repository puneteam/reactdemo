
import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import MainComponent from './components/MainComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

import CreateTeacherComponent from './components/CreateTeacherComponent';
import ListTeacherComponent from './components/ListTeacherComponent';
import ViewTeacherComponent from './components/ViewTeacherComponent';

import Footer from './components/FooterComponent';



function App() {
  return (
    <div>
        <Router>
              <Header />
                <div className="container">
             
                    <Switch> 

                         <Route path = "/" exact component = {MainComponent}></Route>
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
}

export default App;