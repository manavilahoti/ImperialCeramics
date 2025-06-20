import React from 'react';
import i4 from '../../images/img4.jpeg';
import i9 from '../../images/img9.jpeg';
import i22 from '../../images/img22.jpeg';
import i28 from '../../images/img28.jpeg';
import i7 from '../../images/img4_copy.jpeg';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">

      <div className="relative w-full flex justify-center bg-indigo-900 text-white">
        <img src={i7} alt="Background" className="w-full object-cover opacity-80 h-60 md:h-96" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4 px-4">
          <h1 className="text-3xl md:text-4xl font-bold">ABOUT US</h1>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gray-300 p-5 md:p-10 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
          <img src={i9} alt="Vision" className="w-full md:w-1/2 rounded-lg shadow-md" />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-base md:text-xl text-justify">
              A global leader that provides continually innovating products and systems to deliver exceptional customer values committed to promoting integrated responsible behavior and value for social and environmental well-being.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white p-5 md:p-10 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["Passion", "Commitment", "Teamwork", "Customer Satisfaction", "Honesty", "Transparency", "Continuous Improvement"].map((value, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-300 flex items-center justify-center">
              <h3 className="text-lg font-bold">{value}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-gray-300 p-5 md:p-10 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row-reverse items-center gap-5 md:gap-10">
          <img src={i4} alt="Approach" className="w-full md:w-1/2 rounded-lg shadow-md" />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-base md:text-xl text-justify">
              For us, satisfied and loyal clientele is all a company needs to flourish in the market. Thus, we lay special emphasis on our production techniques, supply chain, quality parameters and above all the details that clients share with us.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white p-5 md:p-10 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
          <img src={i22} alt="Process" className="w-full md:w-1/2 rounded-lg shadow-md" />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-base md:text-xl text-justify">
              As a global leader, we are committed to continuous innovation in our products and systems, aiming to deliver exceptional customer values while promoting sustainable and responsible behavior.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-300 p-5 md:p-10 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row-reverse items-center gap-5 md:gap-10">
          <img src={i28} alt="Mission" className="w-full md:w-1/2 rounded-lg shadow-md" />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-base md:text-xl text-justify">
              To deliver superior value to our customers, shareholders, employees and society at large by optimum utilization of resources, adopting highest ethics, standards and sustainable environment-friendly procedures and practices.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
