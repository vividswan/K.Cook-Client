import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '/Users/mac/Kyilee/projects/kcook/src//components/styles/MypageSection.scss';

import { ReactComponent as SettingIcon } from '../../assets/setting.svg';
import { ReactComponent as RWicon } from '../../assets/coin.svg';
import { ReactComponent as CPicon } from '../../assets/coupon.svg';
import { ReactComponent as Qicon } from '../../assets/question.svg';
import { ReactComponent as Eicon } from '../../assets/8.svg';


function MypageSection (){
    return(
        <div className="mypage-section">
            <div className="side-bar">
                <div className="name">김민영</div>
                <div className="email">mykim@naver.com</div>
                <div className="mypage-menu">
                    <div className="mypage-menu-item" >
                        <Link to="/OrderHistory" className="mypage-menu-link">주문내역 </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link to="/ProductReview" className="mypage-menu-link"><Eicon className="icon"/>상품후기 </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link to="/Reserve" className="mypage-menu-link"> <RWicon className="icon"/> 적립금 </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link to="/Coupon" className="mypage-menu-link"> <CPicon className="icon"/> 쿠폰 </Link>
                    </div>
                    <div className="mypage-menu-item" >
                        <Link to="/Profile" className="mypage-menu-link"> <SettingIcon className="icon"/> 회원정보 </Link>
                    </div>
                </div>
                <div className="customer-center">
                    <Qicon className="icon"/>고객센터
                </div>

            </div>
        </div>
    )
}


export default MypageSection;