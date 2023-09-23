import { useEffect } from 'react';

import HelpLink from '../components/menu/HelpLink';
import OfficerSideMenu from '../components/officer/OfficerSideMenu';
import SideMenuLink from '../components/menu/SideMenuLink';

import search from '../assets/search.svg';
import map from '../assets/map.svg';
import info from '../assets/info.svg';

import assignOfficer from '../assets/assignOfficer.svg';
import createOfficer from '../assets/createOfficer.svg';
import inventory from '../assets/inventory.svg';
import officer_profil from '../assets/officer-profile.png';
import officerRequests from '../assets/officerRequests.svg';
import { setBackgroundColorBlack } from '../utils/BackgroundColorUtils';
import { Outlet } from 'react-router-dom';

const ManagerDashboard = () => {
  useEffect(() => {
    setBackgroundColorBlack();
  });

  return (
    <div className="container max-w-dashboard h-screen flex items-center justify-between">
      <OfficerSideMenu
        officerImage={officer_profil}
        officerName={'Ahmet Sezer'}
        jobType={'Yonetici'}
        routeAddress={'/yonetici'}
      />

      <Outlet />

      <div className="flex flex-col gap-8">
        <SideMenuLink icon={search} title="Arama" />
        <SideMenuLink icon={map} title="Harita" />
        <SideMenuLink icon={info} title="Bilgilendirme" />
      </div>
    </div>
  );
};

export const ManagerMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <HelpLink icon={inventory} title="Envanter" width="313px" />
        <HelpLink
          icon={assignOfficer}
          title="Görevlilere Bölge Atama"
          width="313px"
        />
      </div>
      <div className="flex gap-6">
        <HelpLink
          icon={createOfficer}
          title="Görevli Oluştur / Sil"
          width="313px"
        />
        <HelpLink
          icon={officerRequests}
          title="Görevli İstekleri"
          width="313px"
        />
      </div>
    </div>
  );
};

export default ManagerDashboard;
