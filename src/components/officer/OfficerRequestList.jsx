import React, { useContext, useEffect, useState } from 'react';
import inventoryRequests from '../../data/inventoryRequests.json';
import FormContext from '../../context/form/FormContext';
import OfficerRequestItem from './OfficerRequestItem';

const OfficerRequestList = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    setInventories(inventoryRequests);
  });

  const { searchBarValue } = useContext(FormContext);

  const filteredInventory = inventories.filter((inventory) => {
    if (searchBarValue === '') {
      return inventory;
    } else {
      const info = inventory.inventoryName + ' ' + inventory.category;
      return info.toLowerCase().includes(searchBarValue);
    }
  });

  return (
    <div>
      {filteredInventory.map((inventory, index) => {
        return (
          <OfficerRequestItem
            key={index}
            officerName={inventory.name}
            inventoryName={inventory.inventoryName}
            category={inventory.category}
            stock={inventory.stock}
            location={inventory.location}
          />
        );
      })}
    </div>
  );
};

export default OfficerRequestList;
