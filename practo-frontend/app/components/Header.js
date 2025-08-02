"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Downarrow from "./downarrow";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/find-doctors", text: "Find Doctors" },
    { href: "/video-consult", text: "Video Consult" },
    { href: "/surgeries", text: "Surgeries" },
  ];

  return (
    <header className="bg-white shadow-md text-sm sticky top-0 z-50">
      <div
        className={`bg-gray-600 fixed top-0 left-0 h-full w-full transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-70 block" : "opacity-0 hidden"
          }`}
      ></div>

      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className="flex left-0  ">
          <Image
            className="h-10 w-auto"
            src="/practo-clone-logo.png"
            alt="Practo-clone Logo"
            width={120}
            height={40}
          />
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 md:ml-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold text-gray-700 hover:text-blue-600 ${pathname === link.href
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "border-b-4 border-transparent"
                  }`}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side links and Login */}
        <div className=" items-center flex space-x-4 justify-end">
          <div className="hidden md:flex">
            <div className="relative group">
              <button
                className="text-gray-700 flex hover:text-blue-600 focus:outline-none focus:text-blue-600"
                type="button"
                aria-label="For Providers menu"
                aria-expanded="false"
                aria-haspopup="true"
              >
                For Corporates
                <Downarrow />
              </button>
              <ul className="absolute right-0 mt-0 w-40 bg-white rounded-md shadow-lg py-1 group-hover:block hidden">
                <a href="plans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Health & Wellness Plans
                </a>
                <a href="insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Group Insurance
                </a>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="relative group">
              <button
                className="text-gray-700 flex hover:text-blue-600 focus:outline-none focus:text-blue-600"
                type="button"
                aria-label="For Providers menu"
                aria-expanded="false"
                aria-haspopup="true"
              >
                For Providers
                <Downarrow />
              </button>
              <ul className="absolute right-0 mt-0 w-40 bg-white rounded-md shadow-lg py-1 group-hover:block hidden">
                <a href="practo-prime" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Practo Prime
                </a>
                <a href="software-for-providers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Software for providers
                </a>
                <a href="list-your-practice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  List your practice for free
                </a>
                <a href="abdm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ABDM
                </a>
              </ul>
            </div>
          </div>

          <div className="hidden md:flex">
            <div className="relative group">
              <button
                className="text-gray-700 flex hover:text-blue-600 focus:outline-none focus:text-blue-600"
                type="button"
                aria-label="Security & help menu"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Security & help
                <Downarrow />
              </button>
              <ul className="absolute right-0 mt-0 w-40 bg-white rounded-md shadow-lg py-1 group-hover:block hidden">
                <a href="data-security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Data security
                </a>
                <a href="help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Help
                </a>
              </ul>
            </div>
          </div>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white" onClick={() => alert('Login not available')}>
            Login / Signup
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Image
              className="h-8 w-auto"
              src="/practo-clone-logo.png"
              alt="Practo-clone Logo"
              width={100}
              height={30}
            />
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
              <FiX />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-semibold hover:text-blue-600 ${pathname === link.href ? "text-blue-600" : " text-gray-700"
                  }`}
              >
                {link.text}
              </a>
            ))}
          </nav>
          <hr className="my-6 border-gray-200" />
          <div className="flex flex-col space-y-4">
            <div className="relative group">
              <button
                className="text-gray-700 w-full text-left flex items-center justify-between focus:outline-none"
                type="button"
                aria-label="For Corporates menu"
                aria-expanded="false"
                aria-haspopup="true"
              >
                For Corporates
                <Downarrow />
              </button>
              <ul
                className="relative left-0 mt-0 w-full bg-white rounded-md shadow-lg py-1"
              >
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="plans">
                  Health & Wellness Plans
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="insurance">
                  Group Insurance
                </a>
              </ul>
            </div>
            <div className="relative group">
              <button
                className="text-gray-700 w-full text-left flex items-center justify-between focus:outline-none"
                type="button"
                aria-label="For Providers menu"
                aria-expanded="false"
                aria-haspopup="true"
              >
                For Providers
                <Downarrow />
              </button>
              <ul
                className="relative left-0 mt-0 w-full bg-white rounded-md shadow-lg py-1"
              >
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="practo-prime">
                  Practo Prime
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="software-for-providers">
                  Software for providers
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="list-your-practice">
                  List your practice for free
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="abdm">
                  ABDM
                </a>
              </ul>
            </div>
            <div className="relative group">
              <button
                className="text-gray-700 w-full text-left flex items-center justify-between focus:outline-none"
                type="button"
                aria-label="Security & help menu"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Security & help
                <Downarrow />
              </button>
              <ul
                className="relative left-0 mt-0 w-full bg-white rounded-md shadow-lg py-1"
              >
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="data-security">
                  Data security
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="help">
                  Help
                </a>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </header>
  );
};

export default Header;
