import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/nav";
import Card2 from "./components/pusatPembelajaran/card2/card2"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Navbar />} />
      <Route path="/card" element={< Card2 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
