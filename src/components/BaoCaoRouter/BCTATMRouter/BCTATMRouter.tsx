import React from 'react'
import './BCTATMRouter.css';
import Sidebar from '../../Sidebar/Sidebar'
import Topbar from '../../Topbar/Topbar'
import BCTATM from '../../Pages/BaoCao/BaoCaoTheoATM/BCTATM/BCTATM';

export default function BCTATMRouter() {
    return (
        <div className="BCTATMRouterWrapper">
            <Topbar/>
            <div className="BCTATMRoutercontainer">
                <Sidebar/>
                <BCTATM/>
            </div>
        </div>
    )
}
