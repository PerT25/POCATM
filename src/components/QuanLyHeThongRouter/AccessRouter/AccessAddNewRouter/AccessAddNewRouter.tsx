import React from 'react'
import AccessAddNew from '../../../Pages/QuanLyHeThong/Access/AccessAddNew/AccessAddNew'
import Sidebar from '../../../Sidebar/Sidebar'
import Topbar from '../../../Topbar/Topbar'
import './AccessAddNewRouter.css'

export default function AccessAddNewRouter() {
    return (
        <div className="AccessAddNewRouterWrapper">
            <Topbar/>
            <div className="AccessAddNewContainer">
                <Sidebar/>
                <AccessAddNew/>
            </div>
        </div>
    )
}
