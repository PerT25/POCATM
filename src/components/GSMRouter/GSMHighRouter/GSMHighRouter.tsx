import React from 'react'
import GSMHigh from '../../Pages/GSMHigh/GSMHigh'
import Sidebar from '../../Sidebar/Sidebar'
import Topbar from '../../Topbar/Topbar'
import './GSMHighRouter.css'

export default function GSMHighRouter() {
    return (
        <div className="WrapperGSMHighRouter">
            <Topbar/>
            <div className="GSMHighRouterContainer">
                <Sidebar/>
                <GSMHigh/>
            </div>
        </div>
    )
}
