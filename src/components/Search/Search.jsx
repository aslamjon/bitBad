import React from 'react'
import styled from 'styled-components'
import SvgIcon from '../SvgIcon'
import search from '../../assets/images/search.svg'
const SearchStyled = styled.div`
    background: #F0F0F0;
    border-radius: 15px;
    width: 136px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    input {
        width: 80%;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #929FAF;
        background: none;
        border: none;
        outline: none;
    }
    button {
        width: 20%;
        background: none;
        border: none;
        outline: none;
        div {
            transition: 0.3s;
            background: #334D6E;
        }
        &:hover {
            div {
                background-color: #006400;
            }
        }
    }
`;

const Search = ({className}) => {
    return (
        <SearchStyled className={className ? className : ''}>
            <input type="text" placeholder="Qidiruv" />
            <button type="button"><SvgIcon src={search} /></button>
        </SearchStyled>
    )
}

export default Search
