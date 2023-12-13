import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import FormContext from '../../context/form/FormContext';

/**
 *
 * @param {string} title A text that is shown at the top of an input and as a placeholder.
 * @param {string} inputWidth The width of the input box.
 * @returns A search bar.
 */
const SearchBar = ({ title, width = '' }) => {
  const { searchBarValue, setSearchBarValue } = useContext(FormContext);

  const handleTextChange = (e) => {
    // TODO: add search bar feature
    setSearchBarValue(e.target.value);
  };

  return (
    <div>
      <input
        style={{ width: width }}
        placeholder={title}
        type='text'
        value={searchBarValue}
        onChange={handleTextChange}
        className={
          'my-1.5 focus:border-black flex h-10 w-75 rounded-xl border border-input bg-transparent px-3 py-1 text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
        }
      />
    </div>
  );
};

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  altTitle: PropTypes.string,
};

export default SearchBar;
