import PropTypes from 'prop-types';
import Label from './Label';

/**
 *
 * @param {string} title A text that is shown at the top of an text area and as a placeholder.
 * @param {string} altTitle A text that is shown at the bottom of a text area.
 * @returns A form text area.
 */
const TextArea = ({ title, altTitle }) => {
  return (
    <div>
      <Label title={title} />
      <textarea
        placeholder={title}
        className="focus:border-black my-1.5 flex min-w-[632px] min-h-20 rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      ></textarea>
      <div className="text-grey-2 text-sm font-light leading-tight">
        {altTitle}
      </div>
    </div>
  );
};

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  altTitle: PropTypes.string,
};

export default TextArea;
