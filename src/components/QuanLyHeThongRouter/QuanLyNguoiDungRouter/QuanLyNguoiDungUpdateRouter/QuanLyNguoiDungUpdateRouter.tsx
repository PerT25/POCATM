import React from 'react'
import './QuanLyNguoiDungUpdateRouter.css'
import Sidebar from '../../../Sidebar/Sidebar';
import Topbar from '../../../Topbar/Topbar';
import QuanLyNguoiDungUpdate from '../../../Pages/QuanLyHeThong/QuanLyNguoiDung/QuanLyNguoiDungUpdate/QuanLyNguoiDungUpdate';

export default function QuanLyNguoiDungUpdateRouter() {
    return (
        <div className="QLNDUpdateRouterWrapper">
            <Topbar/>
            <div className="QLNDUpdateRouterContainer">
                <Sidebar/>
                <QuanLyNguoiDungUpdate/>
            </div>
        </div>
    )
}
