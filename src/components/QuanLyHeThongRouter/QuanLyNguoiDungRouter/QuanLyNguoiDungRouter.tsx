import React from 'react'
import './QuanLyNguoiDungRouter.css';
import Topbar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import QuanLyNguoiDung from '../../Pages/QuanLyHeThong/QuanLyNguoiDung/QuanLyNguoiDung';

export default function QuanLyNguoiDungRouter() {
    return (
        <div className="QLNDRouterWrapper">
            <Topbar/>
            <div className="QLNDRouterContainer">
                <Sidebar/>
                <QuanLyNguoiDung/>
            </div>
        </div>
    )
}
