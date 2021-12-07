import React from 'react'
import Topbar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import AuditLog from '../../Pages/QuanLyHeThong/AuditLog/AuditLog';
import './AuditLogRouter.css'

export default function AuditLogRouter() {
    return (
        <div className="AuditLogRouterWrapper">
            <Topbar/>
            <div className="AuditLogRoutercontainer">
                <Sidebar/>
                <AuditLog/>
            </div>
        </div>
    )
}
