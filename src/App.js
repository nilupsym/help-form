import "./App.css";
import { Help } from "./components/Help/Help";
import { PersonalData } from "./components/PersonalData/PersonalData";

function App() {
  return (
    <div className="App">
      <PersonalData />
      <Help />
    </div>
  );
}

export default App;
