import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import OrderHistory from '../components/mypage/OrderHistory';
import ProductReview from '../components/mypage/ProductReview';
import Reserves from '../components/mypage/Reserves';
import Coupons from '../components/mypage/Coupons';
import Profile from '../components/mypage/Profile';
import '/Users/mac/Kyilee/projects/kcook/src//components/styles/Mypage.scss';


import { ReactComponent as PFicon } from '../assets/setting.svg';
import { ReactComponent as Cicon } from '../assets/8.svg';
import { ReactComponent as RWicon } from '../assets/coin.svg';
import { ReactComponent as CPicon } from '../assets/coupon.svg';
import { ReactComponent as Qicon } from '../assets/question.svg';
import { ReactComponent as PRicon } from '../assets/question.svg';
import { ReactComponent as Eicon } from '../assets/8.svg';

function Mypage (){
    return(
        <div className="mypage">
            <div className="side-bar">
                <div className="name">김민영</div>
                <div className="email">mykim@naver.com</div>
                <div className="mypage-menu">
                    <Link to="/" className="mypage-menu-item">
                        주문내역<PFicon/> <Cicon/> <PRicon/> <Eicon/>
                        </Link>
                    <Link to="/TodaysRec" className="mypage-menu-item">상품후기</Link>
                    <Link to="/Cake" className="mypage-menu-item">
                        <RWicon/>적립금
                        </Link>
                    <Link to="/MoreItem" className="mypage-menu-item">
                        <CPicon/> 쿠폰
                    </Link>
                    <Link to="/CS" className="mypage-menu-item">
                        회원정보
                    </Link>
                </div>
                <div className="customer-center">
                    <Qicon/>고객센터
                </div>

            </div>
            <div className="mypage-contents">
                ㅇㄹㄹㅇㄹㅇ
                <Router>
                    <OrderHistory/>
                    <ProductReview/>
                    <Reserves/>
                    <Coupons/>
                    <Profile/>
                </Router> 

                <Link to="/" className="home">홈</Link>
                <Link to="/TodaysRec" className="home">오늘의 추천</Link>
                <Link to="/Cake" className="home">케이크</Link>
                <Link to="/MoreItem" className="home">추가 상품</Link>
                <Link to="/CS" className="home">고객지원</Link>
            </div>
        </div>
    )
}


export default Mypage;