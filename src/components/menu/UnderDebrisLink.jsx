import { Link } from 'react-router-dom';
import megaphone from '../../assets/megaphone.svg';

/**
 *
 * @returns A button-like link that is used to direct people to a form that helps people to make
 * an announcement for people who are under debris.
 */
const UnderDebrisLink = ({ route, onClick }) => {
  return (
    <Link
      onClick={onClick}
      className='btn-big hover:bg-white-2 hover:shadow-inner transition-transform duration-250 transform hover:scale-95 hover:shadow-custom hover:animate-pulse-custom'
      to={route}
    >
      <div className='relative h-full flex items-start justify-between'>
        <div className='w-full flex justify-between items-center'>
          <img src={megaphone} alt='' />
          <div className='flex flex-col items-center justify-between h-full'>
            <p className='font-bold text-2xl w-[174px] h-[54px] mr-2'>
              Ben/Tanıdığım Enkaz Altında
            </p>
            <div className='bg-black whitespace-nowrap text-white px-8 py-2 rounded-full absolute bottom-0'>
              Yardım Formu
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default UnderDebrisLink;
