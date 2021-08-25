import React from 'react';
import './styles/Footer.scss';

interface FooterProps {
    email : string,
    tel : string,
    address : string 
}


function Footer({ email, tel, address}: FooterProps) { 
    return (
        <div className="Footer">
            This is Footer
        </div>
    );
}


export default Footer;