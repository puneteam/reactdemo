
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes} from 'react-router-dom'

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
//import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

import Footer from './components/FooterComponent';



function App() {
  return (
    <div>
        <Router>
              <Header />
                <div className="container">
                <Routes>
                  <Route path="/" element={<ListEmployeeComponent/>} />
                  <Route path="/employees" element={<ListEmployeeComponent/>} />
                  <Route path="/add-employee/:id" element={<CreateEmployeeComponent/>} />
                  <Route path="/view-employee/:id" element={<ViewEmployeeComponent/>} />
                </Routes>
                </div>
            <Footer/>
        </Router>
    </div>
    
  );
}

export default App;