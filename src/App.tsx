import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DetailPage } from "./pages/detail-page/detail-page";
import { LoginPage } from "./pages/login-page/login-page";
import { CustomerPage } from "./pages/customer-page/customer-page";
import LayoutContainer from "./components/layout/layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LayoutContainer>
          <Routes>
            <Route>
              <Route path="/" element={<LoginPage />} />
              <Route path="/customer-page" element={<CustomerPage />} />
              <Route path="/detail-page" element={<DetailPage />} />
            </Route>
          </Routes>
        </LayoutContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
