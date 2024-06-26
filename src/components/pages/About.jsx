import React from 'react';
import i4 from '/Users/manavilahoti/Desktop/demo/src/images/img 4.jpeg';
import i9 from '/Users/manavilahoti/Desktop/demo/src/images/img9.jpeg';
import i22 from '/Users/manavilahoti/Desktop/demo/src/images/img22.jpeg';
import i28 from '/Users/manavilahoti/Desktop/demo/src/images/img28.jpeg';
import i7 from '/Users/manavilahoti/Desktop/demo/src/images/img 4 copy.jpeg';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">

      <div className="">
        <div className="relative w-full flex justify-center bg-indigo-900 text-white">
          <img src={i7} alt="Background" className="w-full object-cover opacity-80 h-96" />
          <div className="absolute top-0 left-0 w-full h-96 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold">ABOUT US</h1>
          </div>
        </div>


        {/* Vision Section */}
        <div className="bg-gray-300 p-10 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src={i9} alt="Our Approach" className="w-full md:w-1/2 rounded-lg shadow-md" />
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-justify">
                A global leader that provides continually innovating products and systems to deliver exceptional customer values committed to promoting integrated responsible behavior and value for social and environmental well-being.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 mb-12 ">
          <h2 className="text-3xl font-bold mb-6 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3 text-center">
            {/* Each value card */}
            {["Passion", "Commitment", "Teamwork", "Customer Satisfaction", "Honesty", "Transparency", "Continuous Improvement"].map((value, index) => (
              <div key={index} className="flex justify-center items-center p-6 border border-gray-300 rounded-lg bg-gray-300" style={{ height: "10rem", width: "10rem" }}>
                <h3 className="text-xl font-bold mb-4">{value}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Approach Section */}
        <div className="bg-gray-300 p-10  mb-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <img src={i4} alt="Our Approach" className="w-full md:w-1/2 rounded-lg shadow-md" />
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-xl text-justify">
                For us, satisfied and loyal clientele is all a company needs to flourish in the market. Thus, we lay special emphasis on our production techniques, supply chain, quality parameters and above all the details that clients share with us. When you get associated with us, we assure streamlined trade operations.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white p-10  mb-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src={i22} alt="Our Approach" className="w-full md:w-1/2 rounded-lg shadow-md" />
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-justify">
                As a global leader, we are committed to continuous innovation in our products and systems, aiming to deliver exceptional customer values while promoting sustainable and responsible behavior.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 p-10 ">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <img src={i28} alt="Our Approach" className="w-full md:w-1/2 rounded-lg shadow-md" />
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-justify">
                To deliver superior value to our customers, shareholders, employees and society at large by optimum utilization of resources, adopting highest ethics, standards and sustainable environment-friendly procedures and practices.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}


      </div>
    </div>
  );
};

export default AboutUs;
