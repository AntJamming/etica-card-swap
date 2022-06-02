import React from 'react'
import Description from './Description'
import Button from './components/Button';
import './Landing.css'
import { useNavigate } from 'react-router-dom';


export default function Landing(props) {

   const navigate = useNavigate();
   const routeChange = () =>{
       let path = "/cards";
       navigate(path);
   }

    return (
    <>
        <div className='header'>
            <h1>¡Bienvenidos!</h1>
        </div>
        <Description text={"Definicion de esta encuesta"} width={"30%"}/>
        <Button onClick={routeChange}  width={'200px'} text={'Tomar encuesta'} margin={'auto'}></Button>
    </>
  );
}
