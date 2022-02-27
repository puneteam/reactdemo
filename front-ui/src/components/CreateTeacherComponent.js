import React, { Component } from 'react'
import TeacherService from '../services/TeacherService';

export default class CreateTeacherComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
        // step 2
        id: this.props.match.params.id,
        name:'',
        address:'',
        age:'',
        ph_no:''
       
    }
    this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
    this.changeAddressHandler=this.changeAddressHandler.bind(this);
    this.changeAgeHandler=this.changeAgeHandler.bind(this);
    this.changePhoneHandler=this.changePhoneHandler.bind(this);
    this.saveOrUpdateTeacher=this.saveOrUpdateTeacher.bind(this);
    this.cancel=this.cancel.bind(this);
}


componentDidMount(){

  if(this.state.id === '_add'){
      return
  } 
  else{
    TeacherService.getTeacherById(this.state.id).then( (res) =>{
        let teacher = res.data;
        this.setState({name: teacher.name,
          address: teacher.address,
          age: teacher.age,
          ph_no: teacher.ph_no
        });
    });
}  
}
  
changeFirstNameHandler=(event)=>
{
  this.setState({name:event.target.value});

}
changeAddressHandler=(event)=>
{
  this.setState({address:event.target.value});
}

changeAgeHandler=(event)=>
{
  this.setState({age:event.target.value});
}
changePhoneHandler=(event)=>
{
  this.setState({ph_no:event.target.value});
}
saveOrUpdateTeacher=(e)=>
{
  e.preventDefault();
  let teacher={name:this.state.name,address:this.state.address,age:this.state.age,ph_no:this.state.ph_no};
  console.log('teacher=>'+JSON.stringify(teacher));

  if(this.state.id === '_add'){
    TeacherService.createTeacher(teacher).then(res =>{
        this.props.history.push('/teachers');
    });
}else{
    TeacherService.updateTeacher(teacher, this.state.id).then( res => {
        this.props.history.push('/teachers');
    });
}

  TeacherService.createTeacher(teacher).then(res=>
    {
      this.props.history.push('/teachers');
    });
}
cancel()
{
this.props.history.push("/teachers");
}
getTitle(){
  if(this.state.id === '_add'){
      return <h3 className="text-center">Add Teacher</h3>
  }else{
      return <h3 className="text-center">Update Teacher</h3>
  }
}
render()
  {
    return (
      <div>
        <br></br>
    
      <div className='container'>
        <div className='row'>
   <div className='card col-md-6 offset-md-3'>
   {
                                    this.getTitle()
   }
    
     
     <div className='card-body'>
       <form>
       <div className='form-group'>
         <label>Name</label>
         <input placeholder='first Name' name="name" className='form-control' value={this.state.name} onChange={this.changeFirstNameHandler}/>
       </div>

       <div className='form-group'>
         <label>Address</label>
         <input placeholder='Address' name="address" className='form-control' value={this.state.address} onChange={this.changeAddressHandler}/>
       </div>

       <div className='form-group'>
         <label>Age</label>
         <input placeholder='Age' name="age" className='form-control' value={this.state.age} onChange={this.changeAgeHandler}/>
       </div>

       <div className='form-group'>
         <label>Phone Number</label>
         <input placeholder='Phone' name="ph_no" className='form-control' value={this.state.ph_no} onChange={this.changePhoneHandler}/>
       </div>

       <button className='btn btn-success' onClick={this.saveOrUpdateTeacher}>Save</button>
       <button className='btn btn-success' onClick={this.cancel} style={{marginLeft:"20px"}}>Cancel</button>
       </form>
     </div>
     </div>
          </div>
        </div>
        
      </div>


      
    )
  
}
}


