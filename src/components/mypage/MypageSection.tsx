import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '/Users/mac/Kyilee/projects/kcook/src//components/styles/mypage/MypageSection.scss';

import { ReactComponent as Menu } from '../../assets/mypage/menu.svg';
import { ReactComponent as Coin } from '../../assets/seller/coin.svg';
import { ReactComponent as SpeechBubble } from '../../assets/mypage/speech-bubble.svg';
import { ReactComponent as CPicon } from '../../assets/coupon.svg';
import { ReactComponent as SettingIcon } from '../../assets/seller/setting.svg';

import { ReactComponent as Question } from '../../assets/seller/question.svg';


function MypageSection (){
    return(
        <div className="mypage-section">
            <div className="side-bar">
                <div className="name">김민영</div>
                <div className="email">mykim@naver.com</div>
                <div className="mypage-menu">
                    <div className="mypage-menu-item" >
                        <Link to="/OrderHistory" className="mypage-menu-link"><Menu className="mypage-icon"/><span>주문내역</span> </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link to="/ProductReview" className="mypage-menu-link"><SpeechBubble className="mypage-icon"/><span>상품후기</span> </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link to="/Membership" className="mypage-menu-link"> <Coin className="mypage-icon"/><span> 적립금</span> </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link to="/Coupon" className="mypage-menu-link"> <CPicon className="mypage-icon"/> <span>쿠폰 </span></Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link to="/Profile" className="mypage-menu-link"> <SettingIcon className="mypage-icon"/> <span>회원정보</span> </Link>
                    </div>
                </div>
                <div className="customer-center">
                    <Question className="mypage-icon"/><span>고객센터</span>
                </div>

            </div>
        </div>
    )
}


export default MypageSection;