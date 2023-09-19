import React, { useEffect, useState } from 'react';
import data from '../../data/officers.json';
import OfficerItem from './OfficerItem';

const OfficerList = () => {
  const [officers, setOfficers] = useState([]);
  useEffect(() => {
    setOfficers(data);
  });

  return (
    <div>
      {officers.map((officer) => {
        return (
          <OfficerItem
            id={officer.id}
            name={officer.name}
            surname={officer.surname}
            sex={officer.sex}
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
