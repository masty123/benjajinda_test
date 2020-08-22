

import React, { Component} from 'react';
// import { MenuItems } from "./MenuItems";
import {Button} from 'reactstrap';
// import './Navbar.css';
import './Playground.css';

class Playground extends Component {
    state = { clicked: false } 

    handleCLick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
          <div>
            <div className="navbar">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <div class="dropdown">
                    <button class="dropbtn">Dropdown 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                </div> 
            </div>

            <h3>Dropdown Menu inside a Navigation Bar</h3>
            <p>Hover over the "Dropdown" link to see the dropdown menu.</p>
          </div>
        )
    }
}

export default Playground;