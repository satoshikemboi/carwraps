
import React from 'react';

const itemList = [
  { id: 1, iconUrl: './audi.png' },
  { id: 2, iconUrl: './mercedes.png' },
  { id: 3, iconUrl: 'volkswagen.png'},
  { id: 4, iconUrl: './bmw.png' },
  { id: 5, iconUrl: './ford.png' },
  { id: 6, iconUrl: './mazda.png' },
  { id: 7, iconUrl: './toyota.png' },
  { id: 8, iconUrl: './tesla.png' },
  { id: 9, iconUrl: './honda.png' },
  { id: 10, iconUrl: './nissan.png' },
  { id: 11, iconUrl: './chevrolet.png' },
  { id: 12, iconUrl: './hyundai1.png' },
  { id: 13, iconUrl: './kia.png' },
  { id: 14, iconUrl: './volvo.png' },
  { id: 15, iconUrl: './jaguar.png' },
  { id: 16, iconUrl: './landrover.png' },
  { id: 17, iconUrl: './porsche.png' },
  { id: 18, iconUrl: './ferrari.png' },
  { id: 19, iconUrl: './lamborghini.png' },
  { id: 20, iconUrl: './mclaren.png' },
  { id: 21, iconUrl: './suzuki.png' },
  { id: 22, iconUrl: './subaru.png' },
  { id: 23, iconUrl: './jeep.png' },
];

function CarSelector() {
  return (
    <div className="p-6 w-42 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800">
        Brand
      </h3>
      
      <ul className="list-none p-0 space-y-3">
        {itemList.map(item => (
          <li 
            key={item.id} 
            className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
          >
            <img 
              src={item.iconUrl} 
              alt={`${item.name} icon`}
              className="w-12 h-12 object-contain flex shrink-0" 
            />
            
            <span className="text-gray-700 text-lg font-medium">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarSelector;