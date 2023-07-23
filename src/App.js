import "./CSS/App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewReleases } from "./components/newReleases";
import { Popular } from "./components/popular";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewReleases />} />
          <Route path="/new-releases" element={<NewReleases />} />
          <Route path="/popular" element={<Popular />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
