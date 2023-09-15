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

const OfficerDashboard = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#141414';
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[1300px] -tracking-2 flex">
        <OfficerSideMenu
          officerImage={officer_profil}
          officerName={'Ahmet Sezer'}
          jobType={'Görevli'}
        />

        <div className="divide-x">
          <div className="inline-block absolute top-0 h-screen min-h-[1em] w-[1px] self-stretch bg-[#F8F9FA] opacity-10"></div>
        </div>

        <div className="flex flex-col justify-center gap-16 ml-[70px]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-6 ml-[90px]">
              <InformationLink
                icon={check}
                title="Depremzede Bilgi Doğrulama"
                width="650px"
              />
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <HelpLink icon={tent} title="Çadır İsteği" width="313px" />
                  <HelpLink
                    icon={clothing}
                    title="Giysi İsteği"
                    width="313px"
                  />
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
            <div className="mt-14 flex flex-col gap-8 ml-36">
              <SideMenuLink icon={search} title="Arama" />
              <SideMenuLink icon={map} title="Harita" />
              <SideMenuLink icon={info} title="Bilgilendirme" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerDashboard;
