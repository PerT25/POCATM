import React from 'react'
import './Sidebar.css';
import Iconytb from '../../assets/images/Vector.png';
import IconDashBroad from '../../assets/images/IconsDashbroad/group.png';
import IconGSM from '../../assets/images/IconsDashbroad/grommet-icons_map-location.png';
import IconNoti from '../../assets/images/IconsDashbroad/1.png';
import IconBank from  '../../assets/images/IconsDashbroad/2.png';
import IconATMreport from '../../assets/images/IconsDashbroad/atm-machine.png';
import IconSystem from '../../assets/images/IconsDashbroad/role icon 1.png';
import IconSystem1 from '../../assets/images/IconsDashbroad/3.png';
import IconSytem2 from '../../assets/images/IconsDashbroad/user 1.png';
import IconSytem3 from '../../assets/images/IconsDashbroad/octicon_history-16.png';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="SidebarWrapper">
                <div className="SidebarMenu">
                    <div className="sidebarbackground">
                        <img src={Iconytb} alt="" className="IconSidebar"/>
                        </div>
                        <p className="SidebarTittle">Tổng quan</p>
                        <ul className="SidebarList">
                        <Link to="/DashBroad" className="Link" >
                            <li className="SidebarListItem active" >
                                <img src={IconDashBroad} alt="" className="IconDashBroad"/>
                               DashBroad 
                            </li>
                            </Link>
                            <Link to="/GSM" className="Link">
                            <li className="SidebarListItem" >
                                <img src={IconGSM} alt="" className="IconDashBroad"/>
                                GSM  Modern On Map
                            </li>
                            </Link>
                            <Link to="/QLCB" className="Link" >
                            <li className="SidebarListItem" >
                                <img src={IconNoti} alt="" className="IconDashBroad"/>
                                Quản lý cảnh báo 
                                <nav className="colorNoti">12</nav>
                            </li>
                            </Link>
                        </ul>
                </div>
                <div className="SidebarMenu">
                        <p className="SidebarTittle">Báo cáo</p>
                        <ul className="SidebarList">
                            <Link to="/Baocao/BCTPGD" className="Link">
                            <li className="SidebarListItem" >
                                <img src={IconBank} alt="" className="IconDashBroad"/>
                                Báo cáo theo phòng giao dịch
                            </li>
                            </Link>
                            <Link to="/Baocao/BCTATM" className="Link">
                            <li className="SidebarListItem">
                                <img src={IconATMreport} alt="" className="IconDashBroad"/>
                                Báo cáo theo ATM
                            </li>
                            </Link>
                        </ul>
                </div>
                <div className="SidebarMenu">
                        <p className="SidebarTittle">Quản lý hệ thống</p>
                        <ul className="SidebarList">
                            <Link to="/Quanlyhethong/Access" className="Link">
                            <li className="SidebarListItem" >
                                <img src={IconSystem} alt="" className="IconDashBroad"/>
                                Quyền truy cập
                            </li>
                            </Link>
                            <li className="SidebarListItem" >
                                <img src={IconSystem1} alt="" className="IconDashBroad"/>
                                Quản lý thiết bị GSM
                            </li>
                            <Link to ="/Quanlyhethong/QLND" className="Link">
                            <li className="SidebarListItem" >
                                <img src={IconSytem2} alt="" className="IconDashBroad"/>
                                Quản lý người dùng
                            </li>
                            </Link>
                            <Link to="/Quanlyhethong/AuditLog" className="Link">
                            <li className="SidebarListItem">
                                <img src={IconSytem3} alt="" className="IconDashBroad"/>
                                Audit log
                            </li>
                            </Link>
                        </ul>
                </div>
            </div>
        </div>
    )
}
