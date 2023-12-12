import React from 'react';
import edit from '../../assets/edit.svg';

const OfficerItem = React.memo(
  ({ id, name, surname, phoneNumber, email, birth, location, city }) => {
    return (
      <div>
        <ul className='grid grid-cols-8 justify-items-center items-center text-base font-normal whitespace-nowrap'>
          <li>{id}</li>
          <li>{name + ' ' + surname}</li>
          <li>{phoneNumber}</li>
          <li>{email}</li>
          <li>{birth}</li>
          <li>{location}</li>
          <li>{city}</li>
          <li>
            <button className='flex flex-col items-center justify-center h-8 w-16  py-2 px-4 bg-grey-1 hover:bg-black transition text-white rounded-full'>
              <img src={edit} width={14} height={14} alt='' />
            </button>
          </li>
        </ul>
        <hr className='my-6' />
      </div>
    );
  }
);

export default OfficerItem;
