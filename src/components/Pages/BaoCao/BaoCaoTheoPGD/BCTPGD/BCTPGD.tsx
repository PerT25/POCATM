import React from 'react'
import BCTPGDContent from '../BCTPGDContent/BCTPGDContent'
import BCTPGDHeader from '../BCTPGDHeader/BCTPGDHeader'
import './BCTPGD.css'

export default function BCTPGD() {
    return (
        <div className="BCTPGD">
            <BCTPGDHeader/>
            <BCTPGDContent/>
        </div>
    )
}
