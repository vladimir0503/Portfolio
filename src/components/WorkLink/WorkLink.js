import React, { useState, useEffect, useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { eye } from '../../common/images';

import * as St from './style.js';

const WorkLink = ({ img, link, title, descript, index }) => {
  const [workInit, setWorkInit] = useState(false);
  const workImg = {
    backgroundImage: `url(${img})`,
    backgroundPosition: index === 1 && 'center'
  };
  const WorkAnim = workInit ? St.EyeBlockIn : St.EyeBlockOut;
  const linkRef = useRef();

  const initMouseOver = () => {
    setWorkInit(true);
  };

  const initMouseOut = e => {
    const path = e.path || (e.composedPath && e.composedPath());

    if (!path.includes(linkRef.current)) {
      setWorkInit(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('mouseover', initMouseOut);
  }, []);

  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
      <St.LinkContainer>
        <a ref={linkRef} href={link} target="_blank" rel="noopener noreferrer">
          <St.WorkWrapper style={workImg}>
            <WorkAnim onMouseOver={initMouseOver}>
              <img src={eye} alt="eye" />
            </WorkAnim>
          </St.WorkWrapper>
        </a>
        <St.DescriptBlock>
          <St.H5>{title}</St.H5>
          <St.Descript>{descript}</St.Descript>
        </St.DescriptBlock>
      </St.LinkContainer>
    </ScrollAnimation>
  );
};

export default WorkLink;
