import React from 'react'
import './GSMnormalRouter.css'
import Sidebar from '../../Sidebar/Sidebar'
import Topbar from '../../Topbar/Topbar'
import GSMnormal from '../../Pages/GSMnormal/GSMnormal'

export default function GSMnormalRouter() {
    return (
        <div className="WrapperGSMnormalRouter">
            <Topbar/>
            <div className="GSMnormalRouterContainer">
                <Sidebar/>
                <GSMnormal/>
            </div>
        </div>
    )
}
