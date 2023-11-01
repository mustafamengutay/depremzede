import React from 'react';

const Select = () => {
  return (
    <select className="border border-input rounded-xl px-3 py-1 text-base h-10 bg-white">
      <option value="default">İsimleri Sırala</option>
      <option value="bk">Büyükten Küçüğe</option>
      <option value="kb">Küçükten Büyüğe</option>
    </select>
  );
};

export default Select;
