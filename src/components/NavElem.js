import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 63px;
    transition: 0.5s;
    cursor: pointer;
    :hover {
        background: #2c3e50;
    }
`;

const NavElem = ( {img} ) => {
    return (
        <Div>
            <img src={img} alt='person' width='50px' height='50px' />
        </Div>
    )
}

export default NavElem