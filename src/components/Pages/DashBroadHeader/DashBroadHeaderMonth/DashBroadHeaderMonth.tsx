import React from 'react'
import './DashBroadHeaderMonth.css';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import { DatePicker} from 'antd';
import moment from 'moment';

export default function DashBroadHeaderMonth() {
    const monthFormat = 'MM/YYYY';
    return (
        <div className="DashBroadHeaderMonth">
            <div className="DBHeaderWrapper">
                <div className="DBHtittle">
                    <h3 className="NameTitle">DashBoard</h3>
                    <h4 className="DateTitle">Thứ sáu,ngày 19/11/2021</h4>
                </div>
                <div className="DBHWrapper1">
                    <div className="DBHeaderLeft">
                    <Link to="/DashBroad" className="LinkDate2" >                    
                            Ngày
                    </Link>
                    <Link to="/DashBroad/Week" className="LinkWeek2">
                            Tuần
                    </Link>
                    <Link to="/DashBroad/Month" className="LinkMonth2 active"> 
                            Tháng
                    </Link>
                    <Link to="/DashBroad/Year" className="LinkYear2" >
                        <div className="DBHLYear">Năm</div> 
                    </Link>
                    </div>
                    <div className="DBHeaderRight">
                        <div className="DBHRTitle">Thời gian : </div>
                        <DatePicker defaultValue={moment('11/2021', monthFormat)}  picker="month" format={monthFormat} className="DateMonthPicker" />
                    </div>
                </div>
            </div>
        </div>
    )
}
