import React from 'react';

const InventoryItem = React.memo(({ inventoryName, category, stock, unit }) => {
  // TODO: Buttons will have an event for POST Requests!

  return (
    <div>
      <ul className="grid grid-cols-5 justify-items-center items-center text-base font-normal whitespace-nowrap">
        <li>{inventoryName}</li>
        <li>{category}</li>
        <li>{stock}</li>
        <li>{unit}</li>
        <li className="flex gap-4">
          <button className="flex flex-col items-center justify-center h-8 w-20  py-2 px-4 bg-grey-1 hover:bg-black transition text-white rounded-full">
            Ekle
          </button>
          <button className="flex flex-col items-center justify-center h-8 w-20  py-2 px-4 border border-grey-1 text-black hover:bg-black transition hover:text-white rounded-full">
            Çıkar
          </button>
        </li>
      </ul>
      <hr className="my-6" />
    </div>
  );
});

export default InventoryItem;
