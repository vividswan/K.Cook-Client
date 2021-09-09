import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '/Users/mac/Kyilee/projects/kcook/src//components/styles/seller/SellerSection.scss';

import { ReactComponent as SellerHouse } from '../../assets/3170.svg';

import { ReactComponent as Menu } from '../../assets/mypage/menu.svg';
import { ReactComponent as Coin } from '../../assets/seller/coin.svg';
import { ReactComponent as Cube } from '../../assets/seller/cube.svg';
import { ReactComponent as SpeechBubble } from '../../assets/mypage/speech-bubble.svg';
import { ReactComponent as SettingIcon } from '../../assets/seller/setting.svg';
import { ReactComponent as Question } from '../../assets/seller/question.svg';


function SellerSection (){
    return(
        <div className="seller-section">
            <div className="side-bar seller-list">
                <div className="seller-icon"><SellerHouse/></div>
                <div className="name">원모먼트</div>
                <div className="email">onemoment@naver.com</div>
                <div className="seller-menu">
                    <div className="seller-menu-item" >
                        <Link to="/SellerOrder" className="seller-menu-link"><Menu className="icon"/> <span>주문확인 </span></Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link to="/SalesHistory" className="seller-menu-link"><Coin className="icon"/><span>판매내역 </span></Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link to="/ProductManagement" className="seller-menu-link"> <Cube className="icon"/> <span>상품관리 </span></Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link to="/SellerReview" className="seller-menu-link"> <SpeechBubble className="icon"/> <span>상품후기 </span></Link>
                    </div>
                    <div className="seller-menu-item" >
                        <Link to="/SellerStore" className="seller-menu-link"> <SettingIcon className="icon"/> <span>스토어 정보</span> </Link>
                    </div>
                </div>
                <div className="seller-center">
                    <Question className="icon"/>
                    <span>
                    고객센터
                    </span>
                </div>

            </div>
        </div>
    )
}


export default SellerSection;