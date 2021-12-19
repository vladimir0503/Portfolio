import styled from 'styled-components';
import { about } from '../../../common/images';

export const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background: url(${about});
  margin-top: 60px;
  background-size: cover;
`;

export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Name = styled.h1`
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

export const Mail = styled.h3`
  font-size: 20px;
  color: white;
  font-weight: 300;
  margin-left: 83px;
  @media screen and (max-width: 1300px) {
    margin-left: 0px;
    text-align: center;
  }
`;

export const AboutBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 257px;
  background: #2c3e50;
`;

export const AboutContent = styled.div`
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

export const H5 = styled.h5`
  color: white;
  font-size: 14px;
  font-weight: 300;
  margin-top: 5px;
`;

export const P = styled.p`
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

export const Span = styled.span`
  color: #34495e;
  font-weight: 700;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const EducationBlock = styled(AboutBlock)`
  background: transparent;
  @media screen and (max-width: 1300px) {
    height: 368px;
  }
`;

export const EducationContent = styled(AboutContent)`
  @media screen and (max-width: 1300px) {
    width: 500px;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 300px;
  }
`;

export const EducationH5 = styled(H5)`
  color: #333;
  margin-right: 54px;
`;

export const EdcationP = styled(P)`
  color: #333;
  margin-right: 97px;
`;

export const NameDiv = styled.div`
  flex-direction: column;
`;

export const DescrDiv = styled.div`
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

export const Ending = styled(EducationH5)`
  margin-right: 0;
`;