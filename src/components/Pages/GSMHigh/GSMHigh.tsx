import React from 'react'
import GSMContent from '../GSMContent/GSMContent'
import GSMHeaderInfo from '../GSMHeaderInfo/GSMHeaderInfo'
import GSMHighFooter from '../GSMHighFooter/GSMHighFooter'
import './GSMHigh.css'

export default function GSMHigh() {
    return (
        <div className="GSMHigh">
            <GSMHeaderInfo/>
            <GSMContent/>
            <GSMHighFooter/>
        </div>
    )
}
