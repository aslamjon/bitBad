import React from 'react'
import styled, { css } from 'styled-components';

const StyledText = styled.p`
    color: #fff;
    ${({blue}) => blue && css`
        color: #334D6E;
    `}
    ${({green}) => green && css`
        color: #006400;
    `}
    ${({semibold}) => semibold && css`
        font-weight: 600;
    `}
    ${({medium}) => medium && css`
        font-weight: 500;
    `}
    ${({span}) => span && css`
        span {
            color: #006400;
        }
    `}
`;

const Text = (props) => {
    return (
        <StyledText {...props}/>
    )
}

export default Text
