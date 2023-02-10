import "./App.css";
import { SearchPage } from "./pages/search-page/search-page";
import Header from "./pages/header/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchPage />
    </div>
  );
}

export default App;
