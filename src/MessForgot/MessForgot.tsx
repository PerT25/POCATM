import React from 'react'
import { Link } from 'react-router-dom';
import ATM from '../assets/images/Group.png';
import icon1 from '../assets/images/Frame 923.png';
import icon2 from '../assets/images/Frame 924.png';
import icon3 from '../assets/images/Frame 931.png';
import logo from '../assets/images/Vector.png';
import ShadowATM from '../assets/images/bong.png';
import './MessForgot.css'

export default function MessForgot() {
    return (
        <div className="MessForgot">
            <div className="MFLogo">
            <img src={logo} alt="" className="MFLicon1"/>
            </div>
            <div className="MFContent">
                <div className="MFContentleft">
                    <img src={ATM} alt="" className="MFLContentLatm"/>
                    <img src={icon1} alt="" className="MFLContentLf923"/>
                    <img src={icon2} alt="" className="MFLContentLf924"/>
                    <img src={icon3} alt="" className="MFLContentLf931"/>
                    <img src={ShadowATM} alt="" className="MFLContentLShadowATM"/>
                    <p className="MFLiconpicture"></p>
                </div>
                <div className="MFContentRight">
                <h3 className="MFRForgot">Khôi phục mật khẩu</h3>
                <h4 className="MailtextBox">Link Khôi phục đã được gửi vào Email của bạn</h4>
                <h4 className="MailtextBox">Vui lòng kiểm tra Email</h4>
                <h4 className="MailtextBox">Click chuột vào đường link đính kèm để được chuyển đến trang đặt lại mật khẩu</h4>
                <Link to="/" className="Link">
                <p className="MessageEmailBack"><u>Quay trở lại đăng nhập</u></p>
                </Link>
                </div>
            </div>
        </div>    
    )
}
