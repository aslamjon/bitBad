import React from 'react'
import styled from 'styled-components'

const SelectStyled = styled.div`
    background: #F0F0F0;
    border-radius: 15px;
    padding: 5px 10px;
    margin-left: 10px;
    select {
        background: none;
        border: none;
        &:focus-visible {
            outline: none;
        } 
    }
`;

const Select = ({row, options=[5, 10, 15, 20, 25, 30]}) => {
    return (
        <SelectStyled>
            <select defaultValue={row}>
                {options.map((value, index) => <option key={index+1} value={value} >{value}</option>)}
            </select>
        </SelectStyled>
    )
}

export default Select
