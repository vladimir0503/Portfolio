import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 509px;
  padding-top: 50px;
  background: #2f2f2f;
  @media screen and (max-width: 1300px) {
    height: 873px;
  }
`;

export const ContactsContent = styled.div`
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

export const ContactInfo = styled.div`
  color: white;
  width: 156px;
  margin-right: 120px;
  @media screen and (max-width: 1300px) {
    margin-bottom: 21px;
  }
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const P = styled.p`
  color: white;
  margin-bottom: 25px;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
`;

export const LinkDiv = styled.div`
  display: flex;
  margin-top: -23px;
  margin-left: -6px;
`;

export const WrapperLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

export const ImgDiv = styled.div`
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