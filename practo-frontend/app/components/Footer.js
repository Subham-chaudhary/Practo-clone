import Image from "next/image";
import Link from "next/link";
import { countryLinks, footerColumns } from "../lib/data";
import FooterColumn from "./ui/FooterColumn";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-300 text-center py-4 flex justify-center gap-8">
        {countryLinks.map((country) => (
          <Link
            href={country.href}
            key={country.name}
            className="flex items-center justify-center space-x-4 ml-4"
          >
            <Image
              src={country.imgSrc}
              alt={country.alt}
              width={40}
              height={40}
            />
            <span className="text-lg font-semibold hidden md:block">
              {country.name}
            </span>
          </Link>
        ))}
      </div>
      <footer className="bg-blue-950 text-white ">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerColumns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
          <div className="text-center flex flex-col items-center  mt-8 p-2 pt-4 bg-gray-200 text-gray-800">
            <div className="flex left-0  ">
              <Image
                className="h-20 w-auto"
                src="/practo-clone-logo.png"
                alt="Practo-clone Logo"
                width={240}
                height={80}
                style={{ filter: "brightness(1.2)", mixBlendMode: "multiply" }}
              />
            </div>
            <p>&copy; 2025 Practo Clone. By Subham Chaudhary.</p> <a href="https://github.com/Subham-chaudhary" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:bg-blue-500 border-3 border-blue-500 px-3 py-1 rounded-full text-blue-500"> Check out theGithub repo</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
