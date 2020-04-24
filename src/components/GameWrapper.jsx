import React, {useState} from 'react';
import PlayArea from './PlayArea';

export default function GameWrapper(props){
    const [event,setEvent] = useState(null);

    const onAppClick = (event)=>{
        setEvent(event);
    }
    return(
        <div role="button" tabIndex="0" onClick={onAppClick}>
            <PlayArea event={event}>
          
          </PlayArea>
        </div>
    )
}