import React from 'react'
import styled from 'styled-components'

import empty from '../../assets/images/noto_card-file-box.svg'

const EmptyStyled = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
    font-size: 50px;
    line-height: 75px;
    letter-spacing: 0.01em;
    color: #334D6E;
    padding: 20px 0;
    width: 100%;
`;

const Empty = () => {
    return (
        <EmptyStyled>
            <img src={empty} alt="empty" />
            No data
        </EmptyStyled>
    )
}

export default Empty
