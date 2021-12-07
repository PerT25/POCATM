import React from 'react';
import './DashBroadRouter.css';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import DashBroad from '../Pages/DashBroad/DashBroad';

export default function DashBroadRouter() {
    return (
        <div className="WrapperRouter">
            <Topbar/>
                <div className="container">
                    <Sidebar/>
                    <DashBroad/>
                </div>
        </div>
    )
}
