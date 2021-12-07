import React from 'react'
import './AccessContent.css';
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import { Table} from 'antd';
import {Link} from 'react-router-dom';

export default function AccessContent() {
    const colums=
    [
        {
            title:'STT',
            dataIndex:'stt',
            width:70,
        },
        {
            title:'Quyền truy cập',
            dataIndex:'qtc',
            width:200,
        },
        {
            title:'Trạng thái',
            dataIndex:'status',
            width:200,
        },
        {
            title:'',
            dataIndex:'Update',
            width:50,
        },
        {
            title:'',
            dataIndex:'Delete',
            width:50,
        }
    ]
    const data=[
        {
            key:'1',
            stt: '1',
            qtc:'Quản trị viên',
            status:<>
                <Switch defaultChecked /> Kích Hoạt
            </>,
            Update:<>
                <Link to ="/Quanlyhethong/Access/Update" className="Link">
                <div className="UpdateAccess"><u>Cập nhật</u></div>
                </Link>
            </>,
            Delete:<>
                <div className="DeleteAccess"><u>Xóa</u></div>
            </>
        },
        {
            key:'2',
            stt: '2',
            qtc:'Phòng giao dịch',
            status:<>
                <Switch defaultChecked /> Kích Hoạt
            </>,
            Update:<>
                 <Link to ="/Quanlyhethong/Access/Update" className="Link">
                <div className="UpdateAccess"><u>Cập nhật</u></div>
                </Link>
            </>,
            Delete:<>
                <div className="DeleteAccess"><u>Xóa</u></div>
            </>
        },
        {
            key:'3',
            stt: '3',
            qtc:'Adminitrator',
            status:<>
                <Switch/> Không kích hoạt
            </>,
            Update:<>
                 <Link to ="/Quanlyhethong/Access/Update" className="Link">
                <div className="UpdateAccess"><u>Cập nhật</u></div>
                </Link>
            </>,
            Delete:<>
                <div className="DeleteAccess"><u>Xóa</u></div>
            </>
        },
        {
            key:'4',
            stt: '4',
            qtc:'Nhân viên',
            status:<>
                <Switch defaultChecked /> Kích Hoạt
            </>,
            Update:<>
                 <Link to ="/Quanlyhethong/Access/Update" className="Link">
                <div className="UpdateAccess"><u>Cập nhật</u></div>
                </Link>
            </>,
            Delete:<>
                <div className="DeleteAccess"><u>Xóa</u></div>
            </>
        },
    ]
    return (
        <div className="WrapperAcessContent">
            <div className="WrapperTableAccessContent">
            <Table columns={colums} dataSource={data} pagination={false} className="TableAccessContent"/>
            </div>
        </div>
    )
}
