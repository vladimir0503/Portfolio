import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import vk from './images/vk.png';
import inst from './images/inst.png';
import lader from './images/loader.png';
import ScrollAnimation from 'react-animate-on-scroll';

const ContactsWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 509px;
    padding-top: 50px;
    background: #2f2f2f;
    @media screen and (max-width: 1300px) {
        height: 873px;
    }
`;

const ContactsContent = styled.div`
    display: flex;
    width: 960px;
    margin: 0 auto;
    @media screen and (max-width: 1300px) {
        flex-direction: column;
        width: 550px;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
    }
`;

const H5 = styled.h5`
    color: white;
    font-weight: 300;
    margin-right: 64px;
    margin-bottom: 39px;
    @media screen and (max-width: 1300px) {
        margin-top: 0;
        margin-bottom: 19px;
    }
`;

const ContactInfo = styled.div`
    color: white;
    width: 156px;
    margin-right: 120px;
    @media screen and (max-width: 1300px) {
        margin-bottom: 21px;
    }
`;

const Span = styled.span`
    font-weight: 700;
`;

const P = styled.p`
    color: white;
    margin-bottom: 25px;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
`;

const LinkDiv = styled.div`
    display: flex;
    margin-top: -23px;
    margin-left: -6px;
`;

const WrapperLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
`;

const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0;
    height: 0;
    border-radius: 50%;
    transition: 0.5s;
    cursor: pointer;
    :hover {
        background: #1bb899;
        width: 30px;
        height: 30px;
    }
`;

const FormWrapper = styled.div``;

const Form = styled.form``;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
`;

const Label = styled.label`
    color: #999;
    margin-bottom: 4px;
`;

const Input = styled.input`
    width: 529px;
    height: 20px;
    padding: 10px 12px;
    border-radius: 0;
    box-shadow: none;
    transition: 0.5s;
    ::placeholder {
        color: #95a5a6;
    }
    :focus {
        box-shadow: 0px 0px 5px 3px #1bb899; 
    }
    @media screen and (max-width: 500px) {
        width: 274px;
    }
`;

const TextArea = styled.textarea`
    width: 529px;
    height: 100px;
    padding: 10px 12px;
    border-radius: 0;
    box-shadow: none;
    transition: 0.5s;
    ::placeholder {
        color: #95a5a6;
        font-family: 'Arial';
    }
    :focus {
        box-shadow: 0px 0px 5px 3px #1bb899; 
    }
    @media screen and (max-width: 500px) {
        width: 274px;
    }
`;

const SendBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #44bbaa;
    border: 0;
    margin-left: 174px;
    width: 200px;
    height: 50px;
    border-radius: 4px;
    color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    cursor: pointer;
    :hover {
        background: #23c8b1;
    }
    @media screen and (max-width: 500px) {
        margin: 0 auto;
    }
`;

const InitialInfo = styled.p`
    display: none;
`;

const Anim = keyframes`
    0%{ -ms-transform: translateX(0); transform: translateX(0); }
    5%{ -ms-transform: translateX(-10px); transform: translateX(-10px); }
    10%{ -ms-transform: translateX(10px); transform: translateX(10px); }
    15%{ -ms-transform: translateX(-10px); transform: translateX(-10px); }
    20%{ -ms-transform: translateX(10px); transform: translateX(10px); }
    25%{ -ms-transform: translateX(-10px); transform: translateX(-10px); }
    30%{ -ms-transform: translateX(10px); transform: translateX(10px); }
    35%{ -ms-transform: translateX(-10px); transform: translateX(-10px); }
    40%{ -ms-transform: translateX(10px); transform: translateX(10px); }
    45%{ -ms-transform: translateX(-10px); transform: translateX(-10px); }
    50%{ -ms-transform: translateX(0); transform: translateX(0); }
`;

const hideAnim = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
`;

const SuccesInfo = styled(P)`
    cursor: pointer;
    color: green;
    position: absolute;
    margin-top: -32px;
    animation: ${Anim} 2s linear 0s 1 normal;
    @media screen and (max-width: 1300px) {
        margin-top: -24px;
    }
`;

const HideSuccesInfo = styled(SuccesInfo)`
    animation: ${hideAnim} 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
`;

const ErrorInfo = styled(SuccesInfo)`
    color: red;
`;

const HideErrorInfo = styled(ErrorInfo)`
    animation: ${hideAnim} 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
`;

const loaderAnim = keyframes`
    100%{ transform: rotate(360deg); }
`;

