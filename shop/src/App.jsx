import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import Home from "./Pages/home";
import Footer from "./component/footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
