import React from 'react';
import styled from 'styled-components';
import NavElem from './NavElem';
import person from './images/person.png';
import resume from './images/resume.png'
import works from './images/works.png';
import contacts from './images/contacts.png';
import About from './about/About';
import Works from './Works';
import Contacts from './Contacts';
import Footer from './Footer';
import { Link } from 'react-scroll';

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

class Main extends React.Component {

    render() {
        return (
            <>
                <Header>
                    <NawDiv>
                        <Link to='about' spy={true} smooth={true} offset={-70} duration={800}><NavElem img={person} /></Link>
                        <Link to='resume' spy={true} smooth={true} offset={-70} duration={800}><NavElem img={resume} /></Link>
                        <Link to='works' spy={true} smooth={true} offset={-70} duration={800}><NavElem img={works} /></Link>
                        <Link to='contacts' spy={true} smooth={true} offset={-70} duration={800}><NavElem img={contacts} /></Link>
                    </NawDiv>
                </Header>
                <About about='about' resume='resume'/>
                <Works id='works'/>
                <Contacts id='contacts' />
                <Footer />
            </>
        )
    }
}

export default Main