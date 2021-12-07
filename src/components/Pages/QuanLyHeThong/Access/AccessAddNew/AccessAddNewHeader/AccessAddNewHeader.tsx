import React from 'react'
import './AccessAddNewHeader.css'

export default function AccessAddNewHeader() {
    return (
        <div className="AccessAddNewHeader">
            <div className="WrapperTitleAccessAddnew">
                <div className="TitleAccessAddNew">
                    <div className="TitleAccessAddNewchild1">
                        Quản lý hệ thống
                    </div>
                    <div className="TitleAccessAddNewchild2">
                        {'>'} Quản lý người dùng
                    </div>
                    <div className="TitleAccessAddNewchild3">
                        {'>'} Thêm mới
                    </div>
                </div>
            </div>
        </div>
    )
}
