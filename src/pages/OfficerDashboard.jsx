import { useContext, useEffect } from 'react';
import OfficerSideMenu from '../components/officer/OfficerSideMenu';

import officer_profil from '../assets/officer-profile.png';
import check from '../assets/check.svg';

import search from '../assets/search.svg';
import map from '../assets/map.svg';
import info from '../assets/info.svg';

import InformationLink from '../components/menu/InformationLink';
import SideMenuLink from '../components/menu/SideMenuLink';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { OfficerTitle } from '../components/officer/OfficerAvatar';
import { setBackgroundColorBlack } from '../utils/BackgroundColorUtils';

import TentDialog from '../components/dialog/TentDialog';
import ClothesDialog from '../components/dialog/ClothesDialog';
import FoodAidDialog from '../components/dialog/FoodAidDialog';
import MedicalDialog from '../components/dialog/MedicalDialog';
import AuthContext from '../context/auth/AuthContext';

const OfficerDashboard = () => {
  const { officerData } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setBackgroundColorBlack();

    if (localStorage.getItem('officer') !== 'true') {
      navigate('/');
    }
  }, []);

  return (
    <div className='container max-w-dashboard h-screen md:flex items-center justify-between md:mt-0 mt-8 md:w-auto w-[680px]'>
      {location.pathname === '/gorevli' ||
      location.pathname === '/gorevli/bilgilerim' ? (
        <OfficerSideMenu
          officerImage={officer_profil}
          officerName={localStorage.getItem('name')}
          storage={'officer'}
          routeAddress={'/gorevli'}
        />
      ) : (
        ''
      )}

      <Outlet />

      {location.pathname === '/gorevli' ||
      location.pathname === '/gorevli/bilgilerim' ? (
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

export const OfficerInformation = () => {
  const Uid = localStorage.getItem('Uid');
  const name = localStorage.getItem('name');
  const surname = localStorage.getItem('surname');
  const dataOfBirth = localStorage.getItem('dataOfBirth');
  const comeFromCity = localStorage.getItem('comeFromCity');
  const resposibleFromCity = localStorage.getItem('resposibleFromCity');

  return (
    <div className='w-[550px] h-max mx-4 md:ml-0 ml-16'>
      <div className='flex items-center gap-6 mb-6'>
        <p className='text-white font-semibold text-2xl'>
          {name + ' ' + surname}
        </p>
        <OfficerTitle jobType={'Görevli'} />
      </div>
      <div className='grid grid-cols-1 gap-y-6'>
        <hr classNamez='border-[#E9ECEF] w-full border-t-[0.5px]' />
        <div className='text-white flex items-center gap-2'>
          <p>ID:</p>
          <p className='font-semibold text-xl'>{Uid}</p>
        </div>
        <hr classNamez='border-[#E9ECEF] w-full border-t-[0.5px]' />
        <div className='text-white flex items-center gap-2'>
          <p>Doğum Tarihi:</p>
          <p className='font-semibold text-xl'>{dataOfBirth}</p>
        </div>
        <hr classNamez='border-[#E9ECEF] w-full border-t-[0.5px]' />
        <div className='text-white flex items-center gap-2'>
          <p>Geldiği Şehir:</p>
          <p className='font-semibold text-xl'>{comeFromCity}</p>
        </div>
        <hr classNamez='border-[#E9ECEF] w-full border-t-[0.5px]' />
        <div className='text-white flex items-center gap-2'>
          <p>Görevli Olduğu Bölge:</p>
          <p className='font-semibold text-xl'>{resposibleFromCity}</p>
        </div>
        <hr classNamez='border-[#E9ECEF] w-full border-t-[0.5px]' />
      </div>
    </div>
  );
};

export const OfficerMenu = () => {
  return (
    <div className='flex flex-col justify-center gap-16'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-6  mx-4 md:mt-0 mt-8'>
          <InformationLink
            icon={check}
            title='Depremzede Bilgi Doğrulama'
            width=' 650px'
            route={'/depremzede-onayla'}
          />
          <div className='flex flex-col gap-6'>
            <div className='flex  gap-6 flex-row'>
              <TentDialog />
              <ClothesDialog />
            </div>
            <div className='flex gap-6 flex-row'>
              <FoodAidDialog />
              <MedicalDialog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfficerDashboard;
