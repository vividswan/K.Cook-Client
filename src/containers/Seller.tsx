import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import SellerSection from '../components/seller/SellerSection';
import SellerSell from '../components/seller/SellerSell';
import SellerStore from '../components/seller/SellerStore';
import SellerOrder from '../components/seller/SellerOrder';


import '/Users/mac/Kyilee/projects/kcook/src/components/styles/Mypage.scss';
import '/Users/mac/Kyilee/projects/kcook/src/components/styles/seller/Seller.scss';

const Seller = () =>{
    return(
            <div className="seller">
                <Router>
                    <SellerSection />
                    <Route exact path="/SellerSell" component={SellerSell} />
                    <Route exact path="/SellerStore" component={SellerStore} />
                    <Route exact path="/SellerOrder" component={SellerOrder} />
                </Router> 
            </div>
    )
}


export default Seller;