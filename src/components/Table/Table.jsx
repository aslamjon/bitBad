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
    min-width: 635px;
    tr {
        
        th {
            text-align: left;
            div {
                margin-bottom: -4px;
            }
        }
    }
    .productOfCondition {
        background: #006400;
        border-radius: 15px;
        padding: 4px 10px;
        color: #fff;
        &.sold {
            background: #F19F9D;
        }
    }
`;

const Table = ({tableData, upAndDown, statistics}) => {
    return (
        <TableStyld>
            <tr>
                <th>SANA</th>
                <th>{upAndDown && <SvgIcon src={uploadAndDownload} color="#006400" />} {statistics ? 'XARIDOR' : "HISOB RAQAM"} </th>
                <th>{upAndDown && <SvgIcon src={uploadAndDownload} color="#006400" />} {statistics ? 'MASULOT' : "SUMMA"}</th>
                {statistics ? <th>{upAndDown && <SvgIcon src={uploadAndDownload} color="#006400" />} VILOYAT</th> : null}
                <th>HOLAT</th>
            </tr>
            {tableData.map((value) => <tr>
                <td>{value.date}</td>
                <td>{value.card}</td>
                <td>{value.sum}</td>
                {statistics ? <td>{value.viloyat}</td> : null}
                <td>{statistics ? <span className={`productOfCondition ${value.condition ? "sold" : ''}`}>{value.condition ? 'Sotildi' : "Sotilmadi"}</span> : value.condition}</td>
            </tr>)}
            
        </TableStyld>
    )
}

export default Table
