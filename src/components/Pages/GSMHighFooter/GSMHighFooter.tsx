import React from 'react'
import Dichchuyen from '../../../assets/images/GSM modern on Map/dichchuyen.png';
import Rung from '../../../assets/images/GSM modern on Map/Frame 916.png';
import Temp from '../../../assets/images/GSM modern on Map/nhiet.png';
import WindowOutATM from '../../../assets/images/GSM modern on Map/Frame 917.png';
import WindowOnATM from '../../../assets/images/GSM modern on Map/Frame 918.png';
import CuaKet from '../../../assets/images/GSM modern on Map/Frame 919.png';
import DuPhong from '../../../assets/images/GSM modern on Map/duphong.png';
import RoDien from '../../../assets/images/GSM modern on Map/rodien.png';
import Khoi from '../../../assets/images/GSM modern on Map/khoi.png';
import PinDuPhong from '../../../assets/images/GSM modern on Map/pinduphong.png';
import DienAC from '../../../assets/images/GSM modern on Map/Frame.png';
import BaoHieu from '../../../assets/images/GSM modern on Map/F.png';
import ChamXanh from '../../../assets/images/GSM modern on Map/Ellipse 1.png';
import './GSMHighFooter.css'

export default function GSMHighFooter() {
    return (
        <div className="GSMHighFooter">
            <div className="Wrapper12">
                <div className="Wrapper1">
                    <p className="TitleWrapper1">Thông tin ATM</p>
                    <div className="ContentWrapper">
                        <div className="IdContent">
                            <span className="iduser">ID:</span>
                            <span className="balanceiduser">8628822201212 to SIM number: Unknown</span>
                        </div>
                        <div className="IdContent">
                            <span className="iduser">Trạng thái:</span>
                            <span className="balanceFont">
                                <img src={ChamXanh} alt="" className="IconGreen"/>
                                Đang kết nối
                                </span>
                        </div>
                        <div className="IdContent">
                            <span className="iduser">Loại kết nối:</span>
                            <span className="balanceFont">Nguồn AC - Mạng WAN</span>
                        </div>
                        <div className="IdContent">
                            <span className="iduser">Loại thiết bị:</span>
                            <span className="balanceFont">Thiết bị cảnh báo cho ATM</span>
                        </div>
                        <div className="IdContent">
                            <span className="iduser">Địa chỉ theo dõi:</span>
                            <span className="inforiduser">86/33 Âu Cơ, phường 9, quận Tân Bình, TP.HCM</span>
                        </div>
                        <div className="IdContent">
                            <span className="iduser">Ngày kích hoạt:</span>
                            <span className="inforiduser">12/05/2021 16:15:00</span>
                        </div>
                        <div className="timeaccess">
                        Thời gian truy vấn:  16:20:00 22/06/2021
                        </div>
                    </div>
                </div>
                <div className="Wrapper2">
                    <p className="TitleWrapper2">Trạng thái cảm biến</p>
                    <div className="ContentWrapper2">
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={Temp} alt="" />
                                    <span className="Nhietdo">
                                    Nhiệt({'>'} 36.5):
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus negative">
                                        Cao
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={Rung} alt="" />
                                    <span className="Nhietdo">
                                    Rung({'>'}1700):
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus">
                                        Bình Thường
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={WindowOutATM} alt="" />
                                    <span className="Nhietdo">
                                    Cửa trên máy ATM:
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus">
                                        Bật
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={WindowOnATM} alt="" />
                                    <span className="Nhietdo">
                                    Cửa ngoài máy ATM:
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus">
                                        Bật
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={CuaKet} alt="" />
                                    <span className="Nhietdo">
                                    Cửa két máy ATM:
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus">
                                        Bật
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={DuPhong} alt="" />
                                    <span className="Nhietdo">
                                    Dự Phòng
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus negative">
                                        Tắt
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={Rung} alt="" />
                                    <span className="Nhietdo">
                                    Rung 2({'>'}2000):
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus ">
                                        Bình Thường
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="Wrapper3">
                    <p className="Warning">Cảnh Báo</p>
                    <div className="ContentWrapper3">
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={Dichchuyen} alt="" />
                                    <span className="Nhietdo">
                                    Dịch chuyển:
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus negative">
                                        Tắt
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={RoDien} alt="" />
                                    <span className="Nhietdo">
                                    Rò điện
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus negative">
                                     Tắt
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={Khoi} alt="" />
                                    <span className="Nhietdo">
                                    Khói
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus">
                                        Bật
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={PinDuPhong} alt="" />
                                    <span className="Nhietdo">
                                        Pin Dự Phòng
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus">
                                        Bật
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={DienAC} alt="" />
                                    <span className="Nhietdo">
                                    Điện áp nguồn AC:
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus">
                                    90 – 265 ± 5% VAC/50/60hz
                                    </div>
                                </div>
                            </div>
                            <div className="WrapperTemp">
                                <div className="WrapperTempLeft">
                                    <img src={BaoHieu} alt="" />
                                    <span className="Nhietdo">
                                    Báo Hiệu
                                    </span>
                                </div>
                                <div className="WrapperTempRight">
                                    <div className="TextStatus negative">
                                        Tắt
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
