import React from 'react';
import { Link } from 'react-scroll';
import { resume, works, contacts, person } from '../../common/images';

import About from '../about/About/About';
import Works from '../Works/Works';
import Contacts from '../Contacts/Contacts';
import NavElem from '../NawElem/NavElem';
import Footer from '../Footer/Footer';

import * as St from './style.js';

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
      <St.Header>
        <St.NawDiv>
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
        </St.NawDiv>
      </St.Header>
      <About about="about" resume="resume" />
      <Works id="works" />
      <Contacts id="contacts" />
      <Footer />
    </>
  );
};

export default Main;