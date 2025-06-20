import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6eedbke',      // 🔁 Replace with your EmailJS Service ID
        'template_75hpn94',     // 🔁 Replace with your EmailJS Template ID
        form.current,
        '7eEb-TeCYoAHOerpP'       // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatusMessage('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatusMessage('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className="bg-gray-100 dark:bg-slate-800" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-6 text-center md:mx-auto md:mb-12">
          <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
            Feel free to contact us if you have any queries.
          </p>
        </div>

        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Contact Info */}
            <div className="pr-6">
              <ul>
                <li className="flex mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                    {/* Location Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 21a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Our Address</h3>
                    <p className="text-gray-600 dark:text-slate-400">E 247248, 248A, IGC Khara,</p>
                    <p className="text-gray-600 dark:text-slate-400">Khara, Bikaner, Rajasthan - 334601,</p>
                    <p className="text-gray-600 dark:text-slate-400">India</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                    {/* Phone Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7l-2 1a11 11 0 005 5l1-2 7 3v2a2 2 0 01-2 2a16 16 0 01-16-16a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Contact</h3>
                    <p className="text-gray-600 dark:text-slate-400">Name: Mr. Anand Lahoti</p>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: +91 9001091703, +91 9829797674</p>
                    <p className="text-gray-600 dark:text-slate-400">Mail: info@imperialceramics.in</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Get Started?</h2>

              <input type="text" name="product" placeholder="Product / Service Looking for" required
                className="w-full rounded border border-gray-300 py-2 px-3 shadow-sm dark:text-white dark:bg-slate-800" />

              <input type="text" name="name" placeholder="Your name" required
                className="w-full rounded border border-gray-300 py-2 px-3 shadow-sm dark:text-white dark:bg-slate-800" />

              <input type="text" name="mobile" placeholder="Your mobile number" required
                className="w-full rounded border border-gray-300 py-2 px-3 shadow-sm dark:text-white dark:bg-slate-800" />

              <input type="email" name="email" placeholder="Your email address" required
                className="w-full rounded border border-gray-300 py-2 px-3 shadow-sm dark:text-white dark:bg-slate-800" />

              <textarea name="message" rows="5" placeholder="Write your message..." required
                className="w-full rounded border border-gray-300 py-2 px-3 shadow-sm dark:text-white dark:bg-slate-800"></textarea>

              <div className="text-center">
                <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-semibold rounded-md">
                  Send Message
                </button>
              </div>

              {/* ✅ Status message below the button */}
              {statusMessage && (
                <div
                  className={`mt-4 text-sm text-center ${
                    statusMessage.startsWith('✅')
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
