import styled from 'styled-components';

const InputOfCardStyled = styled.div`
    width: 100%;
    background: #F0F0F0;
    border-radius: 15px;
    padding: 13px 11px;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #929FAF;
    input {
        border: none;
        outline: none;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #929FAF;
        background: none;
        padding-left: 5px;
    }
    &.full_name {
        margin-bottom: 10px;
    }
    &.error {
        border: 1px solid red;
    }
`;
export {
    InputOfCardStyled
}