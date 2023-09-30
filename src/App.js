import { useState } from 'react';
import './App.css';
import Boton from './Components/Boton';
import Contador from './Components/Contador';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {
  
  const [numClicks, setNumClicks] = useState(0);

  const manejarClic = () =>{
    setNumClicks(numClicks+1);
  }
  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freeCodeCamp'
         />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
          texto={'click'}
          esBotonClick={true}
          manejarClick={manejarClic}
        />
        <Boton
          texto={'reiniciar'}
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
