import React from 'react'
import './GSMFooter.css';
import 'antd/dist/antd.css';
import PinXanh from '../../../assets/images/GSM modern on Map/Vector.png';
import PinVang from '../../../assets/images/GSM modern on Map/Vector4.png';
import SongXanh from '../../../assets/images/GSM modern on Map/Vector5.png';
import SongDo from '../../../assets/images/GSM modern on Map/Vectord.png';
import ChuongXanh from '../../../assets/images/GSM modern on Map/Warrning.png';
import ChuongDo from '../../../assets/images/GSM modern on Map/Warrningg.png';
import Report from '../../../assets/images/GSM modern on Map/Infor.png';
import Back from '../../../assets/images/GSM modern on Map/Solid.png';
import KeDoc from '../../../assets/images/GSM modern on Map/Line 7.png';
import {Table} from 'antd';
import {Link} from 'react-router-dom';

export default function GSMFooter() {
    const colums=[
        {
            title:'STT',
            dataIndex:'Stt',
            width:40,
        },
        {
            title:'Mã Thiết bị/Series Number',
            dataIndex:'SeriesNumber',
            width:50,
        },
        {
            title:'Loại điểm giám sát',
            dataIndex:'LDGS',
            width:70,
        },
        {
            title:'Tên điểm giám sát',
            dataIndex:'TDGS',
            width:90,
        },
        {
            title:'Địa Chỉ',
            dataIndex:'Address',
            width:250,
            
        },
        {
            title:'Trạng Thái',
            dataIndex:'Status',
            width:115,
        }
    ];
    const data=[
        {
            key: '1',
            Stt:'1',
            SeriesNumber:'0000001',
            LDGS:'ATM',
            TDGS:'ATM-Giang Văn Minh',
            Address:'16 Giang Văn Minh , Phường Kim Mã , Quận Ba Định , Hà Nội',
            Status: <>
                    <Link to="/GSM/High" className="IconStatus">
                    <img src={PinXanh} alt="" />
                    </Link>
                    <Link to="/GSM/High" className="IconStatus">
                    <img src={SongDo} alt=""/>
                    </Link>
                    <Link to="/GSM/High" className="IconStatus">
                    <img src={ChuongXanh} alt="" />
                    </Link>
                    <Link to="/GSM/High" className="IconSpace">
                    <img src={KeDoc} alt=""/>
                    </Link>
                    <Link to="/GSM/High" className="IconStatus">
                    <img src={Report} alt="" />
                    </Link>
                    <Link to="/GSM/High" className="IconStatus">
                    <img src={Back} alt=""/>
                    </Link>
                    </>
        },
        {
            key: '2',
            Stt:'2',
            SeriesNumber:'0000002',
            LDGS:'ATM',
            TDGS:'ATM-Giang Văn Minh',
            Address:'16 Giang Văn Minh , Phường Kim Mã , Quận Ba Định , Hà Nội',
            Status:<>
                    <Link to="/GSM/High" className="IconStatus">
                    <img src={PinVang} alt="" />
                    </Link>
                    <Link to="/GSM/High" className="IconStatus">
                    <img src={SongXanh} alt="" />
                    </Link>
                    <Link to="/GSM/High" className="IconStatus">
                    <img src={ChuongXanh} alt="" />
                    </Link>
                    <Link to="/GSM/High" className="IconSpace">
                    <img src={KeDoc} alt="" />
                    </Link>
                    <Link to="/GSM/High" className="IconStatus">
                    <img src={Report} alt="" />
                    </Link>
                    <Link to="/GSM/High" className="IconStatus">
                    <img src={Back} alt="" />
                    </Link>
                </>
        },
        {
            key: '3',
            Stt:'3',
            SeriesNumber:'0000003',
            LDGS:'ATM',
            TDGS:'ATM-Nguyễn Ái Quốc',
            Address:'1053 Nguyễn Ái Quốc,Khu Phố 5,Phường Tân Tiến,Thành Phố Biên Hòa,Tỉnh Đồng Nai',
            Status:<>
            <Link to="/GSM/High" className="IconStatus">
            <img src={PinXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={SongDo} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={ChuongDo} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconSpace">
            <img src={KeDoc} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={Report} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={Back} alt=""/>
            </Link>
            </>
        },
        {
            key: '4',
            Stt:'4',
            SeriesNumber:'0000009',
            LDGS:'Phòng giao dịch',
            TDGS:'Phòng giao dịch-Cờ đỏ',
            Address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            Status:<>
            <Link to="/GSM/High" className="IconStatus">
            <img src={PinXanh} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={SongXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={ChuongXanh} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconSpace">
            <img src={KeDoc} alt=""/>
            </Link>
            <Link to="/GSM/normal" className="IconStatus">
            <img src={Report} alt=""/>
            </Link>
            <Link to="/GSM/normal" className="IconStatus">
            <img src={Back} alt="" />
            </Link>
            </>
        },
        {
            key: '5',
            Stt:'5',
            SeriesNumber:'0000005',
            LDGS:'ATM',
            TDGS:'ATM - Nguyễn Ái Quốc',
            Address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
            Status:<>
            <Link to="/GSM/High" className="IconStatus">
            <img src={PinXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={SongXanh} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={ChuongXanh} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconSpace">
            <img src={KeDoc} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={Report} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={Back} alt=""/>
            </Link>
            </>
        },
        {
            key: '6',
            Stt:'6',
            SeriesNumber:'0000021',
            LDGS:'Phòng giao dịch',
            TDGS:'Phòng giao dịch',
            Address:'1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            Status:<>
            <Link to="/GSM/High" className="IconStatus">
            <img src={PinVang} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={SongXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={ChuongDo} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconSpace">
            <img src={KeDoc} alt="" />
            </Link>
            <Link to="/GSM/normal" className="IconStatus">
            <img src={Report} alt=""/>
            </Link>
            <Link to="/GSM/normal" className="IconStatus">
            <img src={Back} alt="" />
            </Link>
            </>
        },
        {
            key: '7',
            Stt:'7',
            SeriesNumber:'0000011',
            LDGS:'ATM',
            TDGS:'ATM - Nguyễn Ái Quốc',
            Address:'1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            Status:<>
            <Link to="/GSM/High" className="IconStatus">
            <img src={PinXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={SongXanh} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={ChuongXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconSpace">
            <img src={KeDoc} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={Report} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={Back} alt="" />
            </Link>
            </>
        },
        {
            key: '8',
            Stt:'8',
            SeriesNumber:'0000064',
            LDGS:'Phòng giao dịch',
            TDGS:'Phòng giao dịch',
            Address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            Status:<>
            <Link to="/GSM/High" className="IconStatus">
            <img src={PinXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={SongXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={ChuongXanh} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconSpace">
            <img src={KeDoc} alt="" />
            </Link>
            <Link to="/GSM/normal" className="IconStatus">
            <img src={Report} alt=""/>
            </Link>
            <Link to="/GSM/normal" className="IconStatus">
            <img src={Back} alt="" />
            </Link>
            </>
        },
        {
            key: '9',
            Stt:'9',
            SeriesNumber:'0000010',
            LDGS:'Phòng giao dịch',
            TDGS:'Phòng giao dịch Trung Yên',
            Address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
            Status:<>
            <Link to="/GSM/High" className="IconStatus">
            <img src={PinVang} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={SongXanh} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={ChuongXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconSpace">
            <img src={KeDoc} alt="" />
            </Link>
            <Link to="/GSM/normal" className="IconStatus">
            <img src={Report} alt=""/>
            </Link>
            <Link to="/GSM/normal" className="IconStatus">
            <img src={Back} alt="" />
            </Link>
            </>
        },
        {
            key: '10',
            Stt:'10',
            SeriesNumber:'0000035',
            LDGS:'ATM',
            TDGS:'ATM - Nguyễn Thanh Đằng',
            Address:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            Status:<>
            <Link to="/GSM/High" className="IconStatus">
            <img src={PinXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={SongXanh} alt="" />
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={ChuongXanh} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconSpace">
            <img src={KeDoc} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={Report} alt=""/>
            </Link>
            <Link to="/GSM/High" className="IconStatus">
            <img src={Back} alt="" />
            </Link>
            </>
        },
    ]
    return (
        <div className="GSMFooter">
            <div className="WrapperTableData">
            <Table columns={colums} dataSource={data} pagination={false} className="TableGSMFooterdata"/>
            </div>
        </div>
    )
}
