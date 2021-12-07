import React from 'react'
import './QuanLyNguoiDungAddNew.css'
import QLNDAddNewContent from './QuanLyNguoiDungAddNewContent/QLNDAddNewContent'
import QuanLyNguoiDungAddNewHeader from './QuanLyNguoiDungAddNewHeader/QuanLyNguoiDungAddNewHeader'

export default function QuanLyNguoiDungAddNew() {
    return (
        <div className="QuanLyNguoiDungAddNew">
            <QuanLyNguoiDungAddNewHeader/>
            <QLNDAddNewContent/>
        </div>
    )
}
