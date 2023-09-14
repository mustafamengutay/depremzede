import employeeMenu from '../../assets/islemler.svg';
import employeeInfo from '../../assets/bilgiler.svg';
import employeeExit from '../../assets/cikis.svg';

import EmployeeAvatar from './EmployeeAvatar';

const EmployeeSideMenu = ({ employeeImage, employeeName, jobType }) => {
  return (
    <div className="w-[270px] flex flex-col items-start">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-7 text-white mb-20">Depremzede</h1>
        <div className="flex flex-col items-center gap-2">
          <EmployeeAvatar
            image={employeeImage}
            name={employeeName}
            jobType={jobType}
          />
          <ul className="flex flex-col items-center gap-7 text-white mt-16 w-full">
            <li className="hover:bg-grey-1 w-full px-8 py-4 rounded-5 flex items-center gap-4 cursor-pointer transition">
              <img src={employeeMenu} alt="Employee Menu" />
              <p className="font-light">İşlemlerim</p>
            </li>
            <li className="hover:bg-grey-1 px-8 py-4 rounded-5 flex items-center gap-4 cursor-pointer transition">
              <img src={employeeInfo} alt="Employee Information" />
              <p className="font-light">Bilgilerim</p>
            </li>
            <li className="mt-16 hover:bg-grey-1 px-8 py-4 rounded-5 flex items-center gap-4 cursor-pointer transition">
              <img src={employeeExit} alt="Employee Exit" />
              <p className="font-light">Çıkış Yap</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSideMenu;
