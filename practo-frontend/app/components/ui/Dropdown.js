"use client";
import Link from "next/link";
import Downarrow from "../downarrow";

const Dropdown = ({ title, links, isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="relative group">
        <button
          className="text-gray-700 w-full text-left flex items-center justify-between focus:outline-none"
          type="button"
          aria-label={`${title} menu`}
          aria-expanded="false"
          aria-haspopup="true"
        >
          {title}
          <Downarrow />
        </button>
        <ul className="relative left-0 mt-2 w-full bg-white rounded-md shadow-lg py-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button
        className="text-gray-700 flex items-center hover:text-blue-600 focus:outline-none focus:text-blue-600"
        type="button"
        aria-label={`${title} menu`}
        aria-expanded="false"
        aria-haspopup="true"
      >
        {title}
        <Downarrow />
      </button>
      <ul className="absolute right-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
