import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '/Users/mac/Kyilee/projects/kcook/src//components/styles/MypageSection.scss';
import '/Users/mac/Kyilee/projects/kcook/src//components/styles/seller/SellerSection.scss';

import { ReactComponent as SettingIcon } from '../../assets/setting.svg';
import { ReactComponent as Menu } from '../../assets/mypage/menu.svg';
import { ReactComponent as CPicon } from '../../assets/coupon.svg';
import { ReactComponent as Qicon } from '../../assets/question.svg';
import { ReactComponent as Cube } from '../../assets/mypage/8.svg';
import { ReactComponent as SellerHouse } from '../../assets/3170.svg';


function SellerSection (){
    return(
        <div className="seller-section">
            <div className="side-bar seller-list">
                <div className="seller-icon"><SellerHouse/></div>
                <div className="name">원모먼트</div>
                <div className="email">onemoment@naver.com</div>
                <div className="seller-menu">
                    <div className="seller-menu-item" >
                        <Link to="/SellerOrder" className="seller-menu-link"><Menu className="icon"/>주문확인 </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link to="/SellerSell" className="seller-menu-link"><Menu className="icon"/>판매내역 </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link to="/Reserve" className="seller-menu-link"> <Cube className="icon"/> 상품관리 </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link to="/Coupon" className="seller-menu-link"> <CPicon className="icon"/> 상품후기 </Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link to="/SellerStore" className="seller-menu-link"> <SettingIcon className="icon"/> 스토어 정보 </Link>
                    </div>
                </div>
                <div className="seller-center">
                    <Qicon className="icon"/>고객센터
                </div>

            </div>
        </div>
    )
}


export default SellerSection;