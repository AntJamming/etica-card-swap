import React from 'react'
import './Button.css';
function Button({text,margin,width, onClick}) {
  return <button onClick={onClick} class="button -smoke center" style={{"margin":`${margin}`,"width":`${width}`}}>{text}</button>;
}
export default Button;
