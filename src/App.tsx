import "./App.css";
import { LoginPage } from "./pages/login-page/login-page";
import Header from "./pages/header/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <LoginPage />
    </div>
  );
}

export default App;
