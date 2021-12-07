import React from 'react'
import './AuditLogHeader.css'

export default function AuditLogHeader() {
    return (
        <div className="AuditLogHeader">
                <div className="WrapperAuditLogHeader">
                    <div className="TitleAuditLog">
                        <div className="TitleAuditlogchild1">Quản Lý Hệ Thống</div>
                        <div className="TitleAuditlogchild2">{'>'} AuditLog</div>
                    </div>
                    <div className="WrapperAuditLogContent">
                        <div className="WrapperAuditLogContentHeader">
                            <p className="DVQLAuditLogHeader">Đơn vị quản lý: </p>
                        </div>
                    </div>
                    <input type="text" placeholder="Đơn vị quản lý , điểm giám sát" className="DVQLAuditLogHeaderinput" />
                    <button type="submit" className="SearchAuditlogHeader">
                        <p className="AuditLogHeaderSearchText">Tìm</p>
                    </button>
                </div>
        </div>
    )
}
