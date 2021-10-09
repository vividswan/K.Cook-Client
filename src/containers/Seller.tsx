import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import SellerSection from '../components/seller/SellerSection';
import SellerOrder from '../components/seller/SellerOrder';
import SalesHistory from '../components/seller/SalesHistory';
import ProductManagement from '../components/seller/ProductManagement';
import SellerReview from '../components/seller/SellerReview';
import SellerStore from '../components/seller/SellerStore';

import '../../src/styles/mypage/Mypage.scss'
import '../../src/styles/seller/Seller.scss'

const Seller = () =>{
    return(
            <div className="seller">
                <Router>
                    <SellerSection />
                    <Route exact path="/SellerOrder" component={SellerOrder} />
                    <Route exact path="/Saleshistory" component={SalesHistory}/>
                    <Route exact path="/ProductManagement" component={ProductManagement}/>
                    <Route exact path="/SellerReview" component={SellerReview} />
                    <Route exact path="/SellerStore" component={SellerStore} />
                </Router> 
            </div>
    )
}


export default Seller;