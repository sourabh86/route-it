import React from 'react';
import styled from 'styled-components';

const StyledDataPoint = styled.svg`
    position:absolute;
    transition: transform 90ms ease-in-out;
    transform: translate(${props=>props.left?props.left:0}px);
    z-index:25px;
    width:100px;
    height:100px;
`

// const StyledDataPoint = styled.svg`
//     position:relative;
//     transition: transform 90ms ease-in-out;
//     transform: translate(${props=>props.left?props.left:0}px);
//     z-index:25px;
    
//     display:inline;
// `

export default StyledDataPoint;