
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Estados from "./components/Estados";
import Rutas from "./routes/Rutas";
import Menu from "./components/inicio/Menu";

function App() {

  return (
    <Router>
    <div className="container-fluid">
    <Menu/>
    <Rutas/>
  
      </div>
    </Router>
  );
}

export default App;
