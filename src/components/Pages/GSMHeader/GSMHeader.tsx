import React from 'react'
import './GSMHeader.css';
import SearchIcon from '../../../assets/images/GSM modern on Map/search.png';

export default function GSMHeader() {
    return (
        <div className="GSMHeader">
            <div className="WrapperGSMHeader">
                <p className="GSMHeaderTitle">Tìm điểm giám sát</p>
                <div className="WrapperSearch">
                    <p className="SearchTitle">Điểm giám sát: </p>
                    <form className="SearchForm">
                        <input type="text" className="SearchInput" placeholder="Nhập địa điểm" />
                        <button type="submit" className="SearchButton">
                            <img src={SearchIcon} alt="" className="SearchIcon"/>
                        </button>                    
                    </form>
                </div>
            </div>
        </div>
    )
}
