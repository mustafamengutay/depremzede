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
    <div className='container max-w-dashboard h-screen flex items-center justify-between mt-8 mx-4  min-w-[600px]'>
      <OfficerSideMenu
        officerImage={officer_profil}
        officerName={'Ahmet Sezer'}
        jobType={'Yonetici'}
        routeAddress={'/yonetici'}
      />

      <Outlet />

      <div className='flex flex-col gap-8 '>
        <SideMenuLink icon={search} title='Arama' />
        <SideMenuLink icon={map} title='Harita' />
        <SideMenuLink icon={info} title='Bilgilendirme' />
      </div>
    </div>
  );
};

export const ManagerMenu = () => {
  return (
    <div className='flex flex-col gap-6 sm:flex-row mx-2'>
      <div className='flex flex-col gap-6 sm:flex-1  md:mt-0  mt-96'>
        <HelpLink
          icon={inventory}
          title='Envanter'
          width='313px'
          route='/envanterler'
        />
        <HelpLink
          icon={assignOfficer}
          title='Görevli Listesi'
          width='313px'
          route='/gorevliler'
        />
      </div>
      <div className='flex flex-col gap-6 sm:flex-1'>
        <HelpLink
          icon={createOfficer}
          title='Görevli Oluştur / Sil'
          width='313px'
          route='/gorevli-olustur'
        />
        <HelpLink
          icon={officerRequests}
          title='Görevli İstekleri'
          width='313px'
          route='/gorevli-istekleri'
        />
      </div>
    </div>
  );
};

export default ManagerDashboard;
