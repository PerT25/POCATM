import React from 'react'
import './QuanLyNguoiDungHeader.css'
import {Link} from 'react-router-dom';

export default function QuanLyNguoiDungHeader() {
    return (
        <div className="QuanLyNguoiDungHeader">
            <div className="WrapperQLNDHeader">
                <div className="TitleQLNDHeader">
                    <div className="TitleQLNDHeaderchild1">
                        Quản lý hệ thống
                    </div>
                    <div className="TitleQLNDHeaderchild2">
                        {'>'} Quản lý người dùng
                    </div>
                </div>
                <div className="WrapperQLNDHeaderContent">
                    <div className="QLNDHeaderTextandInput">
                        <div className="InforUser">Thông tin người dùng: </div>
                    </div>
                </div>
                <input type="text" placeholder="Nhập thông tin người dùng" className="InforUserQLNDHeaderinput"/>
                <button type="submit" className="SearchQLNDHeader">
                    <p className="QLNDHeaderSearchText">Tìm</p>
                </button>
                <Link to="/Quanlyhethong/QLND/AddNew">
                <button type="submit" className="AddQLNDHeader">
                    <p className="TextAddQLNDHeader">+ Thêm mới</p>
                </button>
                </Link>
            </div>
        </div>
    )
}
