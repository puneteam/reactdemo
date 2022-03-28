import React, { Component } from 'react'
import Dropdown1 from './Dropdown1';
export default class MainComponent extends Component {
  constructor(props)
  {
      super(props);
      this.teacher=this.teacher.bind(this);
      this.employee=this.employee.bind(this);
  }

  employee()
  {
      this.props.history.push("/employees");
  }

  teacher()
  {
      this.props.history.push("/teachers");
  }
  render()
  {
    return (
      

        
        <div>
            <Dropdown1/>
           {/*  <h1>"this main component"</h1>
           console.log("main component");*/}
            <h2 className="text-center">User List</h2>
            <div className = "row">
               <button className="btn btn-primary" onClick={this.teacher}> Teacher</button>
            </div>
            <br></br>
            <div className = "row">
               <button className="btn btn-primary" onClick={this.employee}> Employee</button>
            </div>
      </div>


      
    )
  
}
}


