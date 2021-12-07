import * as React from 'react';
import './DashBroadHeader.css';
import { DatePicker} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';

export default function DashBroadHeader() {
    const dateFormat = 'DD/MM/YYYY';


    return (
        <div className="DashBroadHeader">
            <div className="DBHeaderWrapper">
                <div className="DBHtittle">
                    <h3 className="NameTitle">DashBoard</h3>
                    <h4 className="DateTitle">Thứ sáu,ngày 19/11/2021</h4>
                </div>
                <div className="DBHWrapper1">
                    <div className="DBHeaderLeft">
                    <Link to="/DashBroad" className="LinkDate1 active" >                    
                            Ngày
                    </Link>
                    <Link to="/DashBroad/Week" className="LinkWeek1">
                        Tuần
                    </Link> 
                    <Link to="/DashBroad/Month" className="LinkMonth1" >
                        Tháng
                    </Link>
                    <Link to="/DashBroad/Year" className="LinkYear1" >
                        Năm 
                    </Link>
                    </div>
                    <div className="DBHeaderRight">
                        <div className="DBHRTitle">Thời gian : </div>
                        <DatePicker defaultValue={moment()} format={dateFormat}  className="Datemoment" />
                    </div>
                </div>
            </div>
        </div>
    )
}
