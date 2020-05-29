import React from 'react';
import styled from 'styled-components';
import vk from './images/vk.png';
import inst from './images/inst.png';

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

const FormWrapper = styled.div`

`;

const Form = styled.form`

`;

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
    background: #44bbaa;
    border: 0;
    padding: 10px 30px;
    margin-left: 174px;
    height: 43px;
    border-radius: 4px;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
    :hover {
        background: #23c8b1;
    }
`;

class Contacts extends React.Component {
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
                        <Form>
                            <InputDiv>
                                <Label>Ваше имя</Label>
                                <Input type='text' placeholder='Ваше имя'></Input>
                            </InputDiv>
                            <InputDiv>
                                <Label>Ваш email</Label>
                                <Input type='text' placeholder='Ваш email'></Input>
                            </InputDiv>
                            <InputDiv>
                                <Label>Тема</Label>
                                <Input type='text' placeholder='Тема'></Input>
                            </InputDiv>
                            <InputDiv>
                                <Label>Ваше сообщение</Label>
                                <TextArea placeholder='Ваше сообщение'></TextArea>
                            </InputDiv>
                            <SendBtn type='submit'>Отправить сообщение</SendBtn>
                        </Form>
                    </FormWrapper>
                </ContactsContent>
            </ContactsWrapper>
        )
    }
}

export default Contacts 