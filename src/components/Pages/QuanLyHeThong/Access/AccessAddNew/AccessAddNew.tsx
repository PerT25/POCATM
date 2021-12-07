import React from 'react'
import './AccessAddNew.css'
import AccessAddNewContent from './AccessAddNewContent/AccessAddNewContent'
import AccessAddNewHeader from './AccessAddNewHeader/AccessAddNewHeader'

export default function AccessAddNew() {
    return (
        <div className="AccessAddNew">
            <AccessAddNewHeader/>
            <AccessAddNewContent/>
        </div>
    )
}
