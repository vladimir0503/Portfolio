import React from 'react';
import styled from 'styled-components';
import html_css from '../images/html_css.png';
import JS from '../images/JS.png';
import react from '../images/react.png';

const SkillsWrapper = styled.div`
    display: flex;
    align-items: center;
    background: #2c3e50;
    width: 100vw;
    height: 257px;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 960px;
    height: 182px;
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
`;

const SkillDiv = styled.div``;

const Skills = () => {
    return (
        <SkillsWrapper>
            <Content>
                <H5>НАВЫКИ</H5>
                <SkillsContayner>
                    <SkillDiv>
                        <img src={html_css} alt='html_css'/>
                        <P>HTML/CSS</P>
                    </SkillDiv>
                    <SkillDiv>
                        <img src={JS} alt='JS'/>
                        <P>Java Script</P>
                    </SkillDiv>
                    <SkillDiv>
                        <img src={react} alt='React'/>
                        <P>React.JS</P>
                    </SkillDiv>
                </SkillsContayner>
            </Content>
        </SkillsWrapper>
    )
}

export default Skills