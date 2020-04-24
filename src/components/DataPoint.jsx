import React from 'react';
import StyledDataPoint from '../styledComponents/StyledDataPoint';

export default function DataPoint(props){
    return(
        <>
        <StyledDataPoint {...props}>
            <svg width="100" height="100" className="dataPoint">
                    <rect width="10" height="10" y="45" fill="green" />
            </svg>
        </StyledDataPoint>
        </>
    )

}