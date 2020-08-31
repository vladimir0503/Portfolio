import React from 'react';
import styled from 'styled-components';
import landing from './images/landing.jpg';
import canban from './images/canban.jpg';
import klient from './images/klient.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import WorkLink from './WorkLink';

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

const DescriptBlock = styled.div``;

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const LinkContayner = styled.div`
    display: flex;
    margin-bottom: 25px;
    @media screen and (max-width: 1300px) {
        flex-direction: column;
    }
`;

const Works = ({ id }) => (

    <Content>
        <ScrollAnimation animateIn='fadeIn'
            animateOnce={true} >
            <H5 id={id}>ПОРТФОЛИО</H5>
        </ScrollAnimation>
        <LinkWrapper>
            <LinkContayner>
                <ScrollAnimation animateIn='fadeIn'
                    animateOnce={true}
                    delay={500} >
                    <WorkLink image={landing}
                        link={'https://vladimir0503.github.io/slider-in-landing-page/'}
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                    animateOnce={true}
                    delay={1000} >
                    <DescriptBlock>
                        <H5>ЛЕНДИНГ С АНИМИРОВАННЫМ СЛАЙДЕРОМ</H5>
                        <Descript>Одностраничный лендинг дизайнерского агенства.
                        Имеется десктопная и мобильная версия. Так же содержит слайдер,
                            написанный на ванильном JavaScript.</Descript>
                    </DescriptBlock>
                </ScrollAnimation>
            </LinkContayner>
            <LinkContayner>
                <ScrollAnimation animateIn='fadeIn'
                    animateOnce={true}
                    delay={500} >
                    <WorkLink image={canban}
                        link={'https://vladimir0503.github.io/Kanban-board/'}
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                    animateOnce={true}
                    delay={1000} >
                    <DescriptBlock>
                        <H5>KANBAN-BOARD (КАНБАН-ДОСКА)</H5>
                        <Descript>Канбан-доска - это популярный инструмент управления agile-проектами,
                        с помощью которого можно наглядно представить задачи, ограничить объем
                        незавершенной работы и добиться максимальной производительности
                            (или скорости). Приложение написанно на фреймворке React.js</Descript>
                    </DescriptBlock>
                </ScrollAnimation>
            </LinkContayner>
            <LinkContayner>
                <ScrollAnimation animateIn='fadeIn'
                    animateOnce={true}
                    delay={500} >
                    <WorkLink image={klient}
                        link={'https://vladimir0503.github.io/bike-accounting-client/'}
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                    animateOnce={true}
                    delay={1000} >
                    <DescriptBlock>
                        <H5>РЕАЛИЗАЦИЯ КЛИЕНТСКОЙ ЧАСТИ САЙТА</H5>
                        <Descript>Известная компания, занимающаяся прокатом велосипедов в крупных
                        городах России, испытывает проблемы с частой кражей их имущества (велосипедов).
                        Как возможное решение проблемы, компания хочет вести учет этих случаев
                        и отслеживать прогресс. Клиентская часть приложения написана полностью на
                            React.js. Для взаимодействия с API сервера использовалась библиотека Axios.</Descript>
                    </DescriptBlock>
                </ScrollAnimation>
            </LinkContayner>
        </LinkWrapper>
    </Content>
)

export default Works