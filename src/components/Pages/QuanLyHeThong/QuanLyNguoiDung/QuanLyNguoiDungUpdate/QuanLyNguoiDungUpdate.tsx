import React from 'react'
import './QuanLyNguoiDungUpdate.css'
import QuanLyNguoiDungUpdateContent from './QuanLyNguoiDungUpdateContent/QuanLyNguoiDungUpdateContent'
import QuanLyNguoiDungUpdateHeader from './QuanLyNguoiDungUpdateHeader/QuanLyNguoiDungUpdateHeader'

export default function QuanLyNguoiDungUpdate() {
    return (
        <div className="QuanLyNguoiDungUpdate">
            <QuanLyNguoiDungUpdateHeader/>
            <QuanLyNguoiDungUpdateContent/>
        </div>
    )
}
