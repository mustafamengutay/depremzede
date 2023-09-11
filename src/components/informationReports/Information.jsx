import React from 'react';

const Information = ({ name, address, city, email, phoneNo, status }) => {
  return (
    <div>
      <ul className="grid grid-cols-6 justify-items-center items-center text-base font-normal">
        <li>{name}</li>
        <li>{address}</li>
        <li>{city}</li>
        <li>{email}</li>
        <li>{phoneNo}</li>
        <StatusTag statu={status} />
      </ul>
      <hr className="mt-6 mb-6" />
    </div>
  );
};

export const StatusTag = ({ statu }) => {
  if (statu) {
    return (
      <div className="w-[120px] flex justify-center bg-red-200 border border-red-700 text-red-700 rounded-[4px] px-3 py-1">
        <li>Aktif</li>
      </div>
    );
  } else {
    return (
      <div className="w-[120px] flex justify-center bg-green-200 border border-green-700 text-green-700 rounded-[4px] px-3 py-1">
        <li>Tamamlandı</li>
      </div>
    );
  }
};

export default Information;
