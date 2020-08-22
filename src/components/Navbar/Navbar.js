
// import React, { Component} from 'react';
import React, { useState } from 'react';
import {Button, dropdownOpen, toggle} from 'react-bootstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// import './Navbar.css';
import './Navbar_new.css';

const Navbar = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);

    const [dropdownOpen_2, setOpen_2] = useState(false);
  
    const toggle_2 = () => setOpen_2(!dropdownOpen_2);

                {/* Logo Text */}
                {/* <h1 className="navbar-logo">Maxi</h1>
                <h1 className = "navbar-logo secondary-word">OPERATION</h1 >

                <h1 className="topnav-centered">INSTALLATION</h1> */}
                
                {/* bar */}
                {/* <div className="menu-icon" onClick={this.handleClick}>
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
                    
                </div> */}
              return (  <div className="topnav">

                        {/*Left-aligned links (default) */}
                       <h1>Maxi</h1>
                       <h1 className="secondary-word">OPERATION</h1> 
                       <h1 ><i className={'fas fa-bars'}></i></h1>
                        
                        {/* Centered link */}
                        <div className="topnav-centered">
                            <h1>INSTALLATION</h1>
                        </div>

                        {/*  Right-aligned links  */}
                        <div className="topnav-right">
                            <h1 className="buttoninfra"><Button outline color="primary"> Go To Maxi Infra </Button>{' '}</h1>
                            <h1 className="bell-icon"><i className="far fa-bell notification-icon"></i></h1>
                            <h1 className="username-dropdown">
                                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret>
                                        Username
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Heck</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </h1>
                            <h1 className="language-dropdown">
                                <ButtonDropdown isOpen={dropdownOpen_2} toggle={toggle_2}>
                                    <DropdownToggle caret>
                                        EN
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>TH</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </h1>      
                        </div>
                </div>
           
        )
    }


export default Navbar;