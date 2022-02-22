
import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


import Footer from './components/FooterComponent';



function App() {
  return (
    <div>
        <Router>
              <Header />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                         
                          
                    </Switch>
                </div>
              <Footer />
        </Router>
    </div>
    
  );
}

export default App;