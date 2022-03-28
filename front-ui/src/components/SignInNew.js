import React, { Component } from "react";

export default class SignInNew extends Component {
    
        constructor(props)
        {
            super(props)
            this.state = {
               
        }
            this.click=this.click.bind(this);
         }
         
      click()
        {
            console.log("hi");
            this.props.history.push('/m');
            
            
        }
        render() 
        {
        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={this.click}>Submit</button>
              
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}