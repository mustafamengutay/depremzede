import React, { useEffect, useState } from 'react';
import InventoryItem from './InventoryItem';
import data from '../../data/inventories.json';

const InventoryList = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    setInventories(data);
  }, []);

  return (
    <div>
      {inventories.map((inventory, index) => {
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
