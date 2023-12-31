import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * @param {string} icon A path for an icon.
 * @param {string} title A title for the link.
 * @returns A Button-like link that can be used to direct people to a List based page.
 */
const InformationLink = ({ icon, title, width = '', route, onClick }) => {
  return (
    <Link
      onClick={onClick}
      className='btn-medium hover:bg-white-2 hover:shadow-inner transition-transform duration-250 transform hover:scale-95 hover:shadow-custom hover:animate-pulse-custom'
      to={route}
      style={{ width: width }}
    >
      <div className='relative h-full -tracking-4'>
        <img src={icon} alt='Donation icon' />
        <p className='absolute right-0 text-2xl whitespace-nowrap font-bold'>
          {title}
        </p>
      </div>
    </Link>
  );
};

InformationLink.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default InformationLink;
