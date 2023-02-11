import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DetailPage } from "./pages/detail-page/detail-page";
import { LoginPage } from "./pages/login-page/login-page";
import { SearchPage } from "./pages/search-page/search-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="/detail-page" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
