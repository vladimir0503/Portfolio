import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Form from './From/Form';

import { vk, inst } from './images';

const ContactsWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 509px;
  padding-top: 50px;
  background: #2f2f2f;
  @media screen and (max-width: 1300px) {
    height: 873px;
  }
`;

const ContactsContent = styled.div`
  display: flex;
  width: 960px;
  margin: 0 auto;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    width: 550px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

const H5 = styled.h5`
  color: white;
  font-weight: 300;
  margin-right: 64px;
  margin-bottom: 39px;
  @media screen and (max-width: 1300px) {
    margin-top: 0;
    margin-bottom: 19px;
  }
`;

const ContactInfo = styled.div`
  color: white;
  width: 156px;
  margin-right: 120px;
  @media screen and (max-width: 1300px) {
    margin-bottom: 21px;
  }
`;

const Span = styled.span`
  font-weight: 700;
`;

const P = styled.p`
  color: white;
  margin-bottom: 25px;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
`;

const LinkDiv = styled.div`
  display: flex;
  margin-top: -23px;
  margin-left: -6px;
`;

const WrapperLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
  border-radius: 50%;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    background: #1bb899;
    width: 30px;
    height: 30px;
  }
`;

const Contacts = ({ id }) => (
  <ContactsWrapper id={id}>
    <ContactsContent>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <H5>КОНТАКТЫ</H5>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
        <ContactInfo>
          <P>
            <Span>Email</Span>
            <br></br>vladimirbez0503@mail.ru
          </P>
          <P>
            <Span>Адрес</Span>
            <br></br>РФ, г. Москва, бульвар Яна Райниса, д.18
          </P>
          <P>
            <Span>Телефон</Span>
            <br></br>+7 999 677 05 46
          </P>
          <P>
            <Span>Соцсети</Span>
          </P>
          <LinkDiv>
            <a
              href="https://instagram.com/vovan_bezobrazov?igshid=1veejg6a2ber4"
              target="_blank"
              rel="noopener noreferrer">
              <WrapperLink>
                <ImgDiv>
                  <img src={inst} alt="instagramm" width="20px" heigth="20px" />
                </ImgDiv>
              </WrapperLink>
            </a>
            <a href="https://vk.com/id142608416" target="_blank" rel="noopener noreferrer">
              <WrapperLink>
                <ImgDiv>
                  <img src={vk} alt="vk" width="20px" heigth="20px" />
                </ImgDiv>
              </WrapperLink>
            </a>
          </LinkDiv>
        </ContactInfo>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1000}>
        <Form />
      </ScrollAnimation>
    </ContactsContent>
  </ContactsWrapper>
);

export default Contacts;
