import './App.css';
import StatutoryTable from './components/StatutoryTable';
import InputBasic from "./components/InputBasic";
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <InputBasic/>
      <StatutoryTable/>
    </div>
  );
}

export default App;
