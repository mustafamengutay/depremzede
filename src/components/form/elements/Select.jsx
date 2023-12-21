import React from 'react';

const Select = ({ options, id, set }) => {
  return (
    <select
      className='flex h-10 w-full items-center justify-between whitespace-nowrap rounded-xl border border-input bg-transparent px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'
      onChange={(e) => set(e.target.value)}
      placeholder='400'
      value={id}
    >
      {options.map((option) => {
        return (
          <option value={Object.keys(option)[0]}>
            {Object.values(option)[0]}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
