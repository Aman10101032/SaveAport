// src/App.jsx
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";  
import History from "../src/pages/History";  
import SAR from "./pages/SAR";
import SeasonSAR from "./pages/sar/SeasonSAR";
import YearSAR from './pages/sar/YearSAR';
import Solution from "../src/pages/Solution";  

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-orange-50 to-red-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/sar" element={<SAR />} />
            <Route path="/sar/:season" element={<SeasonSAR />} />
            <Route path="/sar/:season/:month" element={<YearSAR />} />
            <Route path="/solution" element={<Solution />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;