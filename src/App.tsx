import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Recent from "./pages/Recent";
import Map from "./pages/Map";
import Upcoming from "./pages/Upcomming";
import Help from "./pages/Help";
import HelpStatus from "./pages/HelpStatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/map" element={<Map />} />
        <Route path="/upcomming" element={<Upcoming />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help-status" element={<HelpStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
