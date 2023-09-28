import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
function App() {
  return (
    <div className="App">
      <div className='freedocecamp-logo-contenedor'>
        <img
          className='logo'
          src={freeCodeCampLogo}
          alt='logo de freeCodeCamp'
         />
      </div>
    </div>
  );
}

export default App;
