import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import OrderHistory from '../components/mypage/OrderHistory';
import ProductReview from '../components/mypage/ProductReview';
import Reserves from '../components/mypage/Reserves';
import Coupons from '../components/mypage/Coupons';
import Profile from '../components/mypage/Profile';
import '/Users/mac/Kyilee/projects/kcook/src//components/styles/Mypage.scss';

import { ReactComponent as SettingIcon } from '../assets/setting.svg';
import { ReactComponent as RWicon } from '../assets/coin.svg';
import { ReactComponent as CPicon } from '../assets/coupon.svg';
import { ReactComponent as Qicon } from '../assets/question.svg';
import { ReactComponent as Eicon } from '../assets/8.svg';


const Mypage = () =>{
    return(
        <div className="mypage">
            <div className="side-bar">
                <div className="name">김민영</div>
                <div className="email">mykim@naver.com</div>
                <div className="mypage-menu">
                    <div >
                        <Link to="/orderhistory" className="mypage-menu-item">주문내역 </Link>
                    </div>
                    <div className="mypage-menu-item">
                        <Link to="/productreview"> <Eicon/> 상품후기 </Link>
                    </div>
                    <div className="mypage-menu-item">
                        <Link to="/reserve"> <RWicon/> 적립금 </Link>
                    </div>
                    <div className="mypage-menu-item">
                        <Link to="/coupon"> <CPicon/> 쿠폰 </Link>
                    </div>
                    <div className="mypage-menu-item">
                        <Link to="/profile"> <SettingIcon/> 회원정보 </Link>
                    </div>
                    
                </div>
                <div className="customer-center">
                    <Qicon/>고객센터
                </div>

            </div>
            <div className="mypage-contents">
                ㅇㄹㄹㅇㄹㅇ
                <Router>
                    <Route exact path="/orderhistory" component={OrderHistory} />
                    <Route exact path="/productreview" component={ProductReview} />
                    <Route exact path="/reserve" component={Reserves} />
                    <Route exact path="/coupon" component={Coupons} />
                    <Route exact path="/profile" component={Profile} />
                </Router> 
            </div>
        </div>
    )
}


export default Mypage;