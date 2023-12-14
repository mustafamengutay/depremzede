import React from 'react';

/**
 *
 * @summary Deprecated
 */
const Information = ({ name, address, city, email, phoneNo, status }) => {
  return (
    <div>
      <ul className='grid grid-cols-6 justify-items-center items-center text-base font-normal'>
        <li>{name}</li>
        <li>{address}</li>
        <li>{city}</li>
        <li>{email}</li>
        <li>{phoneNo}</li>
        <StatusTag statu={status} />
      </ul>
      <hr className='mt-6 mb-6' />
    </div>
  );
};

export const StatusTag = ({ statu }) => {
  if (statu) {
    return (
      <div className='w-28 flex justify-center bg-red-200 border-red-800 text-red-700 rounded-lg px-3 py-1'>
        <li className='list-none'>Aktif</li>
      </div>
    );
  } else {
    return (
      <div className='w-28 flex justify-center bg-green-200 text-green-800 rounded-lg px-3 py-1'>
        <li className='list-none'>Tamamlandı</li>
      </div>
    );
  }
};

export default Information;
