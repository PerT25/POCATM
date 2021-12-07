import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import GSMonMap from '../Pages/GSMonMap/GSMonMap'
import './GSMRouter.css'

export default function GSMRouter() {
    return (
        <div className="WrapperGSMRouter">
            <Topbar/>
            <div className="GSMRoutercontainer">
                <Sidebar/>
                <GSMonMap/>
            </div>
        </div>
    )
}
