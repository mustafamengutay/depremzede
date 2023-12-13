import PropTypes from 'prop-types';

const TextArea = ({ title, altTitle, setState }) => {
  const handleTextareaChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor='input'
        className='text-black text-sm font-medium leading-tight'
      >
        {title}
      </label>
      <textarea
        placeholder={title}
        onChange={handleTextareaChange}
        className='focus:border-black my-1.5 flex md:min-w-[632px]  min-w-[300px] min-h-20 rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
      ></textarea>
      <div className='text-grey-2 text-sm font-light leading-tight'>
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
