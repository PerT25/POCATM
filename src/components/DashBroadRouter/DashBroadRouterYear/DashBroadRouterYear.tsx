import React from 'react'
import './DashBroadRouterYear.css';
import Topbar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DashBroadYear from '../../Pages/DashBroad/DashBroadYear/DashBroadYear';

export default function DashBroadRouterYear() {
    return (
        <div className="WrapperRouterYear">
            <Topbar/>
            <div className="WrapperRouterYearChild">
                <Sidebar/>
                <DashBroadYear/>
            </div>
        </div>
    )
}
