import React from 'react'
import './DashBroadRouterMonth.css';
import Topbar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DashBroadMonth from '../../Pages/DashBroad/DashBroadMonth/DashBroadMonth';

export default function DashBroadRouterMonth() {
    return (
        <div className="WrapperRouterMonth">
            <Topbar/>
            <div className="WrapperRouterMonthChild">
                <Sidebar/>
                <DashBroadMonth/>
            </div>
        </div>
    )
}
