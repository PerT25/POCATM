import React from 'react'
import './DBRouterCDTB.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBCDTB_GSM from '../../DashBoard/DBCDTB_GSM/DBCDTB_GSM';

export default function DBRouterCDTB() {
    return (
        <div className="DBRCDTB">
            <TopSidebar />
            <div className="DBRCDTB1">
                <Sidebar />
                <DBCDTB_GSM />
            </div>

        </div>
    )
}
