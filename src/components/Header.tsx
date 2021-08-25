import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';
import Xbutton from '../assets/2477.svg';
import logo from '../assets/logo.png';
import search from '../assets/searchButton.svg';


function Header (){
    return(
        <div>
            <div className="headerAd">
                첫 주문 시 10,000원 할인 쿠폰을 드립니다.
                <button className="headerAdButton">
                    오늘 하루 그만 보기 
                    <img src={Xbutton} className="xButton"></img>
                </button>
            </div>
            <div className="head">
                    <img src={logo} className="logo"></img>
                    <input type="text" placeholder="상품 또는 스토어를 검색하세요."/>
                    <button className="searchButton">
                        <img src={search}></img>
                    </button>
                    <button className="login">로그인</button>
            </div>
            <div className="menuBar">
                <Link to="/" className="home">홈</Link>
                <Link to="/" className="home">오늘의 추천</Link>
                <Link to="/" className="home">케이크</Link>
                <Link to="/" className="home">추가 상품</Link>
                <Link to="/" className="home">고객지원</Link>
            </div>
        </div>
    )
}


export default Header;