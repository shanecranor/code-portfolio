import { useState} from 'react';
import React, {CSSProperties} from 'react';
export default function BigTitle({text}){
    const [coords, setCoords] = useState({x: 0, y: 0});
    const handleMouseMove = event => {
        setCoords({
          x: event.clientX,
          y: event.clientY - event.target.offsetTop,
        });
      };
    const style = { 
        "--title-origin-x": (coords.x) +"px",
        "--title-origin-y": coords.y +"px"
    }
    console.log(style)
    return(
    <div className='big-title-container' style={style} >
        <div onMouseMove={handleMouseMove} className='big-title' data-text={text}> {text}</div>
    </div>
    )
}