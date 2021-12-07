import React from 'react'
import './AccessHeader.css'
import {Link} from 'react-router-dom';

export default function AccessHeader() {
    return (
        <div className="AccessHeader">
                <div className="WrapperAccessHeader">
                    <div className="TitleAccessHeader">
                        <div className="TitleAccessHeaderchild1">
                            Quản lý hệ thống
                        </div>
                        <div className="TitleAccessHeaderchild2">
                            {'>'} Quyền truy cập
                        </div>
                    </div>
                    <div className="WrapperAccessHeaderContent">
                        <div className="AccessHeaderTextandInput">
                            <p className="QTCAccessHeader">Quyền truy cập </p>
                        </div>
                    </div>
                    <input type="text" placeholder="Nhập quyền truy cập" className="QTCAccessHeaderinput"/>
                    <button type="submit" className="SearchAccessHeader">
                        <p className="AccessHeaderSearchText">Tìm</p>
                    </button>
                    <Link to="/Quanlyhethong/Access/AddNew" className="Link">
                    <button type="submit" className="AddAccessHeader">
                        <p className="TextAddAccessHeader">+ Thêm mới</p>
                    </button>
                    </Link>
                </div>
        </div>
    )
}
