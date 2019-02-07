import React, { Component } from 'react';
import axios from 'axios';

class Location extends Component {
    deleteLocation = ()=>{
        axios.delete(`/api/locations/${this.props.id}`)
        .then(this.props.getmember)
    }
    render() {
        return (
            <div>
                <h1>{this.props.city}</h1>
                <h2>{this.props.state}</h2>
                <p>{this.props.description}</p>
                <button onClick={this.deleteLocation}>delete</button>
            </div>
        );
    }
}

export default Location;