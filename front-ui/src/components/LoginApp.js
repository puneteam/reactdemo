import React, { Component } from 'react';
import MainComponent from './MainComponent';

import SignIn from './SignIn';

export default class LoginApp extends Component {
    constructor(props)
    {
      super(props);
      this.state={employee:'',user:'',password:'',loggedin:'false',error:''};
    
       }
    
    componentWillMount()
    {
     // this.setState({employee:emp data});
    }

   
    render() {
      if(this.state.loggedin)
      {
        return <div>  
    <button onClick={()=>this.setState({loggedin:false})}>Logout</button>
    
 </div>
    }
    else
    {
      return <div>
       
        <SignIn username={this.state.user}
        password={this.state.password}
        error={this.state.error}
        handleUsername={(event)=>this.setState({user:event.target.value})}
        handlePassword={(event)=>this.setState({password:event.target.value})}
        
        submit={()=>
        {
          if(this.state.user==="user" && this.state.password==="pass")
          {
            this.setState({loggedin:true});
            console.log("submit click");
            this.props.history.push('/m');
          
           // window.location.href = `/${e.target.value}`;
            
          }
          else{
            this.setState({error:"not valid user"});
          }
         
        
        }}
      />
      </div>
      }
      }
      
  
  }
    