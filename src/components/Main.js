import React from 'react';
import styled from 'styled-components';
import NavElem from './NavElem';
import person from './images/person.png';
import resume from './images/resume.png'
import works from './images/works.png';
import contacts from './images/contacts.png';
import About from './About';

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

const NawDiv = styled.div`
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
                        <NavElem img={person} />
                        <NavElem img={resume} />
                        <NavElem img={works} />
                        <NavElem img={contacts} />
                    </NawDiv>
                </Header>
                <About />
            </>
        )
    }
}

export default Main