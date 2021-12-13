import styled, { keyframes } from 'styled-components';
import { loader } from '../../common/images';

export const H5 = styled.h5`
  color: white;
  font-weight: 300;
  margin-right: 64px;
  margin-bottom: 39px;
  @media screen and (max-width: 1300px) {
    margin-top: 0;
    margin-bottom: 19px;
  }
`;

export const P = styled.p`
  color: white;
  margin-bottom: 25px;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
`;

export const FormWrapper = styled.div``;

export const FormBlock = styled.form``;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;

export const Label = styled.label`
  color: #999;
  margin-bottom: 4px;
`;

export const Input = styled.input`
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

export const TextArea = styled.textarea`
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

export const SendBtn = styled.button`
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

export const InitialInfo = styled.p`
  display: none;
`;

export const Anim = keyframes`
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

export const hideAnim = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
`;

export const SuccessInfo = styled(P)`
  cursor: pointer;
  color: green;
  position: absolute;
  margin-top: -32px;
  animation: ${Anim} 2s linear 0s 1 normal;
  @media screen and (max-width: 1300px) {
    margin-top: -24px;
  }
`;

export const HideSuccessInfo = styled(SuccessInfo)`
  animation: ${hideAnim} 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
`;

export const ErrorInfo = styled(SuccessInfo)`
  color: red;
`;

export const HideErrorInfo = styled(ErrorInfo)`
  animation: ${hideAnim} 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
`;

export const loaderAnim = keyframes`
    100%{ transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border-radius: 50%;
  margin: 0;
  width: 30px;
  height: 30px;
  background: url(${loader});
  animation: ${loaderAnim} 1s ease 0s infinite normal;
`;