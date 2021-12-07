import React from 'react'
import './QuanLyNguoiDungContent.css';
import 'antd/dist/antd.css';
import { Table} from 'antd';
import {Link} from 'react-router-dom';

export default function QuanLyNguoiDungContent() {
    const colums=[
        {
            title:'STT',
            dataIndex:'stt',
            width:50,
        },
        {
            title:'Tên đăng nhập',
            dataIndex:'username',
            width:150,
        },
        {
            title:'Họ và tên',
            dataIndex:'name',
            width:150,
        },
        {
            title:'Số điện thoại',
            dataIndex:'numberphone',
            width:150,
        },
        {
            title:'Email',
            dataIndex:'mail',
            width:150,
        },
        {
            title:'Đơn vị quản lý',
            dataIndex:'dvql',
            width:150,
        },
        {
            title:'',
            dataIndex:'Update',
            width:50,
        },
        {
            title:'',
            dataIndex:'Delete',
            width:70,
        },
    ]
    const data=[
        {
            key:'1',
            stt:'1',
            username:'ND1120',
            name:'Tạ Duy Nguyên',
            numberphone:'030 252 0311',
            mail:'dnnsns@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Tiền Giang</div>
            </>,
            Update:<>
                <Link to="/Quanlyhethong/QLND/Update" className="Link">
                <div className="UpdateQLND">Cập nhật</div>
                </Link>
                </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'2',
            stt:'2',
            username:'ND2212',
            name:'Lê Quang liêm',
            numberphone:'090 024 0256',
            mail:'lequangliem@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Hà Nội</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'3',
            stt:'3',
            username:'ND3920',
            name:'Phương Mỹ Lệ',
            numberphone:'097 754 0254',
            mail:'Pml@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Đồng Nai</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'4',
            stt:'4',
            username:'ND2929',
            name:'Lê Thành Huy',
            numberphone:'079 656 4541',
            mail:'Lth@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Vũng Tàu</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'5',
            stt:'5',
            username:'ND1201',
            name:'Nguyễn Thành An',
            numberphone:'097 754 0254',
            mail:'nta@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Vũng Tàu</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'6',
            stt:'6',
            username:'ND1202',
            name:'Đinh Hoài An',
            numberphone:'030 054 0544',
            mail:'Dha@gmail.com.vn',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Tiền Giang</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'7',
            stt:'7',
            username:'ND9322',
            name:'Văn Lệ Thu',
            numberphone:'093 025 0232',
            mail:'vlt@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Hà Nội</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'8',
            stt:'8',
            username:'ND3923',
            name:'Vũ Minh Khôi',
            numberphone:'030 054 0544',
            mail:'vmkk@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Hà Nội</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'9',
            stt:'9',
            username:'ND2302',
            name:'Trần Gia Lập',
            numberphone:'030 054 0544',
            mail:'tgl2020@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Hà Nội</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'10',
            stt:'10',
            username:'ND3943',
            name:'Đinh Hoài An',
            numberphone:'030 054 0544',
            mail:'monglung@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Hà Nội</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'11',
            stt:'11',
            username:'ND5632',
            name:'Đinh Hoài An',
            numberphone:'030 054 0544',
            mail:'gahs@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - TP.HCM</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>, 
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'12',
            stt:'12',
            username:'ND7458',
            name:'Nguyễn Công Minh',
            numberphone:'097 754 0254',
            mail:'ncmm@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Cần Thơ</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'13',
            stt:'13',
            username:'ND9438',
            name:'Bùi Tấn Toàn',
            numberphone:'030 054 0544',
            mail:'Btt2020@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Hà Nội</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
        {
            key:'14',
            stt:'14',
            username:'ND7432',
            name:'Mai Văn Sĩ',
            numberphone:'030 054 0544',
            mail:'maisi@gmail.com',
            dvql:<>
                <div className="dvqlQLNDContent">ATM - Cần Thơ</div>
            </>,
            Update:<>
            <Link to="/Quanlyhethong/QLND/Update" className="Link">
            <div className="UpdateQLND">Cập nhật</div>
            </Link>
            </>,
            Delete:<>
                <div className="DeleteQLND">Xóa</div>
             </>
        },
    ]
    return (
        <div className="WrapperQLNDContent">
           <div className="WrapperTableQLNDContent">
           <Table columns={colums} dataSource={data} pagination={{showSizeChanger:false,defaultCurrent:2,total:10000,pageSize:100}} />
            <div className="TextWrapperQLNDContent">
            Hiển thị <div className="NumberTextWrapper"> 14 </div> hàng trong mỗi trang
            </div>
           </div>
        </div>
    )
}
