import React, { useState } from 'react';
import p1 from '../../images/products/p1.jpeg';
import p2 from '../../images/products/p2.jpeg';
import p3 from '../../images/products/p3.jpeg';
import p4 from '../../images/products/p4.jpeg';
import p5 from '../../images/products/p5.jpeg';
import p6 from '../../images/products/p6.jpeg';
import p7 from '../../images/products/p7.jpeg';
import i7 from '../../images/img6_copy.jpeg';

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
const ProductCard = ({ product, onClick }) => (
  <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img className="rounded-t-lg w-full h-80 object-cover" src={product.src} alt={product.name} />
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{product.description}</p>
      <button onClick={onClick} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, product }) => (
  <div
    className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}
    onClick={onClose}
  >
    <div className="fixed inset-0 bg-black opacity-50"></div>
    <div
      className="bg-white w-full max-w-screen-sm md:max-w-screen-md p-4 md:p-6 rounded-lg shadow-lg z-50 overflow-y-auto max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
      style={{ textAlign: 'center' }}
    >
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h2 className="text-lg md:text-xl font-semibold">{product.name}</h2>

      <div className="my-4">
        <img
          src={product.src}
          alt={product.name}
          className="w-full h-auto max-h-72 object-contain mx-auto rounded-lg"
        />
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 mx-auto min-w-[300px]">
          <tbody>
            {product.specifications.map((spec, index) => (
              <tr key={index} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  {spec.name}
                </th>
                <td className="px-2 py-2">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(!modalOpen);
  };

  return (
    <div className="bg-gray-30">
      <div className="relative w-full flex justify-center bg-indigo-900 text-white">
          <img src={i7} alt="Background" className="w-full object-cover opacity-60 h-96" />
          <div className="absolute top-0 left-0 w-full h-96 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold">PRODUCTS</h1>
          </div>
        </div>
      <div className="text-center mb-8">
        
      </div>
      <div className="grid p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((product, index) => (
          <div key={index} className="relative overflow-hidden max-w-xs">
            <ProductCard product={product} onClick={() => toggleModal(product)} />
          </div>
        ))}
      </div>
      {modalOpen && <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} product={selectedProduct} />}
    </div>
  );
};

export default Products;
