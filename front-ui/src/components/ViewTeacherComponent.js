import React, { Component } from 'react'
import TeacherService from '../services/TeacherService'

export default class ViewTeacherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            teacher: {}
        }
    }

    componentDidMount(){
        TeacherService.getTeacherById(this.state.id).then( res => {
            this.setState({teacher: res.data});
        })
    }
    cancel(){
        this.props.history.push('/teachers');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-10 offset-md-6">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Teacher  Name: </label>
                            <div> { this.state.teacher.name }</div>
                        </div>
                        <div className = "row">
                            <label>  Teacher Address</label>
                            <div> { this.state.teacher.address }</div>
                        </div>
                        <div className = "row">
                            <label>Teacher Age </label>
                            <div> { this.state.teacher.age}</div>
                        </div>
                        <div className = "row">
                            <label> Phone Number</label>
                            <div> { this.state.teacher.ph_no}</div>
                        </div>
                    </div>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                </div>
            </div>
        )
    }
}