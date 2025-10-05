// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import History from "./pages/History";
import SAR from "./pages/SAR";
import SeasonSAR from "./pages/sar/SeasonSAR";
import YearCharts from "./pages/charts/YearCharts";
import Solution from "./pages/Solution";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen gradient-bg">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/sar" element={<SAR />} />
            <Route path="/sar/:season" element={<SeasonSAR />} />
            <Route path="/sar/:season/:month" element={<YearCharts />} />
            <Route path="/solution" element={<Solution />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;