import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from './Home';
import Recommend from './TodaysRec';
import Cake from './Cake';
import MoreItem from './MoreItem';
import CustomerService from './CS';
import Mypage from './Mypage';
import Seller from './Seller';
import FullCalendarApp from '../components/seller/FullCalendarApp';

const Pages = () =>{
  return (
    <Router>
      <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/todaysRec" component={Recommend} />
        <Route exact path="/cake" component={Cake} />
        <Route exact path="/MoreItem" component={MoreItem} />
        <Route exact path="/customer-service" component={CustomerService} />
        <Route exact path="/MypageOrder" component={Mypage} />
        <Route exact path="/SellerOrder" component={Seller} />
        <Route exact path="/FullCalendarApp" component={FullCalendarApp} />
      <Footer address="123 Lorem Ipsum Street Jakarta, Indonesia" tel="+ 72 4500 1240" email="tanahcon@companymail.com"/>
    </Router>    
  );
};  

export default Pages;



