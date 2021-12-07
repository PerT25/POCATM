import React from 'react'
import './AccessRouter.css';
import Topbar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import Access from '../../Pages/QuanLyHeThong/Access/Access';

export default function AccessRouter() {
    return (
        <div className="AcessRouterWrapper">
            <Topbar/>
            <div className="AccessRoutercontainer">
                <Sidebar/>
                <Access/>
            </div>
        </div>
    )
}
