import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
import GreetingFunction from './components/pure/GreetingFunction';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* Componente pripio Greeting.jsx */}
            {/* <Greeting name="Israel" /> */}
            <GreetingFunction name="Israel" />
         </header>
      </div>
   );
}

export default App;
