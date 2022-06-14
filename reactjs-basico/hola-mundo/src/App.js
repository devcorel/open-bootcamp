import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
// import GreetingFunction from './components/pure/GreetingFunction';
import TaskListComponent from './components/container/TaskListComponent';
import { ContactoList } from './components/container/ContactoList';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* Componente pripio Greeting.jsx */}
            {/* <Greeting name="Israel" /> */}
            {/* <GreetingFunction name="Israel" /> */}
            <TaskListComponent />
         </header>

         <h1>Ejercicios: </h1>
         <div>
            <ContactoList />
         </div>
      </div>
   );
}

export default App;
