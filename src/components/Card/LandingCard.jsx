import React from 'react'
import styled from 'styled-components';
import Text from '../Text';
import Title from '../Title';
import ReactHtmlParser from 'react-html-parser';
const LandingCardStyled = styled.div`
    max-width: 370px;
    text-align: center;
    div {
        margin: 5px 0 10px 0;
    }
    @media (max-width: 767px) {
        margin: 15px auto;
    }
    @media (max-width: 358px) {
        div {
            font-size: 16px;
        }
        p {
            font-size: 14px;
        }
    }
`;

const LandingCard = ({img, title, text, ...otherProps}) => {
    return (
        <LandingCardStyled {...otherProps} >
            <img src={img}  alt="" />
            <Title title20>{title}</Title>
            <Text blue  span >{ReactHtmlParser(text)}</Text>
        </LandingCardStyled>
    )
}

export default LandingCard;
