import React from 'react'
import './QLTB_CDTB.css'
import muiten from '../../../assets/images/dashboard/muiten1.png';
export default function QLTB_CDTB() {
    return (
        <div className="CDTB1">
            <div className="tieude_CDTB">
                Quản lý hệ thống
            </div>
            <img src={muiten} alt="" className="muiten_CDTB" />
            <div className="tieudeqltb_CDTB">
                Quản lý thiết bị - GSM
            </div>
            <img src={muiten} alt="" className="muiten_CDTB1" />
            <div className="tieudedap">
                Cài đặt thiết bị
            </div>
        </div>
    )
}
