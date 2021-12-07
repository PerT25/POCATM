import React from 'react'
import './QuanLyNguoiDungUpdateContent.css';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import DropDown from '../../../../../../assets/images/IconsDashbroad/Down.png'
import BattleEye from '../../../../../../assets/images/IconsDashbroad/Eye.png';

export default function QuanLyNguoiDungUpdateContent() {
    const colums = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            width: 14
        },
        {
            title: 'Nhóm chức năng',
            dataIndex: 'nhomchucnang',
            key: 'nhomchucnang',
            width: 350
        },
        {
            title: 'Chức năng',
            dataIndex: 'chucnang',
            key: 'chucnang',
            width: 350
        },
        {
            title: 'Xem',
            dataIndex: 'xem',
            key: 'xem',

        },
        {
            title: 'Thêm/Xóa/Sửa',
            dataIndex: 'themsuaxoa',
            key: 'themsuaxoa',

        }

    ];
    const data = [
        {
            key: '1',
            nhomchucnang: 'Dashboard',
            chucnang: '',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },
        {
            key: '2',
            nhomchucnang: 'Cảnh báo',
            chucnang: '',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },
        {
            key: '3',
            nhomchucnang: 'Báo cáo',
            chucnang: '',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },
        {
            key: '4',
            nhomchucnang: 'Cài đặt hệ thống',
            chucnang: '',
            xem: "",
            themsuaxoa: ""
        },
        {
            key: '5',
            nhomchucnang: '',
            chucnang: 'Thiết bị giám sát',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },
        {
            key: '6',
            nhomchucnang: '',
            chucnang: 'người dùng hệ thống',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },
        {
            key: '7',
            nhomchucnang: '',
            chucnang: 'Audit log',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },

    ];
    return (
        <div className="QLND_Update0">
        <div className="QLND_Update2">
            <div className="tenquyentruycap1">
                <div className="QLNDtrai">
                    <br />
                    <label className="QLNDtext1">Tên đăng nhập: </label><br />
                    <input type="text" className="QLNDbox1" name="DQL" placeholder="tuyen.nguyen@alta.com.vn" /><br />
                    <br />
                    <label className="star1">*</label>

                    <label className="star2">*</label>
                    <label className="ttstar">là những thông tin bắt buộc</label>
                    <br />
                    <label className="QLNDtext2">Họ tên: </label><br />
                    <input type="text" className="QLNDbox2" name="DQL" placeholder="NGUYỄN THỊ NGỌC TUYỀN" /><br />
                    <br />
                    <label className="star3">*</label>
                    <br />
                    <label className="QLNDtext3">Email: </label><br />
                    <input type="text" className="QLNDbox3" name="DQL" placeholder="NGUYỄN THỊ NGỌC TUYỀN" /><br />
                    <br />
                    <label className="star4">*</label>
                    <br />
                    <label className="QLNDtext4">Số điện thoại: </label><br />
                    <input type="text" className="QLNDbox4" name="DQL" placeholder="079 020 2696" /><br />
                    <br />
                    <label className="QLNDtext5">Chọn đơn vị quản lý: </label><br />
                    <input type="text" className="QLNDbox5" name="DQL" placeholder="Hội sở TP.HCM" /><br />
                    <br />
                    <label className="star5">*</label>
                    <br />
                    <img src={DropDown} alt="" className="dropdown" />
                    
                    <label className="QLNDtext6">Mật khẩu: </label><br />
                    <input type="password" className="QLNDbox6" name="DQL" placeholder="●●●●●●●●●●" /><br />
                    <br />
                    <label className="star6">*</label>
                    <img src={BattleEye} alt="" className="hidepassword" />
                    <br />
                    <label className="QLNDtext7">Xác nhận mật khẩu: </label><br />
                    <input type="password" className="QLNDbox7" name="DQL" placeholder="●●●●●●●●●●" /><br />
                    <br />
                    <label className="star7">*</label>
                    <img src={BattleEye} alt="" className="hidepassword1" />
                    


                </div>

            </div>
            <div className="Table_update_qlnd">
                <Table dataSource={data} columns={colums} pagination={false} />
            </div>
        </div>
        <Link to="/Quanlyhethong/QLND" className="Link">
        <button type='submit' className="CancelQLNDUpdate">
            <p className="TextCancelQLNDUpdate">Hủy</p>
        </button>
        </Link>
        <Link to="/Quanlyhethong/QLND" className="Link">
        <button type="submit" className="SaveQLNDUpdate">
            <p className="TextSaveQLNDUpdate">Lưu</p>
        </button>
        </Link>
    </div>
    )
}
