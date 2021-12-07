import React from 'react'
import './Access.css'
import AccessContent from './AccessContent/AccessContent'
import AccessHeader from './AccessHeader/AccessHeader'

export default function Access() {
    return (
        <div className="Access">
            <AccessHeader/>
            <AccessContent/>
        </div>
    )
}
