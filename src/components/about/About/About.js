import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Skills from '../Skills/Skills.js';

import * as St from './style.js'

const About = ({ about, resume }) => (
  <>
    <St.NameWrapper id={about}>
      <St.NameBlock>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
          <St.Name>Владимир Безобразов</St.Name>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2} delay={1000}>
          <St.Mail>Frontend разоработчик | vladimirbez0503@mail.ru</St.Mail>
        </ScrollAnimation>
      </St.NameBlock>
    </St.NameWrapper>
    <St.AboutBlock>
      <St.AboutContent>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <St.H5>ОБО МНЕ</St.H5>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
          <St.P>
            Адаптивная и кроссбраузерная верстка по стандартам HTML5.
            Стилизация c помощью препроцессоров Sass и Less.
            Верстка макетов из Figma и Adobe Photoshop.
            Разработка интерфейсов и SPA на React/Redux.
          </St.P>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1000}>
          <St.Link href="https://disk.yandex.ru/i/LZ1hhbLQo3AHDg" target="_blank" rel="nofollow noopener">
            <St.H5>СКАЧАТЬ РЕЗЮМЕ</St.H5>
          </St.Link>
        </ScrollAnimation>
      </St.AboutContent>
    </St.AboutBlock>
    <St.EducationBlock id={resume}>
      <St.EducationContent>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <St.EducationH5>ОБРАЗОВАНИЕ</St.EducationH5>
        </ScrollAnimation>
        <St.NameDiv>
          <St.DescrDiv>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
              <div>
                <St.EdcationP>
                  <St.Span>Бакалавр</St.Span>
                  <br></br>
                  Московский автомобильно-дорожный государственный<br></br>
                  технический университет (МАДИ)
                </St.EdcationP>
              </div>
            </ScrollAnimation>
          </St.DescrDiv>
          <St.DescrDiv>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
              <div>
                <St.EdcationP>
                  <St.Span>Front-end разработчик</St.Span>
                  <br></br>
                  Школа по работе с данными SkillFactory
                </St.EdcationP>
              </div>
            </ScrollAnimation>
          </St.DescrDiv>
        </St.NameDiv>
      </St.EducationContent>
    </St.EducationBlock>
    <Skills />
  </>
);

export default About;
