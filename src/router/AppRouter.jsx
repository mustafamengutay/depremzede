import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Donation from '../pages/Donation';
import UnderDebrisList from '../pages/UnderDebrisList';
import FormSubmitted from '../pages/FormSubmitted';
import Form from '../pages/Form';
import DebrisFieldSection from '../components/form/sections/DebrisFieldSection';
import ExtraInformationSection from '../components/form/sections/ExtraInformationSection';
import VehicleSection from '../components/form/sections/VehicleSection';
import AccommodationSection from '../components/form/sections/AccommodationSection';
import AccommodationList from '../pages/AccommodationList';
import ManagerDashboard, { ManagerMenu } from '../pages/ManagerDashboard';

import OfficerDashboard, {
  OfficerMenu,
  OfficerInformation,
} from '../pages/OfficerDashboard';
import OfficersList from '../pages/OfficersList';
import InventoriesList from '../pages/InventoriesList';
import CreateOfficerForm from '../pages/CreateOfficerForm';
import OfficerRequests from '../pages/OfficerRequests';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/bagis" element={<Donation />} />
      <Route path="/enkaz-altinda-olanlar" element={<UnderDebrisList />} />
      <Route path="/konaklama-saglayanlar" element={<AccommodationList />} />
      <Route path="/form-gonderildi" element={<FormSubmitted />} />

      <Route path="/form" element={<Form />}>
        <Route
          path="enkaz-altinda"
          element={
            <DebrisFieldSection
              firstInputWidth={'184px'}
              secondInputWidth={'415px'}
            />
          }
        />
        <Route
          path="gida-yardimi"
          element={
            <ExtraInformationSection
              title="Gıda Yardımı Hakkında Bilgiler"
              altTitle="Gıda hakkında ek bilgiler ekleyebilirsiniz"
            />
          }
        />
        <Route
          path="giysi-yardimi"
          element={
            <ExtraInformationSection
              title="Giysi Yardımı Hakkında Bilgiler"
              altTitle="Giysi hakkında ek bilgiler ekleyebilirsiniz"
            />
          }
        />
        <Route
          path="konaklama-yardimi"
          element={
            <AccommodationSection
              firstInputWidth={'184px'}
              secondInputWidth={'415px'}
            />
          }
        />
        <Route
          path="is-araci-kullanabilirim"
          element={
            <VehicleSection
              firstInputWidth={'184px'}
              secondInputWidth={'415px'}
            />
          }
        />
      </Route>

      <Route path="/gorevli" element={<OfficerDashboard />}>
        <Route path="" element={<OfficerMenu />} />
        <Route path="bilgilerim" element={<OfficerInformation />} />
      </Route>

      <Route path="/yonetici" element={<ManagerDashboard />}>
        <Route path="" element={<ManagerMenu />} />
        <Route path="bilgilerim" element={<OfficerInformation />} />
      </Route>

      <Route path="/*" element={<NotFound />} />

      <Route path="/envanterler" element={<InventoriesList />} />
      <Route path="/gorevliler" element={<OfficersList />} />
      <Route path="/gorevli-olustur" element={<CreateOfficerForm />} />
      <Route path="/gorevli-istekleri" element={<OfficerRequests />} />
    </Routes>
  );
};

export default AppRouter;

// const routes = appRouterData.map(({ path, element }) => {
//   return <Route path={path} element={element} />;
// });
// return <Routes>{routes}</Routes>;
