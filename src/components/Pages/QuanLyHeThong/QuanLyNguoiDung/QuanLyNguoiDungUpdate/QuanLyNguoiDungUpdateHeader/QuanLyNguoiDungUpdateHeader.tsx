import React from 'react'
import './QuanLyNguoiDungUpdateHeader.css'

export default function QuanLyNguoiDungUpdateHeader() {
    return (
        <div className="QLNDUpdateHeader">
            <div className="WrapperTitleQLNDUpdateHeader">
                    <div className="TitleQLNDUpdateHeader">
                        <div className="TitleQLNDUpdateChild1">
                            Quản lý hệ thống
                        </div>
                        <div className="TitleQLNDUpdateChild2">
                            {'>'} Quản lý người dùng 
                        </div>
                        <div className="TitleQLNDUpdateChild3">
                            {'>'} Cập Nhật
                        </div>
                    </div>
            </div>
        </div>
    )
}
