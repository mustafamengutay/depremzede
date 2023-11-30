import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import FormContext from '../../../context/form/FormContext';

const Input = ({ title, altTitle, width = '', inputType }) => {
  const [value, setValue] = useState('');

  const { dispatch } = useContext(FormContext);

  const handleTextChange = (e) => {
    setValue(e.target.value);
    dispatch({ type: 'SET_INPUT', name: inputType, payload: e.target.value });
  };

  return (
    <div>
      <label
        htmlFor="input"
        className="text-black text-sm font-medium leading-tight"
      >
        {title}
      </label>
      <input
        style={{ width: width }}
        placeholder={title}
        type="text"
        value={value}
        onChange={handleTextChange}
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
