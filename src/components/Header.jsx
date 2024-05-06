import React from 'react';
import { Disclosure } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/Home' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Clients', href: '/clients' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const location = useLocation();

  const currentPage = navigation.find(item => item.href === location.pathname);

  return (
    <Disclosure as="nav" className="bg-gray-900 sticky top-0 z-10"> {/* Match Navbar color */}
      {({ open }) => (
        <>
          <div className="mx-auto max-w-9xl px-1 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-auto items-center justify-center sm:items-stretch sm:justify-start">
                <h2 className="text-3xl font-bold leading-9 text-white">
                  {currentPage ? currentPage.name : 'Page Not Found'}
                </h2>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> // Use same icon for simplicity
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    location.pathname === item.href ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
