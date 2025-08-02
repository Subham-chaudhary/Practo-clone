"use client";
import { useState } from "react";
import { FiMapPin, FiSearch, FiCompass, FiMap } from "react-icons/fi";
import Downarrow from "./downarrow";
import { FiMessageSquare, FiTablet, FiBriefcase, FiFileText, FiPlusCircle, FiBook } from "react-icons/fi";

const Search = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);

  const locations = [
    "Jp Nagar",
    "Whitefield",
    "HSR Layout",
    "Indiranagar",
    "Malleshwaram",
    "Sarjapur Road",
    "Bannerghatta Road",
    "Rajajinagar",
    "Jayanagar",
    "Electronic City",
  ];

  const popularSearches = [
    "Hysterectomy",
    "Normal Delivery",
  ];

  const commonSpecialists = [
    "Dentist",
    "Gynecologist/ OBGYN",
    "General Physician",
    "Orthopedist",
    "Pediatrician",
    "Dermatologist",
    "Ear-Nose-Throat (ENT)",
    "Homeopath",
    "Ayurveda",
  ];

  return (
    <>
      <div className="relative search-bg  mt-6 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Your home for health</h1>
          <p className="text-2xl font-bold mb-6">Find and Book</p>
          <div className="md:flex-row items-center justify-center space-x-1 flex-col space-y-4 md:space-y-0 flex ">
            <div className="relative md:w-1/5 w-full">
              <div className="flex items-center bg-white ">
                <FiMapPin className="text-gray-400 mx-2" />
                <input
                  type="text"
                  placeholder="Search location"
                  className="w-full p-3 bg-transparent text-gray-700 focus:outline-none"
                  onFocus={() => setIsLocationOpen(true)}
                  onBlur={() => setTimeout(() => setIsLocationOpen(false), 100)}
                />
              </div>
              {isLocationOpen && (
                <div className="absolute z-10 mt-1 pt-2 bg-white w-full shadow-lg text-md text-gray-700">
                  <ul>
                    <a className="px-2 py-2 cursor-pointer text-blue-500 underline flex items-center justify-start gap-2">
                      <FiCompass /> Use my location
                    </a>
                    <a className="px-2 py-2 cursor-pointer text-blue-500 underline flex items-center justify-start gap-2">
                      <FiMap /> Search Bangalore
                    </a>
                    {locations.map((location) => (
                      <li
                        key={location}
                        className="px-2 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-start gap-2"
                      > <FiSearch className="text-gray-400 mx-2" />
                        {location}
                        <p className="text-xs text-gray-500">Banglore</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative md:w-2/6 w-full">
              <div className="flex items-center bg-white ">
                <FiSearch className="text-gray-400 mx-2" />
                <input
                  type="text"
                  placeholder="Search doctors, clinics, hospitals, etc."
                  className="w-full p-3 bg-transparent text-gray-700 focus:outline-none"
                  onFocus={() => setIsDoctorOpen(true)}
                  onBlur={() => setTimeout(() => setIsDoctorOpen(false), 100)}
                />
              </div>
              {isDoctorOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white text-sm  shadow-lg text-gray-700">
                  <div className="p-0">
                    <h3 className="text-xs bg-gray-300 py-1 text-left p-2">Popular Searches</h3>
                    <ul className="p-2 grid grid-cols-2">
                      {popularSearches.map((search) => (
                        <li
                          key={search}
                          className="py-1 ml-2 rounded-xl  cursor-pointer bg-gray-200"
                        >
                          {search}
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-xs bg-gray-300 py-1 text-left p-2">Common Specialists</h3>
                    <div className="p-2">
                      {commonSpecialists.map((specialist) => (

                        <div
                          key={specialist}
                          className="py-2 cursor-pointer hover:bg-gray-100 flex items-center border-b-1 border-gray-200 justify-between"
                        > <div className="flex items-center">
                            <FiSearch className="text-gray-400 mx-2" />
                            {specialist}</div>
                          <p className="text-xs text-gray-500 align-self-end">SPECIALITY</p>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              )}
            </div>
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
              <a className=" hover:underline  hover:text-gray-200 flex">Others <Downarrow /> </a>
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
          <FiBriefcase  className="text-3xl sm:text-2xl"/>
          <span className="hidden md:block">For healthcare providers</span>
        </a>
      </div>

    </>
  );
};

export default Search;
