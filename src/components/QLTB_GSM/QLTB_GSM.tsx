import React from 'react'
import './QLTB_GSM.css'
import moment from 'moment';
import muiten from '../../assets/images/dashboard/muiten1.png';
import Down from '../../assets/images/dashboard/Down.png';
export default function QLTB_GSM() {
    return (
        <div className="QLTBGSM">
            <div className="tieudeGSM1">
                Quản lý hệ thống
            </div>
            <img src={muiten} alt="" className="chiqua" />
            <div className="tieudeGSM">
                Quản lý thiết bị - GSM
            </div>
            <div className="QLTB">
                <br />
                <label className="dgs_GSM">Điểm giám sát: </label><br />
                <input type="text" className="boxdgs" placeholder="GMS ID, địa chỉ..." /><br />
                <br />
            </div>
            <div className="QLTB1">
                <br />
                <label className="apgd_GSM">ATM / Phòng giao dịch: </label><br />
                <input type="text" className="boxapgd_GSM" placeholder="Tất cả" /><br />
                <img src={Down} alt="" className="muixuong" />
                <br />
            </div>
            <div className="QLTB3">
                <label className="knn_GSM">Kết nối nguồn: </label><br />
                <input type="text" className="boxknn" placeholder="Tất cả" /><br />
                <img src={Down} alt="" className="chiqua1" />
            </div>
            <div className="QLTB4">
                <label className="knm_GSM">Kết nối mạng: </label><br />
                <input type="text" className="boxknm" placeholder="Tất cả" /><br />
                <img src={Down} alt="" className="chiqua2" />
            </div>
            <div className="QLTB5">
                <label className="cb_GSM">Cảnh báo: </label><br />
                <input type="text" className="boxcb" placeholder="Tất cả" /><br />
                <img src={Down} alt="" className="chiqua3" />
            </div>
            <div className="QLTB6">
                <button type="button" className="tim_GSM">
                    <p className="btntimkiem_GSM">Tìm</p>
                </button>
            </div>
            <div className="QLTB7">
                <button type="button" className="themmoi_GSM">
                    <p className="btnthemmoi_GSM">+ Thêm Mới</p>
                </button>
            </div>

        </div>
    )
}
