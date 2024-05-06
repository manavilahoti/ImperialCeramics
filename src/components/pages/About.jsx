import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-600 text-white"> {/* Updated to lighter gradient */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto p-10">
          <h1 className="text-5xl font-bold mb-12 text-center">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-500 p-6 rounded-lg text-justify"> {/* Lighter card background for content */}
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-xl mb-6">
                Imperial Porcelain Private Limited is an accredited manufacturer, exporter, and supplier of a variety of insulators and bushings. Since our incorporation in 2004, we have focused on crafting high-quality products engineered at our own facility.
              </p>
              <p className="text-xl">
                Headquartered in Rajasthan, India, we serve a global clientele and adhere strictly to ISO 9001:2015 standards, ensuring top-tier business practices.
              </p>
            </div>
            <div className="bg-gray-500 p-6 rounded-lg text-justify">
              <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
              <p className="text-xl mb-6">
                As a global leader, we are committed to continuous innovation in our products and systems, aiming to deliver exceptional customer values while promoting sustainable and responsible behavior.
              </p>
              <p className="text-xl">
                We strive to enhance shareholder value and contribute positively to society through the optimum utilization of resources and adherence to the highest ethical standards.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="bg-gray-500 p-6 rounded-lg text-justify">
              <h2 className="text-3xl font-bold mb-6">Core Values</h2>
              <ul className="list-disc pl-8 text-xl space-y-2">
                <li>Passion</li>
                <li>Commitment</li>
                <li>Teamwork</li>
                <li>Customer Satisfaction</li>
                <li>Honesty</li>
                <li>Transparency</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
            <div className="bg-gray-500 p-6 rounded-lg text-justify">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="list-disc pl-8 text-xl space-y-2">
                <li>Up-to-date product catalogs</li>
                <li>Leading technology in product development</li>
                <li>Guaranteed on-time shipments</li>
                <li>Custom solutions for product development, packaging, and labeling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
