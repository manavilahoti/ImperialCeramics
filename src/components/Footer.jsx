import React from 'react';
import { Typography } from "@material-tailwind/react";

const GENERAL_LINKS = [
  { title: "Home", link: "/Home" },
  { title: "About Us", link: "/about" },
  { title: "Products", link: "/products" },
  { title: "Our Gallery", link: "/gallery" },
  { title: "Our Clients", link: "/clients" },
  { title: "Contact Us", link: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Quick Contact */}
        <div className="flex-1 space-y-4">
          <h3 className="text-lg font-semibold uppercase text-teal-400">Quick Contact</h3>
          <p className="font-semibold">Mr. Anand Lahoti</p>
          <p>E 247248, 248A, IGC Khara, Khara, Bikaner, Rajasthan - 334601, India</p>
          <p>Phone: +919001091703, +91 9829797674</p>
          <p>Email: info@imperialceramics.in</p>
        </div>

        {/* Quick Enquiry */}
        <form className="flex-1 space-y-4 bg-white p-6 rounded-lg shadow-md text-black w-full md:max-w-md">
          <h3 className="text-lg font-semibold uppercase text-teal-600 text-center">Quick Enquiry</h3>

          <input type="text" placeholder="Product / Service Looking for" className="w-full border rounded-md px-4 py-2" />
          <input type="text" placeholder="Your Name" className="w-full border rounded-md px-4 py-2" />
          <input type="email" placeholder="Email" className="w-full border rounded-md px-4 py-2" />
          <input type="text" placeholder="Country" className="w-full border rounded-md px-4 py-2" />
          <input type="tel" placeholder="Phone / Mobile" className="w-full border rounded-md px-4 py-2" />
          <textarea placeholder="Leave a Message for us" rows="3" className="w-full border rounded-md px-4 py-2"></textarea>

          <button type="submit" className="bg-blue-800 text-white w-full py-2 rounded-md hover:bg-blue-900">
            Send Message
          </button>
        </form>

        {/* General Links */}
        <div className="flex-1 space-y-4">
          <h3 className="text-lg font-semibold uppercase text-teal-400">General Links</h3>
          <ul className="space-y-2">
            {GENERAL_LINKS.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:underline">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
