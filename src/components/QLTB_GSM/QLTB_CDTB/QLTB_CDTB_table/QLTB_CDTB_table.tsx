import React from 'react'
import './QLTB_CDTB_table.css';
import Down from '../../../../assets/images/dashboard/Down.png';
import Add from '../../../../assets/images/dashboard/themmoi1.png'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
export default function QLTB_CDTB_table() {
    return (
        <div className="khungtrang">
            <div className="ban1">
                <label className="tttb">Thông tin thiết bị: </label><br />
                <div className="tb1">
                    <label className="IMEI">IMEI: </label><br />
                    <label className="IMEI1">4895482646960 </label><br />
                    <br />
                    <label className="nkh_tb1">Ngày kích hoạt: </label><br />
                    <label className="nkh1_tb1">19/02/2021 22:00:00 </label><br />
                    <br />
                    <label className="tentk_tb1">Tên thiết bị: </label><br />
                    <input type="text" className="ttb_tb1" name="DQL" placeholder="ATM - 1294345324" /><br />
                    <br />
                    <label className="loaithietbi_tb1">Loại thiết bị: </label><br />
                    <input type="text" className="ltb_tb1" name="DQL" placeholder="Thiết bị cảnh báo dành cho máy ATM" /><br />
                    <img src={Down} alt="" className="dropdowndude" />
                    <br />
                    <label className="sim_tb1">SIM: </label><br />
                    <input type="text" className="box_SIM_tb1" name="DQL" placeholder="Unknown" /><br />
                    <br />
                    <label className="dcld_tb1">SIM: </label><br />
                    <input type="text" className="box_dcld_tb1" name="DQL" placeholder="86/33 Âu cơ, Phường 9, quận Tân Bình, TP.HCM" /><br />
                </div>
            </div>
            <div className="ban2">
                <label className="cdsdt">Cài đặt số điện thoại: </label><br />
                <div className="tb2">
                    <label className="phone1_tb2">Số điện thoại khẩn cấp: </label><br />
                    <input type="text" className="phone1_tb2_2" name="DQL" placeholder="093 025 0645" /><br />

                    <div className="add_more">
                        <Link to="/themsokhancap" className="link">
                            <div className="add_more_icon">
                                <img src={Add} alt="" className="icon_add" />
                            </div>
                            <div className="add_more_name1">
                                Thêm số khẩn cấp
                            </div>
                        </Link>
                    </div>

                    <br />
                    <label className="phone2_tb2">Số điện thoại nhận cuộc gọi: </label><br />
                    <input type="text" className="phone2_tb2_2" name="DQL" placeholder="093 025 0645" /><br />
                    <div className="add_more1">
                        <Link to="/themsdt" className="link">
                        <div className="add_more_icon2">
                        <img src={Add} alt="" className="icon_add1" />
                        </div>
                        <div className="add_more_name3">
                        Thêm số điện thoại nhận cuộc gọi
                        </div>
                        </Link>
                    </div>
                    <br />
                    <label className="phone3_tb2">Số điện thoại gửi tin nhắn: </label><br />
                    <input type="text" className="phone3_tb2_2" name="DQL" placeholder="092 046 0505" /><br />
                    <br />

                </div>
            </div>
            <div className="ban3">
                <label className="cdncb">Cài đặt ngưỡng cảnh báo</label>
                <div className="tb3">
                    <label className="text_warn1">Ngưỡng cảnh báo rung: </label><br />
                    <input type="text" className="box_warn1" placeholder="1.500" /><br />
                    <br />
                    <label className="text_warn2">Ngưỡng cảnh báo rò điện (dòng): </label><br />
                    <input type="text" className="box_warn2" placeholder="70" /><br />
                    <br />
                    <label className="text_warn3">Ngưỡng cảnh báo khói (mật độ): </label><br />
                    <input type="text" className="box_warn3" placeholder="80" /><br />
                    <br />
                    <label className="text_warn4">Ngưỡng cảnh báo nhiệt (độ C): </label><br />
                    <input type="text" className="box_warn4" placeholder="70" /><br />
                    <br />
                    <label className="text_warn5">Cảnh báo PIN (%): </label><br />
                    <input type="text" className="box_warn5" placeholder="15" /><br />
                    <br />
                    <div className="nutca2">
                        <Link to="/qltbgsm" className="quaylai">
                            <button type="button" className="btnluuCDTB">
                                <p className="btnluuCDTB1">Lưu</p>
                            </button>
                        </Link>
                        <Link to="/qltbgsm" className="quaylai">
                            <button type="button" className="btnhuyCDTB">
                                <p className="btnhuyCDTB1">Hủy</p>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}
