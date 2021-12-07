import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from './Login/Login';
import LoginEmail from './LoginEmail/LoginEmail';
import MessForgot from './MessForgot/MessForgot';
import DashBroadRouter from './components/DashBroadRouter/DashBroadRouter';
import 'antd/dist/antd.css';
import DashBroadRouterWeek from './components/DashBroadRouter/DashBroadRouterWeek/DashBroadRouterWeek';
import DashBroadRouterYear from './components/DashBroadRouter/DashBroadRouterYear/DashBroadRouterYear';
import DashBroadRouterMonth from './components/DashBroadRouter/DashBroadRouterMonth/DashBroadRouterMonth';
import GSMRouter from './components/GSMRouter/GSMRouter';
import GSMHighRouter from './components/GSMRouter/GSMHighRouter/GSMHighRouter';
import GSMnormalRouter from './components/GSMRouter/GSMnormalRouter/GSMnormalRouter';
import QLCBRouter from './components/QLCBRouter/QLCBRouter';
import BCTPGDRouter from './components/BaoCaoRouter/BCTPGDRouter/BCTPGDRouter';
import BCTATMRouter from './components/BaoCaoRouter/BCTATMRouter/BCTATMRouter';
import AuditLogRouter from './components/QuanLyHeThongRouter/AuditLogRouter/AuditLogRouter';
import AccessRouter from './components/QuanLyHeThongRouter/AccessRouter/AccessRouter';
import AccessUpdateRouter from './components/QuanLyHeThongRouter/AccessRouter/AccessUpdateRouter/AccessUpdateRouter';
import AccessAddNewRouter from './components/QuanLyHeThongRouter/AccessRouter/AccessAddNewRouter/AccessAddNewRouter';
import QuanLyNguoiDungRouter from './components/QuanLyHeThongRouter/QuanLyNguoiDungRouter/QuanLyNguoiDungRouter';
import QuanLyNguoiDungUpdateRouter from './components/QuanLyHeThongRouter/QuanLyNguoiDungRouter/QuanLyNguoiDungUpdateRouter/QuanLyNguoiDungUpdateRouter';
import QLNDAddNewRouter from './components/QuanLyHeThongRouter/QuanLyNguoiDungRouter/QLNDAddNewRouter/QLNDAddNewRouter';



function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        {/*Router Login*/}
        <Route path="/" element={<Login/>} />
        <Route path="Login/ForgotPassWord/*" element={<LoginEmail/>} />
        <Route path="successfully/*" element={<MessForgot />}/>
        {/*Router DashBroad*/}
        <Route path="DashBroad/*" element={<DashBroadRouter/>} />
        <Route path="DashBroad/Week/*" element={<DashBroadRouterWeek/>}/>
        <Route path="DashBroad/Month/*" element={<DashBroadRouterMonth/>}/>
        <Route path="DashBroad/Year/*" element={<DashBroadRouterYear/>}/>
        {/*Router GSM On Map*/}
        <Route path="GSM/*" element={<GSMRouter/>} />
        <Route path="GSM/High/*" element={<GSMHighRouter/>} />
        <Route path="GSM/normal/*" element={<GSMnormalRouter/>}/>
        {/*QLCB*/}
        <Route path="QLCB/*" element={<QLCBRouter/>} />
        {/*Baocao*/}
        <Route path="Baocao/BCTPGD/*" element={<BCTPGDRouter/>} />
        <Route path="Baocao/BCTATM/*" element={<BCTATMRouter/>}/>
        {/*Quản lý hệ thống*/}
        <Route path="Quanlyhethong/AuditLog/*" element={<AuditLogRouter/>} />
        <Route path="Quanlyhethong/Access/*" element={<AccessRouter/>} />
        <Route path="Quanlyhethong/Access/Update/*" element={<AccessUpdateRouter/>}/>
        <Route path="Quanlyhethong/Access/AddNew/*" element={<AccessAddNewRouter/>} />
        <Route path="Quanlyhethong/QLND/*" element={<QuanLyNguoiDungRouter/>} />
        <Route path="Quanlyhethong/QLND/Update/*" element={<QuanLyNguoiDungUpdateRouter/>} />
        <Route path="Quanlyhethong/QLND/AddNew/*" element={<QLNDAddNewRouter/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
