import React from 'react'
import BCTPGD from '../../Pages/BaoCao/BaoCaoTheoPGD/BCTPGD/BCTPGD'
import Sidebar from '../../Sidebar/Sidebar'
import Topbar from '../../Topbar/Topbar'
import './BCTPGDRouter.css'

export default function BCTPGDRouter() {
    return (
        <div className="BCTPGDRouterWrapper">
            <Topbar/>
            <div className="BCTPGDRoutercontainer">
                <Sidebar/>
                <BCTPGD/>
            </div>
        </div>
    )
}
