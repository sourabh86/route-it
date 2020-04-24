import React, {useState, useEffect} from 'react';
import StyledRouterImage from '../styledComponents/StyledRouterImage';

export default function RouterImage(props) {
    // let [isRed, setIsRed] = useState(false);
    
    // useEffect(()=>{
    //     console.log(props.degree);
    //     if(parseInt(props.degree)%90===0){
    //         setIsRed(true);
    //     }else if(isRed){
    //         setIsRed(false);
    //     }
    // })
    return (
        <>
            <StyledRouterImage {...props} >
                <svg width="100" height="100" className="router" >
                    <circle cx="50" cy="50" r="50" fill="lightblue" />
                    <rect width="10" height="100" x="45" style={{fill:"rgb(255,255,255)"}} />
                    <rect width="100" height="10" y="45" style={{fill:"rgb(255,255,255)"}} />
                </svg>
            </StyledRouterImage>
        </>
    )
}