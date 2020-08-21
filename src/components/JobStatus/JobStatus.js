import React, { Component} from 'react';
// import { MenuItems } from "./MenuItems";
import {Button} from 'reactstrap';
import './JobStatus.css';


class JobStatus extends Component {
    state = { clicked: false } 

    handleCLick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            // <div className="job-status-container">
            //     <ul className="progress-bar">

            //         <li className="active">Step 1</li>
            //         <li>Step 2</li>
            //         <li>Step 3</li>
            //         <li>Step 4</li>
            //         <li>Step 5</li> 

            //     </ul>
            // </div>
        <div className="statuscontainer">
            <ul className="progressbar">
                <li className="active">
                    <i class="fas fa-shopping-bag icon"></i> 
                        <br></br>
                    <i class="fas fa-check-circle iconStatus"></i>
                        <p>Ack Job</p>
                </li>

                <li className="active">
                    <i class="fas fa-map-marker-alt icon"></i>
                        <br></br>
                    <i class="fas fa-check-circle iconStatus"></i>
                        <p>On Site</p>
                    </li>

                <li className="active">
                    <i class="fas fa-list-alt icon"></i>
                        <br></br>
                    <i class="fas fa-sync-alt iconStatus"></i>
                        <p>Install</p>
                    </li>

                <li>
                    <i class="fas fa-tasks icon"></i>
                        <br></br>
                    <i class="fas fa-times iconStatus"></i>
                        <p>Check</p>
                    </li>
                <li>
                    <i class="fas fa-check-square icon"></i>
                        <br></br>
                    <i class="fas fa-times iconStatus"></i>
                        <p>Close Job</p>
                    </li>
            </ul> 
        </div>
            

        )
    }
}

export default JobStatus;