import React from 'react'
import './AccessUpdateHeader.css'

export default function AccessUpdateHeader() {
    return (
        <div className="AccessUpdateHeader">
            <div className="WrapperTitleAccessUpdate">
                <div className="TitleAccessUpdate">
                    <div className="TitleAccessUpdatechild1">
                        Quản lý hệ thống
                    </div>
                    <div className="TitleAccessUpdatechild2">
                        {'>'} Quản lý người dùng
                    </div>
                    <div className="TitleAccessUpdatechild3">
                        {'>'} Cập Nhật
                    </div>
                </div>
            </div>
        </div>
    )
}
