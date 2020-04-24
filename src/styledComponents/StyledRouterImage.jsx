import React from 'react';
import styled from 'styled-components';

//transition: transform ${props=>props.speed?props.speed-10:90}ms ease-in-out;
//transform: translate(${props=>props.left}px) rotate(${props => props.degree ? props.degree : "0"}deg);
// const StyledRouterImage = styled.svg`
//     position:relative;
    
//     transform: rotate(${props => props.degree ? props.degree : "0"}deg);
//     left:${props=>props.left}px;
//     width:100px;
//     height:100px;
// `

const StyledRouterImage = styled.svg.attrs(props => ({
    style: {
        transform: `translate(${props.left}px) rotate(${props.degree ? props.degree : "0"}deg)`,
        transition: `transform ${props.speed}ms ease-in-out`,
        
        borderColor: `${props.left<0?"blue":"transparent"}`
    },
  }))`position:relative;
  
  width:100px;
    height:100px;
  `


export default StyledRouterImage;