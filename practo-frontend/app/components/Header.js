"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  corporateLinks,
  navLinks,
  providerLinks,
  securityLinks,
} from "../lib/data";
import Dropdown from "./ui/Dropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md text-sm sticky top-0 z-50">
      <div
        className={`bg-gray-600 fixed top-0 left-0 h-full w-full transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-70 block" : "opacity-0 hidden"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="h-10 w-auto"
              src="/practo-clone-logo.png"
              alt="Practo-clone Logo"
              width={120}
              height={40}
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 md:ml-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-gray-700 hover:text-blue-600 ${
                  pathname === link.href
                    ? "border-b-4 border-blue-600 text-blue-600"
                    : "border-b-4 border-transparent"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side links and Login */}
        <div className="hidden md:flex items-center space-x-4 justify-end">
          <Dropdown title={corporateLinks.title} links={corporateLinks.links} />
          <Dropdown title={providerLinks.title} links={providerLinks.links} />
          <Dropdown title={securityLinks.title} links={securityLinks.links} />
          <button
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white"
            onClick={() => alert("Login not available")}
          >
            Login / Signup
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <Image
                className="h-8 w-auto"
                src="/practo-clone-logo.png"
                alt="Practo-clone Logo"
                width={100}
                height={30}
              />
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
              <FiX />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-semibold hover:text-blue-600 ${
                  pathname === link.href
                    ? "text-blue-600"
                    : " text-gray-700"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <hr className="my-6 border-gray-200" />
          <div className="flex flex-col space-y-4">
            <Dropdown
              title={corporateLinks.title}
              links={corporateLinks.links}
              isMobile
            />
            <Dropdown
              title={providerLinks.title}
              links={providerLinks.links}
              isMobile
            />
            <Dropdown
              title={securityLinks.title}
              links={securityLinks.links}
              isMobile
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
