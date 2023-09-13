import { useEffect } from 'react';
import EmployeeDashboardLayout from '../components/layouts/EmployeeDashboardLayout';
import EmployeeSideMenu from '../components/employee/EmployeeSideMenu';

import officer_profil from '../assets/officer-profile.png';
import check from '../assets/check.svg';
import need from '../assets/need.svg';

import search from '../assets/search.svg';
import map from '../assets/map.svg';
import info from '../assets/info.svg';

import InformationLink from '../components/menu/InformationLink';
import SideMenuLink from '../components/menu/SideMenuLink';

const OfficerDashboard = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#141414';
  });

  return (
    <div className="flex flex-col items-center">
      <div className="w-[1300px] -tracking-2 mt-14 flex">
        <EmployeeSideMenu
          employeeImage={officer_profil}
          employeeName={'Ahmet Sezer'}
          jobType={'Görevli'}
        />

        <div class="divide-x">
          <div class="inline-block absolute top-0 h-screen min-h-[1em] w-[1px] self-stretch bg-[#F8F9FA] opacity-10"></div>
        </div>

        <div className="flex flex-col justify-center gap-16 ml-[70px]">
          <p className="text-white font-semibold text-2xl -tracking-2">
            İşlemlerim
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-6 ml-[90px]">
              <InformationLink
                icon={check}
                title="Depremzede Bilgi Doğrulama"
                width="646px"
              />
              <InformationLink
                icon={need}
                title="İhtiyaç İsteği"
                width="646px"
              />
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
