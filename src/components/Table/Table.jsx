import React from 'react'
import styled from 'styled-components'

import uploadAndDownload from '../../assets/images/uploadAndDownload.svg'
import SvgIcon from '../SvgIcon';

const TableStyld = styled.table`
    width: 100%;
    margin: 7px 0 60px;
    border-top: 1px solid rgba(51, 77, 110, 0.5);
    border-bottom: 1px solid rgba(51, 77, 110, 0.5);
    border-collapse: collapse;
    tr {
        
        th {
            text-align: left;
            div {
                margin-bottom: -4px;
            }
        }
    }
`;

const Table = ({tableData, upAndDown}) => {
    return (
        <TableStyld>
            <tr>
                <th>SANA</th>
                <th>{upAndDown && <SvgIcon src={uploadAndDownload} color="#006400" />} HISOB RAQAM</th>
                <th>{upAndDown && <SvgIcon src={uploadAndDownload} color="#006400" />} SUMMA</th>
                <th>HOLAT</th>
            </tr>
            {tableData.map((value) => <tr>
                <td>{value.date}</td>
                <td>{value.card}</td>
                <td>{value.sum}</td>
                <td>{value.condition}</td>
            </tr>)}
            
        </TableStyld>
    )
}

export default Table
