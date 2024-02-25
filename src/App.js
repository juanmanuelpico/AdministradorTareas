import './App.css';
import Logo from './imagenes/logo.png';
import { ListaDeTareas } from './componentes/ListaDeTareas.js';

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img src={Logo} className='logo' />

      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
