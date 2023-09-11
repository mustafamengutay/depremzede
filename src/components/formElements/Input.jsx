import PropTypes from 'prop-types';
import Label from './Label';

/**
 *
 * @param {string} title A text that is shown at the top of an input and as a placeholder.
 * @param {string} inputWidth
 * @param {string} altTitle A text that is shown at the bottom of an input.
 * @returns A form input.
 */
const Input = ({ title, altTitle, width = '', value, setValue }) => {
  const handleInputChange = (e) => {
    // TODO: Add validation
    setValue(e.target.value);
  };

  return (
    <div>
      <Label title={title} />
      <input
        style={{ width: width }}
        placeholder={title}
        type="text"
        value={value}
        onChange={handleInputChange}
        className={
          'my-1.5 focus:border-black flex h-10 w-75 rounded-xl border border-input bg-transparent px-3 py-1 text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
        }
      />
      <div className="text-slate-500 text-sm font-light leading-tight">
        {altTitle}
      </div>
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  altTitle: PropTypes.string,
};

export default Input;
