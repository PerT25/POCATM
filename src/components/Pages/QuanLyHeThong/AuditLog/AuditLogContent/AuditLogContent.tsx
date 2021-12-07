import React from 'react'
import './AuditLogContent.css';
import 'antd/dist/antd.css';
import {Table} from 'antd';

export default function AuditLogContent() {
    const colums=[
        {
            title:'STT',
            dataIndex:'Stt',
            width:80,
        },
        {
            title:'Ngày giờ',
            dataIndex:'DateTime',
            width:90,
        },
        {
            title:'Thao Tác',
            dataIndex:'TTac',
            width:80,
        },
        {
            title:'Tên Đăng Nhập',
            dataIndex:'UserName',
            width:70,
        },
        {
            title:'Ghi chú',
            dataIndex:'Note',
            width:250,
        },
    ]
    const data=[
        {
            key:'1',
            Stt:'1',
            DateTime:'10-06-2021 20:00:00',
            TTac:'Log in',
            UserName:'Admin',
            Note:'',
        },
        {
            key:'2',
            Stt:'2',
            DateTime:'10-06-2021 20:50:00',
            TTac:'Log out',
            UserName:'Admin',
            Note:'',
        },
        {
            key:'3',
            Stt:'3',
            DateTime:'10-06-2021 21:00:00',
            TTac:'Log in',
            UserName:'Admin',
            Note:'',
        },
        {
            key:'4',
            Stt:'4',
            DateTime:'10-06-2021 20:15:00',
            TTac:'Thêm thiết bị',
            UserName:'Admin',
            Note:'Thêm thiết bị vào thành công!',
        },
        {
            key:'5',
            Stt:'5',
            DateTime:'10-06-2021 23:00:00',
            TTac:'Thêm điểm giám sát',
            UserName:'Admin',
            Note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        },
        {
            key:'6',
            Stt:'6',
            DateTime:'10-06-2021 17:00:00',
            TTac:'Xóa thiết bị',
            UserName:'Admin',
            Note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        },
        {
            key:'7',
            Stt:'7',
            DateTime:'10-06-2021 08:00:00',
            TTac:'Log in',
            UserName:'Admin',
            Note:'',
        },
        {
            key:'8',
            Stt:'8',
            DateTime:'10-06-2021 10:00:00',
            TTac:'Xóa thiết bị',
            UserName:'Admin',
            Note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        },
        {
            key:'9',
            Stt:'9',
            DateTime:'10-06-2021 00:00:00',
            TTac:'Cập nhật điểm giám sát',
            UserName:'Admin',
            Note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        },
        {
            key:'10',
            Stt:'10',
            DateTime:'10-06-2021 12:00:00',
            TTac:'Thêm điểm giám sát',
            UserName:'Admin',
            Note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        },
        {
            key:'11',
            Stt:'11',
            DateTime:'10-06-2021 16:00:00',
            TTac:'Log out',
            UserName:'Admin',
            Note:'',
        },
        {
            key:'12',
            Stt:'12',
            DateTime:'10-06-2021 22:00:00',
            TTac:'Log in',
            UserName:'Admin',
            Note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        },
        {
            key:'13',
            Stt:'13',
            DateTime:'10-06-2021 11:00:00',
            TTac:'Cập nhật điểm giám sát',
            UserName:'Admin',
            Note:'',
        },
        {
            key:'14',
            Stt:'14',
            DateTime:'10-06-2021 08:00:00',
            TTac:'Log in',
            UserName:'Admin',
            Note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        },
    ]
    return (
        <div className="WrapperTableAuditLog">
            <div className="WrapperTableAuditLogContent">
            <Table columns={colums} dataSource={data} pagination={{showSizeChanger:false,defaultCurrent:2,total:10000,pageSize:100}} className="TabledataAuditlog"/>
            <div className="AuditLogTextWrapper">
            Hiển thị <div className="AuditLogNumberTextWrapper"> 14 </div> hàng trong mỗi trang
            </div>
            </div>
        </div>
    )
}
