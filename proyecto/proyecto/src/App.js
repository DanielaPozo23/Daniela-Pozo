//import logo from './logo.svg';
import './App.css';
import Otro from "./Otro";
import Formulariocss from './Formulariocss';
import Formularioboot from './components/Formularioboot';
function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
  
      <Otro />
      <Formulariocss/>
      <div className='container-fluid p-3'></div>
      <Formularioboot/>
    </div>
  );
}

export default App;
