import React from 'react'
import './AccessUpdateContent.css'
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Table} from 'antd';
import {Link} from 'react-router-dom';

export default function AccessUpdateContent() {
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
            CN:'Đơn vị quản lý',
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
            CN:'Điểm giám sát',
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
            CN:'Thiết bị giám sát',
            Seen:<>
            <Checkbox/>
            </>,
            TSX:<>
            <Checkbox/>
            </>
        },
        {
            key:'8',
            stt:'8',
            NCN:'',
            CN:'Camera',
            Seen:<>
            <Checkbox/>
            </>,
            TSX:<>
            <Checkbox/>
            </>
        },
        {
            key:'9',
            stt:'9',
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
            key:'10',
            stt:'10',
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
        <div className="AccessUpdateContent">
            <div className="WrapperAccesUpdateContent">
                <div className="WrapperLeftAccessUpdateContent">
                    <div className="WrapperTitleLeftAccesUpdate">
                        <p className="TitleLeftAccessUpdateContent">Tên quyền truy cập:</p>
                        <p className="StarRedAccessUpdate">*</p>
                    </div>
                    <input type="text" placeholder="Quản trị viên" className="TextNameAccessUpdate" />
                    <p className="StatusAccessUpdateContent">Trạng thái</p>
                    <div className="CheckedAccessUpdate">
                        <Checkbox defaultChecked /> Đã kích hoạt
                    </div>
                    <div className="CautionAccessUpdate">
                    <p className="StarRedAccessUpdate">*</p>
                        <p className="TextCautionAccessUpdate"> là những thông tin bắt buộc</p>
                    </div>
                </div>
                <div className="WrapperRightAccessUpdateContent">
                    <Table columns={colums} dataSource={data} pagination={false}/>
                </div>
            </div>
            <Link to="/Quanlyhethong/Access" className="Link">
            <button type="submit" className="CancelAccesUpdate">
                <p className="TextCancelAccessUpdate">Hủy</p>
            </button>
            </Link>
            <Link to="/Quanlyhethong/Access" className="Link">
            <button type="submit" className="SaveAccessUpdate">
                <p className="TextSaveAcccessUpdate">Lưu</p>
            </button>
            </Link>
        </div>
    )
}
