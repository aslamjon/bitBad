import React from 'react'
import { BeatLoader } from 'react-spinners'
import styled from 'styled-components'

const StyledLoaer = styled.div`
    position: fixed;
    z-index: 999;
    left: 0%;
    top: 0%;
    background: rgba(255,255,255,0.75);
    width: 100%;
    height: 100vh;
    display: ${({loading}) => loading ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`;

const Loader = ({loading=false}) => {
    return (
        <StyledLoaer loading={loading}>
            <BeatLoader color={"#006400"} loading={loading} size={50} />
        </StyledLoaer>
    )
}

export default Loader
