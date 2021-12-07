import React from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import { DatePicker} from 'antd';
import moment from 'moment';
import './DashBroadHeaderYear.css'

export default function DashBroadHeaderYear() {
    const yearFormat = 'YYYY';
    return (
        <div className="DashBroadHeaderYear">
            <div className="DBHeaderWrapper">
                <div className="DBHtittle">
                    <h3 className="NameTitle">DashBoard</h3>
                    <h4 className="DateTitle">Thứ sáu,ngày 19/11/2021</h4>
                </div>
                <div className="DBHWrapper1">
                    <div className="DBHeaderLeft">
                    <Link to="/DashBroad" className="LinkDate3" >                    
                            Ngày
                    </Link>
                    <Link to="/DashBroad/Week" className="LinkWeek3">
                            Tuần
                    </Link>
                    <Link to="/DashBroad/Month" className="LinkMonth3"> 
                            Tháng
                    </Link>
                    <Link to="/DashBroad/Year" className="LinkYear3 active" >
                        Năm
                    </Link>
                    </div>
                    <div className="DBHeaderRight">
                        <div className="DBHRTitle">Thời gian : </div>
                        <DatePicker defaultValue={moment('2021', yearFormat)} picker="year" format={yearFormat} className="DateYearPicker"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
