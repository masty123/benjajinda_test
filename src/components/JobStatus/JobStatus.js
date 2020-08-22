import React, { Component} from 'react';
// import { MenuItems } from "./MenuItems";
import {Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import './JobStatus.css';
import {
    Tab,
    Tabs,
    TabList,
    TabPanel} from 'react-tabs';
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

                        <div className="order-type-section">
                            <p className="order-type">Order Type</p>
                            <p className="order-type-description"> IA02 Access Change Service </p>
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

                            <div className="handler-status-container">
                                <p className="handler-status"><i class="fas fa-circle"></i>ปิดงาน</p>
                                <p>15/07/2015 11:03:31</p>
                            </div>

                             <div className="handler-name-container">
                                <p className="handler-name">นราศิริ สุขไพบูรณ์วัฒน์</p>
                                <p className="handler-username">teerati_c</p>
                            </div>

                            <div className="handler-role">
                                <p className="handler-role-description">(Coordinator)/Coordinator BKK</p>
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

                                <div className="table-div">
                                        <table class="content-table leftRow-big">
                                                <thead>
                                                    <tr>
                                                        <th>-</th>
                                                        <th>Customer Node</th>
                                                        <th>Network Node</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Node</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                     <tr>
                                                        <td>Card</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mod</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Interface</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>NTU</td>
                                                        <td>-</td>
                                                        <td>Slot</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Card</td>
                                                        <td>-</td>
                                                        <td>Text_Celliste(Non-Martis)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speed</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                         </table>

                                        <table class="content-table RightRow-big">
                                                <thead>
                                                    <tr>
                                                        <th>Network Node</th>
                                                        <th>Customer Node</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>-</td>
                                                        <td>881025</td>
                                                    </tr>
                                                     <tr>
                                                        <td>-</td>
                                                        <td>Lsw_P1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Text_Celliste(Non-Martis)</td>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Speed</td>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                         </table>
                                </div>

                                <div className="section">
                                   <p className="section-description"> 
                                   รายละเอียด NMC (NON-POTS) 
                                     <Button color = "warning" className="dropbtn"> <i class="fas fa-angle-down"></i></Button>{' '}
                                   </p>
                                    <p className="section-description-tertiary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua.Ut enim ad minim veniam, 
                                        quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </div>

                                <div className="section">
                                   <p className="section-description"> 
                                   รายละเอียด Job ปลายทาง 
                                    <Button color = "warning" className="dropbtn"> <i class="fas fa-angle-down"></i></Button>{' '}
                                   </p>
                                    <p className="section-description-tertiary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua.Ut enim ad minim veniam, 
                                        quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </div>

                                <div className="section">
                                   <p className="section-description"> 
                                        ใบเบิกอุปกรณ์ 
                                        <Button color = "warning" className="dropbtn"> <i class="fas fa-angle-down"></i></Button>{' '}
                                   </p>
                                   <p className="section-description-secondary">ใบเบิกปลายทาง: 202055</p>
                                         <table class="content-table equipment-table-big">
                                                <thead>
                                                    <tr>
                                                        <th>List</th>
                                                        <th>Sap Id</th>
                                                        <th>Qty</th>
                                                        <th> Unit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>UAR18E</td>
                                                        <td>XXXXXX</td>
                                                        <td>1</td>
                                                        <td>Unit</td>
                                                    </tr>
                                                     <tr>
                                                        <td>UAR158E</td>
                                                        <td>XXXXXX</td>
                                                        <td>1</td>
                                                        <td>Unit</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>UAR161F</td>
                                                        < td>XXXXXX</td>
                                                        <td>1</td>
                                                        <td>Unit</td>     
                                                    </tr>

                                                    <tr>
                                                        <td>UAR161F</td>
                                                        < td>XXXXXX</td>
                                                        <td>1</td>
                                                        <td>Unit</td>     
                                                    </tr>

                                                    <tr>
                                                        <td>UPANS-AR161F=2</td>
                                                        <td>XXXXXX</td>
                                                        <td>1</td>
                                                        <td>Unit</td>
                                                    </tr>
                                                </tbody>
                                         </table>
                                </div>
                           
                        </TabPanel>

                        <TabPanel>

                                <div className="upload-progress-container">
                                    <div class="upload-container">
                                        <div className="progress-container">
                                          <li>
                                            <h3 className="upload-title">Upload Complete</h3>
                                            <h3 className="upload-count">13/27</h3>
                                     
                                            <span class="upload-bar">
                                                <span class="file"></span>
                                            </span>
                                          </li>
                                        </div>
                                    </div>

                                    <div className="upload-button-container">
                                             <Button color="warning" class="upload-button">+ Upload</Button>{' '}
                                    </div>
                               
                                </div>

                                <div className="table-div">

                                        <table class="content-table leftRow-big second-section-left">
                                                <thead>
                                                    <tr className="table-header">
                                                        <th>บันทึกผลตรวจรับการติดตั้ง Fiber</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class="fas fa-eye"></i></td>
                                                    </tr>
                                                     <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class="fas fa-eye"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class="fas fa-eye"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>
                                                   
                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>
                                                    </tr>
                                                </tbody>

                                                
                                         </table>

                                        <table class="content-table RightRow-big second-section-right">
                                                <thead>
                                                    <tr>
                                                        <th>บันทึกข้อมูลที่ติดตั้งที่ลูกค้า</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>

                                                    </tr>
                                                     <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>


                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>


                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                         <td><i class = "fas fa-eye"></i></td>
                                                    </tr>
                                                </tbody>
                                         </table>       

                                        <table class="content-table leftRow-big second-section-left">
                                                <thead>
                                                    <tr className="table-header">
                                                        <th>Draw Free Hand</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class="fas fa-eye"></i></td>
                                                    </tr>
                                                </tbody>
                                         </table>   

                                        <table class="content-table RightRow-big second-section-right">
                                                <thead>
                                                    <tr>
                                                        <th>ภาพถ่าย</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>

                                                    </tr>
                                                     <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                         <td><i class = "fas fa-eye"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                         <td><i class = "fas fa-eye"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                         <td><i class = "fas fa-eye"></i></td>
                                                    </tr>        
                                                </tbody>
                                         </table>       

                                        <table class="content-table leftRow-big second-section-left">
                                                <thead>
                                                    <tr className="table-header">
                                                        <th>เอกสาร</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class="fas fa-eye"></i></td>
                                                    </tr>
                                                     <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class="fas fa-eye"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class="fas fa-eye"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>
                                                   
                                                    </tr>
                                                </tbody>
                                         </table>   

                                        <table class="content-table RightRow-big second-section-right">
                                                <thead>
                                                    <tr>
                                                        <th>รายการอุปกรณ์</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>

                                                    </tr>
                                                     <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>


                                                    </tr>
                                                    <tr>
                                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                                        <td><i class = "fas fa-eye"></i></td>
                                                    </tr>
                                                </tbody>
                                         </table>
                                              
                                </div>

                                <div className="section">
                              <p className="section-description"> 
                                         ผลการตรวจสอบ OTDR
                                        <Button color = "warning" className="dropbtn"> <i class="fas fa-angle-down"></i></Button>{' '}
                                   </p>
                                         <table class="content-table equipment-table-big fourth-tab">
                                                <thead>
                                                    <tr>
                                                        <th>Site</th>
                                                        <th>ขนาด</th>
                                                        <th>ยี่ห้อ</th>
                                                        <th>Wave Length</th>
                                                        <th>Pulse Width</th>
                                                        <th>Link</th>
                                                        <th>ความยาว</th>
                                                        <th>จำนวน</th>
                                                        <th>Lose รวมจากการคำนวน</th>
                                                        <th>Otdr ยี่ห้อ</th>
                                                        <th>Otdr รุ่น</th>
                                                        <th>ระยะ Dummy</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>A</td>
                                                        <td>4</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>A to B.</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>B</td>
                                                        <td>4</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>A to B.</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                         </table>

                                         <div className="section-input-container">
                                            <div className="section-input">

                                             <div className="section-input-leftside">
                                                <p className="section-input-description-first">เส้นที่</p>
                                                    <InputGroup className="inputgroup">
                                                        <InputGroupAddon className="inputbox" addonType="prepend">                  
                                                        </InputGroupAddon>
                                                        <Input />
                                                    </InputGroup>
                                                <p className="section-input-description-second"> / 1</p>
                                             </div>

                                             <div className="section-input-rightside">
                                                    <p className="section-input-description-first">รายละเอียด OTDR  </p>
                                                    <InputGroup className="inputgroup">
                                                        <InputGroupAddon addonType="prepend">                  
                                                        </InputGroupAddon>
                                                        <Input />
                                                    </InputGroup>
                                                    <p className="section-input-description-second"> / 0</p>
                                                </div>
                                        </div>
                                          
                                            
                                            <div className="button-container">
                                                <Button outline color="primary" className="btn-prim">แสดงทั้งหมด</Button>{' '}
                                                <Button outline color="primary" className="btn-sec">คัดลอกแบบช่วง</Button>{' '}
                                            </div>
                                         </div>

                                        <table class="content-table equipment-table-big fourth-tab">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Site</th>
                                                        <th>Core</th>
                                                        <th>A - B Loss</th>
                                                        <th>B - A Loss</th>
                                                        <th>Avg Loss</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>A</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td><i class="fas fa-clipboard-list"></i></td>
                                                    </tr>
                                                </tbody>
                                                 <tbody>
                                                    <tr>
                                                        <td>B</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td><i class="fas fa-clipboard-list"></i></td>
                                                    </tr>
                                                </tbody>
                                         </table>
                                </div>

                                <div className="section">
                                    <p className="section-description"> 
                                         จุดตัดต่อระหว่างทาง
                                        <Button color = "warning" className="dropbtn"> <i class="fas fa-angle-down"></i></Button>{' '}
                                   </p>
                                         <table class="content-table equipment-table-big fourth-tab">
                                                <thead>
                                                    <tr>
                                                        <th>จุดตัดต่อ</th>
                                                        <th>Lat Long</th>
                                                        <th>ชนิดของสาย</th>
                                                        <th>การใช้งาน</th>
                                                        <th>ใช้จริง</th>
                                                        <th>Spare</th>
                                                        <th>Remark</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                         </table>
                                </div>

                                <div className="section">
                                   <p className="section-description"> 
                                         ผลการตรวจสอบ Ground Resistance
                                        <Button color = "warning" className="dropbtn"> <i class="fas fa-angle-down"></i></Button>{' '}
                                   </p>
                                         <table class="content-table equipment-table-big fourth-tab">
                                                <thead>
                                                    <tr>
                                                        <th>ลำดับ</th>
                                                        <th>Lat Long</th>
                                                        <th>ประเภทสาย</th>
                                                        <th>ROD{' <= '} 30</th>
                                                        <th>System{' <= '} 10</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                         </table>
                                </div>
                        </TabPanel>
                    </Tabs>


                    
            </div>

        )
    }
}

export default JobStatus;