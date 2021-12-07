import React from 'react'
import './QuanLyNguoiDungAddNewHeader.css'

export default function QuanLyNguoiDungAddNewHeader() {
    return (
        <div className="QuanLyNguoiDungAddNewHeader">
            <div className="WrapperTitleQLNDAddNewHeader">
                <div className="TitleQLNDAddNewHeader">
                    <div className="TitleQLNDAddNewChild1">
                        Quản lý hệ thống
                    </div>
                    <div className="TitleQLNDAddNewChild2">
                        {'>'} Quản lý người dùng
                    </div>
                    <div className="TitleQLNDAddNewChild3">
                        {'>'} Thêm Mới
                    </div>
                </div>
            </div>
        </div>
    )
}
