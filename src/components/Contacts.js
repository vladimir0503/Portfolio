import React from 'react';
import styled, { keyframes } from 'styled-components';
import vk from './images/vk.png';
import inst from './images/inst.png';
import lader from './images/loader.png'

const ContactsWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 612px;
    padding-top: 50px;
    background: #2f2f2f;
`;

const ContactsContent = styled.div`
    display: flex;
    width: 960px;
    margin: 0 auto;
`;

const H5 = styled.h5`
    color: white;
    font-weight: 300;
    margin-right: 64px;
    margin-bottom: 39px;
`;

const ContactInfo = styled.div`
    color: white;
    width: 156px;
    margin-right: 120px;
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

const SuccesInfo = styled(P)`
    cursor: pointer;
    color: green;
    position: absolute;
    margin-top: -32px;
    animation: ${Anim} 2s linear 0s 1 normal;
`;

const ErrorInfo = styled(SuccesInfo)`
    color: red;
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

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            feedback: '', 
            name: '', 
            email: '',
            info: null,
            btnName: 'Отправить сообщение',
            btnDisabled: false
        };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('КНОПКА РАБОТАЕТ')

        const formData = [
            this.state.feedback,
            this.state.email,
            this.state.info
        ];

        for (let i = 0; i < formData.length; i++) {
            if(formData[i] === '') {
                this.setState({
                    info: <ErrorInfo onClick={() => {this.setState({ info: null })}}>Заполненны не все поля!</ErrorInfo>
                });
                return;
            }
        }

        this.setState({ 
            btnName: <Loader />,
            btnDisabled: true
        })

        const serviseId = 'my_mail';
        const templateId = 'template_vCNglM1Q';
        const data = {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email};
        const userId = 'user_RstMCmmr6oqQJ3543ikzu';
        
        window.emailjs.send(serviseId, templateId, data, userId)
        .then(res => {
            console.log(res, 'Сообщение успешно отправленно!')
            this.setState({
                feedback: '', 
                name: '', 
                email: '',
                info: <SuccesInfo onClick={() => {this.setState({ info: null })}}>Сообщение отправленно.</SuccesInfo>,
                btnName: 'Отправить сообщение',
                btnDisabled: false
            })
        })
        .catch(err => {console.log(err, 'Ошибка отправки!')})
    }

    render() {

        return (
            <ContactsWrapper id={this.props.id}>
                <ContactsContent>
                    <H5>КОНТАКТЫ</H5>
                    <ContactInfo>
                        <P><Span>Email</Span><br></br>vovan0503@mail.ru</P>
                        <P><Span>Адрес</Span><br></br>РФ, г. Москва, бульвар Яна Райниса, д.18, корп. 1, под. 2, кв. 67</P>
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
                    <FormWrapper>
                        <H5>ФОРМА ОБРАТНОЙ СВЯЗИ</H5>
                        {this.state.info}
                        <Form onSubmit={this.handleSubmit}>
                            <InputDiv>
                                <Label>Ваше имя</Label>
                                <Input type='text' name='name' placeholder='Ваше имя' value={this.state.name} onChange={this.handleChange}></Input>
                            </InputDiv>
                            <InputDiv>
                                <Label>Ваш email</Label>
                                <Input type='text' name='email' placeholder='Ваш email' value={this.state.email} onChange={this.handleChange}></Input>
                            </InputDiv>
                            <InputDiv>
                                <Label>Ваше сообщение</Label>
                                <TextArea name='feedback' placeholder='Ваше сообщение' value={this.state.feedback} onChange={this.handleChange}></TextArea>
                            </InputDiv>
                            <SendBtn disabled={this.state.btnDisabled} type='submit'>{this.state.btnName}</SendBtn>
                        </Form>
                    </FormWrapper>
                </ContactsContent>
            </ContactsWrapper>
        )
    }
}

export default Contacts 