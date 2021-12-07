import React from 'react'
import GSMContent from '../GSMContent/GSMContent'
import GSMHeaderInfo from '../GSMHeaderInfo/GSMHeaderInfo'
import GSMnormalFooter from '../GSMnormalFooter/GSMnormalFooter'

import './GSMnormal.css'

export default function GSMnormal() {
    return (
        <div className="GSMnormal">
            <GSMHeaderInfo/>
            <GSMContent/>
            <GSMnormalFooter/>
        </div>
    )
}
