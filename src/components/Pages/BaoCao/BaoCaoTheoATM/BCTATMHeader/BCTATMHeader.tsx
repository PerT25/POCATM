import React from 'react'
import './BCTATMHeader.css'
import { DatePicker} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import IconDropDown from '../../../../../assets/images/IconsDashbroad/Down.png';

export default function BCTATMHeader() {
    const dateFormat = 'DD/MM/YYYY';
    const weekFormat = 'DD';
    const customWeekStartEndFormat = (value: moment.MomentInput) =>
    `${moment(value).startOf('week').format(weekFormat)} - ${moment(value)
      .endOf('week')
      .format(dateFormat)}`;
    return (
        <div className="BCTATMHeader">
            <div className="WrapperBCTATMheader">
                    <div className="TitleBCTATM">
                        <div className="TitleBCTATMChild1">Báo cáo</div>
                        <div className="TitleBCTATMChild2">{'>'} Báo cáo theo ATM</div>
                    </div>
                    <div className="WrapperBCTATMContent">
                        <div className="WrapperBCTATMContentHeader">
                            <p className="DVQLBCTATMContentHeader">Đơn vị quản lý</p>
                            <p className="LCBBCTATMContentHeader">Loại cảnh báo</p>
                            <p className="TTLBCTATMContentHeader">Trạng thái</p>
                            <p className="TGQLBCTATMContentHeader">Thời gian</p>
                        </div>
                        <input type="text" placeholder="Nhập đơn vị quản lý" className="BCTATMDVQLinput" />
                        <input type="text" placeholder="Tất cả" className="BCTATMLCBinput" />
                        <button type="submit" className="BCTATMDropDownLCB">
                            <img src={IconDropDown} alt="" className="BCTATMIconDropDownLCB"/> 
                        </button>
                        <input type="text" placeholder="Tất cả" className="BCTATMTTinput"/>
                        <button type="submit" className="BCTATMDropDownTT">
                            <img src={IconDropDown} alt="" className="BCTATMIconDropDownTT"/>
                        </button>
                        <DatePicker defaultValue={moment()} format={customWeekStartEndFormat} picker="week" className="DateWeekPickerBCTATMInput" />
                        <button type="submit" className="BCTATMSearchButton">
                                <p className="BCATMSearchText">Tìm</p>
                        </button>
                        <button type="submit" className="BCTATMexportExcel">
                                <p className="BCTATMTextExcel">Xuất file Excel</p>
                        </button>
                    </div>
            </div>
        </div>
    )
}
