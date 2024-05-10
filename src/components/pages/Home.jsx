import React from 'react';
import { Link } from 'react-router-dom'; 
import i7 from '/Users/manavilahoti/Desktop/demo/src/images/ii.png'; 

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="relative w-full flex justify-center bg-indigo-900 text-white">
        <img src={i7} alt="Background" className="w-full object-cover opacity-60 h-96" />
        <div className="absolute top-0 left-0 w-full h-96 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold">IMPERIAL CERAMICS PVT. LTD.</h1>
          <p className="px-4 text-center">
            Leading the industry in high-quality ceramic insulators and bushings with a commitment to sustainable manufacturing practices.
          </p>
        </div>
      </div>

      
      <div className="container mx-auto py-10 px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6 text-gray-800">
          {[
            { title: "Innovative Design", description: "Our products feature state-of-the-art designs that enhance performance and durability in all operating conditions." },
            { title: "Sustainability Focus", description: "We are dedicated to reducing environmental impact through innovative manufacturing processes and sustainable materials." },
            { title: "Quality Assurance", description: "Every product undergoes rigorous testing to exceed international quality standards." },
            { title: "Custom Solutions", description: "We specialize in custom designs to meet unique operational requirements, providing flexibility and precision." }
          ].map((service, index) => (
            <div key={index} className="p-5 bg-white rounded-lg shadow-md">
              <h3 className="font-bold text-lg">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials and Client Feedback */}
      <div className="bg-blue-100 py-10 px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Client Testimonials</h2>
        <div className="flex flex-wrap justify-center items-center text-gray-800">
          <div className="m-4 p-5 bg-white rounded-lg shadow-lg">
            <blockquote>"Imperial Ceramics has consistently delivered high-quality products that our projects rely on. Their attention to detail and customer service is unmatched."</blockquote>
            <p className="mt-4 font-bold">- John Doe, Engineering Manager</p>
          </div>
          <div className="m-4 p-5 bg-white rounded-lg shadow-lg">
            <blockquote>"We value our partnership with Imperial Ceramics due to their commitment to sustainability and innovation. They are true leaders in the industry!"</blockquote>
            <p className="mt-4 font-bold">- Jane Smith, Procurement Officer</p>
          </div>
        </div>
      </div>

     
      <div className="container mx-auto py-10 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Operations?</h2>
        <p className="mb-6">Contact us today to learn more about our products and how we can assist in achieving your project goals with our top-tier ceramic solutions.</p>
        <Link to="/contact"> 
          <button className="bg-blue-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Get in Touch</button>
        </Link>
      </div>

    </div>
  );
}

export default Home;
