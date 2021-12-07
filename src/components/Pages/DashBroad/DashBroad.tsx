import React from 'react'
import DashBroadContent from '../DashBroadContent/DashBroadContent';
import DashBroadFooter from '../DashBroadFooter/DashBroadFooter';
import DashBroadHeader from '../DashBroadHeader/DashBroadHeader';
import './DashBroad.css';

export default function DashBroad() {
    return (
        <div className="DashBroad">
            <DashBroadHeader/>
            <DashBroadContent/>
            <DashBroadFooter/>
        </div>
    )
}
