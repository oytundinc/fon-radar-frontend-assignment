import "./App.css";
import WrappedSelect from "./components/select/select";
import { LoginPage } from "./pages/login-page/login-page";

function App() {
  return (
    <div className="App">
      <LoginPage />
      <WrappedSelect />
    </div>
  );
}

export default App;
