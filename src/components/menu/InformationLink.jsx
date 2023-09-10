import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * @param {string} icon A path for an icon.
 * @param {string} title A title for the link.
 * @returns A Button-like link that can be used to direct people to a List based page.
 */
const InformationLink = ({ icon, title, route }) => {
  return (
    <Link className="btn-medium" to={route}>
      <div className="relative h-full -tracking-4">
        <img src={icon} alt="Donation icon" />
        <p className="absolute right-0 text-2xl whitespace-nowrap font-bold">
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
