import React from 'react'
import './QuanLyNguoiDung.css'
import QuanLyNguoiDungContent from './QuanLyNguoiDungContent/QuanLyNguoiDungContent'
import QuanLyNguoiDungHeader from './QuanLyNguoiDungHeader/QuanLyNguoiDungHeader'

export default function QuanLyNguoiDung() {
    return (
        <div className="QuanLyNguoiDung">
            <QuanLyNguoiDungHeader/>
            <QuanLyNguoiDungContent/>
        </div>
    )
}
