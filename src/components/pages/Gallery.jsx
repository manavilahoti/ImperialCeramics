import React from 'react';
import i1 from '/Users/manavilahoti/Desktop/demo/src/images/img1.jpeg';
import i2 from '/Users/manavilahoti/Desktop/demo/src/images/img 2.jpeg';
import i3 from '/Users/manavilahoti/Desktop/demo/src/images/img3.jpeg';
import i4 from '/Users/manavilahoti/Desktop/demo/src/images/img 4.jpeg';
import i5 from '/Users/manavilahoti/Desktop/demo/src/images/img5.jpeg';
import i6 from '/Users/manavilahoti/Desktop/demo/src/images/img6.jpeg';
import i7 from '/Users/manavilahoti/Desktop/demo/src/images/img7.jpeg';
import i8 from '/Users/manavilahoti/Desktop/demo/src/images/img8.jpeg';
import i9 from '/Users/manavilahoti/Desktop/demo/src/images/img9.jpeg';
import i10 from '/Users/manavilahoti/Desktop/demo/src/images/img10.jpeg';
import i11 from '/Users/manavilahoti/Desktop/demo/src/images/img11.jpeg';
import i12 from '/Users/manavilahoti/Desktop/demo/src/images/img12.jpeg';
import i13 from '/Users/manavilahoti/Desktop/demo/src/images/img13.jpeg';
import i14 from '/Users/manavilahoti/Desktop/demo/src/images/img14.jpeg';
import i15 from '/Users/manavilahoti/Desktop/demo/src/images/img15.jpeg';
import i16 from '/Users/manavilahoti/Desktop/demo/src/images/img16.jpeg';
import i17 from '/Users/manavilahoti/Desktop/demo/src/images/img17.jpeg';
import i18 from '/Users/manavilahoti/Desktop/demo/src/images/img18.jpeg';
import i19 from '/Users/manavilahoti/Desktop/demo/src/images/img19.jpeg';
import i20 from '/Users/manavilahoti/Desktop/demo/src/images/img20.jpeg';
import i21 from '/Users/manavilahoti/Desktop/demo/src/images/img21.jpeg';
import i22 from '/Users/manavilahoti/Desktop/demo/src/images/img22.jpeg';
import i23 from '/Users/manavilahoti/Desktop/demo/src/images/img23.jpeg';
import i24 from '/Users/manavilahoti/Desktop/demo/src/images/img24.jpeg';
import i25 from '/Users/manavilahoti/Desktop/demo/src/images/img25.jpeg';
import i26 from '/Users/manavilahoti/Desktop/demo/src/images/img26.jpeg';
import i27 from '/Users/manavilahoti/Desktop/demo/src/images/img27.jpeg';


export default function DefaultGallery() {
  const data = [
    { imageLink: i1 },
    { imageLink: i2 },
    { imageLink: i3 },
    { imageLink: i4 },
    { imageLink: i5 },
    { imageLink: i6 },
    { imageLink: i7 },
    { imageLink: i8 },
    { imageLink: i9 },
    { imageLink: i11 },
    { imageLink: i13 },
    { imageLink: i14 },
    { imageLink: i15 },
    { imageLink: i16 },
    { imageLink: i18 },
    { imageLink: i19 },
    { imageLink: i20 },
    { imageLink: i21 },
    { imageLink: i22 },
    { imageLink: i23 },
    { imageLink: i24 },
    { imageLink: i25 },
    { imageLink: i26 },
    { imageLink: i27 },
    { imageLink: i11 },
    { imageLink: i10 },
    { imageLink: i17 },
    { imageLink: i12 },
  ];

  return (
    <div className="p-4">
      <div className="mb-8"></div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {data.map(({ imageLink }, index) => (
          <div key={index} className="p-2">
            <img
              className="w-full max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt={`gallery-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
