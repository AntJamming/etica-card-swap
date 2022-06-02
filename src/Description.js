import React from 'react';
import './Description.css';


function Description({text,color,width}) {
  return (
    <div className="description" style={{"width":`${width}`}}>
      <p> {text}</p>
    </div>
  );
}

export default Description