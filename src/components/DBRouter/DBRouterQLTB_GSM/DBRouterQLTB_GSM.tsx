import React from 'react'
import './DBRouterQLTB_GSM.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';

import DBQLTB_GSM from '../../DashBoard/DBQLTB_GSM/DBQLTB_GSM';

export default function DBRouterQLTB_GSM() {
    return (
        <div className="DBRouterQLTB_GSM1">
            <TopSidebar />
            <div className="DBRouterQLTB_GSM2">
                <Sidebar />
                <DBQLTB_GSM />
            </div>
            
        </div>
    )
}
