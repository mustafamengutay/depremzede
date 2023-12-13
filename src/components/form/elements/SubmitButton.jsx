import React from 'react';

/**
 *
 * @returns A Submit button can be used inside a form.
 */
const SubmitButton = (handleClick) => {
  return (
    <button
      className='w-48.5 h-10 text-base text-white rounded-xl bg-grey-1 hover:bg-black px-4 py-2	transition duration-300 ease-in-out'
      onClick={handleClick}
    >
      Gönder
    </button>
  );
};

export default SubmitButton;
