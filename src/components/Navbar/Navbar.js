import React, { Component} from 'react';
// import { MenuItems } from "./MenuItems";
import {Button} from 'reactstrap';
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false } 

    handleCLick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">

                {/* Logo Text */}
                <h1 className="navbar-logo">Maxi</h1>
                <h1 className = "navbar-logo secondary-word">OPERATION</h1 >

                <h1 className="page-description">INSTALLATION</h1>
                
                {/* bar */}
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ?  'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <div className="right-menu">
                    <Button outline color="primary" className="infraButton"> Go To Maxi Infra </Button>{' '}
                    <i className="far fa-bell notification-icon"></i>
                    
                    <div class="dropdown-user">
                        < span > Username < i className="fas fa-chevron-down"></i></span>
                        <div class="dropdown-content">
                        <p>Heck</p>
                        </div>
                    </div>

                    <div class="dropdown-language">
                        < span > EN < i className="fas fa-chevron-down"></i></span>
                        <div class="dropdown-content">
                        <p>TH</p>
                        </div>
                    </div>
                    
                </div>
        
            </nav>
        )
    }
}

export default Navbar;