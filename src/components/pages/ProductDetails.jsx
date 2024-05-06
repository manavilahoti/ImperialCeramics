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
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg z-50" onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-lg md:text-xl font-semibold">{imageName}</h2>
        <div>
          <img src={image.src} alt={imageName} className="max-w-full h-auto mx-auto rounded-lg object-cover" />
        </div>
        <div className="mt-4">
          <table className="w-full text-sm text-left text-gray-500 mx-auto">
            {image.specifications.map((spec, index) => (
              <tr key={index} className="bg-white border-b">
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {spec.name}
                </th>
                <td className="px-2 py-4">{spec.value}</td>
              </tr>
            ))}
          </table>
        </div>
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
    <div className="p-4 md:p-6 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 font-sans">Our Products</h2> {/* Changed to a more modern sans-serif font */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg rounded-lg bg-white">
            <button onClick={() => toggleModal(index)} className="w-full h-full flex flex-col items-center justify-center p-4">
              <img src={image.src} alt={image.name} className="transition-transform duration-300 ease-in-out transform hover:scale-105 mb-3" />
              <div className="text-center">
                <p className="font-semibold text-gray-700">{image.name}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} imageIndex={selectedImageIndex} imageName={selectedImageName} />
    </div>
  );
};

export default Products;

