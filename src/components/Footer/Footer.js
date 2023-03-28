import React from 'react';

import * as St from './style.js';

const Footer = () => (
    <St.FooterWrapper>
        <St.FooterContent>
            <St.P>© Copyrights 2020 <strong>Vladimir Bezobrazov</strong><br></br>
                {/* <St.Span>Created with Kelvin template by </St.Span>
                <a href='https://templatemag.com/' target='_blank' rel='noopener noreferrer'>
                <St.Link>TemplateMag</St.Link></a> */}
            </St.P>
        </St.FooterContent>
    </St.FooterWrapper>
);

export default Footer;