import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        const divStyle = {
            width:'50%',
            margin: 'auto',
            border: '5px solid pink',
            textAlign: 'center',
            display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center   ',
          };
          const liStyle = { 
            margin: '5px',
            border: '5px solid blue',
            textAlign: 'center',
            listStyle: 'none'
          };
       
        return (
            <div style={divStyle}>
                <ul>
               <li style={liStyle}><Link to='/'> Home Page </Link></li>
               <li style={liStyle}><Link to='/locations'> Locations List </Link></li>
               <li style={liStyle}><Link to='/members'> Members List </Link></li>
                </ul> 

            </div>
        );
    }
}

export default NavBar;