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
        background: #1bb899;
    }
`;

const NavElem = ( {img} ) => {
    return (
        <Div>
            <img src={img} alt='person' width='35px' height='35px' />
        </Div>
    )
}

export default NavElem