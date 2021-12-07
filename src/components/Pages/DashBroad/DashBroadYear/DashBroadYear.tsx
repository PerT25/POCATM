import React from 'react'
import './DashBroadYear.css';
import DashBroadContent from '../../DashBroadContent/DashBroadContent'
import DashBroadFooter from '../../DashBroadFooter/DashBroadFooter'
import DashBroadHeaderYear from '../../DashBroadHeader/DashBroadHeaderYear/DashBroadHeaderYear'

export default function DashBroadYear() {
    return (
        <div className="DashBroadYear">
            <DashBroadHeaderYear/>
            <DashBroadContent/>
            <DashBroadFooter/>
        </div>
    )
}
