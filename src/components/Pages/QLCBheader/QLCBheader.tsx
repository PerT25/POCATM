import React from 'react'
import './QLCBheader.css'
import IconSearch from '../../../assets/images/GSM modern on Map/search.png';
import IconDropDown from '../../../assets/images/IconsDashbroad/Down.png';
import { DatePicker} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

export default function QLCBheader() {
    const dateFormat = 'DD/MM/YYYY';
    const weekFormat = 'DD';
    const customWeekStartEndFormat = (value: moment.MomentInput) =>
    `${moment(value).startOf('week').format(weekFormat)} - ${moment(value)
      .endOf('week')
      .format(dateFormat)}`;
    return (
        <div className="QLCBheader">
                <div className="WrapperQLCBheader">
                    <p className="TitleWrapper">Quản lý cảnh báo</p>
                    <div className="WrapperContent">
                        <div className="WrapperContentHeader">
                        <p className="TitleWrapperContent">GSM:</p>
                        <p className="KVTitleWrapperContent">Khu vực:</p>
                        <p className="LCBTitleWrapperContent">Loại cảnh báo:</p>
                        <p className="TTTitleWrapperContent">Trạng Thái:</p>
                        <p className="TGTitleWrapperContent">Thời Gian:</p>
                        </div>
                        <input type="text" placeholder="GSM ID" className="GSMinput"/>
                        <input type="text" placeholder="Nhập địa chỉ" className="KVinput"/>
                        <button type="submit" className="SearchButtonKV">
                            <img src={IconSearch} alt="" className="IconSearchKV"/>
                        </button>
                        <input type="text" placeholder="Tất cả" className="LCBinput"/>
                        <button type="submit" className="DropDownLCB">
                            <img src={IconDropDown} alt="" className="LCBiconDropDown"/>
                        </button>
                        <input type="text" placeholder="Tất cả" className="TTinput"/>
                        <button type="submit" className="DropDownTT">
                            <img src={IconDropDown} alt="" className="InputIcondropdown"/>
                        </button>
                        <DatePicker defaultValue={moment()} format={customWeekStartEndFormat} picker="week" className="DateWeekPickerInput" />
                        <button type="submit" className="Searchbutton">
                            <p className="TextSearch">Tìm</p>
                        </button>
                    </div>
                </div>
        </div>
    )
}
