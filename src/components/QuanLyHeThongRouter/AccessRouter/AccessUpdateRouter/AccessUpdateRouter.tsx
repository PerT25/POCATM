import React from 'react'
import AccessUpdate from '../../../Pages/QuanLyHeThong/Access/AccessUpdate/AccessUpdate';
import Sidebar from '../../../Sidebar/Sidebar';
import Topbar from '../../../Topbar/Topbar';
import './AccessUpdateRouter.css';

export default function AccessUpdateRouter() {
    return (
        <div className="AccessUpdateRouterWrapper">
            <Topbar/> 
            <div className="AccessUpdateRouterContainer">
                <Sidebar/>
                <AccessUpdate/>
            </div>
        </div>
    )
}
