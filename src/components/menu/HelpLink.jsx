import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * @param {string} icon A path for an icon.
 * @param {string} title A title for the link.
 * @returns A Button-like link that can be used to direct people to a Help page.
 */
const HelpLink = ({ icon, title }) => {
  // TODO: InformationLink should get a direction path in the future.
  return (
    <Link className="btn-small">
      <div className="h-full flex flex-col justify-center items-center gap-2 -tracking-4">
        <img src={icon} />
        <p className="font-semibold text-4 whitespace-nowrap">{title}</p>
      </div>
    </Link>
  );
};

HelpLink.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HelpLink;