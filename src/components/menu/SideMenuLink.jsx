import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 *
 * @param {string} icon A path for an icon.
 * @param {string} title A title for the link.
 * @param {string} action An action can take 'up' or 'down' as a value for scrolling.
 * @returns A side bar menu link that is used as a helper for displaying information.
 */
const SideMenuLink = ({ icon, title = '', action = '' }) => {
  const handleClick = () => {
    if (action.toLowerCase() === 'up') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link
      className="flex flex-col justify-center items-center gap-2"
      onClick={handleClick}
    >
      <div className="bg-grey-1 w-[55px] h-[55px] rounded-full flex justify-center items-center">
        <img src={icon} alt="" />
      </div>
      <p className="text-white text-base font-light">{title}</p>
    </Link>
  );
};

SideMenuLink.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default SideMenuLink;
