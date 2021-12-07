import React from 'react'
import QLCBContent from '../QLCBContent/QLCBContent'
import QLCBheader from '../QLCBheader/QLCBheader'
import './QLCB.css'

export default function QLCB() {
    return (
        <div className="QLCB">
            <QLCBheader/>
            <QLCBContent/>
        </div>
    )
}
