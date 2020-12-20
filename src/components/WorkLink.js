import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import { eye } from './images';

const AnimIn = keyframes`
    0%{
    -webkit-transform: translateZ(-800px) rotateX(90deg);
    transform: translateZ(-800px) rotateX(90deg);
    opacity: 0;
  }
  50%{
    -webkit-transform: translateZ(-160px) rotateX(87deg);
    transform: translateZ(-160px) rotateX(87deg);
    opacity: 1;
  }
  100%{
    -webkit-transform: translateZ(0) rotateX(0);
    transform: translateZ(0) rotateX(0);
  }
`;

const AnimOut = keyframes`
    0%{
        -webkit-transform: translateZ(0) rotateX(0);
        transform: translateZ(0) rotateX(0);
    }
    50%{
    -webkit-transform: translateZ(-800px) rotateX(90deg);
    transform: translateZ(-800px) rotateX(90deg);
    opacity: 0
    }
    100%{
    -webkit-transform: translateZ(0) rotateX(0);
    transform: translateZ(0) rotateX(0);
    opacity: 0
    }
`;

const WorkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 416px;
  margin-right: 30px;
  background-size: cover;
  cursor: pointer;
  transition: all 1s ease;
  :hover {
    background-color: #2c3e50;
    background-blend-mode: overlay;
  }
  @media screen and (max-width: 1300px) {
    margin-bottom: 33px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

const EyeBlockIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 416px;
  background: transparent;
  animation: ${AnimIn} 0.5s ease 0s 1 normal;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const EyeBlockOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 416px;
  background: transparent;
  animation: ${AnimOut} 0.5s ease 0s 1 both;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const LinkContayner = styled.div`
  display: flex;
  margin-bottom: 25px;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const DescriptBlock = styled.div``;

const H5 = styled.h5`
  font-weight: 300;
  color: #333;
  font-size: 14px;
  margin: 0;
  margin-right: 54px;
  margin-bottom: 25px;
`;

const Descript = styled.p`
  line-height: 28px;
  margin-bottom: 25px;
  margin: 0 0 10px;
  font-weight: 300;
  font-size: 16px;
  width: 361px;
  color: #333;
  margin-right: 97px;
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

const WorkLink = ({ img, link, title, descript }) => {
  const workImg = { backgroundImage: `url(${img})` };

  const [workInit, setWorkInit] = useState(false);
  const WorkAnim = workInit ? EyeBlockIn : EyeBlockOut;

  const linkRef = useRef();

  const initMouseOver = () => {
    setWorkInit(true);
  };

  const initMouseOut = (e) => {
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
      <LinkContayner>
        <a ref={linkRef} href={link} target="_blank" rel="noopener noreferrer">
          <WorkWrapper style={workImg}>
            <WorkAnim onMouseOver={initMouseOver}>
              <img src={eye} alt="eye" />
            </WorkAnim>
          </WorkWrapper>
        </a>
        <DescriptBlock>
          <H5>{title}</H5>
          <Descript>{descript}</Descript>
        </DescriptBlock>
      </LinkContayner>
    </ScrollAnimation>
  );
};

export default WorkLink;
