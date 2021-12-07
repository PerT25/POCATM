import React from 'react'
import './BCTPGDContent.css';
import 'antd/dist/antd.css';
import {Table} from 'antd';

export default function BCTPGDContent() {
    const colums=[
        {
            title:'STT',
            dataIndex:'Stt',
            width:100,
        },
        {
            title:'GSM ID',
            dataIndex:'GSMID',
            width:150,
        },
        {
            title:'Địa chỉ',
            dataIndex:'Address',
            width:550,
        },
        {
            title:'Số cảnh báo',
            dataIndex:'Scb',
            width:150,
        },
    ]
    const data=[
        {
            key:'1',
            Stt:'1',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000001</u></div>
                </>,
            Address:'...',
            Scb:'121'
        },
        {
            key:'2',
            Stt:'2',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000002</u></div>
                </>,
            Address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
            Scb:'3535'
        },
        {
            key:'4',
            Stt:'4',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000004</u></div>
                </>,
            Address:'Số 3 Nguyễn Thanh Đằng, Phường PhướcHiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            Scb:'235'
        },
        {
            key:'5',
            Stt:'5',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000005</u></div>
                </>,
            Address:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            Scb:'864'
        },
        {
            key:'6',
            Stt:'6',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000006</u></div>
                </>,
            Address:'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
            Scb:'3412'
        },
        {
            key:'7',
            Stt:'7',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000007</u></div>
                </>,
            Address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
            Scb:'564'
        },
        {
            key:'8',
            Stt:'8',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000008</u></div>
                </>,
            Address:'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
            Scb:'321'
        },
        {
            key:'9',
            Stt:'9',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000009</u></div>
                </>,
            Address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
            Scb:'4754'
        },
        {
            key:'10',
            Stt:'10',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000010</u></div>
                </>,
            Address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
            Scb:'388'
        },
        {
            key:'11',
            Stt:'11',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000011</u></div>
                </>,
            Address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
            Scb:'2112'
        },
        {
            key:'12',
            Stt:'12',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000012</u></div>
                </>,
            Address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            Scb:'434'
        },
        {
            key:'13',
            Stt:'13',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000013</u></div>
                </>,
            Address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
            Scb:'0452'
        },
        {
            key:'14',
            Stt:'14',
            GSMID:<>
                <div className="BCTPGDcolorfont"><u>0000014</u></div>
                </>,
            Address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            Scb:'242'
        },
    ]
    return (
        <div className="WrapperTableBCTPGD">
            <div className="WrapperTableBCTPGDContent">
            <Table columns={colums} dataSource={data} pagination={{showSizeChanger:false,defaultCurrent:2,total:10000,pageSize:100}} className="TabledataBCTPGD"/>
            <div className="BCTPGDTextWrapper">
            Hiển thị <div className="BCTPGDNumberTextWrapper"> 14 </div> hàng trong mỗi trang
            </div>
            </div>
        </div>
    )
}
