import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Donation from '../pages/Donation';
import UnderDebrisList from '../pages/UnderDebrisList';
import FormSubmitted from '../pages/FormSubmitted';
import AccommodationList from '../pages/AccommodationList';
import ManagerDashboard, { ManagerMenu } from '../pages/ManagerDashboard';

import OfficerDashboard, {
  OfficerMenu,
  OfficerInformation,
} from '../pages/OfficerDashboard';
import OfficersList from '../pages/OfficersList';
import InventoriesList from '../pages/InventoriesList';
import CreateOfficerForm from '../pages/forms/CreateOfficerForm';
import OfficerRequests from '../pages/OfficerRequests';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';

import UnderDebrisForm from '../pages/forms/UnderDebrisForm';
import AccomodationForm from '../pages/forms/AccomodationForm';
import ClothesForm from '../pages/forms/ClothesForm';
import FoodAidForm from '../pages/forms/FoodAidForm';
import VehicleForm from '../pages/forms/VehicleForm';
import VictimConfirmation from '../pages/VictimConfirmation';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/enkaz-altinda' element={<UnderDebrisForm />} />
      <Route path='/konaklama-yardimi' element={<AccomodationForm />} />
      <Route path='/gida-yardimi' element={<FoodAidForm />} />
      <Route path='/giysi-yardimi' element={<ClothesForm />} />
      <Route path='/is-araci-kullanabilirim' element={<VehicleForm />} />

      <Route exact path='/' element={<Home />} />
      <Route path='/giris-yap' element={<Login />} />

      <Route path='/bagis' element={<Donation />} />
      <Route path='/enkaz-altinda-olanlar' element={<UnderDebrisList />} />
      <Route path='/konaklama-saglayanlar' element={<AccommodationList />} />
      <Route path='/form-gonderildi' element={<FormSubmitted />} />

      <Route path='/gorevli' element={<OfficerDashboard />}>
        <Route path='' element={<OfficerMenu />} />
        <Route path='bilgilerim' element={<OfficerInformation />} />
      </Route>

      <Route path='/yonetici' element={<ManagerDashboard />}>
        <Route path='' element={<ManagerMenu />} />
        <Route path='bilgilerim' element={<OfficerInformation />} />
      </Route>

      <Route path='/*' element={<NotFound />} />

      <Route path='/envanterler' element={<InventoriesList />} />
      <Route path='/gorevliler' element={<OfficersList />} />
      <Route path='/gorevli-olustur' element={<CreateOfficerForm />} />
      <Route path='/gorevli-istekleri' element={<OfficerRequests />} />
      <Route path='/depremzede-onayla' element={<VictimConfirmation />} />
    </Routes>
  );
};

export default AppRouter;
