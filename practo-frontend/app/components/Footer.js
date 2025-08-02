import Image from "next/image";
const Footer = () => {
  return (<>
    <div className="bg-gray-300 text-center py-4 flex justify-center gap-8">
      <a href="#" className="flex items-center justify-center space-x-4 ml-4">
        <Image src="https://www.practo.com/bundles/practopractoapp/images/country_images/flags/india-flag.svg" alt="india" width={40} height={40} />
        <span className="text-lg font-semibold hidden md:block">India</span>
      </a>
      <a href="#" className="flex items-center justify-center space-x-4">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" alt="Singapore" width={40} height={40} />
        <span className="text-lg font-semibold hidden md:block">Singapore</span>
      </a>
      <a href="#" className="flex items-center justify-center space-x-4">
        <Image src="https://www.practo.com/bundles/practopractoapp/images/country_images/flags/philippines-flag.svg" alt="Philippines" width={40} height={40} />
        <span className="text-lg font-semibold hidden md:block">Phillipines</span>
      </a>
      <a href="#" className="flex items-center justify-center space-x-4">
        <Image src="https://www.practo.com/bundles/practopractoapp/images/country_images/flags/indonesia-flag.svg" alt="Indonesia" width={40} height={40} />
        <span className="text-lg font-semibold hidden md:block">Indonesia</span>
      </a>
      <a href="#" className="flex items-center justify-center space-x-4">
        <Image src="https://www.practo.com/bundles/practopractoapp/images/country_images/flags/brazil-flag.svg" alt="Brazil" width={40} height={40} />
        <span className="text-lg font-semibold hidden md:block">Brazil</span>
      </a>
    </div>
    <footer className="bg-blue-950 text-white ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Practo</h3>
            <ul>
              <li><a href="about" className="hover:underline">About</a></li>
              <li><a href="blog" className="hover:underline">Blog</a></li>
              <li><a href="careers" className="hover:underline">Careers</a></li>
              <li><a href="press" className="hover:underline">Press</a></li>
              <li><a href="contact-us" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">For patients</h3>
            <ul>
              <li><a href="/find-doctors" className="hover:underline">Search for doctors</a></li>
              <li><a href="/search-clinics" className="hover:underline">Search for clinics</a></li>
              <li><a href="/search-hospitals" className="hover:underline">Search for hospitals</a></li>
              <li><a href="/book-test" className="hover:underline">Book Diagnostic Tests</a></li>
              <li><a href="/book-body-checkup" className="hover:underline">Book Full Body Checkups</a></li>
              <li><a href="/plus" className="hover:underline">Practo Plus</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">For doctors</h3>
            <ul>
              <li><a href="/profile" className="hover:underline">Practo Profile</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">For hospitals</h3>
            <ul>
              <li><a href="/insta" className="hover:underline">Insta by Practo</a></li>
              <li><a href="/qikwell" className="hover:underline">Qikwell by Practo</a></li>
              <li><a href="/profile" className="hover:underline">Practo Profile</a></li>
              <li><a href="/reach" className="hover:underline">Practo Reach</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center flex flex-col items-center  mt-8 border-t border-gray-700 pt-4">
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
          <p>&copy; 2025 Practo Clone. By Subham Chaudhary.</p>
        </div>
      </div>
    </footer>
  </>
  );
};

export default Footer;
