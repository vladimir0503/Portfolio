import styled from 'styled-components';
import { resume, works, contacts, person } from '../../common/images';

export const Header = styled.div`
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 64px;
  background: #111;
  position: fixed;
  z-index: 10000;
`;

export const NawDiv = styled.nav`
  display: flex;
  width: 312px;
  margin: 0 auto;
`;

export const nawBtn = [
    {
        to: 'about',
        img: person,
    },
    {
        to: 'resume',
        img: resume,
    },
    {
        to: 'works',
        img: works,
    },
    {
        to: 'contacts',
        img: contacts,
    },
];