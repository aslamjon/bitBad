import styled, { css } from 'styled-components';
import { Col } from '../../components/Grid';
import Title from '../../components/Title';

const ColStyled = styled(Col)`
    margin: 20px 0;
    padding: 0 10px;
    /* height: 100%; */
    @media (max-width: 767px) {
        padding: 0;
    }
`;
const ChartStyled = styled.div`
    background: #fff;
    padding: 45px 20px 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-left: -10px;
    max-height: 432px;
    height: 100%;
    .title {
        font-weight: bold;
    
        line-height: 27px;
        letter-spacing: 0.01em;
        color: #334D6E;
        margin: -15px 0 5px 20px;
    }
    @media (max-width: 767px) {
        margin-left: 0px;
    }
`;
const ReportStyled = styled.div`
    background: #fff;
    padding: 45px 20px 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-right: -10px;
    height: 100%;
    .mt {
        margin-top: 50px;
    }
    @media (max-width: 767px) {
        margin-right: 0px;
    }
`;
const Dotted = styled.div`
    border: 1px dotted black;
    opacity: 0.8;
    border: 2px dashed rgba(51, 77, 110, 0.5);
    width: 100%;
`;
const TitleStyled = styled(Title)`
    color: #334D6E;
    background: #fff;
    ${({bold}) => bold && css`
        font-weight: bold;
    `}
`;
const BorderDashed = styled.div`
    width: 100%;
    opacity: 0.8;
    border-bottom: 2px dashed #334D6E;
    margin: 44px 0 51px 0;
    ${({sec}) => sec && css`
        margin: 56px 0 31px 0;
    `}
`;
const DonaStyled = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: rgba(51, 77, 110, 0.7);
    background: #fff;
`;
const HistoryBalance = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 43px 40px 32px;
    margin-bottom:100px;
    overflow-x: auto;
    ${({mt}) => mt && css`
        margin-top: ${mt}px;
    `}
    @media (max-width: 392px) {
        .rowCound {
            flex-wrap: wrap;
        }
        .search {
            margin-top: 10px;
        }
    }
`;
const ArrowsStyled = styled.img`
    border-radius: 50%;
    margin: 10px 15px 0;
    cursor: pointer;

`;
export {
    ColStyled,
    ChartStyled,
    ReportStyled,
    Dotted,
    TitleStyled,
    BorderDashed,
    DonaStyled,
    HistoryBalance,
    ArrowsStyled
}