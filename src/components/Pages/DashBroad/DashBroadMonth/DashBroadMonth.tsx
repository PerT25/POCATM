import React from 'react'
import DashBroadContent from '../../DashBroadContent/DashBroadContent'
import DashBroadFooter from '../../DashBroadFooter/DashBroadFooter'
import DashBroadHeaderMonth from '../../DashBroadHeader/DashBroadHeaderMonth/DashBroadHeaderMonth'
import './DashBroadMonth.css'

export default function DashBroadMonth() {
    return (
        <div className="DashBroadMonth">
            <DashBroadHeaderMonth/>
            <DashBroadContent/>
            <DashBroadFooter/>
        </div>
    )
}
