import React, { useContext, useEffect, useState } from 'react';
import InventoryItem from './InventoryItem';
import data from '../../data/inventories.json';
import FormContext from '../../context/form/FormContext';

const InventoryList = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    setInventories(data);
  }, []);

  const { searchBarValue } = useContext(FormContext);

  const filteredInventories = inventories.filter((inventory) => {
    if (searchBarValue === '') {
      return inventory;
    } else {
      return inventory.name.toLowerCase().includes(searchBarValue);
    }
  });

  return (
    <div className='w-[1160px]'>
      {filteredInventories.map((inventory, index) => {
        return (
          <InventoryItem
            key={index}
            inventoryName={inventory.name}
            category={inventory.category}
            stock={inventory.stock}
            unit={inventory.unit}
          />
        );
      })}
    </div>
  );
};

export default InventoryList;
