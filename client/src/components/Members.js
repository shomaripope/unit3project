import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import NewMemberForm from './NewMemberForm';
import NavBar from './NavBar';
class Members extends Component {
    state = {
        members: [],
        formDisplay: false,
    }
    componentDidMount(){
        this.getmembers()
    }
    getmembers = () => {
        axios.get('/api/members').then((res)=>{
            this.setState({members: res.data})
        })
    }
    showForm=()=>{
        this.setState({formDisplay: !this.state.formDisplay})
    }
    
    render() {
        
        
        return (
            <div>
                <NavBar />
                <h1>Members List</h1>
                
                {this.state.members.map((member, i)=>(
                    <div>
                   <Link to={`/members/${member._id}`}>{member.firstName} {member.lastName}</Link>
                   </div> 
                ))}  
                <button onClick={this.showForm}>create new member</button>
                {this.state.formDisplay ? <NewMemberForm getmembers={this.getmembers()}/> : null}
            </div>
        );
    }
}

export default Members;