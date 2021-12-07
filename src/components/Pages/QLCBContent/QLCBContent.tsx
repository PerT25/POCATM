import React from 'react'
import './QLCBContent.css';
import 'antd/dist/antd.css';
import {Table} from 'antd';

export default function QLCBContent() {
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
        title:'Loại GSM',
        dataIndex:'LGSM',
        width:200,
    },
    {
        title:'Địa chỉ',
        dataIndex:'DC',
        width:550,
    },
    {
        title:'Nội dung cảnh báo',
        dataIndex:'NDCB',
        width:400,
    },
    {
        title:'Ngày giờ',
        dataIndex:'DT',
        width:250,
    }
    ]
    const data=[
    {
        key:'1',
        Stt:'1',
        GSMID:<>
            <div className="colorfont"><u>0000001</u></div>
            </>,
        LGSM:'ATM',
        DC:'...',
        NDCB:'Cảm biến dịch chuyển &  gia tốc: Mất kết nối',
        DT:'10-06-2021 20:00:00'
    },
    {
        key:'2',
        Stt:'2',
        GSMID:<>
            <div className="colorfont"><u>0000002</u></div>
            </>,
        LGSM:'ATM',
        DC:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
        NDCB:'Cảm biến cửa trên máy ATM: Báo động',
        DT:'10-06-2021 20:20:00'
    },
    {
        key:'3',
        Stt:'3',
        GSMID:<>
            <div className="colorfont"><u>0000003</u></div>
            </>,
        LGSM:'ATM',
        DC:'1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
        NDCB:'Cảm biến điều khiển tại chổ bằng Remote RF: Bật',
        DT:'10-06-2021 20:03:00'
    },
    {
        key:'4',
        Stt:'4',
        GSMID:<>
            <div className="colorfont"><u>0000004</u></div>
            </>,
        LGSM:'ATM',
        DC:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
        NDCB:'Cảm biến nhiệt độ: Cao',
        DT:'10-06-2021 20:20:00'
    },
    {
        key:'5',
        Stt:'5',
        GSMID:<>
            <div className="colorfont"><u>0000005</u></div>
            </>,
        LGSM:'ATM',
        DC:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
        NDCB:'Cảm biến nhiệt độ: Thấp',
        DT:'10-06-2021 20:21:00'
    },
    {
        key:'6',
        Stt:'6',
        GSMID:<>
            <div className="colorfont"><u>0000006</u></div>
            </>,
        LGSM:'Phòng giao dịch',
        DC:'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
        NDCB:'Cảm biến dịch chuyển: Biến động',
        DT:'10-06-2021 20:12:00'
    },
    {
        key:'7',
        Stt:'7',
        GSMID:<>
            <div className="colorfont"><u>0000007</u></div>
            </>,
        LGSM:'Phòng giao dịch',
        DC:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
        NDCB:'Cảm biến rò điện: Báo động',
        DT:'10-06-2021 20:54:00'
    },
    {
        key:'8',
        Stt:'8',
        GSMID:<>
            <div className="colorfont"><u>0000008</u></div>
            </>,
        LGSM:'ATM',
        DC:'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
        NDCB:'Cảm biến khói: Báo động',
        DT:'10-06-2021 20:22:00'
    },
    {
        key:'9',
        Stt:'9',
        GSMID:<>
            <div className="colorfont"><u>0000009</u></div>
            </>,
        LGSM:'ATM',
        DC:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
        NDCB:'Pin dự phòng: Không sạc pin',
        DT:'10-06-2021 20:44:00'
    },
    {
        key:'10',
        Stt:'10',
        GSMID:<>
            <div className="colorfont"><u>0000010</u></div>
            </>,
        LGSM:'Phòng giao dịch',
        DC:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa,Quận Cầu Giấy, TP Hà Nội',
        NDCB:'Điện áp nguồn: Bình thường',
        DT:'10-06-2021 20:54:00'
    },
    {
        key:'11',
        Stt:'11',
        GSMID:<>
            <div className="colorfont"><u>0000011</u></div>
            </>,
        LGSM:'ATM',
        DC:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa,Quận Cầu Giấy, TP Hà Nội',
        NDCB:'Cảm biến rung: Báo động',
        DT:'10-06-2021 20:12:00'
    },
    {
        key:'12',
        Stt:'12',
        GSMID:<>
            <div className="colorfont"><u>0000012</u></div>
            </>,
        LGSM:'Phòng giao dịch',
        DC:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
        NDCB:'Cảm biến ngoài máy ATM: Báo động',
        DT:'10-06-2021 20:12:00'
    },
    {
        key:'13',
        Stt:'13',
        GSMID:<>
            <div className="colorfont"><u>0000013</u></div>
            </>,
        LGSM:'Phòng giao dịch',
        DC:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa,Quận Cầu Giấy, TP Hà Nội',
        NDCB:'Cảm biến nhiệt: Thấp',
        DT:'10-06-2021 20:12:00'
    },
    {
        key:'14',
        Stt:'14',
        GSMID:<>
            <div className="colorfont"><u>0000014</u></div>
            </>,
        LGSM:'Phòng giao dịch',
        DC:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
        NDCB:'Cảm biến rò điện: Báo động',
        DT:'10-06-2021 20:00:00'
    },
    ]      
    return (
        <div className="Wrapper">
            <div className="WrapperContentQLCBTable">
                <Table columns={colums} dataSource={data} pagination={{showSizeChanger:false,defaultCurrent:2,total:10000,pageSize:100}} className="TableQLCBdata"/>
                <div className="TextWrapper">
                    Hiển thị <div className="NumberTextWrapper"> 14 </div> hàng trong mỗi trang
                </div>
            </div>
        </div>
    )
}
