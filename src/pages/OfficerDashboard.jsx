import { useEffect } from 'react';
import OfficerSideMenu from '../components/officer/OfficerSideMenu';

import officer_profil from '../assets/officer-profile.png';
import check from '../assets/check.svg';

import search from '../assets/search.svg';
import map from '../assets/map.svg';
import info from '../assets/info.svg';

import tent from '../assets/home.svg';
import clothing from '../assets/clothing-dash.svg';
import food from '../assets/utensils.svg';
import pharmacy from '../assets/pharmacy.svg';

import InformationLink from '../components/menu/InformationLink';
import SideMenuLink from '../components/menu/SideMenuLink';
import HelpLink from '../components/menu/HelpLink';
import { Outlet } from 'react-router-dom';
import { OfficerTitle } from '../components/officer/OfficerAvatar';
import { setBackgroundColorBlack } from '../utils/BackgroundColorUtils';

const OfficerDashboard = () => {
  useEffect(() => {
    setBackgroundColorBlack();
  });

  return (
    <div className="container max-w-dashboard h-screen flex items-center justify-between">
      <OfficerSideMenu
        officerImage={officer_profil}
        officerName={'Ahmet Sezer'}
        jobType={'Gorevli'}
        routeAddress={'/gorevli'}
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

export const OfficerInformation = ({
  officerName,
  id,
  birth,
  sex,
  from,
  location,
  jobType,
}) => {
  return (
    <div className="w-[550px] h-max">
      <div className="flex items-center gap-6 mb-12">
        <p className="text-white font-semibold text-2xl">{officerName}</p>
        <OfficerTitle jobType={jobType} />
      </div>
      <div className="grid grid-cols-1 gap-y-6">
        <hr classNamez="border-[#E9ECEF] w-full border-t-[0.5px]" />
        <div className="text-white flex items-center gap-2">
          <p>ID:</p>
          <p className="font-semibold text-xl">{id}</p>
        </div>
        <hr classNamez="border-[#E9ECEF] w-full border-t-[0.5px]" />
        <div className="text-white flex items-center gap-2">
          <p>Doğum Tarihi:</p>
          <p className="font-semibold text-xl">{birth}</p>
        </div>
        <hr classNamez="border-[#E9ECEF] w-full border-t-[0.5px]" />
        <div className="text-white flex items-center gap-2">
          <p>Cinsiyet:</p>
          <p className="font-semibold text-xl">{sex}</p>
        </div>
        <hr classNamez="border-[#E9ECEF] w-full border-t-[0.5px]" />
        <div className="text-white flex items-center gap-2">
          <p>Geldiği Şehir:</p>
          <p className="font-semibold text-xl">{from}</p>
        </div>
        <hr classNamez="border-[#E9ECEF] w-full border-t-[0.5px]" />
        <div className="text-white flex items-center gap-2">
          <p>Görevli Olduğu Bölge:</p>
          <p className="font-semibold text-xl">{location}</p>
        </div>
        <hr classNamez="border-[#E9ECEF] w-full border-t-[0.5px]" />
      </div>
    </div>
  );
};

export const OfficerMenu = () => {
  return (
    <div className="flex flex-col justify-center gap-16">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-6 ">
          <InformationLink
            icon={check}
            title="Depremzede Bilgi Doğrulama"
            width="650px"
          />
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <HelpLink icon={tent} title="Çadır İsteği" width="313px" />
              <HelpLink icon={clothing} title="Giysi İsteği" width="313px" />
            </div>
            <div className="flex gap-6">
              <HelpLink icon={food} title="Gıda İsteği" width="313px" />
              <HelpLink
                icon={pharmacy}
                title="Tıbbi Malzeme İsteği"
                width="313px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerDashboard;
