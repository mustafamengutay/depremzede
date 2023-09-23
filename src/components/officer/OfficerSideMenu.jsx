import officerMenu from '../../assets/islemler.svg';
import officerInfo from '../../assets/bilgiler.svg';
import officerExit from '../../assets/cikis.svg';

import OfficerAvatar from './OfficerAvatar';
import { useLocation, Link } from 'react-router-dom';

const OfficerSideMenu = ({
  officerImage,
  officerName,
  jobType,
  routeAddress,
}) => {
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return '#2C2C2C';
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-7 text-white mb-20">Depremzede</h1>
        <div className="flex flex-col items-center gap-2">
          <OfficerAvatar
            image={officerImage}
            name={officerName}
            jobType={jobType}
          />
          <ul className="flex flex-col items-center gap-7 text-white mt-16 w-full">
            <Link
              className="hover:bg-grey-1 w-full px-8 py-4 rounded-5 flex items-center gap-4 cursor-pointer transition"
              style={{
                backgroundColor: pathMatchRoute(routeAddress),
              }}
              to={routeAddress}
            >
              <img src={officerMenu} alt="Officer Menu" />
              <p className="font-light">İşlemlerim</p>
            </Link>
            <Link
              className="hover:bg-grey-1 px-8 py-4 rounded-5 flex items-center gap-4 cursor-pointer transition"
              style={{
                backgroundColor: pathMatchRoute(`${routeAddress}/bilgilerim`),
              }}
              to={`${routeAddress}/bilgilerim`}
            >
              <img src={officerInfo} alt="Officer Information" />
              <p className="font-light">Bilgilerim</p>
            </Link>
            <Link
              className="mt-20 hover:bg-grey-1 px-8 py-4 rounded-5 flex items-center gap-4 cursor-pointer transition"
              to="/"
            >
              <img src={officerExit} alt="Officer Exit" />
              <p className="font-light">Çıkış Yap</p>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfficerSideMenu;
