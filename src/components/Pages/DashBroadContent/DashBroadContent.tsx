import React from 'react'
import './DashBroadContent.css';
import Group from '../../../assets/images/dashboard/Frame 8d72.png';
import Line1 from '../../../assets/images/dashboard/Line 6.png';
import ATM from '../../../assets/images/dashboard/Frame 8d71.png';
import Bank from '../../../assets/images/dashboard/Frame 8d73.png';
import Chart1 from '../../../assets/images/dashboard/Group 58.png';
import Chart2 from '../../../assets/images/dashboard/Group 59.png';
import Chart3 from '../../../assets/images/dashboard/Group 52.png';
import 'antd/dist/antd.css';

export default function DashBroadContent() {
    return (
        <div className="DashBroadContent">
            <div className="DBCWrapper">
                <div className="DBCWLeft">
                    <div className="DBCWLItemsLeft">
                        <div className="Device">
                            <div className="Devicecolor">
                                    <img src={Group} alt="" className="IconDevice"/>
                            </div>
                            <div className="DeviceTitle">Tổng số thiết bị</div>
                            <div className="DeviceTitle1"><b>4,052 </b>thiết bị</div>
                        </div>
                        <img src={Line1} alt="" className="lineside"/>
                        <div className="ATM">
                            <div className="ATMcolor">
                                <img src={ATM} alt="" className="IconATM"/>
                            </div>
                            <div className="ATMTitle">ATM</div>
                            <div className="ATMTitle1"><b>1,021 </b>thiết bị</div>
                        </div>
                        <img src={Line1} alt="" className="lineside1"/>
                        <div className="transaction">
                                <div className="transactioncolor">
                                    <img src={Bank} alt="" className="BankIcon"/>
                                </div>
                                <div className="transactionTitle">Phòng giao dịch</div>
                                <div className="transactionTitle1"><b>1,432 </b>thiết bị</div>
                        </div>
                    </div>
                </div>
                <div className="DBCWRight">
                    <div className="DBCWRightTitle">
                        Trạng thái thiết bị
                    </div>
                    <div className="ConnectAC">
                        <div className="ConnectACTitle">
                            Kết nối nguồn AC
                        </div>
                        <img src={Chart1} alt="" className="IconConnectAC"/>
                    </div>
                    <img src={Line1} alt="" className="lineside2"/>
                    <div className="Connecting">
                        <div className="ConnectingTitle">
                            Đang kết nối  
                        </div>
                        <img src={Chart2} alt="" className="IconConnecting"/>
                    </div>
                    <img src={Line1} alt="" className="lineside3"/> 
                        <div className="WarningOn">
                        <div className="WarningTitle">
                            Bật cảnh báo
                        </div>
                        <img src={Chart3} alt="" className="IconWarning"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
