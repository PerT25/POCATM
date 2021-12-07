import React from 'react'
import './DashBroadHeaderWeek.css'
import 'antd/dist/antd.css';
import { DatePicker} from 'antd';
import moment from 'moment';
import {Link } from 'react-router-dom';

export default function DashBroadHeaderWeek() {
    const dateFormat = 'DD/MM/YYYY';
    const weekFormat = 'DD';
    const customWeekStartEndFormat = (value: moment.MomentInput) =>
    `${moment(value).startOf('week').format(weekFormat)} - ${moment(value)
      .endOf('week')
      .format(dateFormat)}`;
    return (
        <div className="DashBroadHeaderWeek">
                     <div className="DBHeaderWrapper">
                <div className="DBHtittle">
                    <h3 className="NameTitle">DashBoard</h3>
                    <h4 className="DateTitle">Thứ sáu,ngày 19/11/2021</h4>
                </div>
                <div className="DBHWrapper1">
                    <div className="DBHeaderLeft">
                    <Link to="/DashBroad" className="LinkDate">                      
                            Ngày
                    </Link>
                    <Link to="/DashBroad/Week" className="LinkWeek active" >
                            Tuần
                    </Link>
                    <Link to="/DashBroad/Month" className="LinkMonth" >
                        Tháng
                    </Link>
                    <Link to="/DashBroad/Year" className="LinkYear" >
                        Năm 
                    </Link>
                    </div>
                    <div className="DBHeaderRight">
                        <div className="DBHRTitle">Thời gian : </div>
                        <DatePicker defaultValue={moment()} format={customWeekStartEndFormat} picker="week" className="DateWeekpicker" />
                    </div>
                </div>
            </div>
        </div>
    )
}
