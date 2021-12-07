import React from 'react'
import './DashBroadRouterWeek.css'
import  Topbar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DashBroadWeek from '../../Pages/DashBroad/DashBroadWeek/DashBroadWeek';

export default function DashBroadRouterWeek() {
    return (
        <div className="WrapperRouterWeek">
            <Topbar/>
            <div className="WrapperRouterWeekChild">
                <Sidebar/>
                <DashBroadWeek/>
            </div>
        </div>
    )
}
