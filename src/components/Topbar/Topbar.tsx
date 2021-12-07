import React from 'react';
import './Topbar.css';
import iconVN from '../../assets/images/IconsDashbroad/Frame.png';
import DropDownIcon from '../../assets/images/IconsDashbroad/Down.png';
import Avatar from '../../assets/images/IconsDashbroad/avatar.jpg';
import 'antd/dist/antd.css';

export default function TopSidebar() {
    return (
        <div className="TopSidebar">
            <div className="TopSideWrapper">
                <div className="TopSideRight">
                    <div className="TopSidebaricons">
                        <span className="TopSidebariconsLanguage">
                            <img src={iconVN} alt="" className="iconVN" />
                            <p className="WriteLanguage">VNM</p>
                            <img src={DropDownIcon} alt="" className="DropDownIconLangguage"/>
                        </span>
                        <span className="Nameandpicture">
                            <img src={Avatar} alt="" className="PictureAvatar" />
                            <p className="NameAvatar">Nguyễn Hoàng Hải</p>
                            <img src={DropDownIcon} alt="" className="DropDownNamePicture" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
