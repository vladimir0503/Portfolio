import React from 'react';
import styled, { keyframes } from 'styled-components';
import landing from './images/landing.jpg';
import canban from './images/canban.jpg';
import klient from './images/klient.jpg';
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

const EyeBlockIn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    height: 416px;
    background: transparent;
    animation: ${AnimIn} 0.5s ease 0s 1 normal;
`;

const EyeBlockOut = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    height: 416px;
    background: transparent;
    animation: ${AnimOut} 0.5s ease 0s 1 both;
`;

const EyeBlockInitState = styled.div`
    width: 550px;
    height: 416px;
    background: transparent;
    opacity: 0;
`;

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

const FirstWorkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    height: 416px;
    margin-right: 30px;
    background-image: url(${landing});
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

const TwoWorkWrapper = styled(FirstWorkWrapper)`
    background-image: url(${canban});
`;

const ThreeWorkWrapper = styled(FirstWorkWrapper)`
    background-image: url(${klient});
`;

class Works extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstWork: EyeBlockInitState,
            twoWork: EyeBlockInitState,
            threeWork: EyeBlockInitState,
        }
    }

    render() {

        const FirstWork = this.state.firstWork;
        const TwoWork = this.state.twoWork;
        const ThreeWork = this.state.threeWork;

        return (
            <Content>
                <H5 id={this.props.id}>ПОРТФОЛИО</H5>
                <LinkWrapper>
                    <LinkContayner>
                        <a href='https://vladimir0503.github.io/slider-in-landing-page/' target='_blank' rel='noopener noreferrer'>
                            <FirstWorkWrapper>
                                <FirstWork onMouseOver={() => this.setState({ firstWork: EyeBlockIn })}
                                    onMouseOut={() => this.setState({ firstWork: EyeBlockOut })}>
                                    <img src={eye} alt='eye' />
                                </FirstWork>
                            </FirstWorkWrapper>
                        </a>
                        <DescriptBlock>
                        <H5>ЛЕНДИНГ С АНИМИРОВАННЫМ СЛАЙДЕРОМ</H5>
                        <Descript>Одностраничный лендинг дизайнерского агенства.
                        Имеется десктопная и мобильная версия. Так же содержит слайдер,
                        написанный на ванильном JavaScript.</Descript>
                        </DescriptBlock>
                    </LinkContayner>
                    <LinkContayner>
                        <a href='https://vladimir0503.github.io/Kanban-board/' target='_blank' rel='noopener noreferrer'>
                            <TwoWorkWrapper>
                                <TwoWork onMouseOver={() => this.setState({ twoWork: EyeBlockIn })}
                                    onMouseOut={() => this.setState({ twoWork: EyeBlockOut })}>
                                    <img src={eye} alt='eye' />
                                </TwoWork>
                            </TwoWorkWrapper>
                        </a>
                        <DescriptBlock>
                            <H5>KANBAN-BOARD (КАНБАН-ДОСКА)</H5>
                            <Descript>Канбан-доска - это популярный инструмент управления agile-проектами, 
                            с помощью которого можно наглядно представить задачи, ограничить объем 
                            незавершенной работы и добиться максимальной производительности 
                            (или скорости). Приложение написанно на фреймворке React.js</Descript>
                        </DescriptBlock>
                    </LinkContayner>
                    <LinkContayner>
                        <a href='https://vladimir0503.github.io/bike-accounting-client/' target='_blank' rel='noopener noreferrer'>
                            <ThreeWorkWrapper>
                                <ThreeWork onMouseOver={() => this.setState({ threeWork: EyeBlockIn })}
                                    onMouseOut={() => this.setState({ threeWork: EyeBlockOut })}>
                                    <img src={eye} alt='eye' />
                                </ThreeWork>
                            </ThreeWorkWrapper>
                        </a>
                        <DescriptBlock>
                            <H5>РЕАЛИЗАЦИЯ КЛИЕНТСКОЙ ЧАСТИ САЙТА</H5>
                            <Descript>Известная компания, занимающаяся прокатом велосипедов в крупных 
                            городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
                            Как возможное решение проблемы, компания хочет вести учет этих случаев 
                            и отслеживать прогресс. Клиентская часть приложения написана полностью на
                            React.js. Для взаимодействия с API сервера использовалась библиотека Axios.</Descript>
                        </DescriptBlock>
                    </LinkContayner>
                </LinkWrapper>
            </Content>
        )
    }
}

export default Works