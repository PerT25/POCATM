import React from 'react'
import './QLNDAddNewRouter.css'
import Topbar from '../../../Topbar/Topbar';
import Sidebar from '../../../Sidebar/Sidebar';
import QLNDAddNew from '../../../Pages/QuanLyHeThong/QuanLyNguoiDung/QuanLyNguoiDungAddNew/QuanLyNguoiDungAddNew';

export default function QLNDAddNewRouter() {
    return (
        <div className="QLNDAddNewRouterWrapper">
            <Topbar/>
            <div className="QLNDAddNewRouterContainer">
                <Sidebar/>
                <QLNDAddNew/>
            </div>
        </div>
    )
}
