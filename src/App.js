import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UnderDebrisForm from './pages/UnderDebrisForm';
import FoodAidForm from './pages/FoodAidForm';
import ClothingAidForm from "./pages/ClothingAidForm";
import AccommodationForm from "./pages/AccommodationForm";
import VehicleForm from "./pages/VehicleForm";
import Donation from "./pages/Donation";
import UnderDebrisList from "./pages/UnderDebrisList";
import AccommodationList from "./pages/AccommodationList";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/enkaz-altinda" element={<UnderDebrisForm />} />
          <Route path="/gida-yardimi" element={<FoodAidForm />} />
          <Route path="/giysi-yardimi" element={<ClothingAidForm />} />
          <Route path="/konaklama-yardimi" element={<AccommodationForm />} />
          <Route path="/is-araci-kullanabilirim" element={<VehicleForm />} />
          <Route path="/bagis" element={<Donation />} />
          <Route path="/enkaz-altinda-olanlar" element={<UnderDebrisList />} />
          <Route path="/konaklama-saglayanlar" element={<AccommodationList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;