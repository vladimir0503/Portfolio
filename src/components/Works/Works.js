import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import workList from '../../common/workList';
import WorkLink from '../WorkLink/WorkLink';

import * as St from './style.js'

const Works = ({ id }) => (
  <St.Content>
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <St.H5 id={id}>ПОРТФОЛИО</St.H5>
    </ScrollAnimation>
    <St.LinkWrapper>
      {workList &&
        workList.map((item, index) => <WorkLink key={`${item.title}_${index}`} {...item} />)}
    </St.LinkWrapper>
  </St.Content>
);

export default Works;
