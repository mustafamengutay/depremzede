import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * @param {string} icon A path for an icon.
 * @param {string} title A title for the link.
 * @returns A Button-like link that can be used to direct people to a List based page.
 */
const InformationLink = ({ icon, title, route }) => {
  return (
    <Link
      className="md:mt-0 mt-96 btn-medium hover:bg-white-2 hover:shadow-inner transition-all duration-300 md:w-16 text-center"
      to={route}
      style={{ width: "100%" }}
    >
      <div className="relative h-full -tracking-4 ">
        <img className="inline md:block" src={icon} alt="Donation icon" />
        <p className="absolute right-0 left-0 md:text-2xl md:whitespace-nowrap md:font-bold font-semibold text-4 whitespace-wrap mx-auto">
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
