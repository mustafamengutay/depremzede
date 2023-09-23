import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Donation from "./pages/Donation";
import UnderDebrisList from "./pages/UnderDebrisList";
import AccommodationList from "./pages/AccommodationList";
import Form from "./pages/Form";

import { FormProvider } from "./context/form/FormContext";
import FormSubmitted from "./pages/FormSubmitted";
import OfficerDashboard, { OfficerMenu, OfficerInformation } from "./pages/OfficerDashboard";

import DebrisFieldSection from "./components/formElements/DebrisFieldSection";
import ExtraInformationSection from "./components/formElements/ExtraInformationSection";
import AccommodationSection from "./components/formElements/AccommodationSection";
import VehicleSection from "./components/formElements/VehicleSection";
import NotFound from "./pages/NotFound";
import InventoriesList from "./pages/InventoriesList";
import OfficersList from "./pages/OfficersList";
import CreateOfficerForm from "./pages/CreateOfficerForm";
import ManagerDashboard, { ManagerMenu } from "./pages/ManagerDashboard";
import OfficerRequests from "./pages/OfficerRequests";

function App() {
  return (
    <FormProvider>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/bagis" element={<Donation />} />
            <Route path="/enkaz-altinda-olanlar" element={<UnderDebrisList />} />
            <Route path="/konaklama-saglayanlar" element={<AccommodationList />} />
            <Route path="/form-gonderildi" element={<FormSubmitted />} />

            <Route path="/form" element={<Form />}>
              <Route path="enkaz-altinda" element={<DebrisFieldSection
                firstInputWidth={'184px'}
                secondInputWidth={'415px'}
              />} />
              <Route path="gida-yardimi" element={<ExtraInformationSection
                title="Gıda Yardımı Hakkında Bilgiler"
                altTitle="Gıda hakkında ek bilgiler ekleyebilirsiniz"
              />} />
              <Route path="giysi-yardimi" element={<ExtraInformationSection
                title="Giysi Yardımı Hakkında Bilgiler"
                altTitle="Giysi hakkında ek bilgiler ekleyebilirsiniz"
              />} />
              <Route path="konaklama-yardimi" element={<AccommodationSection
                firstInputWidth={'184px'}
                secondInputWidth={'415px'}
              />} />
              <Route path="is-araci-kullanabilirim" element={<VehicleSection
                firstInputWidth={'184px'}
                secondInputWidth={'415px'}
              />} />
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
        </Router>
      </div>
    </FormProvider>
  );
}

export default App;