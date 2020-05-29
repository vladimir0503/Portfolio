import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
    width: 100vw;
    height: 95px;
    background: #222222;
`;

const FooterContent = styled.div`
    margin: 0 auto;
`;

const P = styled.p`
    color: white;
    text-align: center;
    margin-top: 24px;
`;

const Span = styled.span`
    color: #999;
`;

const Link = styled.span`
    color: #1abc9c;
    transition: 0.1s;
    :hover {
        color: #7b7b7b;
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <P>© Copyrights 2020 <strong>Vladimir Bezobrazov</strong><br></br>
                    <Span>Created with Kelvin template by </Span>
                    <a href='https://templatemag.com/' target='_blank' rel='noopener noreferrer'>
                    <Link>TemplateMag</Link></a></P>
            </FooterContent>
        </FooterWrapper>
    )
}

export default Footer