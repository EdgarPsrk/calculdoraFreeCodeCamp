import React from "react";
import '../stylesheets/ClearBoton.css';

const ClearBoton = (props) => (
    <div 
        className='boton-clear' 
        onClick={props.manejarClear}
    >
        {props.children}
    </div>
);

export default ClearBoton; 