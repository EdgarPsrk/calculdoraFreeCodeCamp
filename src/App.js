import './App.css';
import freeCodeCampLog from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLog}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'
        />
      </div>
    </div>
  );
}

export default App;
