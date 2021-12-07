import React from 'react'
import './BCTPGDHeader.css'
import { DatePicker} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import IconDropDown from '../../../../../assets/images/IconsDashbroad/Down.png';

export default function BCTPGDHeader() {
    const dateFormat = 'DD/MM/YYYY';
    const weekFormat = 'DD';
    const customWeekStartEndFormat = (value: moment.MomentInput) =>
    `${moment(value).startOf('week').format(weekFormat)} - ${moment(value)
      .endOf('week')
      .format(dateFormat)}`;
    return (
        <div className="BCTPGDHeader">
                <div className="WrapperBCTPGDheader">
                    <div className="TitleBCTPGD">
                        <div className="TitleBCTPGDChild1">Báo cáo</div>
                        <div className="TitleBCTPGDChild2"> {'>'} Báo cáo theo phòng giao dịch</div>
                    </div>
                    <div className="WrapperBCTPGDContent">
                            <div className="WrapperBCTPGDContentHeader">
                                <p className="DVQLBCTPGDContentHeader">Đơn vị quản lý</p>
                                <p className="LCBBCTPGDContentHeader">Loại cảnh báo</p>
                                <p className="TTBCTPGDContentHeader">Trạng thái</p>
                                <p className="TGBCTPGDContentHeader">Thời gian</p>
                            </div>
                            <input type="text" placeholder="Nhập đơn vị quản lý" className="BCTPGDDVQLinput"/>
                            <input type="text" placeholder="Tất cả" className="BCTPGDLCBinput" />
                            <button type="submit" className="BCTGDDropDownLCB">
                                    <img src={IconDropDown} alt="" className="BCTGDIconDropDownLCB"/>
                            </button>
                            <input type="text" placeholder="Tất cả" className="BCTPGDTTinput"/>
                            <button type="submit" className="BCTPGDDropDownTT">
                                    <img src={IconDropDown} alt="" className="BCTGDIconDropDownTT"/>
                            </button>
                            <DatePicker defaultValue={moment()} format={customWeekStartEndFormat} picker="week" className="DateWeekPickerBCTPGDInput" />
                            <button type="submit" className="BCTPGDSearchButton">
                                    <p className="BCTPGDSearchText">Tìm</p>
                            </button>
                            <button type="submit" className="BCTPGDexportExcel">
                                    <p className="BCTPGDTextExcel">Xuất file Excel</p>
                            </button>
                    </div>
                </div>
        </div>
    )
}
