import './App.css';
import { Button } from './components/button/button';
import Input from './components/input/input';

function App() {
  return (
    <div className="App">
      <h1>start</h1>

      <Button>Fon Radar</Button>
      <Input placeholder="Email adresi" label='email adresi' layout='vertical'/>
    </div>
  );
}

export default App;
