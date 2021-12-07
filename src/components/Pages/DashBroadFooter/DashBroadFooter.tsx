import React from 'react'
import './DashBroadFooter.css';
import NhietKe from '../../../assets/images/dashboard/Frame 12.png';
import Smoke from '../../../assets/images/dashboard/Frame 123.png';
import Phone from '../../../assets/images/dashboard/Frame 8286.png';
import Electric from '../../../assets/images/dashboard/Frame 17.png';
import Move from '../../../assets/images/dashboard/Frame2 886.png';
import Windows from '../../../assets/images/dashboard/Frame 880.png';
import WarningWindowsOutSide from '../../../assets/images/dashboard/Frame 18.png';
import WarningWindows from '../../../assets/images/dashboard/Frame 19.png';
import Bell from '../../../assets/images/dashboard/Frame 886.png';
import WarningIntrusion from '../../../assets/images/dashboard/Frame 20.png';
import MoveYellow  from '../../../assets/images/dashboard/Frame 21.png';
import GSM from '../../../assets/images/dashboard/Frame 22.png';

export default function DashBroadFooter() {
    return (
        <div className="DashBroadFooter">
            <div className="DBFWrapper">
                <div className="DBFWrapperLeft">
                    <div className="DBFleft">
                        <div className="DBFleftTitle">
                            Cảnh báo ATM
                        </div>
                        <div className="WrapperHeaderLeft">
                                <div className="WrapperHeaderLeft1">
                                    <div className="WrapperHeaderLeftChild1">
                                    <img src={NhietKe} alt="" className="Thermometer"/>
                                    <span className="Temperature">Nhiệt</span>
                                    <span className="TemperatureDevice"><b>235 </b>Thiết bị</span>
                                    </div>
                                </div>

                                <div className="WrapperHeaderLeft2">
                                    <div className="WrapperHeaderLeftChild2">
                                    <img src={Smoke} alt="" className="Smoke"/>
                                    <span className="Smoke1">Khói</span>
                                    <span className="SmokeDevice"><b>136 </b>Thiết bị</span>
                                    </div>
                                </div>

                                <div className="WrapperHeaderLeft3">
                                    <div className="WrapperHeaderLeftChild3">
                                    <img src={Phone} alt="" className="Phone"/>
                                    <span className="Phone1">Rung</span>
                                    <span className="PhoneDevice"><b>123 </b>Thiết bị</span>
                                </div>
                            </div>
                        </div>
                        <div className="WrapperContentLeft">
                            <div className="WrapperContentLeft1">
                                <div className="WrapperContentLeftChild1">
                                    <img src={Move} alt ="" className="Move"/>
                                    <span className="Move1">Dịch chuyển</span>
                                    <span className="MoveDevice"><b>534 </b> Thiết bị </span>
                                </div>
                            </div>
                            
                            <div className="WrapperContentLeft2">
                                <div className="WrapperContentLeftChild2">
                                    <img src={Electric} alt ="" className="Electric"/>
                                    <span className="Electric1">Rò điện</span>
                                    <span className="ElectricDevice"><b>345 </b> Thiết bị </span>
                                </div>
                            </div>

                            <div className="WrapperContentLeft3">
                                <div className="WrapperContentLeftChild3">
                                    <img src={Windows} alt ="" className="Windows"/>
                                    <span className="Windows1">Cửa Trên</span>
                                    <span className="WindowsDevice"><b>234 </b> Thiết bị </span>
                                </div>
                            </div>
                        </div>

                        <div className="WrapperFooterLeft">
                            <div className="WrapperFooterLeft1">
                                <div className="WrapperFooterLeftChild1">
                                    <img src={WarningWindowsOutSide} alt="" className="WarningWindowOuteSide"/>
                                    <span className="WarningWindowOuteSide1">Cảnh báo cửa ngoài</span>
                                    <span className="WarningWindowOuteSideDevice">
                                        <b>486 </b>Thiết bị
                                    </span>
                                </div>
                            </div>
                            <div className="WrapperFooterLeft2">
                                <div className="WrapperFooterLeftChild2">
                                    <img src={WarningWindows} alt="" className="WarningWindow"/>
                                    <span className="WarningWindow1">Cảnh báo cửa két</span>
                                    <span className="WarningWindowDevice">
                                        <b>345 </b>Thiết bị
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DBFWrapperRight">
                    <div className="DBFRight">
                        <div className="DBFRightTitle">
                            Cảnh báo phòng giao dịch
                        </div>
                        <div className="WrapperHeaderRight">
                            <div className="WrapperHeaderRight1">
                                <div className="WrapperHeaderRightChild1">
                                    <img src={Bell} alt="" className="Bell"/>
                                    <span className="Bell1">Báo động khẩn cấp</span>
                                    <span className="BellDevice"><b>235 </b>Thiết bị</span>
                                </div>
                            </div>

                            <div className="WrapperHeaderRight2">
                                <div className="WrapperHeaderRightChild2">
                                    <img src={WarningIntrusion} alt="" className="WarningIntrusion"/>
                                    <span className="WarningIntrusion1">Báo động xâm nhập</span>
                                    <span className="WarningIntrusionDevice"><b>136 </b>Thiết bị</span>
                                </div>
                            </div>

                            <div className="WrapperHeaderRight3">
                                <div className="WrapperHeaderRightChild3">
                                    <img src={MoveYellow} alt="" className="MoveYellow"/>
                                    <span className="MoveYellow1">Báo động khẩn cấp</span>
                                    <span className="MoveYellowDevice"><b>200 </b>Thiết bị</span>
                                </div>
                            </div>
                        </div>
                        <div className="WrapperContentRight">
                            <div className="WrapperContentRight1">
                                <div className="WrapperContentRightChild1">
                                    <img src={GSM} alt="" className="GSM"/>
                                    <span className="GSM1">Báo động qua GSM</span>
                                    <span className="GSMDevice"><b>223 </b>Thiết bị</span>
                                </div>
                            </div>

                            <div className="WrapperContentRight2">
                                <div className="WrapperContentRightChild2">
                                    <img src={Smoke} alt="" className="SmokeWarning"/>
                                    <span className="SmokeWarning1">Cảnh báo khói</span>
                                    <span className="SmokeWarningDevice"><b>542 </b>Thiết bị</span>
                                </div>
                            </div>

                            <div className="WrapperContentRight3">
                                <div className="WrapperContentRightChild3">
                                    <img src={Phone} alt="" className="PhoneWarning"/>
                                    <span className="PhoneWarning1">Cảnh báo rung</span>
                                    <span className="PhoneWarningDevice"><b>278 </b>Thiết bị</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
