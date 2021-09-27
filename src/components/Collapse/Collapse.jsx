import React, {useState} from 'react';
import styled from 'styled-components';
import arrowTop from '../../assets/images/arrowTop.png';
const CollapseStyled = styled.div`
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    /* padding: 35px 33px 42px 40px; */
    margin-top: 20px;
    padding: 25px 23px 32px 30px;
    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        &__title {
            font-weight: bold;
            line-height: 27px;
            letter-spacing: 0.01em;
        }
        img {
            transition: 0.3s;
        }
        img.active {
            transform: rotate(-180deg);
        }
    }
    .body {
        height: 0;
        overflow: hidden;
        transition: 0.3s;
        &.active {
            margin-top: 30px;
            height: 100%;
        }
    }
`;

const Collapse = ({title, body}) => {
    const [status, setStatus] = useState(false);

    return (
        <CollapseStyled>
            <div className="head" onClick={() => setStatus(!status)}>
                <div className="head__title">{title}</div>
                <img src={arrowTop} alt="arrow" className={status ? 'active' : ''} />
            </div>
            <div className={`body ${status ? 'active' : ''}`}>
                {body}
            </div>
        </CollapseStyled>
    )
}

export default Collapse;
