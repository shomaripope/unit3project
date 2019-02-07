import React, { Component } from 'react';
import axios from 'axios'
import Location from './Location'
import NavBar from './NavBar';
class LocationsList extends Component {
    state = {
        locations: []
    }
    componentDidMount(){
        this.getLocations()
    }
    getLocations = () => {
        axios.get('/api/locations').then((res)=>{
            this.setState({locations: res.data})
        })
    }
    render() {
        return (
            <div>
                <NavBar />
                <h1>Location List</h1>
                <div>
                {this.state.locations.map((location, i)=>(
                    <Location city={location.city} state={location.state} description={location.description}/>
                ))}
                </div>
            </div>
        );
    }
}

export default LocationsList;