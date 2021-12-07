import React from 'react'
import './AuditLog.css'
import AuditLogContent from './AuditLogContent/AuditLogContent'
import AuditLogHeader from './AuditLogHeader/AuditLogHeader'

export default function AuditLog() {
    return (
        <div className="AuditLog">
            <AuditLogHeader/>
            <AuditLogContent/>
        </div>
    )
}
