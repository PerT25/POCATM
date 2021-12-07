import React from 'react'
import './AccessUpdate.css'
import AccessUpdateContent from './AccessUpdateContent/AccessUpdateContent'
import AccessUpdateHeader from './AccessUpdateHeader/AccessUpdateHeader'

export default function AccessUpdate() {
    return (
        <div className="AccessUpdate">
            <AccessUpdateHeader/>
            <AccessUpdateContent/>
        </div>
    )
}
