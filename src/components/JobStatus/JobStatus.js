import React, { Component} from 'react';
// import { MenuItems } from "./MenuItems";
import {Button} from 'reactstrap';
import './JobStatus.css';
import {
    Tab,
    Tabs,
    TabList,
    TabPanel,
    AppBar
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


class JobStatus extends Component {
    


    render() {
        return (
            
            <div className="jobstatuscontainer">

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

                    <div className="customer-info-container">

                        <div className="title-container">
                            <p className="title">Customer Information</p>
                            <p className="company-title">บริษัท ไทย-โกเบ เวลติ้ง จำกัด</p>
                        </div>

                   


                         <div className="buttonJob">
                            <Button color = "warning" > Approve Job </Button>{' '}
                        <div className="dropdown">
                              <Button color = "warning" className="dropbtn"> <i class="fas fa-angle-down"></i></Button>{' '}
                            <div className="dropdown-content">
                                 <Button color="danger" className="rejectButton">Reject</Button>{' '}
                            </div>
                        </div>
                          
                        </div>


                        <div className="content-info">

                            <div>
                                <p>CR No.</p>
                                <p>840499-5614135</p>
                            </div>

                             <div>
                                <p>Job No.</p>
                                <p>NS-840499564135</p>
                            </div>

                            <div>
                                <p>SAP No.</p>
                                <p>7201007178</p>
                            </div>

                            <div>
                                <p>Customer</p>
                                <p>New</p>
                            </div>

                             <div>
                                <p>SAP BBTEC</p>
                                <p></p>
                            </div>

                             <div>
                                <p>SAP UIH</p>
                                <p></p>
                            </div>

                            <div>
                                <p>Type</p>
                                <p>NS</p>
                            </div>

                            <div>
                                <p>Service Type</p>
                                <p>MPLS - Fullmesh</p>
                            </div>
                        </div>

                        <table class="content-table">
                            <thead>
                                <tr>
                                    <th>Start Date</th>
                                    <th>Due Date</th>
                                    <th>IC Date</th>
                                    <th>Done Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11/11/2019</td>
                                    <td>18/11/2019</td>
                                    <td>22/11/2019</td>
                                    <td>22/11/2019</td>
                                </tr>
                            </tbody>
                        </table>                
                    </div>

                     <div className="customer-info-container">


                        <div className="title-container">
                            <p className="title">History Log</p>
                        </div>

                         <div className="buttonJob secondary-window">
                            <div className="dropdown">
                                <Button color = "warning" className="dropbtn"> <i class="fas fa-angle-down"></i></Button>{' '}
                            </div>    
                        </div>        

                         <div className="handler-content-info">

                            <div>
                                <p>ปิดงาน</p>
                                <p>15/07/2015 11:03:31</p>
                            </div>

                             <div>
                                <p>นราศิริ สุขไพบูรณ์วัฒน์</p>
                                <p>teerati_c</p>
                            </div>

                            <div>
                                <p>(Coordinator)/Coordinator BKK</p>
                            </div>

                            <div>
                                <p></p>
                            </div>

                            <div>
                                <p> 1237201007178 / 123123123 </p>
                            </div>
                        </div>
                    </div>

                     <Tabs className="tab">
                        <TabList className="tabList">
                            <Tab className="tabtitle">รายละเอียดลูกค้า</Tab>          
                            <Tab className="tabtitle">รายละเอียดการติดตั้ง</Tab>
                            <Tab className="tabtitle">รายละเอียด Network</Tab>
                            <Tab className="tabtitle">ตรวจรับงาน</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Dunno About the Detail...</h2>
                        </TabPanel>

                        <TabPanel>
                           <h2>This one too</h2>
                        </TabPanel>


                        <TabPanel>
                           <p className="tab-3-title">Job - Network Address - Link Details</p>

                           <div className="config-icon">

                               {/* Left Side */}
                                <div className="config-start">
                                    <div className="config-left">
                                        <p>Config ต้นทาง</p>
                                    </div>
                                    <div className="config-right">
                                        <p> </p>
                                    </div>
                                </div>

                                {/* Line Thingy */}
                                <div className="connection-line">
                                     <p>*-----*</p>
                                </div>

                                 {/* Right Side */}
                                 <div className="config-final">
                                        <div className="config-left">
                                            <p>Config ปลายทาง</p>
                                        </div>
                                        <div className="config-right">
                                            <p>MPLS</p>
                                        </div>
                                 </div>
                           </div>
                        </TabPanel>

                        <TabPanel>
                           <h2>...</h2>
                        </TabPanel>
                    </Tabs>


                    
            </div>

        )
    }
}

export default JobStatus;