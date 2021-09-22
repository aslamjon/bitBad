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

const Select = ({row}) => {
    return (
        <SelectStyled>
            <select>
                <option value="5" selected={row ===5}>5</option>
                <option value="10" selected={row ===10}>10</option>
                <option value="15" selected={row ===15}>15</option>
                <option value="20" selected={row ===20}>20</option>
                <option value="25" selected={row ===25}>25</option>
                <option value="30" selected={row ===30}>30</option>
            </select>
        </SelectStyled>
    )
}

export default Select