const Loader = styled.div`
    border-radius: 50%;
    margin: 0;
    width: 30px;
    height: 30px;
    background: url(${lader});
    animation: ${loaderAnim} 1s ease 0s infinite normal;
`;

const Contacts = ({ id }) => {

    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [btnName, setBtnName] = useState('Отправить сообщение');
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [info, setInfo] = useState({ infoStyle:  InitialInfo, infoText: ''})

    let timer = null;

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = [
            feedback,
            email,
            name
        ];

        const emailTemplate = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        let  result = emailTemplate.test(formData[1]);

        for (let i = 0; i < formData.length; i++) {
            if (formData[i] === '') {
                setInfo({ infoStyle: ErrorInfo,  infoText: 'Заполненны не все поля!'});
                removeInf(HideErrorInfo, 'Заполненны не все поля!');
                return;
            } else if (result === false) {
                setInfo({ infoStyle: ErrorInfo,  infoText: 'Не корректный email!'});
                removeInf(HideErrorInfo, 'Не корректный email!');
                return;
            }
        }

        setBtnName(<Loader />);
        setBtnDisabled(true);

        const serviseId = 'my_mail';
        const templateId = 'template_vCNglM1Q';
        const data = { message_html: feedback, from_name: name, reply_to: email };
        const userId = 'user_RstMCmmr6oqQJ3543ikzu';

        window.emailjs.send(serviseId, templateId, data, userId)
            .then(res => {
                console.log(res, 'Сообщение успешно отправленно!')
                setFeedback('');
                setName('');
                setEmail('');
                setInfo({ infoStyle: SuccesInfo,  infoText: 'Сообщение отправленно.'});

                removeInf(HideSuccesInfo, 'Сообщение отправленно.');
                setBtnName('Отправить сообщение');
                setBtnDisabled(false);
            })
            .catch(err => { console.log(err, 'Ошибка отправки!') })
    }

    const removeInf = (style, text) => {
        timer = setTimeout(() => setInfo(
            { infoStyle: style,  infoText: text}), 2000
        );
    }

    useEffect(() => {
        clearTimeout(timer);
    });

    const Info = info.infoStyle;

    return (
        <ContactsWrapper id={id}>
            <ContactsContent>
                <ScrollAnimation animateIn='fadeIn'
                    animateOnce={true} >
                    <H5>КОНТАКТЫ</H5>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                    animateOnce={true}
                    delay={500} >
                    <ContactInfo>
                        <P><Span>Email</Span><br></br>vovan0503@mail.ru</P>
                        <P><Span>Адрес</Span><br></br>РФ, г. Москва, бульвар Яна Райниса, д.18</P>
                        <P><Span>Телефон</Span><br></br>+7 999 677 05 46</P>
                        <P><Span>Соцсети</Span></P>
                        <LinkDiv>
                            <a href='https://instagram.com/vovan_bezobrazov?igshid=1veejg6a2ber4' target='_blank' rel='noopener noreferrer'>
                                <WrapperLink><ImgDiv><img src={inst} alt='instagramm' width='20px' heigth='20px' /></ImgDiv></WrapperLink>
                            </a>
                            <a href='https://vk.com/id142608416' target='_blank' rel='noopener noreferrer'>
                                <WrapperLink><ImgDiv><img src={vk} alt='vk' width='20px' heigth='20px' /></ImgDiv></WrapperLink>
                            </a>
                        </LinkDiv>
                    </ContactInfo>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                    animateOnce={true}
                    delay={1000} >
                    <FormWrapper>
                        <H5>ФОРМА ОБРАТНОЙ СВЯЗИ</H5>
                        {/* {info} */}
                        <Info>{info.infoText}</Info>
                        <Form onSubmit={handleSubmit}>
                            <InputDiv>
                                <Label>Ваше имя</Label>
                                <Input type='text' name='name' placeholder='Ваше имя' value={name} onChange={e => setName(e.target.value)}></Input>
                            </InputDiv>
                            <InputDiv>
                                <Label>Ваш email</Label>
                                <Input type='text' name='email' placeholder='Ваш email' value={email} onChange={e => setEmail(e.target.value)}></Input>
                            </InputDiv>
                            <InputDiv>
                                <Label>Ваше сообщение</Label>
                                <TextArea name='feedback' placeholder='Ваше сообщение' value={feedback} onChange={e => setFeedback(e.target.value)}></TextArea>
                            </InputDiv>
                            <SendBtn disabled={btnDisabled} type='submit'>{btnName}</SendBtn>
                        </Form>
                    </FormWrapper>
                </ScrollAnimation>
            </ContactsContent>
        </ContactsWrapper>
    )

}

export default Contacts 