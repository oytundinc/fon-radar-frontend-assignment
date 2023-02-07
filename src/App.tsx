import "./App.css";
import { Button } from "./components/button/button";
import InputPassword from "./components/input-password/input-password";
import Input from "./components/input/input";

function App() {
  return (
    <div className="App">
      <h1>start</h1>

      <InputPassword
        placeholder="Email adresi"
        label="email adresi"
        layout="horizontal"
      />
      <Button>Fon Radar</Button>
      <Input
        placeholder="Email adresi"
        label="email adresi"
        layout="vertical"
      />
    </div>
  );
}

export default App;
