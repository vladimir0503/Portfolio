import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display: flex;
    width: 100%;
    height: 95px;
    background: #222222;
`;

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

export const P = styled.p`
    color: white;
    text-align: center;
    margin-top: 24px;
`;

export const Span = styled.span`
    color: #999;
`;

export const Link = styled.span`
    color: #1abc9c;
    transition: 0.1s;
    :hover {
        color: #7b7b7b;
    }
`;