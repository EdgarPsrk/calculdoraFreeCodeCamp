import './App.css';
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import freeCodeCampLog from './imagenes/freecodecamp-logo.png';
import ClearBoton from './componentes/ClearBoton';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val);
  };
  
  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input));
    } else {
      input = '';
    }
  }

  return (
    <div className="App">
     
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLog}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'
        />
      </div>

      <div className='contenedor-calculadora'>
        
        <Pantalla
        input = {input}
        />
        
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        
        <div className='fila'>
          <ClearBoton manejarClear = { ()=>setInput('') } >
            Clear 
          </ClearBoton>
        </div>

      </div>

    </div>
  );
}

export default App;
