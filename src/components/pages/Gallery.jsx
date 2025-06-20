import React from 'react';
import i1 from '../../images/img1.jpeg';
import i2 from '../../images/img2.jpeg';
import i3 from '../../images/img3.jpeg';
import i4 from '../../images/img4.jpeg';
import i5 from '../../images/img5.jpeg';
import i6 from '../../images/img6.jpeg';
import i7 from '../../images/img7.jpeg';
import i8 from '../../images/img8.jpeg';
import i9 from '../../images/img9.jpeg';
import i10 from '../../images/img10.jpeg';
import i11 from '../../images/img11.jpeg';
import i12 from '../../images/img12.jpeg';
import i13 from '../../images/img13.jpeg';
import i14 from '../../images/img14.jpeg';
import i15 from '../../images/img15.jpeg';
import i16 from '../../images/img16.jpeg';
import i17 from '../../images/img17.jpeg';
import i18 from '../../images/img18.jpeg';
import i19 from '../../images/img19.jpeg';
import i20 from '../../images/img20.jpeg';
import i21 from '../../images/img21.jpeg';
import i22 from '../../images/img22.jpeg';
import i23 from '../../images/img23.jpeg';
import i24 from '../../images/img24.jpeg';
import i25 from '../../images/img25.jpeg';
import i26 from '../../images/img26.jpeg';
import i27 from '../../images/img27.jpeg';
import i00 from '../../images/img9_copy.jpeg';


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
    <div className="">
      <div className="relative w-full flex justify-center bg-indigo-900 text-white">
          <img src={i00} alt="Background" className="w-full object-cover opacity-40 h-96" />
          <div className="absolute top-0 left-0 w-full h-96 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold">GALLERY</h1>
          </div>
        </div>
      <div className="text-center mb-8"></div>
      <div className="mb-8"></div>
      <div className="p-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
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
