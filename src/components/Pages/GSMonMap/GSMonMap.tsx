import React from 'react'
import GSMContent from '../GSMContent/GSMContent'
import GSMFooter from '../GSMFooter/GSMFooter'
import GSMHeader from '../GSMHeader/GSMHeader'
import './GSMonMap.css'

export default function GSMonmap() {
    return (
        <div className="GSMonMap">
            <GSMHeader/>
            <GSMContent/>
            <GSMFooter/>
        </div>
    )
}
