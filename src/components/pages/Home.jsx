import React, { useState } from 'react';
import i1 from '/Users/manavilahoti/Desktop/demo/src/images/img1.jpeg';
import i2 from '/Users/manavilahoti/Desktop/demo/src/images/img 2.jpeg';
import i3 from '/Users/manavilahoti/Desktop/demo/src/images/img3.jpeg';
import i4 from '/Users/manavilahoti/Desktop/demo/src/images/img 4.jpeg';
import i5 from '/Users/manavilahoti/Desktop/demo/src/images/img5.jpeg';
import i6 from '/Users/manavilahoti/Desktop/demo/src/images/img6.jpeg';
import i7 from '/Users/manavilahoti/Desktop/demo/src/images/img7.jpeg';
import i8 from '/Users/manavilahoti/Desktop/demo/src/images/img8.jpeg';
import i9 from '/Users/manavilahoti/Desktop/demo/src/images/img9.jpeg';

export function Home() {
  const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className=" ">
      <div className=" ">
        {/* Carousel */}
        <div className="relative mb-12 bg-white shadow-xl overflow-hidden w-full max-h-120">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-r-full bg-gray-800 text-white" onClick={previousImage}>
            &lt;
          </button>
          <div className="flex">
            {images.map((image, index) => {
              const adjustedIndex = (currentImageIndex + index) % images.length;
              return (
                <div key={index} className="w-1/3 flex-shrink-0 mr-4" style={{ display: index >= 0 && index < 3 ? 'block' : 'none', marginTop: '20px' }}>
                  <img src={images[adjustedIndex]} alt={`Image ${adjustedIndex + 1}`} className="w-full h-full" style={{ marginTop: '20px' }} />
                </div>
              );
            })}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-l-full bg-gray-800 text-white" onClick={nextImage}>
            &gt;
          </button>
        </div>

        {/* Welcome Text */}
        <div className="text-center p-8 bg-gray-200 text-black rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-3">WELCOME TO OUR WEBSITE</h2>
          <p className="text-lg leading-relaxed text-justify">
            Imperial Porcelain Private Limited is an accredited manufacturer, exporter, and supplier of a variety of insulators and bushings of both porcelain and polymer type. The range we offer encompasses disc insulators, guy strain insulators, insulator bushings, pin insulators, post insulators, and shackle insulators. Our offerings are designed and precisely engineered at our own facility. For us, satisfied and loyal clientele is all a company needs to flourish in the market. Thus, we lay special emphasis on our production techniques, supply chain, quality parameters, and above all, the details that clients share with us. When you get associated with us, we assure streamlined trade operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
