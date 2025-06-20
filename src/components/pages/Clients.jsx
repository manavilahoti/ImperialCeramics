import React from 'react';
import cl1 from '../../images/clients/cl1.jpeg';
import cl2 from '../../images/clients/cl2.png';
import cl3 from '../../images/clients/cl3.webp';
import cl4 from '../../images/clients/cl4.jpeg';
import cl5 from '../../images/clients/cl5.avif';
import cl6 from '../../images/clients/cl6.jpeg';
import cl7 from '../../images/clients/cl7.png';
import cl8 from '../../images/clients/cl8.jpeg';
import cl9 from '../../images/clients/cl9.png';
import cl10 from '../../images/clients/cl10.jpeg';
import cl11 from '../../images/clients/cl11.jpeg';
import cl12 from '../../images/clients/cl12.webp';
import cl13 from '../../images/clients/cl13.jpeg';
import cl14 from '../../images/clients/cl14.gif';
import cl15 from '../../images/clients/cl15.png';
import cl16 from '../../images/clients/cl16.png';
import cl17 from '../../images/clients/cl17.png';
import cl18 from '../../images/clients/cl18.jpeg';
import cl19 from '../../images/clients/cl19.jpg';
import cl20 from '../../images/clients/cl20.jpeg';
import i7 from '../../images/img5_copy.jpeg';

export default function Clients() {
  const data = [
    cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10,
    cl11, cl12, cl13, cl14, cl15, cl16, cl17, cl18, cl19, cl20
  ];

  return (
    <div>
      <div className="relative w-full flex justify-center bg-indigo-900 text-white">
        <img src={i7} alt="Clients Banner" className="w-full object-cover opacity-70 h-60 md:h-96" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">CLIENTS</h1>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {data.map((image, index) => (
            <div key={index} className="p-2">
              <img src={image} alt={`client-${index}`} className="w-full h-auto object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
