import React from 'react';
import styled from 'styled-components';
import about from '../images/about.jpeg';
import Skills from './Skills';

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
`;

const Name = styled.h1`
    margin: 0;
    font-size: 80px;
    color: white;
    font-family: 'Open Sans Condensed';
    font-weight: 300;
`;

const Mail = styled.h3`
    font-size: 20px;
    color: white;
    font-weight: 300;
    margin-left: 94px;
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
`;

const EducationContent = styled(AboutContent)``;

const EducationH5 = styled(H5)`
    color: #333;
    margin-right: 54px;
`;

const EdcationP = styled(P)`
    color: #333;
    margin-right: 97px;
`;

const NameContayner = styled.div`
    display: flex;
`;

const NameDiv = styled.div`
    flex-direction: column;
`;

const DescrDiv = styled.div`
    display: flex;
`;

const Ending = styled(EducationH5)`
    margin-right: 0;
`;

const About = ({ about, resume }) => {
    return (
        <>
            <NameWrapper id={about}>
                <NameBlock>
                    <Name>Владимир Безобразов</Name>
                    <Mail>Front-end разоработчик | contact@example.com</Mail>
                </NameBlock>
            </NameWrapper>
            <AboutBlock>
                <AboutContent>
                    <H5>ОБО МНЕ</H5>
                    <P>С 2016 по 2020 год работал менеджером по сертификации строительно-монтажных<br></br>
                    работ. Всегда привлекала IT сфера, а именно веб-разработка. Решил сменить род<br></br>
                    деятельности. Имею опыт адаптивной верскти и разработки SPA-приложений на React. </P>
                    <Link href='https://yadi.sk/i/PCBnjwZ-1SN9BQ' target='_blank' rel="nofollow noopener"><H5>СКАЧАТЬ РЕЗЮМЕ</H5></Link>
                </AboutContent>
            </AboutBlock>
            <EducationBlock id={resume}>
                <EducationContent>
                    <NameContayner>
                        <EducationH5>ОБРАЗОВАНИЕ</EducationH5>
                        <NameDiv>
                            <DescrDiv>
                                <div>
                                    <EdcationP><Span>Бакалавр</Span><br></br>
                                    Московский автомобильно-дорожный государственный<br></br>
                                    технический университет (МАДИ)</EdcationP>
                                </div>
                                <div>
                                    <Ending>ОКОНЧАНИЕ В ИЮНЕ 2016</Ending>
                                </div>
                            </DescrDiv>
                            <DescrDiv>
                                <div>
                                    <EdcationP><Span>Front-end разработчик</Span><br></br>
                                    Школа по работе с данными SkillFactory</EdcationP>
                                </div>
                                <div>
                                    <Ending>В МАЕ 2020</Ending>
                                </div>
                            </DescrDiv>
                        </NameDiv>
                    </NameContayner>
                </EducationContent>
            </EducationBlock>
            <Skills />
        </>
    )
}

export default About