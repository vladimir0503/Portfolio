import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { html_css, JS, react } from '../../../common/images/index';

import * as St from './style.js';

const Skills = () => (
  <St.SkillsWrapper>
    <St.Content>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <St.H5>НАВЫКИ</St.H5>
      </ScrollAnimation>
      <St.SkillsContayner>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
          <St.SkillDiv>
            <img src={html_css} alt="html_css" />
            <St.P>HTML/CSS</St.P>
          </St.SkillDiv>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1000}>
          <St.SkillDiv>
            <img src={JS} alt="JS" />
            <St.P>Java Script</St.P>
          </St.SkillDiv>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1500}>
          <St.SkillDiv>
            <img src={react} alt="React" />
            <St.P>React.JS</St.P>
          </St.SkillDiv>
        </ScrollAnimation>
      </St.SkillsContayner>
    </St.Content>
  </St.SkillsWrapper>
);

export default Skills;
