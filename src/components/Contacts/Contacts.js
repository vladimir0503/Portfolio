import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Form from '../Form/Form';
import { vk, inst } from '../../common/images';

import * as St from './style.js'

const Contacts = ({ id }) => (
  <St.ContactsWrapper id={id}>
    <St.ContactsContent>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <St.H5>КОНТАКТЫ</St.H5>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
        <St.ContactInfo>
          <St.P>
            <St.Span>Email</St.Span>
            <br></br>vladimirbez0503@mail.ru
          </St.P>
          <St.P>
            <St.Span>Адрес</St.Span>
            <br></br>РФ, г. Москва, бульвар Яна Райниса, д.18
          </St.P>
          <St.P>
            <St.Span>Телефон</St.Span>
            <br></br>+7 999 677 05 46
          </St.P>
          <St.P><St.Span>Соцсети</St.Span></St.P>
          <St.LinkDiv>
            <a
              href="https://instagram.com/vovan_bezobrazov?igshid=1veejg6a2ber4"
              target="_blank"
              rel="noopener noreferrer">
              <St.WrapperLink>
                <St.ImgDiv>
                  <img src={inst} alt="instagramm" width="20px" heigth="20px" />
                </St.ImgDiv>
              </St.WrapperLink>
            </a>
            <a href="https://vk.com/id142608416" target="_blank" rel="noopener noreferrer">
              <St.WrapperLink>
                <St.ImgDiv>
                  <img src={vk} alt="vk" width="20px" heigth="20px" />
                </St.ImgDiv>
              </St.WrapperLink>
            </a>
          </St.LinkDiv>
        </St.ContactInfo>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1000}>
        <Form />
      </ScrollAnimation>
    </St.ContactsContent>
  </St.ContactsWrapper>
);

export default Contacts;