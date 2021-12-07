import React from 'react'
import { Table } from 'antd';
import './QLTB_GSM_table.css';
import 'antd/dist/antd.css';
import V1 from '../../../assets/images/GSM modern on Map/Vector.png';
import V2 from '../../../assets/images/GSM modern on Map/Vectord.png';
import V3 from '../../../assets/images/GSM modern on Map/Warrning.png';
import V4 from '../../../assets/images/GSM modern on Map/Vector4.png';
import V5 from '../../../assets/images/GSM modern on Map/Vector5.png';
import V6 from '../../../assets/images/GSM modern on Map/Warrningg.png';
import V7 from '../../../assets/images/GSM modern on Map/Line 7.png'
import V8 from '../../../assets/images/GSM modern on Map/Solid.png'
import V9 from '../../../assets/images/GSM modern on Map/Infor.png'
import V10 from '../../../assets/images/dashboard/threedot.png';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
export default function QLTM_GSB_table() {
    const menu = (
        <Menu>

            <Menu.Item>
                <Link to="/caidatdropdwon" className="link">

                    <a target="_blank" rel="noopener noreferrer" >
                        <div className='blu0'>
                            Cài Đặt
                        </div>
                    </a>
                </Link>

            </Menu.Item>

            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <div className="blu0">
                        Làm Mới
                    </div>
                </a>
            </Menu.Item>

            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <div className="re0">
                        Xóa
                    </div>
                </a>
            </Menu.Item>
        </Menu>
    );

    const dataSource = [
        {
            key: '1',
            sn: '0000001',
            sdt: '...',
            type: 'ATM',
            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '2',
            sn: '0000002',
            sdt: '090 024 0256',
            type: 'ATM',
            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
            icon: <>
                <div className="v1">
                    <img src={V4} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '3',
            sn: '0000003',
            sdt: '097 754 0254',
            type: 'ATM',
            address: '1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '4',
            sn: '0000004',
            sdt: '079 656 4541',
            type: 'ATM',
            address: 'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V6} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '5',
            sn: '0000005',
            sdt: '097 754 0254',
            type: 'ATM',
            address: 'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '6',
            sn: '0000006',
            sdt: '030 054 0544',
            type: 'Phòng giao dịch',
            address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V2} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '7',
            sn: '0000007',
            sdt: '093 025 0232',
            type: 'Phòng giao dịch',
            address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
            icon: <>
                <div className="v1">
                    <img src={V4} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '8',
            sn: '0000008',
            sdt: '030 054 0544',
            type: 'ATM',
            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '9',
            sn: '0000009',
            sdt: '030 054 0544',
            type: 'ATM',
            address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V2} alt="" />
                </div>
                <div className="v3">
                    <img src={V6} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '10',
            sn: '0000010',
            sdt: '030 054 0544',
            type: 'Phòng giao dịch',
            address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '11',
            sn: '0000011',
            sdt: '030 054 0544',
            type: 'ATM',
            address: 'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '12',
            sn: '0000012',
            sdt: '097 754 0254',
            type: 'Phòng giao dịch',
            address: 'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V2} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '13',
            sn: '0000013',
            sdt: '030 054 0544',
            type: 'Phòng giao dịch',
            address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
        {
            key: '14',
            sn: '0000014',
            sdt: '030 054 0544',
            type: 'Phòng giao dịch',
            address: '1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            icon: <>
                <div className="v1">
                    <img src={V4} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V6} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                    <div className="v10" onClick={e => e.preventDefault()}>
                        <img src={V10} alt="" />
                    </div>
                </Dropdown>
            </>

        },
    ];

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            width: 14
        },
        {
            title: 'GSM ID',
            dataIndex: 'sn',
            key: 'sn',
            width: 144.6
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'sdt',
            key: 'sdt',
            width: 120
        },
        {
            title: 'Loại GSM',
            dataIndex: 'type',
            key: 'type',
            width: 200
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            width: 800

        },
        {
            title: 'Trạng Thái',
            dataIndex: 'icon',
            key: 'icon',
            width: 100
        },
        {
            title: '',
            dataIndex: 'icon2',
            key: 'icon2',
        },
    ];

    return (
        <div className="Table_GSM">
            <Table columns={columns} dataSource={dataSource} pagination={{ showSizeChanger: false, defaultCurrent: 2, total: 10000, pageSize: 100 }} className="TableQLCBdata" />
        </div>
    )
}
