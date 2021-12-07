import React from 'react';
import ATM from '../assets/images/Group.png';
import icon1 from '../assets/images/Frame 923.png';
import icon2 from '../assets/images/Frame 924.png';
import icon3 from '../assets/images/Frame 931.png';
import logo from '../assets/images/Vector.png';
import ShadowATM from '../assets/images/bong.png';
import './LoginEmail.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

export default function LoginEmail() {
    return (
        <div className="LoginEmail">
            <div className="LoginELogo">
            <img src={logo} alt="" className="Licon1"/>
            </div>
            <div className="LoginEContent">
                <div className="LoginEContentleft">
                    <img src={ATM} alt="" className="LECLatm"/>
                    <img src={icon1} alt="" className="LECLf923"/>
                    <img src={icon2} alt="" className="LECLf924"/>
                    <img src={icon3} alt="" className="LECLf931"/>
                    <img src={ShadowATM} alt="" className="LECLShadowATM"/>
                    <p className="LECLnenmau"></p>
                </div>
                <div className="LoginEmailCR">
                    <h3 className="LoginEmailCRForgot">Quên Mật Khẩu</h3>
                    <p className="LoginEmailCRText">
                        Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
                        </p>
                    <form className="LoginEmailForm">
                        <label className="LoginEFText">Email </label>
                        <input type="text" className="LoginEFTextEmail" placeholder="Xiaohu11223@gmail.com"/>
                        <Link to="/successfully" className="Link">
                        <button type="button" className="LoginEFSendEmail">
                            <p className="LoginEFTextSendMail">Gửi</p>
                        </button>
                        </Link>
                    </form>
                    <Link to="/" className="Link">
                    <p className="LoginEmailBack"><u>Quay trở lại đăng nhập</u></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
