import React from 'react'
import BCTATMContent from '../BCTATMContent/BCTATMContent'
import BCTATMHeader from '../BCTATMHeader/BCTATMHeader'
import './BCTATM.css'

export default function BCTATM() {
    return (
        <div className="BCTATM">
            <BCTATMHeader/>
            <BCTATMContent/>
        </div>
    )
}
