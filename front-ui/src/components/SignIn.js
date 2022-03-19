import React, { Component } from 'react'

export default function SignIn (props) {
  
    return (
        
             <form>
                <h3>Sign In</h3>
                <div className="form-group">
        <label>Username</label><input placeholder='Username' value={props.Username} onChange={props.handleUsername}/>
       </div>
        <div className="form-group">
        <label>Password</label><input placeholder='Password' value={props.Password} onChange={props.handlePassword}/>
        </div>
        <div className="form-group">
        <button onClick={props.submit} type="button">Log In</button>
      <label>{props.error}</label>
      </div>
          </form>
    )
  }

 