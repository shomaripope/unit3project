import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Location from './Location'
import NavBar from './NavBar';
class Member extends Component {
    state = {
        member: {
            city: "",
            firstName:"",
            lastName:"",
            locations:[],
            password:"",
            state:"",
            userName:""
        },
        newLocation:{
                city: "",
                state: "",
                description: ""
        },
        updateMem: false,
    }
    componentDidMount(){
        this.getmember()
    }
    getmember = () => {
        axios.get(`/api/members/${this.props.match.params.memberId}`).then((res)=>{ 
            this.setState({member: res.data})
        })
    }
deleteMember = () => {
        axios.delete(`/api/members/${this.props.match.params.memberId}`).then((res)=>{
        })
    }
    updateMemberName = () => {
        axios.patch(`/api/members/${this.props.match.params.memberId}`, this.state.member)
    }
    updateForm=()=>{
        this.setState({updateMem: true})
    }
    handleChange = (e) => {
        const member = { ...this.state.member }
        member[e.target.name] = e.target.value
        this.setState({ member })
    }
    handleChange2 = (e) => {
        const newLocation = { ...this.state.newLocation }
        newLocation[e.target.name] = e.target.value
        this.setState({ newLocation })
    }
    submitNewLocation = ()=>{
        axios.post(`/api/members/${this.props.match.params.memberId}/locations`, this.state.newLocation)
        .then((res) => {
            console.log(res.data)
            const newSpot = {...this.state.member }

            newSpot.locations.push(res.data)
            this.setState({member: newSpot })
        })
    }
    render() {
        
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <h1>User Full Name: {this.state.member.firstName} {this.state.member.lastName}</h1>
                <h1>User Name: {this.state.member.userName}</h1>  
                    
                     <div><input name='userName' onChange={(e) => this.handleChange(e)} ></input> <button onClick={this.updateMemberName}>Update User Name: </button>  </div>
                     <p>Post Your Spot!:</p>  
                     {this.state.member.locations.map((location, i)=>(
                    <Location getmember={this.getmember} city={location.city} state={location.state} description={location.description} id={location._id}
                    />
                ))}

               <div>
                    <input name='city' type='text' placeholder='city' onChange={(e) => this.handleChange2(e)}/>
                    <input name='state' type='text' placeholder='State' onChange={(e) => this.handleChange2(e)}/>
                    <input name='description' type='text' placeholder='Description' onChange={(e) => this.handleChange2(e)}/>
                    <button onClick={this.submitNewLocation} > Add New Spot </button>
                    </div>
                <Link to='/members'><button onClick={this.deleteMember}> Delete Spot </button></Link>        
            </div>
        );
    }
}

export default Member;