import React, { Component } from 'react';
import axios from 'axios'
class NewMemberForm extends Component {
    state = {
        member:{
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            city: '',
            state: '',
            picture: ['']
            }
        }
    
        handleSubmit = (event)=>{
            
            event.preventDefault();
        }
        handleChange = (e) => {
            const member = { ...this.state.member }
            member[e.target.name] = e.target.value
            this.setState({ member })
        }

        postMember = ()=>{
            axios.post('/api/members/', this.state.member).then(this.props.getMembers)
        }

    render() {
        const divStyle = {
            contentAlign: 'center',
            width:'75%',
            margin: 'auto',
            border: '5px solid pink',
            textAlign: 'center'
          };
        return (
            <div style={divStyle}>
                <form>
                <h1>New Member Form:</h1>
                <p>First Name: <input type='text' name='firstName' onChange={(e) => this.handleChange(e)}/></p>
                <p>Last Name: <input type='text' name='lastName' onChange={(e) => this.handleChange(e)} /></p>
                <p>Username: <input type='text' name='userName'  onChange={(e) => this.handleChange(e)} /></p>
                <p>Password: <input type='text' name='password'  onChange={(e) => this.handleChange(e)} /></p>
                <p>City: <input type='text' name='city'  onChange={(e) => this.handleChange(e)} /></p>
                <p>State: <input type='text' name='state'  onChange={(e) => this.handleChange(e)} /></p>
                <button onClick={this.postMember} type='submit' name='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewMemberForm;