import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
// import GreetingFunction from './components/pure/GreetingFunction';
// import TaskListComponent from './components/container/TaskListComponent';
import { ContactoList } from './components/container/ContactoList';
import EjemploMio from './hooks/EjemploMio';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import Ejemplo4 from './hooks/Ejemplo4';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* Componente pripio Greeting.jsx */}
            {/* <Greeting name="Israel" /> */}
            {/* <GreetingFunction name="Israel" /> */}
            {/* <TaskListComponent /> */}

            {/* Ejemplos de uso de HOOKS */}
            {/* <Ejemplo1 /> */}
            {/* <Ejemplo2 /> */}
            {/* <MiComponenteConContexto /> */}
            {/* <Ejemplo4 nombre={'Martín'}>
               {/* Todo lo que hay aquí, es tratado como props.children */}
            {/* <h3>Contenido del props.chidren</h3> */}
            {/* </Ejemplo4> */}
            <EjemploMio />
         </header>

         <h1>Ejercicios: </h1>
         <div>
            <ContactoList />
         </div>
      </div>
   );
}

export default App;
