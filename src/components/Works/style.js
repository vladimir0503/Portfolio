import styled from 'styled-components';

export const Content = styled.div`
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

export const H5 = styled.h5`
  font-weight: 300;
  color: #333;
  font-size: 14px;
  margin: 0;
  margin-right: 54px;
  margin-bottom: 25px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;