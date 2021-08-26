import React from 'react';
import './styles/Footer.scss';

interface FooterProps {
    email : string,
    tel : string,
    address : string 
}


function Footer({ email, tel, address}: FooterProps) { 
    return (
        <div className="footer">
            <dl>
                <dt className="footer-title">케이쿡</dt>
                <dd>{email}</dd>
                <dd>{tel}</dd>
            </dl>
            <dl>
                <dt className="footer-title">Services</dt>
                <dd>Development & Strategy</dd>
                <dd>Design & Management</dd>
                <dd>Website Development</dd>
                <dd>Quick Launch</dd>
            </dl>
            <dl>
                <dt className="footer-title">About Us</dt>
                <dd>Milestone</dd>
                <dd>Check Our Pricing Plan</dd>
                <dd>Expert Team</dd>
                <dd>Our Exciting News</dd>
            </dl>
            <dl>
                <dt className="footer-title">Address</dt>
                <dd>{address}</dd>
            </dl>
        </div>
    );
}


export default Footer;