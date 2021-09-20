import React from 'react'
import styled, { css } from 'styled-components'

const TilteStyled = styled.div`    
    letter-spacing: 0.01em;
    color: #006400;
    font-weight: bold;
    ${({center}) => center && css`
        text-align: center;
    `}
    ${({title80}) => title80 && css`
        text-align: center;
        font-size: 80px;
        line-height: 120px;
        letter-spacing: -0.08em;
    `}
    ${({title50}) => title50 && css`
        text-align: center;
        font-size: 50px; 
        line-height: 75px;
    `}
    ${({title20}) => title20 && css`
        text-align: center;
        font-size: 20px;
        line-height: 30px;
    `}
    ${({title18}) => title18 && css`
        font-size: 18px;
        line-height: 27px;
        font-weight: 600;
    `}
    ${({title13}) => title13 && css`
        font-size: 13px;
        line-height: 19px;
        font-weight: 500;
    `}
    ${({medium}) => medium && css`
        font-weight: 500;
    `}
    ${({semibold}) => semibold && css`
        font-weight: 600;
    `}
    ${({color}) => color && css`
        color: ${color};
    `}
`;

const Title = (props) => {
    return (
        <TilteStyled {...props} />
    )
}

export default Title
