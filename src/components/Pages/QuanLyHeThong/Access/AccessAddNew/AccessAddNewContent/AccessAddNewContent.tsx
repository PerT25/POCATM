import React from 'react';
import './AccessAddNewContent.css';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Table} from 'antd';
import {Link} from 'react-router-dom';

export default function AccessAddNewContent() {
    const colums=[
        {
            title:'STT',
            dataIndex:'stt',
            width:50,
        },
        {
            title:'Nhóm chức năng',
            dataIndex:'NCN',
            width:150,
        },
        {
            title:'Chức năng',
            dataIndex:'CN',
            width:150,
        },
        {
            title:'Xem',
            dataIndex:'Seen',
            width:100,
        },
        {
            title:'Thêm/Sửa/Xóa',
            dataIndex:'TSX',
            width:100,
        },
    ]
    const data=[
        {
            key:'1',
            stt:'1',
            NCN:'DashBoard',
            CN:'',
            Seen:<>
            <Checkbox/>
            </>,
            TSX:<>
            <Checkbox/>
            </>
        },
        {
            key:'2',
            stt:'2',
            NCN:'Cảnh Báo',
            CN:'',
            Seen:<>
            <Checkbox/>
            </>,
            TSX:<>
            <Checkbox/>
            </>
        },
        {
            key:'3',
            stt:'3',
            NCN:'Báo cáo',
            CN:'',
            Seen:<>
            <Checkbox/>
            </>,
            TSX:<>
            <Checkbox/>
            </>
        },
        {
            key:'4',
            stt:'4',
            NCN:'Cài đặt hệ thống',
            CN:'',
            Seen:<>
            <Checkbox/>
            </>,
            TSX:<>
            <Checkbox/>
            </>
        },
        {
            key:'5',
            stt:'5',
            NCN:'',
            CN:'Thiết bị giám sát',
            Seen:<>
            <Checkbox/>
            </>,
            TSX:<>
            <Checkbox/>
            </>
        },
        {
            key:'6',
            stt:'6',
            NCN:'',
            CN:'Người dùng hệ thống',
            Seen:<>
            <Checkbox/>
            </>,
            TSX:<>
            <Checkbox/>
            </>
        },
        {
            key:'7',
            stt:'7',
            NCN:'',
            CN:'Audit Log',
            Seen:<>
            <Checkbox/>
            </>,
            TSX:<>
            <Checkbox/>
            </>
        },
    ] 
    return (
        <div className="AccessAddNewContent">
            <div className="WrapperAccessAddNewContent">
                <div className="WrapperLeftAccessAddNewContent">
                    <div className="WrapperTitleLeftAccessAddNew">
                        <p className="TitleLeftAccessAddNewContent">Tên quyền truy cập:</p>
                        <p className="StarRedAccessUpdate">*</p>
                    </div>
                    <input type="text" placeholder="Customer" className="TextNameAccessAddNew"/>
                    <p className="StatusAccessAddNewContent">Trạng thái</p>
                    <div className="CheckedAccessAddNew">
                        <Checkbox/> Chưa kích hoạt
                    </div>
                    <div className="CautionAccessAddNew">
                        <p className="StarRedAccessUpdate">*</p>
                        <p className="TextCautionAccessAddNew"> là những thông tin bắt buộc</p>
                    </div>
                </div>
                <div className="WrapperRightAccessAddNewContent">
                    <Table columns={colums} dataSource={data} pagination={false}/>
                </div>
            </div>
            <Link to="/Quanlyhethong/Access" className="Link">
            <button type="submit" className="CancelAccesAddNew">
                <p className="TextCancelAccessAddNew">Hủy</p>
            </button>
            </Link>
            <Link to="/Quanlyhethong/Access" className="Link">
            <button type="submit" className="SaveAccessAddNew">
                <p className="TextSaveAcccessAddNew">Lưu</p>
            </button>
            </Link>
        </div>
    )
}
