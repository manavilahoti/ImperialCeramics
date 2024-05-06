import React from 'react';
import { Typography } from "@material-tailwind/react";
import './footer.css';
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
        <footer className="bg-gray-900 text-white ">
            <div className="mx-auto max-w-7xl px-8 py-12 flex flex-col md:flex-row justify-between items-start">

                {/* Quick Contact column */}
                <div className="flex flex-col space-y-4">
                    <Typography variant="base" color="teal" className="font-semibold uppercase text-lg">
                        Quick Contact
                    </Typography>
                    <div className="flex flex-col items-start ml-1">
                        <Typography variant="base" className="text-base font-semibold">Mr. Anand Lahoti</Typography>
                        <div className="flex flex-col space-y-1">
                            <Typography variant="base" className="text">E 247248, 248A, IGC Khara,</Typography>
                            <Typography variant="base" className="text-sm">Khara, Bikaner, Rajasthan - 334601,</Typography>
                            <Typography variant="base" className="text-sm">India</Typography>
                        </div>
                        <Typography variant="base" className="text-sm mt-1">9001091703, 9829797674</Typography>
                    </div>
                </div>

                {/* Form */}
                <form className="flex flex-col space-y-4 md:w-1/2">
                    <Typography variant="base" color="teal" className="font-semibold uppercase text-lg text-center">
                        Quick Enquiry
                    </Typography>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input type="text" placeholder="Product / Service Looking for" className="form-input" />
                        <input type="text" placeholder="Your Name" className="form-input" />
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input type="email" placeholder="Email" className="form-input" />
                        <input type="text" placeholder="Country" className="form-input" />
                        
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input type="tel" placeholder="Phone / Mobile" className="form-input" />
                        <textarea placeholder="Leave a Message for us" className="form-input" rows="3"></textarea>
                    </div>
                    <button type="submit" className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors duration-300">Send Message</button>
                </form>

                {/* General Links */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 md:items-center">
                    <div>
                        <Typography
                            variant="base"
                            color="teal"
                            className="font-semibold uppercase text-lg"
                        >
                            General Links
                        </Typography>
                        <ul className="space-y-1">
                            {GENERAL_LINKS.map((item, index) => (
                                <li key={index}>
                                    <Typography as="a" href={item.link} className="hover:underline">
                                        {item.title}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
