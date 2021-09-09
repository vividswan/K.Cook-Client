import React from 'react';
import '../styles/mypage/OrderHistory.scss';
import '../styles/seller/ProductManagement.scss';
import cake6 from   '../../assets/cake6.png';
import xbtn from '../../assets/seller/22.png';
import { Link } from 'react-router-dom';

function ProductManagement (){
    return(
        <div className="mp-top product-management">
            <div className="mypage-top">
                <h3>상품관리</h3>
                <span>현재 판매 중인 상품입니다.</span>
            </div>
            <div className="management-card-list">
                <div className="management-card">
                    <div className="management-section">
                        <div className="move-tap"></div>
                        <div className="management-content">
                            <div className="order-img">
                                <img src={cake6}/>
                            </div>    
                            <div className="move-column-tap"></div>
                            <div className="order-content seller-order-content">
                                <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                                <div className="order-cake-shop">호수 : 1호, 2호, 3호, 4호</div>
                                <div className="order-cake-shop">맛 : 생크림, 스트로베리, 고구마</div>
                                <div className="order-cake-shop">기타</div>
                            </div>
                        </div>
                    </div>
                    <div className="management-tap">
                        <img src={xbtn}/>
                    </div>
                </div>
                <div className="add management-card">
                    <div className="management-section">
                        <div className="move-tap"></div>
                        <div className="management-content">
                            <div className="add-img order-img">
                                {/* <img src={cake6}/> */}
                            </div>    
                            <div className="move-column-tap"></div>
                            <div className="order-content seller-order-content">
                                <input className="add-cake-name" placeholder="옵션 이름"></input>
                                <div className="add-option">
                                    <button className="add-option-btn">+ 옵션 추가</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="management-tap">
                        <button className="delete-btn"></button>
                        <button className="copy-btn"></button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default ProductManagement;