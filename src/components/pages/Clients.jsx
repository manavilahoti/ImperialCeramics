import React from 'react';
import cl1 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl1.jpeg';
import cl2 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl2.png';
import cl3 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl3.webp';
import cl4 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl4.jpeg';
import cl5 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl5.avif';
import cl6 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl6.jpeg';
import cl7 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl7.png';
import cl8 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl8.jpeg';
import cl9 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl9.png';
import cl10 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl10.jpeg';
import cl11 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl11.jpeg';
import cl12 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl12.webp';
import cl13 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl13.jpeg';
import cl14 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl14.gif';
import cl15 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl15.png';
import cl16 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl16.png';
import cl17 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl17.png';
import cl18 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl18.jpeg';
import cl19 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl19.jpg';
import cl20 from '/Users/manavilahoti/Desktop/demo/src/images/clients/cl20.jpeg';

export default function DefaultGallery() {
  const data = [
    { imageLink: cl1 },
    { imageLink: cl2 },
    { imageLink: cl3 },
    { imageLink: cl4 },
    { imageLink: cl5 },
    { imageLink: cl6 },
    { imageLink: cl7 },
    { imageLink: cl8 },
    { imageLink: cl9 },
    { imageLink: cl11 },
    { imageLink: cl13 },
    { imageLink: cl14 },
    { imageLink: cl15 },
    { imageLink: cl10 },
    { imageLink: cl12 },
    { imageLink: cl16 },
    { imageLink: cl17 },
    { imageLink: cl18 },
    { imageLink: cl19 },
    { imageLink: cl20},
  ];

  return (
    <div className="p-4">
      <div className="mb-8"></div>
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-7">
          {data.map(({ imageLink }, index) => (
            <div key={index} className="p-2">
              <img
                className="w-full h-full "
                src={imageLink}
                alt={`gallery-photo-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
