import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import OrderHistory from '../components/mypage/OrderHistory';
import ProductReview from '../components/mypage/ProductReview';
import Reserves from '../components/mypage/Reserves';
import Coupons from '../components/mypage/Coupons';
import Profile from '../components/mypage/Profile';
import MypageSection from '../components/mypage/MypageSection';
import '/Users/mac/Kyilee/projects/kcook/src//components/styles/Mypage.scss';

const Mypage = () =>{
    return(
            <div className="mypage">
                <Router>
                    <MypageSection />
                    <Route exact path="/OrderHistory" component={OrderHistory} />
                    <Route exact path="/ProductReview" component={ProductReview} />
                    <Route exact path="/Reserve" component={Reserves} />
                    <Route exact path="/Coupon" component={Coupons} />
                    <Route exact path="/Profile" component={Profile} />
                </Router> 
            </div>
    )
}


export default Mypage;