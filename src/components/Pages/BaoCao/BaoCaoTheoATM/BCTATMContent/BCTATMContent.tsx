import React from 'react'
import './BCTATMContent.css';
import 'antd/dist/antd.css';
import {Table} from 'antd';

export default function BCTATMContent() {
    const colums=[
        {
            title:'STT',
            dataIndex:'Stt',
            width:100,
        },
        {
            title:'Nội dung cảnh báo',
            dataIndex:'NDCB',
            width:250,
        },
        {
            title:'Người quản lý',
            dataIndex:'NQL',
            width:200,
        },
        {
            title:'Thời gian',
            dataIndex:'Time',
            width:170,
        },
        {
            title:'Trạng Thái',
            dataIndex:'Status',
            width:250,
        }
    ]
    const data=[
        {
            key:'1',
            Stt:'1',
            NDCB:'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            NQL:'Trần Gia Lập',
            Time:'10:06:2021 20:00:00',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
        {
            key:'2',
            Stt:'2',
            NDCB:'Cảm biến cửa dưới: Mát kết nối',
            NQL:'Lê Quang liêm',
            Time:'15-06-2021 21:15:35',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
        {
            key:'3',
            Stt:'3',
            NDCB:'Cảm biến cửa dưới: Mát kết nối',
            NQL:'Phương Mỹ Lệ',
            Time:'11-06-2021 23:01:50',
            Status:<>
                <div className="Status">Đã xử lý</div>
                </>
        },
        {
            key:'4',
            Stt:'4',
            NDCB:'Bật cảnh báo: Bật cảnh báo thiết bị bằng remote',
            NQL:'Lê Thành Huy',
            Time:'08-06-2021 20:14:50',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
        {
            key:'5',
            Stt:'5',
            NDCB:'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            NQL:'Nguyễn Thành An',
            Time:'01-06-2021 22:08:10',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
        {
            key:'6',
            Stt:'6',
            NDCB:'Cảm biến cửa dưới: Mát kết nối',
            NQL:'Đinh Hoài An',
            Time:'15-06-2021 22:13:00',
            Status:<>
                <div className="Status">Đã xử lý</div>
                </>
        },
        {
            key:'7',
            Stt:'7',
            NDCB:'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            NQL:'Văn Lệ Thu',
            Time:'18-06-2021 14:12:24',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
        {
            key:'8',
            Stt:'8',
            NDCB:'Cảm biến cửa dưới: Mát kết nối',
            NQL:'Vũ Minh Khôi',
            Time:'08-06-2021 00:36:11',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
        {
            key:'9',
            Stt:'9',
            NDCB:'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            NQL:'Trần Gia Lập',
            Time:'19-06-2021 23:00:00',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
        {
            key:'10',
            Stt:'10',
            NDCB:'Cảm biến cửa dưới: Mát kết nối',
            NQL:'Đinh Hoài An',
            Time:'12-06-2021 12:15:57',
            Status:<>
                <div className="Status">Đã xử lý</div>
                </>
        },
        {
            key:'11',
            Stt:'11',
            NDCB:'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            NQL:'Đinh Hoài An',
            Time:'18-06-2021 19:05:00',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
        {
            key:'12',
            Stt:'12',
            NDCB:'Cảm biến cửa dưới: Mát kết nối',
            NQL:'Nguyễn Công Minh',
            Time:'07-06-2021 20:34:12',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
        {
            key:'13',
            Stt:'13',
            NDCB:'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            NQL:'Bùi Tấn Toàn',
            Time:'11-06-2021 22:00:56',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
        {
            key:'14',
            Stt:'14',
            NDCB:'Cảm biến cửa dưới: Mát kết nối',
            NQL:'Mai Văn Sĩ',
            Time:'14-06-2021 21:12:00',
            Status:<>
                <div className="Status negative">Chưa xử lý</div>
                </>
        },
    ]
    return (
        <div className="WrapperTableBCTATM">
            <div className="WrapperTableBCTATMContent">
            <Table columns={colums} dataSource={data} pagination={{showSizeChanger:false,defaultCurrent:2,total:10000,pageSize:100}} className="TabledataBCTATM"/>
            <div className="BCTATMTextWrapper">
            Hiển thị <div className="BCTATMNumberTextWrapper"> 14 </div> hàng trong mỗi trang
            </div>
            </div>
        </div>
    )
}
