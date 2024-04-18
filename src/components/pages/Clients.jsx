import React from 'react';
import c1 from '/Users/manavilahoti/Desktop/demo/src/images/c1.jpeg';
import c2 from '/Users/manavilahoti/Desktop/demo/src/images/c2.jpeg';
import c3 from '/Users/manavilahoti/Desktop/demo/src/images/c3.jpeg';
import c4 from '/Users/manavilahoti/Desktop/demo/src/images/c4.jpeg';
import c5 from '/Users/manavilahoti/Desktop/demo/src/images/c5.jpeg';
import c6 from '/Users/manavilahoti/Desktop/demo/src/images/c6.jpeg';
import c7 from '/Users/manavilahoti/Desktop/demo/src/images/c7.jpeg';
import c8 from '/Users/manavilahoti/Desktop/demo/src/images/c8.jpeg';
import c9 from '/Users/manavilahoti/Desktop/demo/src/images/c9.jpeg';
import c10 from '/Users/manavilahoti/Desktop/demo/src/images/c10.jpeg';
import c11 from '/Users/manavilahoti/Desktop/demo/src/images/c11.jpeg';
import c12 from '/Users/manavilahoti/Desktop/demo/src/images/c12.jpeg';
import c13 from '/Users/manavilahoti/Desktop/demo/src/images/c13.jpeg';
import c14 from '/Users/manavilahoti/Desktop/demo/src/images/c14.jpeg';
import c15 from '/Users/manavilahoti/Desktop/demo/src/images/c15.jpeg';

export default function DefaultGallery() {
  const data = [
    { imageLink: c1 },
    { imageLink: c2 },
    { imageLink: c3 },
    { imageLink: c4 },
    { imageLink: c5 },
    { imageLink: c6 },
    { imageLink: c7 },
    { imageLink: c8 },
    { imageLink: c9 },
    { imageLink: c11 },
    { imageLink: c13 },
    { imageLink: c14 },
    { imageLink: c15 },
    { imageLink: c10 },
    { imageLink: c12 },
  ];

  return (
    <div className="p-4">
      <div className="mb-8"></div>
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-7">
          {data.map(({ imageLink }, index) => (
            <div key={index} className="p-2">
              <img
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-auto md:h-auto rounded-lg object-center"
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
