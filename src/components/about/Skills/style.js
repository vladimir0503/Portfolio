import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #2c3e50;
  width: 100%;
  height: 257px;
  @media screen and (max-width: 1300px) {
    height: 748px;
    align-items: normal;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 960px;
  height: 182px;
  @media screen and (max-width: 1300px) {
    margin-top: 51px;
    display: block;
    width: 504px;
  }
  @media screen and (max-width: 500px) {
    width: 298px;
  }
`;

export const H5 = styled.h5`
  color: white;
  font-weight: 300;
  font-size: 14px;
  margin: 0;
`;

export const P = styled.p`
  color: white;
  text-align: center;
`;

export const SkillsContayner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    width: 151px;
    margin: 0 auto;
  }
`;

export const SkillDiv = styled.div`
  width: 151px;
`;