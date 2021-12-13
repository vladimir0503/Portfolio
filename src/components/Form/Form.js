import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { sendMessage } from '../../email/email';

import * as St from './style.js';

const Form = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false)
  const [info, setInfo] = useState({ infoStyle: St.InitialInfo, infoText: '' });

  let timer = null;

  const reset = () => {
    setFeedback('');
    setName('');
    setEmail('');
  };

  const editInfo = (style, removeStyle, text) => {
    setInfo({ infoStyle: style, infoText: text });
    removeInf(removeStyle, text);
    setLoading(false);
  };

  const validation = () => {
    const data = [feedback, email, name];
    const emailTemplate = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    let success = true;

    data.forEach(item => {
      if (item === '') {
        editInfo(St.ErrorInfo, St.HideErrorInfo, 'Заполненны не все поля!');
        success = false;
        return;
      }
    });

    if (!emailTemplate.test(data[1]) && data[1].length) {
      editInfo(St.ErrorInfo, St.HideErrorInfo, 'Не корректный email!');
      success = false;
      return;
    };

    return success;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validation()) return;

    try {
      setLoading(true);
      await sendMessage(feedback, name, email);
      editInfo(St.SuccessInfo, St.HideSuccessInfo, 'Сообщение отправленно');
      reset();
    } catch (err) {
      editInfo(St.ErrorInfo, St.HideErrorInfo, 'Network error');
      console.log(err);
    };
  };

  const removeInf = (style, text) => {
    clearTimeout(timer);
    timer = setTimeout(() => setInfo({ infoStyle: style, infoText: text }), 2000);
  };

  const Info = info.infoStyle;

  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1000}>
      <St.FormWrapper>
        <St.H5>ФОРМА ОБРАТНОЙ СВЯЗИ</St.H5>
        <Info>{info.infoText}</Info>
        <St.FormBlock onSubmit={handleSubmit}>
          <St.InputDiv>
            <St.Label>Ваше имя</St.Label>
            <St.Input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}></St.Input>
          </St.InputDiv>
          <St.InputDiv>
            <St.Label>Ваш email</St.Label>
            <St.Input
              type="text"
              name="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}></St.Input>
          </St.InputDiv>
          <St.InputDiv>
            <St.Label>Ваше сообщение</St.Label>
            <St.TextArea
              name="feedback"
              placeholder="Ваше сообщение"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}></St.TextArea>
          </St.InputDiv>
          <St.SendBtn disabled={isLoading} type="submit">
            {isLoading ? <St.Loader /> : 'Отправить сообщение'}
          </St.SendBtn>
        </St.FormBlock>
      </St.FormWrapper>
    </ScrollAnimation>
  );
};

export default Form;