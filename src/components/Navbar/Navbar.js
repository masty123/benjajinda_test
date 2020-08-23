
// import React, { Component} from 'react';
import React, { useState } from 'react';
import {Button, dropdownOpen, toggle} from 'react-bootstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// import './Navbar.css';
import './Navbar_new.css';

const Navbar = (props) => {
    const [dropdownOpen_username, setOpen_username] = useState(false);
  
    const toggle_username = () => setOpen_username(!dropdownOpen_username);

    const [dropdownOpen_language, setOpen_language] = useState(false);
  
    const toggle_language = () => setOpen_language(!dropdownOpen_language);

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
                                <ButtonDropdown isOpen={dropdownOpen_username} toggle={toggle_username}>
                                    <DropdownToggle caret>
                                        Username
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {/* <DropdownItem class="item">Heck</DropdownItem> */}
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </h1>
                            <h1 className="language-dropdown">
                                <ButtonDropdown isOpen={dropdownOpen_language} toggle={toggle_language}>
                                    <DropdownToggle caret>
                                        EN
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {/* <DropdownItem>TH</DropdownItem> */}
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </h1>      
                        </div>
                </div>
           
        )
    }


export default Navbar;