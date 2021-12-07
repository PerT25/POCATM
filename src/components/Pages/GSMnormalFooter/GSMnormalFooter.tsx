import React from 'react'
import Rung from '../../../assets/images/GSM modern on Map/Frame 916.png';
import Dichchuyen from '../../../assets/images/GSM modern on Map/dichchuyen.png';
import ChamXanh from '../../../assets/images/GSM modern on Map/Ellipse 1.png';
import PinDuPhong from '../../../assets/images/GSM modern on Map/pinduphong.png';
import WindowViolet from '../../../assets/images/GSM modern on Map/duphong.png';
import BaoHieu from '../../../assets/images/GSM modern on Map/F.png';
import Dichchuyenvang from '../../../assets/images/GSM modern on Map/Frame 88uj6.png';
import DienAC from '../../../assets/images/GSM modern on Map/Frame.png';
import Khoi from '../../../assets/images/GSM modern on Map/khoi.png';
import GSM from '../../../assets/images/GSM modern on Map/GSM.png';
import XamNhap from '../../../assets/images/GSM modern on Map/Frame 9.png';
import RoDien from '../../../assets/images/GSM modern on Map/rodien.png';
import ChuongCam from '../../../assets/images/GSM modern on Map/Frame rf886.png';
import './GSMnormalFooter.css'


export default function GSMnormalFooter() {
    return (
        <div className="GSMnormalFooter">
            <div className="WrappernormalFooter">
                <div className="WrappernormalFooter1">
                    <p className="TitleWrapperFooter1">Thông tin ATM</p>
                    <div className="WrapperContentfooter">
                        <div className="ContentFooter">
                            <div className="Iduser">ID:</div>
                            <div className="BalanceIduser">8628822201212 to SIM number: Unknown</div>
                        </div>
                        <div className="ContentFooter">
                            <div className="Iduser">Trạng thái:</div>
                            <div className="BalanceFont">
                            <img src={ChamXanh} alt="" className="Icongreen"/>
                                Đang kết nối
                                </div>
                        </div>
                        <div className="ContentFooter">
                            <div className="Iduser">Loại kết nối:</div>
                            <div className="BalanceFont">Nguồn AC - Mạng WAN</div>
                        </div>
                        <div className="ContentFooter">
                            <div className="Iduser">Loại thiết bị:</div>
                            <div className="BalanceFont">Thiết bị cảnh báo cho phòng giao dịch</div>
                        </div>
                        <div className="ContentFooter">
                            <div className="Iduser">Địa chỉ theo dõi:</div>
                            <div className="Inforuser">86/33 Âu Cơ, phường 9, quận Tân Bình, TP.HCM</div>
                        </div>
                        <div className="ContentFooter">
                            <div className="Iduser">Ngày kích hoạt:</div>
                            <div className="Inforuser">12/05/2021 16:15:00</div>
                        </div>
                        <div className="Timeaccess">
                        Thời gian truy vấn:  16:20:00 22/06/2021
                        </div>
                    </div>
                </div>
                <div className="WrappernormalFooter2">
                    <p className="TitleWrapperFooter2">Trạng thái cảm biến</p>
                    <div className="ContentWrapperFooter2">
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={Rung} alt="" />
                                <span className="TextLeft">
                                    Rung:
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                        Bình Thường
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={WindowViolet} alt="" />
                                <span className="TextLeft">
                                    Dự Phòng
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus negative">
                                        Tắt
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={Dichchuyen} alt="" />
                                <span className="TextLeft">
                                    Dịch Chuyển
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                        Bật
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={Khoi} alt="" />
                                <span className="TextLeft">
                                    Khói
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                        Bật
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={Dichchuyenvang} alt="" />
                                <span className="TextLeft">
                                    Báo động tại chỗ:
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                        Bật
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={GSM} alt="" />
                                <span className="TextLeft">
                                    Báo động qua GSM:
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                        Bật
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={GSM} alt="" />
                                <span className="TextLeft">
                                    Báo động qua GSM 2
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                        Bật
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WrappernormalFooter3">
                        <p className="Warning">Cảnh Báo</p>
                        <div className="ContentWrapperFooter3">
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={RoDien} alt="" />
                                <span className="TextLeft">
                                    Rò điện:
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                        Bình Thường
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={ChuongCam} alt="" />
                                <span className="TextLeft">
                                    Khẩn cấp
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus negative">
                                        Báo động
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={XamNhap} alt="" />
                                <span className="TextLeft">
                                    Xâm nhập
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                        Bật
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={PinDuPhong} alt="" />
                                <span className="TextLeft">
                                    Pin dự phòng:
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                        Bật
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={DienAC} alt="" />
                                <span className="TextLeft">
                                    Điện áp nguồn
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                    90 – 265 ± 5% VAC/50/60hz
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={BaoHieu} alt="" />
                                <span className="TextLeft">
                                    Báo hiệu:
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                        Còi hụ
                                    </div>
                            </div>
                        </div>
                        <div className="WrapperStatus2">
                            <div className="WrapperLeft">
                                <img src={DienAC} alt="" />
                                <span className="TextLeft">
                                    Điện áp nguồn 2:
                                </span>
                            </div>
                            <div className="WrapperRight">
                                <div className="TextStatus">
                                    90 – 265 ± 5% VAC/50/60hz
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}
