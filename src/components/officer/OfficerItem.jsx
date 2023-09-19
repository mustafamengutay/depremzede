import React from 'react';

const OfficerItem = React.memo(
  ({ id, name, surname, sex, birth, location, city }) => {
    return (
      <div>
        <ul className="grid grid-cols-7 justify-items-center items-center text-base font-normal whitespace-nowrap">
          <li>{id}</li>
          <li>{name}</li>
          <li>{surname}</li>
          <li>{sex}</li>
          <li>{birth}</li>
          <li>{location}</li>
          <li>{city}</li>
        </ul>
        <hr className="my-6" />
      </div>
    );
  }
);

export default OfficerItem;
