import PropTypes from 'prop-types';

/**
 *
 * @param {string} title A text that is shown at the top of an other component.
 * @returns A label can be used for inputs.
 */
const Label = ({ title }) => {
  return (
    <label
      htmlFor="input"
      className="text-black text-sm font-medium leading-tight"
    >
      {title}
    </label>
  );
};

Label.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Label;
