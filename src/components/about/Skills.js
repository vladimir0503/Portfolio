import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import { html_css, JS, react } from '../images/index';

const SkillsWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #2c3e50;
  width: 100vw;
  height: 257px;
  @media screen and (max-width: 1300px) {
    height: 748px;
    align-items: normal;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 960px;
  height: 182px;
  @media screen and (max-width: 1300px) {
    margin-top: 51px;
    display: block;
    width: 504px;
  }
  @media screen and (max-width: 500px) {
    width: 298px;
  }
`;

const H5 = styled.h5`
  color: white;
  font-weight: 300;
  font-size: 14px;
  margin: 0;
`;

const P = styled.p`
  color: white;
  text-align: center;
`;

const SkillsContayner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    width: 151px;
    margin: 0 auto;
  }
`;

const SkillDiv = styled.div`
  width: 151px;
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <Content>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <H5>НАВЫКИ</H5>
        </ScrollAnimation>
        <SkillsContayner>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
            <SkillDiv>
              <img src={html_css} alt="html_css" />
              <P>HTML/CSS</P>
            </SkillDiv>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1000}>
            <SkillDiv>
              <img src={JS} alt="JS" />
              <P>Java Script</P>
            </SkillDiv>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1500}>
            <SkillDiv>
              <img src={react} alt="React" />
              <P>React.JS</P>
            </SkillDiv>
          </ScrollAnimation>
        </SkillsContayner>
      </Content>
    </SkillsWrapper>
  );
};

export default Skills;
