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
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AddInventoryDialog from '../components/dialog/AddInventoryDialog';

const ManagerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setBackgroundColorBlack();

    if (localStorage.getItem('government') !== 'true') {
      navigate('/');
    }
  });

  return (
    <div className='container max-w-dashboard h-screen md:flex items-center justify-between md:mt-0 mt-8 md:w-auto w-[680px]'>
      {location.pathname === '/yonetici' ||
      location.pathname === '/yonetici/bilgilerim' ? (
        <OfficerSideMenu
          officerImage={officer_profil}
          officerName={localStorage.getItem('name')}
          routeAddress={'/yonetici'}
        />
      ) : (
        ''
      )}

      <Outlet />

      {location.pathname === '/yonetici' ||
      location.pathname === '/yonetici/bilgilerim' ? (
        <div className='md:flex hidden flex-col gap-8'>
          <SideMenuLink icon={search} title='Arama' />
          <SideMenuLink icon={map} title='Harita' />
          <SideMenuLink icon={info} title='Bilgilendirme' />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export const ManagerMenu = () => {
  return (
    <div className='flex flex-col justify-center gap-16'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-6  mx-4  md:mt-0 mt-8'>
          <AddInventoryDialog />
          <div className='flex flex-col gap-6'>
            <div className='flex  gap-6  flex-row'>
              <HelpLink
                icon={inventory}
                title='Envanterler'
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
            <div className='flex gap-6 flex-row'>
              <HelpLink
                icon={createOfficer}
                title='Görevli Oluştur'
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
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
