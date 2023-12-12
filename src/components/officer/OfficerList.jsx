import React, { useContext, useEffect, useState } from 'react';
import data from '../../data/officers.json';
import OfficerItem from './OfficerItem';
import FormContext from '../../context/form/FormContext';

const OfficerList = () => {
  const [officers, setOfficers] = useState([]);
  useEffect(() => {
    setOfficers(data);
  });

  const { searchBarValue } = useContext(FormContext);

  const filteredOfficers = officers.filter((officer) => {
    if (searchBarValue === '') {
      return officer;
    } else {
      const info = officer.id + ' ' + officer.name + ' ' + officer.surname;
      return info.toLowerCase().includes(searchBarValue);
    }
  });

  return (
    <div className='w-[1160px]'>
      {filteredOfficers.map((officer) => {
        return (
          <OfficerItem
            key={officer.id}
            id={officer.id}
            name={officer.name}
            surname={officer.surname}
            phoneNumber={officer.phoneNumber}
            email={officer.email}
            birth={officer.birth}
            location={officer.location}
            city={officer.city}
          />
        );
      })}
    </div>
  );
};

export default OfficerList;
