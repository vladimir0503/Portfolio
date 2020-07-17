import React from 'react';
import styled from 'styled-components';
import about from '../images/about.jpeg';
import Skills from './Skills';
import ScrollAnimation from 'react-animate-on-scroll';

const NameWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 500px;
    background: url(${about});
    margin-top: 60px;
    background-size: cover;
`;

const NameBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const Name = styled.h1`
    margin: 0;
    font-size: 80px;
    color: white;
    font-family: 'Open Sans Condensed';
    font-weight: 300;
    @media screen and (max-width: 1300px) {
        font-size: 68px;
        text-align: center;
    }
`;

const Mail = styled.h3`
    font-size: 20px;
    color: white;
    font-weight: 300;
    margin-left: 83px;
    @media screen and (max-width: 1300px) {
        margin-left: 0px;
        text-align: center;
    }
`;

const AboutBlock = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 257px;
    background: #2c3e50;
`;

const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 960px;
    margin: 0 auto;
    @media screen and (max-width: 1300px) {
        flex-direction: column;
        width: 500px;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
        width: 300px;
    }
`;

const H5 = styled.h5`
    color: white;
    font-size: 14px;
    font-weight: 300;
    margin-top: 5px;
`;

const P = styled.p`
    color: white;
    line-height: 28px;
    margin-bottom: 25px;
    margin: 0 0 10px;
    font-weight: 300;
    font-size: 16px;
    width: 600px;
    @media screen and (max-width: 1300px) {
        width: 500px;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
        width: 300px;
    }
`;

const Span = styled.span`
    color: #34495e;
    font-weight: 700;
`;

const Link = styled.a`
    text-decoration: none;
`;

const EducationBlock = styled(AboutBlock)`
    background: transparent;
    @media screen and (max-width: 1300px) {
        height: 368px;
    }
`;

const EducationContent = styled(AboutContent)`
    @media screen and (max-width: 1300px) {
        width: 500px;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
        width: 300px;
    }
`;

const EducationH5 = styled(H5)`
    color: #333;
    margin-right: 54px;
`;

const EdcationP = styled(P)`
    color: #333;
    margin-right: 97px;
`;

const NameDiv = styled.div`
    flex-direction: column;
`;

const DescrDiv = styled.div`
    display: flex;
    @media screen and (max-width: 1300px) {
        flex-direction: column;
        width: 500px;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
        width: 300px;
    }
`;

const Ending = styled(EducationH5)`
    margin-right: 0;
`;

const About = ({ about, resume }) => {
    return (
        <>
            <NameWrapper id={about}>
                <NameBlock>
                    <ScrollAnimation animateIn='fadeIn'
                        animateOnce={true}
                        duration={2} >
                        <Name>Владимир Безобразов</Name>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn'
                        animateOnce={true}
                        duration={2}
                        delay={1000} >
                        <Mail>Front-end разоработчик | vladimirbez0503@mail.ru</Mail>
                    </ScrollAnimation>
                </NameBlock>
            </NameWrapper>
            <AboutBlock>
                <AboutContent>
                    <ScrollAnimation animateIn='fadeIn'
                        animateOnce={true} >
                        <H5>ОБО МНЕ</H5>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn'
                        animateOnce={true}
                        delay={500} >
                        <P>Немного о себе. Всегда привлекала IT сфера, а именно веб-разработка.
                        Решил кардинально сменить род деятельности. Имею опыт адаптивной верскти
                    и разработки SPA-приложений на React. </P>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn'
                        animateOnce={true}
                        delay={1000} >
                        <Link href='https://yadi.sk/i/U2MYv13BU6zjYA' target='_blank' rel="nofollow noopener"><H5>СКАЧАТЬ РЕЗЮМЕ</H5></Link>
                    </ScrollAnimation>
                </AboutContent>
            </AboutBlock>
            <EducationBlock id={resume}>
                <EducationContent>
                    <ScrollAnimation animateIn='fadeIn'
                        animateOnce={true} >
                        <EducationH5>ОБРАЗОВАНИЕ</EducationH5>
                    </ScrollAnimation>
                    <NameDiv>
                        <DescrDiv>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOnce={true}
                                delay={500} >
                                <div>
                                    <EdcationP><Span>Бакалавр</Span><br></br>
                                    Московский автомобильно-дорожный государственный<br></br>
                                    технический университет (МАДИ)</EdcationP>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOnce={true}
                                delay={1000} >
                                <div>
                                    <Ending>ОКОНЧАНИЕ В ИЮНЕ 2016</Ending>
                                </div>
                            </ScrollAnimation>
                        </DescrDiv>
                        <DescrDiv>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOnce={true}
                                delay={500} >
                                <div>
                                    <EdcationP><Span>Front-end разработчик</Span><br></br>
                                    Школа по работе с данными SkillFactory</EdcationP>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOnce={true}
                                delay={1000} >
                                <div>
                                    <Ending>В МАЕ 2020</Ending>
                                </div>
                            </ScrollAnimation>
                        </DescrDiv>
                    </NameDiv>
                </EducationContent>
            </EducationBlock>
            <Skills />
        </>
    )
}

export default About