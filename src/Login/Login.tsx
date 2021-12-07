import React from 'react'
import ATM from '../assets/images/Group.png';
import icon1 from '../assets/images/Frame 923.png';
import icon2 from '../assets/images/Frame 924.png';
import icon3 from '../assets/images/Frame 931.png';
import logo from '../assets/images/Vector.png';
import ShadowATM from '../assets/images/bong.png';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    return (
        <div className="Login">
             <div className="Logo">
            <img src={logo} alt="" className="Licon1"/>
            </div>
            <div className="Content">
            <div className="Contentleft">
                <img src={ATM} alt="" className="ContentLatm"/>
                <img src={icon1} alt="" className="ContentLf923"/>
                <img src={icon2} alt="" className="ContentLf924"/>
                <img src={icon3} alt="" className="ContentLf931"/>
                <img src={ShadowATM} alt="" className="ContentLShadowATM"/>
                <p className="iconpicture"></p>
            </div>
            <div className="ContentRight">
                <h3 className="ContentRTLogin">Đăng nhập</h3>
                <form className="ContentRlogin">
                    <br/>
                    <label htmlFor="tdn" className="ContentRloginUser">Tên Đăng Nhập</label>
                    <br/>
                    <input  type="text" className="ContentRloginUserName" name="Uname" placeholder="NguyenHoanghai59211"/>
                    <br/>
                    <br/>
                    <label htmlFor="tdn" className="CotentRloginPass">Mật Khẩu</label>
                    <br/>
                    <input type="password" className="ContentRloginPassWord" name="pword" placeholder="*************"/>
                    <br/>
                    <br/>
                    <input type="checkbox" className="ContentRloginchkpass" name="savepass"/>
                    <label htmlFor="savepass" className="ContentRloginsavepass"> Ghi nhớ đăng nhập</label>
                    <br/>
                    <Link to="/DashBroad" className="Link" >
                    <button type="button" className="ContentRLoginbtn" >
                        <p className="ContentRloginbtnText">Đăng Nhập</p>
                    </button>
                    </Link>
                </form>
                <Link to="Login/ForgotPassWord" className="Link">
                <p  className="qmk"><u>Quên mật khẩu ?</u></p>
                </Link>
                </div>
            </div>
        </div>
    )
}
