import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import WorkLink from './WorkLink';
import workList from '../workList';

const Content = styled.div`
  display: flex;
  width: 960px;
  margin: 0 auto;
  margin-top: 39px;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    width: 550px;
    margin: 0 auto;
    margin-top: 36px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

const H5 = styled.h5`
  font-weight: 300;
  color: #333;
  font-size: 14px;
  margin: 0;
  margin-right: 54px;
  margin-bottom: 25px;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Works = ({ id }) => (
  <Content>
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <H5 id={id}>ПОРТФОЛИО</H5>
    </ScrollAnimation>
    <LinkWrapper>
      {workList.map((item, index) => (
        <WorkLink key={`${item.title}_${index}`} {...item} />
      ))}
    </LinkWrapper>
  </Content>
);

export default Works;
