import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { NavElem, About, Works, Contacts, Footer } from './index';
import { resume, works, contacts, person } from './images';

const Header = styled.div`
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 64px;
  background: #111;
  position: fixed;
  z-index: 10000;
`;

const NawDiv = styled.nav`
  display: flex;
  width: 312px;
  margin: 0 auto;
`;

const nawBtn = [
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

const Main = () => {
  return (
    <>
      <Header>
        <NawDiv>
          {nawBtn.map((item, index) => (
            <Link
              key={`${item.to}_${index}`}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}>
              <NavElem img={item.img} />
            </Link>
          ))}
        </NawDiv>
      </Header>
      <About about="about" resume="resume" />
      <Works id="works" />
      <Contacts id="contacts" />
      <Footer />
    </>
  );
};

export default Main;
