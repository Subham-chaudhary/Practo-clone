import Banner from "../components/Banner";
import Search from "../components/Search";
import { FiMessageSquare, FiTablet, FiBriefcase, FiFileText, FiPlusCircle, FiBook } from "react-icons/fi";
import { Downarrow } from "../components/downarrow";


export default function FindDoctors() {
  return (
    <div className="bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full">
        <div className="relative search-bg  mt-6 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Your home for health</h1>
            <p className="text-2xl font-bold mb-6">Find and Book</p>
            <div className="md:flex-row items-center justify-center space-x-1 flex-col space-y-4 md:space-y-0 flex ">
              <Search />
            </div>
            <div className="mt-6 text-center text-gray-400 flex-col flex sm:flex-row justify-center items-center ">
              <span className="font-bold">Popular searches:</span>
              <a href="#" className=" hover:underline hover:text-gray-200 ml-2">
                Dermatologist
              </a>
              <a href="#" className=" hover:underline hover:text-gray-200 ml-2">
                Pediatrician
              </a>
              <a href="#" className=" hover:underline hover:text-gray-200 ml-2">
                Gynecologist/Obstetrician
              </a>
              <div className="relative inline-block ml-2 ">
                <a className=" hover:underline  hover:text-gray-200 flex">Others  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-blue-950 text-white justify-around items-center p-4 w-full">
          <a href="/consult-doctor" className="flex-col flex items-center">
            <FiMessageSquare className="text-3xl sm:text-2xl" />
            <span className="hidden md:block">Consult with a doctor</span>
          </a>

          <a href="/order-medicine" className="flex-col flex items-center">
            <FiTablet className="text-3xl sm:text-2xl" />
            <span className="hidden md:block">Order medicine</span>
          </a>

          <a href="/medical-records" className="flex-col flex items-center">
            <FiFileText className="text-3xl sm:text-2xl" />
            <span className="hidden md:block">View medical records</span>
          </a>

          <a href="/book-test" className="flex-col flex items-center">
            <FiPlusCircle className="text-3xl sm:text-2xl" />
            <span className="hidden md:block">Book test</span>
          </a>

          <a href="/articles" className="flex-col flex items-center">
            <FiBook className="text-3xl sm:text-2xl" />
            <span className="hidden md:block">Read articles</span>
          </a>

          <a href="/healthcare-providers" className="flex-col flex items-center">
            <FiBriefcase className="text-3xl sm:text-2xl" />
            <span className="hidden md:block">For healthcare providers</span>
          </a>
        </div>
        <Banner />
      </main>
    </div>
  );
}
