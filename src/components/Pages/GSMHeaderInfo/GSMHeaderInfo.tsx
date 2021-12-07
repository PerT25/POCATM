import React from 'react'
import './GSMHeaderInfo.css';
import SearchIcon from '../../../assets/images/GSM modern on Map/search.png';

export default function GSMHeaderInfo() {
    return (
        <div className="GSMHeader">
        <div className="WrapperGSMHeader">
            <p className="GSMHeaderTitle1">Tìm điểm giám sát</p>
            <div className="WrapperSearch1">
                <p className="SearchTitle1">Điểm giám sát: </p>
                <form className="SearchForm1">
                    <input type="text" className="SearchInput1" placeholder="Nhập địa điểm" />
                    <button type="submit" className="SearchButton1">
                        <img src={SearchIcon} alt="" className="SearchIcon1"/>
                    </button>                    
                </form>
            </div>
        </div>
    </div>
    )
}
