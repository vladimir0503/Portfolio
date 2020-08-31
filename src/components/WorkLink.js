import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import eye from '../components/images/eye.png';

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

const WorkLink = ({ image, link }) => {

    const workImg = { 'backgroundImage': `url(${image})` };
    
    const [workInit, setWorkInit] = useState(false);
    const WorkAnim = workInit ? EyeBlockIn : EyeBlockOut;

    return (
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <WorkWrapper style={workImg}>
                <WorkAnim onMouseOver={() => setWorkInit(true)}
                    onMouseOut={() => setWorkInit(false)}>
                    <img src={eye} alt='eye' />
                </WorkAnim>
            </WorkWrapper>
        </a>
    )
};

export default WorkLink