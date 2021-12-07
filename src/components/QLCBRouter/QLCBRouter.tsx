import React from 'react'
import './QLCBRouter.css'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import QLCB from '../Pages/QLCB/QLCB'

export default function QLCBRouter() {
    return (
        <div className="WrapperQLCBRouter">
            <Topbar/>
            <div className="QLCBRoutercontainer">
                <Sidebar/>
                <QLCB/>
            </div>
        </div>
    )
}
