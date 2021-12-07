import React from 'react'
import DashBroadContent from '../../DashBroadContent/DashBroadContent'
import DashBroadFooter from '../../DashBroadFooter/DashBroadFooter'
import DashBroadHeaderWeek from '../../DashBroadHeader/DashBroadHeaderWeek/DashBroadHeaderWeek'
import './DashBroadWeek.css'

export default function DashBroadWeek() {
    return (
        <div className="DashBroadWeek">
            <DashBroadHeaderWeek/>
            <DashBroadContent/>
            <DashBroadFooter/>
        </div>
    )
}
