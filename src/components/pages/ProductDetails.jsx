import React, { useState } from 'react';
import p1 from '../../images/products/p1.jpeg';
import p2 from '../../images/products/p2.jpeg';
import p3 from '../../images/products/p3.jpeg';
import p4 from '../../images/products/p4.jpeg';
import p5 from '../../images/products/p5.jpeg';
import p6 from '../../images/products/p6.jpeg';
import p7 from '../../images/products/p7.jpeg';

const images = [
  {
    name: 'Disc Insulator',
    src: p1,
    specifications: [
      { name: 'Material', value: 'Porcelain' },
      { name: 'Profile', value: 'Normal & Anti fog' },
      { name: 'Mechanical Strength', value: 'Up to 160 kN' },
      { name: 'Creepage Distance', value: 'Up to 430mm' },
      { name: 'Applicable Standards', value: 'IS 731-1971, IEC-383' }
    ]
  },
  {
    name: 'Guy Strain Insulator',
    src: p2,
    specifications: [
      { name: 'Material', value: 'Porcelain' },
      { name: 'Application', value: 'Transmission line, Power line' },
      { name: 'Features', value: 'Easy To Install, Four Times Stronger' },
      { name: 'Rating', value: 'For use upto 33kV' },
      { name: 'Designation', value: 'Type A, B & C' },
      { name: 'Applicable Standards', value: 'IS 731-1971, IEC-383' }
    ]
  },
  {
    name: 'Pin Insulator',
    src: p3,
    specifications: [
      { name: 'Material', value: 'Porcelain' },
      { name: 'Color', value: 'Brown' },
      { name: 'Warranty', value: '1 year' },
      { name: 'Rating', value: 'For use upto 33kV' },
      { name: 'Mechanical Strength', value: '10 kN' },
      { name: 'Creepage Distance', value: 'Up to 1050mm' },
    ]
  },
  {
    name: 'Polymer Insulator',
    src: p4,
    specifications: [
      { name: 'Material', value: 'Porcelain' },
      { name: 'Shape', value: 'Disc' },
      { name: 'Application', value: 'Control Panels' },
      { name: 'Tensile Strength', value: '0-25Mpa' },
      { name: 'Features', value: 'Easy To Install, Sturdy Construction' },
      { name: 'Warranty', value: '1year' },
      { name: 'Temperature', value: 'High Temperature' },
    ]
  },
  {
    name: 'Post Insulator',
    src: p5,
    specifications: [
      { name: 'Tensile Strength', value: '50-75Mpa' },
      { name: 'Warranty', value: '1 year' },
      { name: 'Puncture Voltage', value: '0-50Kw' },
      { name: 'Rating', value: 'Upto 36 kV outdoor pedestal type' },
      { name: 'Creepage Distance', value: 'Upto 1100 mm' },
      { name: 'Applicable Standards', value: 'IS : 2544 - 1973' }
    ]
  },
  {
    name: 'Shackle Insulator',
    src: p6,
    specifications: [
      { name: 'Rating', value: 'For use in LT lines.' },
      { name: 'Types', value: 'As per customer requirement.' },
      { name: 'Size', value: 'Various sizes' },
      { name: 'Applicable Standards', value: 'IS : 1445 - 1977' },
      { name: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Insulator Bushings',
    src: p7,
    specifications: [
      { name: 'Rating', value: 'For use in LT lines.' },
      { name: 'Types', value: 'As per customer requirement.' },
      { name: 'Size', value: 'Various sizes' },
      { name: 'Applicable Standards', value: 'IS : 1445 - 1977' },
      { name: 'Warranty', value: '1 Year' }
    ]
  }
];

const Modal = ({ isOpen, onClose, imageIndex, imageName }) => {
  const image = images[imageIndex];
  
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}
      onClick={onClose} // Close modal on click anywhere on the screen
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-2 md:p-3 rounded-lg shadow-lg z-50" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <span className="sr-only">Close</span>
          <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold">{imageName}</h2>
        <div className="flex justify-center">
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full h-auto rounded-lg object-cover object-center"
          />
        </div>
        {image.details && (
          <p className="mt-2 md:mt-4 text-xs md:text-sm text-gray-600">{image.details}</p>
        )}
        {image.features && (
          <>
            <p className="mt-2 md:mt-4 text-xs md:text-sm font-semibold">Features</p>
            <p className="mt-1 md:mt-2 text-xs md:text-sm">{image.features}</p>
          </>
        )}
        {image.specifications && image.specifications.length > 0 && (
          <>
            <p className="mt-2 md:mt-4 text-xs md:text-sm font-semibold">Specifications</p>
            <div className="mt-2 md:mt-4">
              <table className="w-full">
                <tbody>
                  {image.specifications.map((specification, index) => (
                    <tr key={index}>
                      <td className="px-1 md:px-2 py-1 md:py-2 text-xs md:text-sm font-medium text-gray-700">{specification.name}</td>
                      <td className="px-1 md:px-2 py-1 md:py-2 text-xs md:text-sm text-gray-600">{specification.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImageName, setSelectedImageName] = useState('');

  const toggleModal = (index) => {
    setSelectedImageIndex(index);
    setSelectedImageName(images[index].name);
    setModalOpen(!modalOpen);
  };

  return (
    <div className="p-2 md:p-4">
      <div className="mb-8"></div> {/* Added more margin */}
      <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-8 text-gray-800 font-serif">Electrical Insulators</h2> {/* Changed font and added more margin */}
      <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-1 md:grid-cols-3"> {/* Increased gap between images */}
        {images.slice(0, 6).map((image, index) => (
          <div key={index} className="p-1 md:p-2 flex justify-center">
            <button
              onClick={() => toggleModal(index)}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <p className="text-sm font-semibold">{image.name}</p>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full max-h-full rounded-lg object-cover object-center"
              />
            </button>
          </div>
        ))}
      </div>
      <h2 className="my-20 text-lg md:text-xl font-bold mb-4 md:mb-8 text-gray-800 font-serif">Insulator Bushings</h2> 
      <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-1 md:grid-cols-3"> 
        {images.slice(6).map((image, index) => (
          <div key={index} className="p-1 md:p-2 flex justify-center">
            <button
              onClick={() => toggleModal(index + 6)}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <p className="text-sm font-semibold">{image.name}</p>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full rounded-lg object-cover object-center"
              />
            </button>
          </div>
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} imageIndex={selectedImageIndex} imageName={selectedImageName} />
    </div>
  );
};

export default Products;
