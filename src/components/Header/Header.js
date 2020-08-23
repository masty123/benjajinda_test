import React, { Component} from 'react';
// import { MenuItems } from "./MenuItems";
import {Button} from 'reactstrap';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="job-header-container">

            <Button color="link" className="back-button">Back</Button>  

        
                 <div className="job-container">
                
                
                        <div className="job-info">

                                <div className = "job-info-number-description" >
                                    Job No.
                                </div>

                                {/* Big Serial Number Thingy */}
                                <div className="job-info-serial-number">
                                    NS-840499-564135    
                                    <Button outline color="warning" className="add-team-button">+ Add Team</Button>{' '}
                                </div>


                                < div className = "job-secondary-stat credit-number" >
                                    <div className="description">Cr No.</div>
                                     < div className = "cr-no-description" >840499 - 564135 </div>  
                                </div>


                                <div className="job-secondary-stat">
                                    <div className="description">Area</div>
                                     < div className = "area-description" >I.BKK3 </div>  
                                </div>


                                < div className = "job-secondary-stat" >
                                    <div className="description">Type</div>
                                     < div className = "type-des" >OSP</div>  
                                </div>

                                < div className = "job-secondary-stat last-child" >
                                    <div className="description">Status</div>
                                     < div className = "status-description" > 
                                        กำลังดำเนินการ
                                        <Button variant="outline-primary" size="sm" className="statusbutton"><i class="fas fa-angle-down"></i></Button>{' '}
                                     </div>  
                                </div>
                 
                
                        </div>
                </div>

                  <div className="job-header-list">
                            < div className = "job-info-number-description rightside" >
                                    Job No.
                                </div>

                            <div className="job-list">
                                <ul>
                                    <li className="job-avaliability">
                                        < div className = "job-list-description avaliability-icon" color="red">
                                            <i class = "far fa-circle"> </i>
                                        </div>

                                        < div className = "job-list-description job-serial-num" >
                                            Ns5602335-01
                                        </div>

                                        < div className = "job-list-description avaliability-description" >
                                            ติดปัญหาระหว่างการทำงาน
                                        </div>
                                    </li>

                                    <li className="job-avaliability">
                                        < div className = "job-list-description avaliability-icon" >
                                            <i class = "far fa-circle"> </i>
                                        </div>

                                        < div className = "job-list-description job-serial-num" >
                                            Ns5602335-02
                                        </div>

                                        < div className = "job-list-description avaliability-description" >
                                            ติดปัญหาระหว่างการทำงาน
                                        </div>
                                    </li>


                                    <li className="job-avaliability">
                                        < div className = "job-list-description avaliability-icon" >
                                            <i class = "far fa-circle"> </i>
                                        </div>

                                        < div className = "job-list-description job-serial-num" >
                                            Ns5602335-03
                                        </div>

                                        < div className = "job-list-description avaliability-description" >
                                            ติดปัญหาระหว่างการทำงาน
                                        </div>
                                    </li>


                                    <li className="job-avaliability">
                                        < div className = "job-list-description avaliability-icon" >
                                            <i class = "far fa-circle"> </i>
                                        </div>

                                        < div className = "job-list-description job-serial-num" >
                                            Ns5602335-04
                                        </div>

                                        < div className = "job-list-description avaliability-description" >
                                            ปิดงาน
                                        </div>
                                    </li>

                                    
                                    <li className="job-avaliability">
                                        < div className = "job-list-description avaliability-icon" >
                                            <i class = "far fa-circle"> </i>
                                        </div>

                                        < div className = "job-list-description job-serial-num" >
                                            Ns5602335-05
                                        </div>

                                        < div className = "job-list-description avaliability-description" >
                                            ติดปัญหาระหว่างการทำงาน
                                        </div>
                                    </li>


                                    <li className="job-avaliability">
                                        < div className = "job-list-description avaliability-icon" >
                                            <i class = "far fa-circle"> </i>
                                        </div>

                                        < div className = "job-list-description job-serial-num" >
                                            Ns5602335-06
                                        </div>

                                        < div className = "job-list-description avaliability-description" >
                                            ไม่ต้องดำเนินการ
                                        </div>
                                    </li>

                                </ul>
                            </div>
                    </div>

            </div>

          
           
        )
    }
}

export default Header;